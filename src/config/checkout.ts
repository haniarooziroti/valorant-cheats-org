import { CHECKOUT_URLS } from './checkout-redirects.mjs';

/**
 * External checkout URLs — server-side redirect targets only (never use as visible href).
 */
export const CHECKOUT = CHECKOUT_URLS;

export type CheckoutProduct = keyof typeof CHECKOUT;

export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  valorant: 'valorant',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

export function checkoutPath(product: CheckoutProduct = 'valorant'): string {
  return CHECKOUT[product];
}

/** Visible buy / get-access buttons use the partner checkout URL directly. */
export const PRIMARY_CHECKOUT_PATH = CHECKOUT.valorant;

export function checkoutForSlug(_slug: string): string {
  return CHECKOUT.valorant;
}

/** SEO landing page path (not used as primary button href). */
export const CHECKOUT_LANDING_PATH = '/go/valorant/';

export function resolveCheckoutHref(href: string): string {
  if (!href.startsWith('http')) {
    return href.startsWith('/') ? href : `/${href}`;
  }

  for (const [product, url] of Object.entries(CHECKOUT) as [CheckoutProduct, string][]) {
    if (href === url || href.startsWith(`${url}?`) || href.startsWith(`${url}/`)) {
      return checkoutPath(product);
    }
  }

  if (href.includes('%2Fproducts%2Fvalorant') || href.includes('/products/valorant')) {
    return checkoutPath('valorant');
  }

  return href;
}
