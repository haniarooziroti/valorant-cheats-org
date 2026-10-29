import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import type { BlogPostFull } from './types';

type BlogEntry = CollectionEntry<'blog'>;

function entrySlug(entry: BlogEntry): string {
  const id = entry.id;
  return id.endsWith('.md') ? id.slice(0, -3) : id;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function readTimeFromBody(body: string): string {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  const mins = Math.max(5, Math.round(words / 210));
  return `${mins} min read`;
}

function mapEntry(entry: BlogEntry): BlogPostFull {
  return {
    slug: entrySlug(entry),
    tag: entry.data.category,
    title: entry.data.title,
    desc: entry.data.description,
    image: entry.data.featuredImage,
    date: formatDate(entry.data.publishDate),
    dateIso: entry.data.publishDate.toISOString().slice(0, 10),
    readTime: readTimeFromBody(entry.body ?? ''),
    featured: entry.data.featured,
    author: 'MW4 desk',
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

export async function getFeaturedBlogPost() {
  const posts = await loadBlogPosts();
  return posts.find((p) => p.featured) ?? posts[0];
}

export async function getNonFeaturedBlogPosts() {
  const featured = await getFeaturedBlogPost();
  const posts = await loadBlogPosts();
  return posts.filter((p) => p.slug !== featured?.slug);
}

export async function getFeaturedBlogPosts(limit = 3) {
  const featured = await getFeaturedBlogPost();
  const posts = await loadBlogPosts();
  const rest = posts.filter((p) => p.slug !== featured?.slug);
  return featured ? [featured, ...rest].slice(0, limit) : posts.slice(0, limit);
}

export async function getRelatedBlogPosts(slug: string, limit = 3) {
  const posts = await loadBlogPosts();
  const current = posts.find((p) => p.slug === slug);
  if (!current) return [];
  const sameTag = posts.filter((p) => p.slug !== slug && p.tag === current.tag);
  const others = posts.filter((p) => p.slug !== slug && p.tag !== current.tag);
  return [...sameTag, ...others].slice(0, limit);
}

export async function getBlogPostsBySlugs(slugs: string[]) {
  const posts = await loadBlogPosts();
  return slugs
    .map((slug) => posts.find((p) => p.slug === slug))
    .filter((post): post is BlogPostFull => post != null);
}

export async function getRelatedBlogPostsForProduct(relatedSlugs: string[], limit = 6) {
  const curated = await getBlogPostsBySlugs(relatedSlugs);
  if (curated.length >= limit) return curated.slice(0, limit);
  const posts = await loadBlogPosts();
  const used = new Set(curated.map((p) => p.slug));
  const fill = posts.filter((p) => !used.has(p.slug));
  return [...curated, ...fill].slice(0, limit);
}

export async function getBlogTags() {
  const posts = await loadBlogPosts();
  return [...new Set(posts.map((p) => p.tag))].sort((a, b) => a.localeCompare(b));
}

export function getBlogPostTimestamp(date: string) {
  return new Date(date).getTime();
}

export function getBlogReadMinutes(readTime: string) {
  const match = readTime.match(/(\d+)/);
  return match ? Number(match[1]) : 0;
}
