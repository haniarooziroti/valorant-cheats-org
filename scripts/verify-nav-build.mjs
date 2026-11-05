import fs from 'node:fs';
import path from 'node:path';
import {
  FORBIDDEN_NAV_LABELS,
  HEADER_CTA_LABEL,
  PRIMARY_NAV_LABELS,
} from '../src/config/nav.ts';

const distDir = path.resolve('dist');
const forbiddenInHeader = [...FORBIDDEN_NAV_LABELS, 'Get access'];
const requiredInHeader = [...PRIMARY_NAV_LABELS, HEADER_CTA_LABEL, 'data-site-header'];

function walkHtmlFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtmlFiles(full, files);
    else if (entry.name.endsWith('.html')) files.push(full);
  }
  return files;
}

const htmlFiles = walkHtmlFiles(distDir);
if (htmlFiles.length === 0) {
  console.error('verify-nav-build: no HTML in dist/ — run astro build first.');
  process.exit(1);
}

const errors = [];

for (const file of htmlFiles) {
  const base = path.relative(distDir, file);
  if (base === 'products/index.html' || base === 'blogs/index.html' || base === 'forums/index.html') {
    continue;
  }
  if (base.startsWith('cheats/') || base.startsWith('contact/')) continue;

  const html = fs.readFileSync(file, 'utf8');
  if (!html.includes('data-site-header')) {
    if (html.includes('<header')) {
      errors.push(`${base}: missing data-site-header marker (stale or custom header?)`);
    }
    continue;
  }

  const headerEnd = html.indexOf('</header>');
  const headerHtml = headerEnd >= 0 ? html.slice(0, headerEnd) : html;

  for (const label of forbiddenInHeader) {
    if (headerHtml.includes(label)) {
      errors.push(`${base}: forbidden header label "${label}"`);
    }
  }

  for (const label of requiredInHeader) {
    if (label.startsWith('data-')) continue;
    if (!headerHtml.includes(label)) {
      errors.push(`${base}: missing required header label "${label}"`);
    }
  }
}

if (errors.length) {
  console.error('verify-nav-build failed:\n' + errors.map((e) => `  - ${e}`).join('\n'));
  process.exit(1);
}

console.log(`verify-nav-build: OK (${htmlFiles.length} HTML files, shared SiteHeader nav)`);
