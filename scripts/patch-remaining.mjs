import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function patch(file, pairs) {
  const p = path.join(root, file);
  if (!fs.existsSync(p)) return;
  let s = fs.readFileSync(p, 'utf8');
  for (const [from, to] of pairs) {
    s = s.split(from).join(to);
  }
  fs.writeFileSync(p, s);
}

const files = [
  'src/i18n/en.ts',
  'src/utils/schema.ts',
  'src/scripts/forum-votes.ts',
  'src/pages/support.astro',
  'src/pages/terms.astro',
  'src/pages/privacy.astro',
  'src/pages/about.astro',
  'src/pages/404.astro',
  'src/pages/faq.astro',
  'src/pages/reviews/index.astro',
  'src/pages/products/valorant-cheats/index.astro',
  'src/pages/go/valorant/index.astro',
  'src/pages/forum/index.astro',
  'src/pages/forum/[slug].astro',
  'src/data/faq.ts',
  'src/components/Footer.astro',
  'src/components/Header.astro',
  'src/components/FeaturesSection.astro',
  'src/components/WhySetupSection.astro',
  'src/config/logoAlt.ts',
  'src/config/checkout-redirects.mjs.d.ts',
  'astro.config.mjs',
];

const common = [
  ['mw4cheat.org', 'valorant-cheat.org'],
  ['MW4 Cheat', 'Valorant Cheat'],
  ['MW4 cheat', 'Valorant cheat'],
  ['MW4 cheats', 'Valorant cheats'],
  ['MW4 Cheats', 'Valorant Cheats'],
  ['MW4 modules', 'Valorant modules'],
  ['MW4 module', 'Valorant module'],
  ['MW4 aimbot', 'Valorant aimbot'],
  ['MW4 full module pass', 'Valorant full module pass'],
  ['MW4 PC', 'Valorant PC'],
  ['MW4 configs', 'Valorant configs'],
  ['MW4 playlists', 'Valorant maps'],
  ['MW4 updates', 'Valorant patches'],
  ['MW4 license', 'Valorant license'],
  ['MW4 PC version', 'Valorant PC client'],
  ['/products/mw4-cheats/', '/products/valorant-cheats/'],
  ['/go/mw4/', '/go/valorant/'],
  ['checkoutPath(\'mw4\')', "checkoutPath('valorant')"],
  ['CHECKOUT.mw4', 'CHECKOUT.valorant'],
  ['mw4/', 'valorant/'],
  ['Mw4 Cheats Forum', 'Valorant Cheat Forums'],
  ['DMZ routing', 'trigger timing'],
  ['DMZ loot', 'no recoil'],
  ['Modern Warfare 4', 'Valorant'],
  ['resolvePageSeo(\'/products/mw4-cheats/\')', "resolvePageSeo('/products/valorant-cheats/')"],
];

for (const file of files) {
  patch(file, common);
}

patch('src/i18n/en.ts', [
  ["{ href: '/blog/', label: 'Blog' },\n    ", ''],
  ["{ href: '/forum/', label: 'Forum' }", "{ href: '/forum/', label: 'Forums' }"],
  ['MW4 cheat blog', 'Valorant cheat forums'],
  ['blog guides', 'forum threads'],
  ['Long-form guides live on the blog', 'Long-form setup notes live in forum threads'],
  ['which guides we expand', 'which forum topics we expand'],
]);

patch('src/data/products.ts', [
  [`export const productRelatedForumSlugs: Record<string, string[]> = {
  aimbot: ['mw4-aimbot-setup', 'mw4-cheat-risk', 'mw4-features'],
  esp: ['mw4-esp-setup', 'mw4-features', 'mw4-dmz-guide'],
  triggerbot: ['mw4-triggerbot', 'mw4-aimbot-setup', 'mw4-features'],
  radar: ['mw4-esp-setup', 'mw4-patch-day', 'mw4-features'],
  'no-recoil': ['mw4-dmz-guide', 'mw4-plans', 'mw4-features'],
};`, `export const productRelatedForumSlugs: Record<string, string[]> = {
  aimbot: ['aimbot-settings-smooth-level-killcam', 'soft-aim-vs-visible-aimbot', 'aimbot-fov-ranked-unrated'],
  esp: ['esp-box-style-unrated', 'wallhack-spike-colors', 'radar-haven-split'],
  triggerbot: ['triggerbot-delay-valorant', 'aimbot-settings-smooth-level-killcam', 'cheat-menu-hotkeys-ranked'],
  radar: ['radar-haven-split', 'esp-box-style-unrated', 'patch-day-module-status'],
  'no-recoil': ['no-recoil-spray-valorant', 'cheat-menu-hotkeys-ranked', 'external-vs-internal-valorant'],
};`],
  ['mw4SystemRequirements', 'valorantSystemRequirements'],
]);

patch('src/data/sectionIcons.ts', [
  ["{ icon: 'undetected', label: 'Undetected' }", "{ icon: 'shield', label: 'Status updates' }"],
]);

patch('src/pages/forum/index.astro', [
  ['MW4 cheats forum', 'Valorant cheat forums'],
  ['mw4 cheats forum', 'Valorant cheat forums'],
  ['MW4 PC community', 'Valorant PC community'],
  ['View MW4 modules', 'View Valorant modules'],
]);

patch('src/pages/forum/[slug].astro', [
  ['settings and MW4 PC play', 'settings and Valorant PC play'],
]);

patch('src/pages/go/valorant/index.astro', [
  ['<a href="/blog/">forum threads</a>', '<a href="/forum/">forum threads</a>'],
  ['blog guides', 'forum threads'],
]);

// sitemap rewrite
const sitemap = `import type { SitemapItem } from '@astrojs/sitemap';

const STATIC_LASTMOD: Record<string, string> = {
  '/': '2026-10-15T00:00:00.000Z',
  '/about/': '2026-09-01T00:00:00.000Z',
  '/reviews/': '2026-10-10T00:00:00.000Z',
  '/forum/': '2026-10-18T00:00:00.000Z',
  '/faq/': '2026-09-15T00:00:00.000Z',
  '/support/': '2026-09-01T00:00:00.000Z',
  '/privacy/': '2026-09-01T00:00:00.000Z',
  '/terms/': '2026-09-01T00:00:00.000Z',
  '/status/': '2026-10-20T00:00:00.000Z',
  '/products/valorant-cheats/': '2026-10-12T00:00:00.000Z',
  '/products/valorant-cheats/aimbot/': '2026-10-12T00:00:00.000Z',
  '/products/valorant-cheats/esp/': '2026-10-12T00:00:00.000Z',
  '/products/valorant-cheats/triggerbot/': '2026-10-12T00:00:00.000Z',
  '/products/valorant-cheats/radar/': '2026-10-12T00:00:00.000Z',
  '/products/valorant-cheats/no-recoil/': '2026-10-12T00:00:00.000Z',
  '/go/valorant/': '2026-10-15T00:00:00.000Z',
};

const buildDate = new Date().toISOString();

function pathnameFromUrl(url: string): string {
  const p = new URL(url).pathname;
  return p.endsWith('/') ? p : \`\${p}/\`;
}

function lastmodForPath(path: string): string {
  return STATIC_LASTMOD[path] ?? buildDate;
}

export function sitemapSerialize(item: SitemapItem): SitemapItem | undefined {
  const path = pathnameFromUrl(item.url);

  if (path.includes('/404') || (path.startsWith('/go/') && path !== '/go/valorant/')) {
    return undefined;
  }

  if (path === '/go/valorant/') {
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
`;
fs.writeFileSync(path.join(root, 'src/config/sitemap.ts'), sitemap);

const astro = `import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

const siteOrigin = (process.env.PUBLIC_SITE_ORIGIN || 'https://valorant-cheat.org').replace(/\\/$/, '');

export default defineConfig({
  site: siteOrigin,
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/valorant-cheats/',
    '/contact/': '/support/',
    '/blog/': '/forum/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/404') && (!page.includes('/go/') || page.includes('/go/valorant')),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
`;
fs.writeFileSync(path.join(root, 'astro.config.mjs'), astro);

console.log('Remaining patches applied.');
