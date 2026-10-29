/** Checkout destinations keyed by internal product id. */
export const CHECKOUT_URLS = {
  mw4: 'https://zadeyo.com/go/HANIA?to=%2Fproducts%2Fmw4',
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/mw4', CHECKOUT_URLS.mw4],
  ['/go/mw4/', CHECKOUT_URLS.mw4],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
