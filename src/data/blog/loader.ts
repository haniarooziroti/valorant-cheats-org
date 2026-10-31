import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import type { BlogPostFull } from './types';
import { resolveBlogCover } from './covers';

type BlogEntry = CollectionEntry<'blog'>;

function entrySlug(entry: BlogEntry): string {
  const id = entry.id;
  return id.endsWith('.md') ? id.slice(0, -3) : id;
}

function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function readTimeFromBody(body: string, readMinutes?: number): string {
  if (readMinutes) return `${readMinutes} min read`;
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  const mins = Math.max(5, Math.round(words / 210));
  return `${mins} min read`;
}

function mapEntry(entry: BlogEntry): BlogPostFull {
  const slug = entrySlug(entry);
  const cover = resolveBlogCover(slug, entry.data.featuredImage);
  const imageAlt = entry.data.imageAlt || cover.alt || entry.data.title;
  return {
    slug,
    tag: entry.data.category,
    title: entry.data.title,
    desc: entry.data.description,
    image: cover.src,
    imageAlt,
    date: entry.data.publishDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    dateIso: formatDate(entry.data.publishDate),
    readTime: readTimeFromBody(entry.body ?? '', entry.data.readMinutes),
    featured: entry.data.featured,
    author: 'Valorant Cheats Team',
    tags: entry.data.tags,
    body: [],
  };
}

let cachedPosts: BlogPostFull[] | null = null;

export async function loadBlogPosts(): Promise<BlogPostFull[]> {
  if (import.meta.env.DEV) cachedPosts = null;
  if (cachedPosts) return cachedPosts;
  const entries = await getCollection('blog', ({ data }) => data.publishDate <= new Date());
  entries.sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());
  cachedPosts = entries.map(mapEntry);
  return cachedPosts;
}

export async function getBlogPost(slug: string) {
  const posts = await loadBlogPosts();
  return posts.find((p) => p.slug === slug);
}

export async function getCollectionEntry(slug: string) {
  return getEntry('blog', slug);
}

export async function getAllBlogSlugs() {
  const posts = await loadBlogPosts();
  return posts.map((p) => p.slug);
}

export async function getRelatedBlogPosts(slug: string, limit = 3) {
  const posts = await loadBlogPosts();
  const current = posts.find((p) => p.slug === slug);
  if (!current) return [];
  const relatedSlugs = (await getCollectionEntry(slug))?.data.relatedSlugs ?? [];
  const curated = relatedSlugs
    .map((s) => posts.find((p) => p.slug === s))
    .filter((p): p is BlogPostFull => Boolean(p));
  const used = new Set(curated.map((p) => p.slug));
  const sameTag = posts.filter((p) => p.slug !== slug && p.tag === current.tag && !used.has(p.slug));
  const others = posts.filter((p) => p.slug !== slug && p.tag !== current.tag && !used.has(p.slug));
  return [...curated, ...sameTag, ...others].slice(0, limit);
}

export async function getRelatedBlogPostsForProduct(relatedSlugs: string[], limit = 6) {
  const posts = await loadBlogPosts();
  const curated = relatedSlugs
    .map((slug) => posts.find((p) => p.slug === slug))
    .filter((post): post is BlogPostFull => post != null);
  if (curated.length >= limit) return curated.slice(0, limit);
  const used = new Set(curated.map((p) => p.slug));
  const fill = posts.filter((p) => !used.has(p.slug));
  return [...curated, ...fill].slice(0, limit);
}
