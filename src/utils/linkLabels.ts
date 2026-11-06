/** Unique, descriptive internal link labels for SEO (avoid repeated generic CTAs). */

export function catalogCheckoutLabel(productName: string): string {
  return `Checkout — ${productName}`;
}

export function catalogDetailsLabel(productName: string): string {
  return `${productName} details →`;
}

export function productPanelCheckoutLabel(productTitle: string): string {
  return `Checkout — ${productTitle}`;
}

export function productHighlightsCheckoutLabel(productName: string): string {
  return `Get ${productName} access`;
}

/** Mobile drawer nav — distinct visible anchors from desktop PRIMARY_NAV (labels unchanged in nav config). */
export const MOBILE_HEADER_CTA_LABEL = 'Try now — menu';

/** Primary nav (desktop) — distinct from footer explore links on the same page. */
export const DESKTOP_NAV_LABEL: Record<string, string> = {
  Home: 'Home',
  Products: 'Cheats catalog',
  Blog: 'Setup guides',
  Reviews: 'Verified reviews',
  FAQ: 'Questions & answers',
  Support: 'Help desk',
};

export const MOBILE_NAV_LABEL: Record<string, string> = {
  Home: 'Home — menu',
  Products: 'Valorant products — menu',
  Blogs: 'Setup guides — menu',
  Reviews: 'Player reviews — menu',
  FAQ: 'FAQ list — menu',
  Support: 'Support desk — menu',
};

const BREADCRUMB_PATH_LABEL: Record<string, string> = {
  '/': 'Home',
  '/products/valorant-cheats/': 'Products',
  '/blog/': 'Blogs',
  '/faq/': 'FAQ',
  '/support/': 'Support',
  '/status/': 'Status',
  '/go/valorant/': 'Checkout',
  '/reviews/': 'Reviews',
  '/about/': 'About',
  '/privacy/': 'Privacy Policy',
  '/terms/': 'Terms & Conditions',
};

const BREADCRUMB_PAGE_CONTEXT: Record<string, string> = {
  '/': 'Home',
  '/about/': 'About',
  '/blog/': 'Blogs',
  '/faq/': 'FAQ',
  '/support/': 'Support',
  '/reviews/': 'Reviews',
  '/status/': 'Status',
  '/go/valorant/': 'Checkout',
  '/products/valorant-cheats/': 'Products',
  '/privacy/': 'Privacy Policy',
  '/terms/': 'Terms & Conditions',
};

function normalizePath(path: string): string {
  if (!path.startsWith('/')) return `/${path}`;
  if (path !== '/' && !path.endsWith('/')) return `${path}/`;
  return path;
}

function breadcrumbPageContext(currentPath: string): string {
  const norm = normalizePath(currentPath);
  if (BREADCRUMB_PAGE_CONTEXT[norm]) return BREADCRUMB_PAGE_CONTEXT[norm]!;
  if (norm.startsWith('/blog/') && norm !== '/blog/') {
    const slug = norm.replace(/^\/blog\//, '').replace(/\/$/, '');
    return `guide: ${slug}`;
  }
  if (norm.startsWith('/products/')) {
    return norm.replace(/^\/products\//, 'product: ').replace(/\/$/, '');
  }
  return norm.replace(/^\/|\/$/g, '').replace(/\//g, ' ') || 'page';
}

export function breadcrumbAnchorLabel(name: string, path: string, currentPath: string): string {
  const normalized = normalizePath(path);
  const dest = BREADCRUMB_PATH_LABEL[normalized] ?? BREADCRUMB_PATH_LABEL[path] ?? name;
  return `${dest} (from ${breadcrumbPageContext(currentPath)})`;
}
