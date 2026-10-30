import type { SitemapItem } from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

function pathnameFromUrl(url: string): string {
  const p = new URL(url).pathname;
  return p.endsWith('/') ? p : `${p}/`;
}

function loadBlogLastmods(): Map<string, string> {
  const map = new Map<string, string>();
  const dir = path.join(process.cwd(), 'src/content/blog');
  if (!fs.existsSync(dir)) return map;
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith('.md')) continue;
    const slug = file.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(dir, file), 'utf8');
    const { data } = matter(raw);
    const d = data.updatedDate ?? data.publishDate;
    if (d) map.set(`/blog/${slug}/`, new Date(d).toISOString());
  }
  return map;
}

const blogLastmods = loadBlogLastmods();

/** Stable lastmod for static routes (avoid rewriting entire sitemap every build). */
const STATIC_LASTMOD: Record<string, string> = {
  '/': '2026-10-15T00:00:00.000Z',
  '/about/': '2026-09-01T00:00:00.000Z',
  '/blog/': '2026-10-15T00:00:00.000Z',
  '/reviews/': '2026-10-10T00:00:00.000Z',
  '/forum/': '2026-10-18T00:00:00.000Z',
  '/faq/': '2026-09-15T00:00:00.000Z',
  '/support/': '2026-09-01T00:00:00.000Z',
  '/privacy/': '2026-09-01T00:00:00.000Z',
  '/terms/': '2026-09-01T00:00:00.000Z',
  '/status/': '2026-10-20T00:00:00.000Z',
  '/products/mw4-cheats/': '2026-10-12T00:00:00.000Z',
  '/products/mw4-cheats/aimbot/': '2026-10-12T00:00:00.000Z',
  '/products/mw4-cheats/esp/': '2026-10-12T00:00:00.000Z',
  '/products/mw4-cheats/triggerbot/': '2026-10-12T00:00:00.000Z',
  '/products/mw4-cheats/radar/': '2026-10-12T00:00:00.000Z',
  '/products/mw4-cheats/dmz-loot/': '2026-10-12T00:00:00.000Z',
  '/go/mw4/': '2026-10-15T00:00:00.000Z',
};

const buildDate = new Date().toISOString();

function lastmodForPath(path: string): string {
  return blogLastmods.get(path) ?? STATIC_LASTMOD[path] ?? buildDate;
}

const LEGACY_REDIRECT_PREFIXES = [
  '/blog/how-to-buy-mw4-cheats-2026/',
  '/blog/mw4-cheat-features-overview/',
  '/blog/mw4-monthly-vs-lifetime/',
  '/blog/mw4-aimbot-settings-guide/',
  '/blog/mw4-esp-radar-6v6-setup/',
  '/blog/hajin-dmz-loot-guide/',
  '/blog/mw4-triggerbot-and-no-recoil/',
  '/blog/mw4-system-requirements-setup/',
  '/blog/mw4-loader-not-working/',
  '/blog/mw4-patch-day-checklist/',
  '/blog/mw4-cheat-risk-explained/',
];

export function sitemapSerialize(item: SitemapItem): SitemapItem | undefined {
  const path = pathnameFromUrl(item.url);

  if (
    path.includes('/404') ||
    (path.startsWith('/go/') && path !== '/go/mw4/') ||
    path.includes('/rss.xml') ||
    LEGACY_REDIRECT_PREFIXES.includes(path)
  ) {
    return undefined;
  }

  if (path === '/go/mw4/') {
    item.priority = 0.6;
    item.changefreq = 'monthly';
    item.lastmod = lastmodForPath(path);
    return item;
  }

  item.lastmod = lastmodForPath(path);

  if (path === '/') {
    item.priority = 1;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/blog/') {
    item.priority = 0.9;
    item.changefreq = 'weekly';
    return item;
  }

  if (path.startsWith('/blog/')) {
    item.priority = 0.75;
    item.changefreq = 'monthly';
    return item;
  }

  if (path === '/reviews/') {
    item.priority = 0.85;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/forum/') {
    item.priority = 0.9;
    item.changefreq = 'daily';
    return item;
  }

  if (path.startsWith('/forum/')) {
    item.priority = 0.7;
    item.changefreq = 'weekly';
    return item;
  }

  if (path.startsWith('/products/')) {
    item.priority = 0.85;
    item.changefreq = 'weekly';
    return item;
  }

  if (
    path === '/about/' ||
    path === '/support/' ||
    path === '/privacy/' ||
    path === '/terms/' ||
    path === '/faq/' ||
    path === '/status/'
  ) {
    item.priority = path === '/status/' ? 0.7 : 0.5;
    item.changefreq = path === '/status/' ? 'daily' : 'yearly';
    return item;
  }

  item.priority = 0.6;
  item.changefreq = 'monthly';
  return item;
}
