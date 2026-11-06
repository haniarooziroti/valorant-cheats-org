import { normalizeSeoPath } from './pageSeo';

const LOGO_ALT: Record<string, string> = {
  '/': 'Valorant Cheat logo — ESP and aimbot modules',
  '/reviews/': 'Valorant cheat reviews — player feedback',
  '/faq/': 'Valorant cheat FAQ — setup and access',
  '/support/': 'Valorant cheat support — loader help',
  '/products/valorant-cheats/': 'Valorant cheats hub — module list',
  '/status/': 'Valorant cheat status — online modules',
  '/about/': 'About Valorant Cheat',
  '/privacy/': 'Valorant Cheat privacy policy',
  '/terms/': 'Valorant Cheat terms',
  '/go/valorant/': 'Valorant cheat checkout access',
};

export function resolveLogoAlt(pathname: string): string {
  const path = normalizeSeoPath(pathname);
  if (path.startsWith('/products/valorant-cheats/') && path !== '/products/valorant-cheats/') {
    return 'Valorant cheat module screenshot and details';
  }
  return LOGO_ALT[path] ?? 'Valorant Cheat';
}
