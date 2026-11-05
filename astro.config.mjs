import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';
import { getSiteOriginFromEnv } from './scripts/site-origin.mjs';

const siteOrigin = getSiteOriginFromEnv();

export default defineConfig({
  site: siteOrigin,
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/valorant-cheats/',
    '/contact/': '/support/',
    '/products/': '/products/valorant-cheats/',
    '/blogs/': '/blog/',
    '/forums/': '/forum/',
    '/products/mw4-cheats/': '/products/valorant-cheats/',
    '/go/mw4/': '/go/valorant/',
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
