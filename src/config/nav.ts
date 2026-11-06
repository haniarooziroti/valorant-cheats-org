import type { IconName } from '../components/icons/types';
import type { NavLink } from '../i18n/types';

/** Primary site header navigation — single source of truth for labels and hrefs. */
export const PRIMARY_NAV: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/products/', label: 'Products' },
  { href: '/blog/', label: 'Blogs' },
  { href: '/reviews/', label: 'Reviews' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/support/', label: 'Support' },
];

export const HEADER_CTA_LABEL = 'Try now';

/** @deprecated Use HEADER_CTA_LABEL */
export const HEADER_DISCORD_LABEL = HEADER_CTA_LABEL;

export const PRIMARY_NAV_LABELS = PRIMARY_NAV.map((item) => item.label);

/** Icons keyed by nav href (must match PRIMARY_NAV hrefs). */
export const PRIMARY_NAV_ICONS: Record<string, IconName> = {
  '/': 'layers',
  '/products/': 'navProducts',
  '/blog/': 'navBlog',
  '/forums/': 'messageCircle',
  '/reviews/': 'users',
  '/faq/': 'navFaq',
  '/support/': 'navSupport',
};

/** Legacy nav labels — must not appear in built HTML headers. */
export const FORBIDDEN_NAV_LABELS = [
  'Overview',
  'Module lineup',
  'Written guides',
  'Community threads',
  'Verified feedback',
  'Buyer questions',
  'Contact help desk',
] as const;
