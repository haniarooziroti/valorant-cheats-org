# SEO changes (technical audit batch)

Stack: **Astro 7** static site, deployed via **Cloudflare Workers/Pages** (`public/_headers`, `wrangler.jsonc`).

## 1. Meta descriptions (pixel / length)

- **`src/config/pageSeo.ts`** — Rewrote route descriptions to ≤152 characters; homepage uses the audit-suggested MW4 / aimbot / ESP / wallhack / radar / DMZ / checkout wording.
- **`src/i18n/en.ts`** — Default `site.description` aligned with homepage.
- **`src/layouts/BaseLayout.astro`** — All pages pass descriptions through `truncateMetaDescription(..., 152)` for `<meta name="description">`, Open Graph, and Twitter.

## 2. hreflang duplicates

- **`src/layouts/BaseLayout.astro`** — Removed duplicate `hreflang="en-us"` pointing at the same URL as `en`. Each page now has one `en`, one self-referencing URL, and one `x-default`.

## 3. Charset HTTP header

- **`public/_headers`** — Added `Content-Type: text/html; charset=utf-8` for `/`, `/404.html`, and HTML route prefixes (`/blog/*`, `/products/*`, etc.). Asset paths (`/_astro/*`, images, `.css`, `.js`) keep cache headers only—no HTML content-type on binaries.

## 4. Social sharing & OG

- OG/Twitter tags were already in **`BaseLayout.astro`**; descriptions now use the truncated meta string.
- **`src/components/ShareButtons.astro`** + **`src/styles/share-buttons.css`** — Plain URL share links (X, Facebook, Reddit, WhatsApp, Telegram, Discord hint, Copy link); no third-party widgets.
- **`src/components/Footer.astro`** — Compact share row on every page (via `shareUrl` / `shareTitle` from layout).
- **`src/pages/blog/[slug].astro`** — Share row under article lead.
- **`Footer.astro`** — External resource links (Wikipedia, Microsoft security, Activision support). Social profile links only if `PUBLIC_ORG_SAME_AS` is set in env.

## 5. Unique internal anchor text

- **`Footer.astro`** — Resource column labels made distinct from Explore links.
- **`forum/index.astro`** — Replaced repeated “Read thread” with “Open full thread” + descriptive `aria-label`.
- **`ProductRelatedGuidesSection.astro`** — Unique section title and CTA text.
- **`blog/[slug].astro`** / **`blog/index.astro`** — Distinct button labels for blog navigation and checkout.

## 6. External links

- **`Footer.astro`** — “External resources” block with `rel="noopener noreferrer"` and `target="_blank"`.

## Verify locally

```bash
npm run build
```

Check view-source for meta length, single hreflang pair, footer share + external links. After deploy, confirm HTML responses include `Content-Type: text/html; charset=utf-8` on document URLs (not on `/ _astro/*.js`).
