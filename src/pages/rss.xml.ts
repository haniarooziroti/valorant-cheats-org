import type { APIRoute } from 'astro';
import { loadBlogPosts } from '../data/blog/loader';
import { getSiteOrigin } from '../config/seo';
import { t } from '../i18n';
import { buildRssFeed } from '../utils/rss';

export const GET: APIRoute = async () => {
  const posts = await loadBlogPosts();
  const xml = buildRssFeed({
    siteName: t.site.name,
    siteDescription: t.site.description,
    siteOrigin: getSiteOrigin(),
    posts,
  });

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
