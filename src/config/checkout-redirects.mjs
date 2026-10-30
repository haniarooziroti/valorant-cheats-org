/** Checkout destinations keyed by internal product id. */
export const CHECKOUT_URLS = {
  mw4: 'https://zadeyo.com/go/HANIA?to=%2Fproducts%2Fmw4',
};

/**
 * Legacy instant redirects (unused — /go/mw4/ is a full indexable landing page).
 * Node preview uses static dist files for checkout paths.
 */
export const CHECKOUT_PATH_REDIRECTS = new Map([]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
