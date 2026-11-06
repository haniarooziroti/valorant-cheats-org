/** Unique breadcrumb labels (avoid repeating main nav anchor text). */
export const CRUMB = {
  home: { name: 'Home', path: '/' },
  products: { name: 'Module catalog', path: '/products/valorant-cheats/' },
  blog: { name: 'Guides archive', path: '/blog/' },
  reviews: { name: 'Player testimonials', path: '/reviews/' },
  faq: { name: 'Pre-buy answers', path: '/faq/' },
  support: { name: 'Loader help desk', path: '/support/' },
  checkout: { name: 'Partner checkout', path: '/go/valorant/' },
} as const;
