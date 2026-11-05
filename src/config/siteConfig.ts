/**
 * Site-wide marketing URLs and pricing — single source of truth for blog CTAs and copy.
 * TODO: Confirm domain matches production DNS (valorant-cheats.org vs valorant-cheat.org).
 */
export const SITE_NAME = 'Valorant Cheats';
export const SITE_URL = 'https://valorant-cheats.org';
export const SITE_DOMAIN = 'valorant-cheats.org';

export const PRODUCT_URL = '/products/valorant-cheats/';
export const CHECKOUT_URL = 'https://zadeyo.com/go/HANIA?to=%2Fproducts%2Fvalorant';
export const DISCORD_INVITE_URL = 'https://discord.com/invite/Vu85F8auQS';
export const FORUM_URL = '/forum/';
export const FAQ_URL = '/faq/';
export const SUPPORT_URL = '/support/';
export const REVIEWS_URL = '/reviews/';

export const PRICE_MONTHLY = 35;
export const PRICE_LIFETIME = 150;

/** Default Open Graph image for blog and pages without a custom image. */
export const OG_DEFAULT_IMAGE = '/images/og-default.jpg';

export function breakEvenMonths(): number {
  return Math.ceil(PRICE_LIFETIME / PRICE_MONTHLY);
}

export function formatUsd(amount: number): string {
  return `$${amount}`;
}
