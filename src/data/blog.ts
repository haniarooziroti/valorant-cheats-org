export {
  loadBlogPosts,
  getBlogPost,
  getRelatedBlogPosts,
  getRelatedBlogPostsForProduct,
} from './blog/loader';

export function getBlogPostTimestamp(date: string) {
  return new Date(date).getTime();
}

export function getBlogReadMinutes(readTime: string) {
  const match = readTime.match(/(\d+)/);
  return match ? Number(match[1]) : 0;
}
