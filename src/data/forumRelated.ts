import { forumPosts, getForumPost, type ForumPost } from './forum';

export function getRelatedForumPostsForProduct(slugs: string[], limit = 3): ForumPost[] {
  const posts = slugs.map((slug) => getForumPost(slug)).filter((p): p is ForumPost => Boolean(p));
  return posts.slice(0, limit);
}

export { forumPosts, getForumPost, getFeaturedForumPosts } from './forum';
