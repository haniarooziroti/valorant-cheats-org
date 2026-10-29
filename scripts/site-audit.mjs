/**
 * Post-build audit: crawl dist HTML, links, on-page SEO signals.
 * Usage: node scripts/site-audit.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const SITE = 'https://mw4cheat.org';

const issues = [];
const warn = (code, msg, ctx = '') => issues.push({ level: 'warn', code, msg, ctx });
const err = (code, msg, ctx = '') => issues.push({ level: 'error', code, msg, ctx });

function walkHtml(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walkHtml(p, files);
    else if (ent.name === 'index.html') files.push(p);
  }
  return files;
}

function walkDistFiles(dir, base = '', out = new Set()) {
  if (!fs.existsSync(dir)) return out;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${ent.name}` : ent.name;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walkDistFiles(p, rel, out);
    else out.add(`/${rel.replace(/\\/g, '/')}`);
  }
  return out;
}

function pathFromFile(file) {
  const rel = path.relative(dist, path.dirname(file)).replace(/\\/g, '/');
  if (rel === '.' || rel === '') return '/';
  return `/${rel}/`;
}

function hrefResolvable(href, routes, distFiles) {
  if (!href.startsWith('/')) return true;
  if (href.startsWith('/go/')) return true;
  if (routes.has(href)) return true;
  if (distFiles.has(href)) return true;
  const noTrail = href.endsWith('/') && href.length > 1 ? href.slice(0, -1) : href;
  if (distFiles.has(noTrail)) return true;
  if (distFiles.has(`${noTrail}/index.html`)) return true;
  const stripped = href.replace(/^\//, '');
  if (distFiles.has(`/${stripped}`)) return true;
  return false;
}

function extractAll(html, re) {
  const out = [];
  let m;
  const g = new RegExp(re.source, re.flags.includes('g') ? re.flags : `${re.flags}g`);
  while ((m = g.exec(html)) !== null) out.push(m[1] ?? m[0]);
  return out;
}

const htmlFiles = walkHtml(dist);
const routes = new Set(htmlFiles.map(pathFromFile));
const distFiles = walkDistFiles(dist);
const inbound = new Map();
for (const r of routes) inbound.set(r, 0);

for (const file of htmlFiles) {
  const route = pathFromFile(file);
  const html = fs.readFileSync(file, 'utf8');

  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim() ?? '';
  const desc = html.match(/<meta name="description" content="([^"]*)"/i)?.[1]?.trim() ?? '';
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/i)?.[1] ?? '';
  const robots = html.match(/<meta name="robots" content="([^"]*)"/i)?.[1] ?? '';
  const h1s = extractAll(html, /<h1\b[^>]*>([\s\S]*?)<\/h1>/gi).map((s) =>
    s.replace(/<[^>]+>/g, '').trim(),
  );
  const ogImage = html.match(/<meta property="og:image" content="([^"]*)"/i)?.[1] ?? '';

  const isRedirectStub =
    html.includes('http-equiv="refresh"') && html.includes('Redirecting to:') && robots.includes('noindex');

  if (isRedirectStub) {
    continue;
  }

  const expectedCanonical = `${SITE}${route === '/' ? '/' : route}`;

  if (route === '/404/') {
    if (!robots.includes('noindex')) err('ROBOTS_404', '404 should be noindex', route);
  } else if (!robots.includes('index')) {
    warn('ROBOTS', `Unexpected robots: ${robots}`, route);
  }

  if (canonical !== expectedCanonical) {
    err('CANONICAL', `Expected ${expectedCanonical}, got ${canonical}`, route);
  }

  if (title.length < 20 || title.length > 70) warn('TITLE_LEN', `Title length ${title.length}`, route);
  if (desc.length < 70 || desc.length > 170) warn('DESC_LEN', `Description length ${desc.length}`, route);
  if (h1s.length !== 1) err('H1_COUNT', `Found ${h1s.length} H1(s)`, route);

  if (!ogImage.startsWith(SITE)) warn('OG_IMAGE', `OG image: ${ogImage}`, route);

  const hrefs = extractAll(html, /href="(\/[^"#?]*)/gi);
  for (let href of hrefs) {
    if (!href.endsWith('/') && !/\.[a-z0-9]+$/i.test(href)) href = `${href}/`;
    if (routes.has(href)) inbound.set(href, (inbound.get(href) ?? 0) + 1);
    if (!hrefResolvable(href, routes, distFiles)) err('BROKEN_LINK', href, route);
  }
}

for (const r of routes) {
  if (r === '/404/') continue;
  if ((inbound.get(r) ?? 0) === 0 && r !== '/') warn('ORPHAN', 'No internal inbound links', r);
}

const sitemapIndex = path.join(dist, 'sitemap-index.xml');
const sitemap0 = path.join(dist, 'sitemap-0.xml');
if (fs.existsSync(sitemapIndex)) {
  const idx = fs.readFileSync(sitemapIndex, 'utf8');
  if (idx.includes('dotacheats.com')) err('SITEMAP_DOMAIN', 'sitemap-index references wrong domain');
  if (!idx.includes('mw4cheat.org')) err('SITEMAP_DOMAIN', 'sitemap-index missing mw4cheat.org');
}
if (fs.existsSync(sitemap0)) {
  const sm = fs.readFileSync(sitemap0, 'utf8');
  const locs = extractAll(sm, /<loc>([^<]+)<\/loc>/gi);
  for (const loc of locs) {
    if (!loc.startsWith(SITE)) err('SITEMAP_LOC', loc);
    const p = loc.replace(SITE, '');
    if (!routes.has(p) && p !== '/rss.xml/') warn('SITEMAP_ORPHAN', 'Sitemap URL not in HTML crawl', p);
  }
  for (const r of routes) {
    if (r === '/404/') continue;
    const full = `${SITE}${r === '/' ? '/' : r}`;
    if (!locs.includes(full)) warn('SITEMAP_MISSING', 'Route missing from sitemap', r);
  }
}

const report = {
  pages: htmlFiles.length,
  routes: [...routes].sort(),
  issueCount: issues.length,
  errors: issues.filter((i) => i.level === 'error'),
  warnings: issues.filter((i) => i.level === 'warn'),
};

const outPath = path.join(root, '.seo-baseline', 'audit-report.json');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
console.log(`Audit: ${htmlFiles.length} pages, ${report.errors.length} errors, ${report.warnings.length} warnings`);
if (report.errors.length) {
  report.errors.slice(0, 25).forEach((e) => console.error(`[ERROR] ${e.code} ${e.ctx}: ${e.msg}`));
  process.exitCode = 1;
}
