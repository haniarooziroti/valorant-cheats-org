import type { APIRoute } from 'astro';
import { loadBlogPosts } from '../data/blog/loader';
import { buildRssFeed } from '../utils/rss';

export const GET: APIRoute = async () => {
  const posts = await loadBlogPosts();
  return new Response(buildRssFeed(posts), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
