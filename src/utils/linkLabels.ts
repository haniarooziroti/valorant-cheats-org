/** Unique, descriptive internal link labels for SEO (avoid repeated generic CTAs). */

export function catalogCheckoutLabel(productTitle: string): string {
  return `Checkout — ${productTitle}`;
}

export function catalogDetailsLabel(productName: string): string {
  return `Open ${productName} module page`;
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
  Home: 'Valorant Cheat home',
  Products: 'Cheats catalog',
  Blog: 'Setup guides',
  Forum: 'Player forum',
  Reviews: 'Verified reviews',
  FAQ: 'Questions & answers',
  Support: 'Help desk',
};

export const MOBILE_NAV_LABEL: Record<string, string> = {
  Home: 'Home — menu',
  Products: 'Valorant products — menu',
  Blogs: 'Setup guides — menu',
  Forums: 'Player forum — menu',
  Reviews: 'Player reviews — menu',
  FAQ: 'FAQ list — menu',
  Support: 'Support desk — menu',
};

const BREADCRUMB_PATH_LABEL: Record<string, string> = {
  '/': 'Breadcrumb: site home',
  '/products/valorant-cheats/': 'Breadcrumb: all PC modules',
  '/blog/': 'Breadcrumb: setup guides',
  '/forum/': 'Breadcrumb: community forum',
  '/faq/': 'Breadcrumb: FAQ hub',
  '/support/': 'Breadcrumb: support center',
  '/status/': 'Breadcrumb: live status',
  '/go/valorant/': 'Breadcrumb: checkout overview',
  '/reviews/': 'Breadcrumb: player reviews',
  '/about/': 'Breadcrumb: about page',
  '/privacy/': 'Breadcrumb: privacy policy',
  '/terms/': 'Breadcrumb: terms of use',
};

const BREADCRUMB_PAGE_CONTEXT: Record<string, string> = {
  '/': 'homepage',
  '/about/': 'about',
  '/blog/': 'guide index',
  '/faq/': 'FAQ hub',
  '/forum/': 'forum hub',
  '/support/': 'support',
  '/reviews/': 'reviews',
  '/status/': 'status',
  '/go/valorant/': 'checkout overview',
  '/products/valorant-cheats/': 'module catalog',
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
  if (norm.startsWith('/forum/') && norm !== '/forum/') {
    const slug = norm.replace(/^\/forum\//, '').replace(/\/$/, '');
    return `thread: ${slug}`;
  }
  if (norm.startsWith('/products/')) {
    return norm.replace(/^\/products\//, 'product: ').replace(/\/$/, '');
  }
  return norm.replace(/^\/|\/$/g, '').replace(/\//g, ' ') || 'page';
}

export function breadcrumbAnchorLabel(name: string, path: string, currentPath: string): string {
  const normalized = normalizePath(path);
  const dest =
    BREADCRUMB_PATH_LABEL[normalized] ?? BREADCRUMB_PATH_LABEL[path] ?? `Breadcrumb: ${name}`;
  return `${dest} (from ${breadcrumbPageContext(currentPath)})`;
}
