/** Unique, descriptive internal link labels for SEO (avoid repeated generic CTAs). */

export function catalogCheckoutLabel(_productName: string): string {
  return 'Try now';
}

export function catalogDetailsLabel(productName: string): string {
  return `Open ${productName} module page`;
}

export function productPanelCheckoutLabel(_productTitle: string): string {
  return 'Try now';
}

export function productHighlightsCheckoutLabel(_productName: string): string {
  return 'Try now';
}

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
  Blog: 'Setup guides — menu',
  Forum: 'Player forum — menu',
  Reviews: 'Player reviews — menu',
  FAQ: 'FAQ list — menu',
  Support: 'Support desk — menu',
};

const BREADCRUMB_PATH_LABEL: Record<string, string> = {
  '/': 'Breadcrumb: site home',
  '/products/valorant-cheats/': 'Breadcrumb: all Valorant modules',
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

export function breadcrumbAnchorLabel(name: string, path: string): string {
  const normalized = path.endsWith('/') || path === '/' ? path : `${path}/`;
  return BREADCRUMB_PATH_LABEL[normalized] ?? BREADCRUMB_PATH_LABEL[path] ?? `Breadcrumb: ${name}`;
}
