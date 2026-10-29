import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

export default defineConfig({
  site: 'https://mw4cheat.org',
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/mw4-cheats/',
    '/contact/': '/support/',
    '/blog/how-to-buy-mw4-cheats-2026/': '/blog/buy-mw4-cheats/',
    '/blog/mw4-cheat-features-overview/': '/blog/mw4-features/',
    '/blog/mw4-monthly-vs-lifetime/': '/blog/mw4-plans/',
    '/blog/mw4-aimbot-settings-guide/': '/blog/mw4-aimbot-setup/',
    '/blog/mw4-esp-radar-6v6-setup/': '/blog/mw4-esp-setup/',
    '/blog/hajin-dmz-loot-guide/': '/blog/mw4-dmz-guide/',
    '/blog/mw4-triggerbot-and-no-recoil/': '/blog/mw4-triggerbot/',
    '/blog/mw4-system-requirements-setup/': '/blog/mw4-requirements/',
    '/blog/mw4-loader-not-working/': '/blog/mw4-loader-fix/',
    '/blog/mw4-patch-day-checklist/': '/blog/mw4-patch-day/',
    '/blog/mw4-cheat-risk-explained/': '/blog/mw4-cheat-risk/',
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
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
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
