/** Distinct card hero gradients until unique /images/blog assets are added. */

const CATEGORY_GRADIENTS: Record<string, [string, string]> = {
  Features: ['#6d28d9', '#312e81'],
  Guides: ['#7c3aed', '#1e1b4b'],
  Setup: ['#5b21b6', '#0f172a'],
  Troubleshooting: ['#9333ea', '#3b0764'],
  Updates: ['#8b5cf6', '#172554'],
};

function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i += 1) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h;
}

export function blogCardFallbackStyle(category: string, slug: string): string {
  const pair = CATEGORY_GRADIENTS[category] ?? ['#6d28d9', '#0d0a14'];
  const shift = (hashSlug(slug) % 24) - 12;
  const [a, b] = pair;
  return `linear-gradient(${135 + shift}deg, ${a} 0%, ${b} 55%, color-mix(in oklch, ${b} 70%, #000) 100%)`;
}

/** Skip identical JPG placeholders on the index grid; set false when each slug has a unique image. */
export const BLOG_INDEX_GRADIENT_ONLY = false;
