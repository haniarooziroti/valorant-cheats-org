import { getBlogPostSeo } from '../config/blogSeo';
import type { BlogPostFull } from '../data/blog/types';
import { canonicalUrl } from '../config/seo';

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function buildRssFeed(input: {
  siteName: string;
  siteDescription: string;
  siteOrigin: string;
  posts: BlogPostFull[];
}): string {
  const channelLink = `${input.siteOrigin}/`;
  const items = input.posts
    .map((post) => {
      const seo = getBlogPostSeo(post.slug);
      const title = seo?.title ?? post.title;
      const description = seo?.description ?? post.desc;
      const link = canonicalUrl(`/blog/${post.slug}/`);
      return `
    <item>
      <title>${escapeXml(title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <pubDate>${new Date(post.dateIso).toUTCString()}</pubDate>
      <description>${escapeXml(description)}</description>
    </item>`;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(input.siteName)} Blog</title>
    <link>${escapeXml(channelLink)}</link>
    <description>${escapeXml(input.siteDescription)}</description>
    <language>en-us</language>
    <atom:link href="${escapeXml(`${input.siteOrigin}/rss.xml`)}" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;
}
