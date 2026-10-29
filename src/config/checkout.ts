import { CHECKOUT_URLS } from './checkout-redirects.mjs';

/**
 * External checkout URLs — server-side redirect targets only (never use as visible href).
 */
export const CHECKOUT = CHECKOUT_URLS;

export type CheckoutProduct = keyof typeof CHECKOUT;

export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  mw4: 'mw4',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

export function checkoutPath(product: CheckoutProduct = 'mw4'): string {
  return `/go/${CHECKOUT_SLUGS[product]}/`;
}

export const PRIMARY_CHECKOUT_PATH = checkoutPath('mw4');

export function checkoutForSlug(_slug: string): string {
  return checkoutPath('mw4');
}

export function resolveCheckoutHref(href: string): string {
  if (!href.startsWith('http')) {
    return href.startsWith('/') ? href : `/${href}`;
  }

  for (const [product, url] of Object.entries(CHECKOUT) as [CheckoutProduct, string][]) {
    if (href === url || href.startsWith(`${url}?`) || href.startsWith(`${url}/`)) {
      return checkoutPath(product);
    }
  }

  if (href.includes('%2Fproducts%2Fmw4') || href.includes('/products/mw4')) {
    return checkoutPath('mw4');
  }

  return href;
}
