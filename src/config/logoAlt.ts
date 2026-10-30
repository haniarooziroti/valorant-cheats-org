import { normalizeSeoPath } from './pageSeo';
import { getForumThreadSeo } from './forumSeo';
import { getBlogPostSeo } from './blogSeo';

const LOGO_ALT_BY_PATH: Record<string, string> = {
  '/': 'Aimbot – logo',
  '/blog/': 'Blog – Aimbot – logo',
  '/forum/': 'Mw4 Cheats Forum – Aimbot – logo',
  '/reviews/': 'Reviews – Aimbot – logo',
  '/faq/': 'Faq – Aimbot – logo',
  '/support/': 'Support – Aimbot – logo',
  '/products/mw4-cheats/': 'Cheats – Aimbot – logo',
  '/privacy/': 'Privacy – Aimbot – logo',
  '/about/': 'Forum – Aimbot – logo',
  '/terms/': 'Terms – Aimbot – logo',
  '/go/mw4/': 'Checkout – Aimbot – logo',
};

export function resolveLogoAlt(pathname: string): string {
  const path = normalizeSeoPath(pathname);
  if (path.startsWith('/forum/') && path !== '/forum/') {
    const slug = path.replace(/^\/forum\//, '').replace(/\/$/, '');
    return getForumThreadSeo(slug)?.logoAlt ?? 'Aimbot – logo';
  }
  if (path.startsWith('/blog/') && path !== '/blog/') {
    const slug = path.replace(/^\/blog\//, '').replace(/\/$/, '');
    return getBlogPostSeo(slug)?.logoAlt ?? 'Aimbot – logo';
  }
  return LOGO_ALT_BY_PATH[path] ?? 'Aimbot – logo';
}
