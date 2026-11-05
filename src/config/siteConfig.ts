/**
 * Marketing URLs, pricing, and checkout paths.
 * Hostname comes from src/config/site.ts (canonical: valorant-cheat.org).
 */
import { PRODUCT_BASE, SITE_DOMAIN, SITE_URL, TITLE_PREFIX } from './site';

export { SITE_DOMAIN, SITE_URL };

export const SITE_NAME = TITLE_PREFIX;
export const PRODUCT_URL = PRODUCT_BASE;
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
