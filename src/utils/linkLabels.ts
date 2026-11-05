/** Unique, descriptive internal link labels for SEO (avoid repeated generic CTAs). */

export function catalogCheckoutLabel(productName: string): string {
  return `Checkout — ${productName}`;
}

export function catalogDetailsLabel(productName: string): string {
  return `Open ${productName} module page`;
}

export function productPanelCheckoutLabel(productTitle: string): string {
  return `Buy ${productTitle} — select plan`;
}

export function productHighlightsCheckoutLabel(productName: string): string {
  return `License checkout for ${productName}`;
}

/** Primary nav (desktop) — distinct from footer explore links on the same page. */
export const DESKTOP_NAV_LABEL: Record<string, string> = {
  Home: 'MW4 cheat home',
  Products: 'Cheats catalog',
  Blog: 'Setup guides',
  Forum: 'Player forum',
  Reviews: 'Verified reviews',
  FAQ: 'Questions & answers',
  Support: 'Help desk',
};

export const MOBILE_NAV_LABEL: Record<string, string> = {
  Home: 'Home — menu',
  Products: 'MW4 products — menu',
  Blog: 'Setup guides — menu',
  Forum: 'Player forum — menu',
  Reviews: 'Player reviews — menu',
  FAQ: 'FAQ list — menu',
  Support: 'Support desk — menu',
};

const BREADCRUMB_PATH_LABEL: Record<string, string> = {
  '/': 'Breadcrumb: site home',
  '/products/mw4-cheats/': 'Breadcrumb: all MW4 modules',
  '/blog/': 'Breadcrumb: setup guides',
  '/forum/': 'Breadcrumb: community forum',
  '/faq/': 'Breadcrumb: FAQ hub',
  '/support/': 'Breadcrumb: support center',
  '/status/': 'Breadcrumb: live status',
  '/go/mw4/': 'Breadcrumb: checkout overview',
  '/reviews/': 'Breadcrumb: player reviews',
  '/about/': 'Breadcrumb: about page',
  '/privacy/': 'Breadcrumb: privacy policy',
  '/terms/': 'Breadcrumb: terms of use',
};

export function breadcrumbAnchorLabel(name: string, path: string): string {
  const normalized = path.endsWith('/') || path === '/' ? path : `${path}/`;
  return BREADCRUMB_PATH_LABEL[normalized] ?? BREADCRUMB_PATH_LABEL[path] ?? `Breadcrumb: ${name}`;
}
