import { SITE_MEDIA } from '../../config/media';

/** Listing + article cover when frontmatter omits featuredImage. */
export const BLOG_CARD_COVERS: Record<
  string,
  { src: string; alt: string }
> = {
  'valorant-cheat-risk': {
    src: SITE_MEDIA.espArchway,
    alt: 'Valorant Vanguard risk guide — honest cheat safety on PC',
  },
  'valorant-patch-day': {
    src: SITE_MEDIA.corridorHud,
    alt: 'Valorant patch-day cheat status and HUD after a Riot update',
  },
  'valorant-loader-fix': {
    src: SITE_MEDIA.menuScreenshot,
    alt: 'Valorant cheat loader menu when troubleshooting startup errors',
  },
  'valorant-requirements': {
    src: SITE_MEDIA.hudPanelExtended,
    alt: 'Valorant cheat settings panel with TPM and Secure Boot notes',
  },
  'valorant-triggerbot': {
    src: SITE_MEDIA.agentHighlight,
    alt: 'Valorant triggerbot and aim assist overlay in a duel',
  },
  'valorant-agent-utility-guide': {
    src: SITE_MEDIA.utilityOverlay,
    alt: 'Valorant ESP utility overlay for spike and agent info',
  },
  'valorant-esp-setup': {
    src: SITE_MEDIA.utilityOverlay,
    alt: 'Valorant player ESP and utility overlay for readable rounds',
  },
  'valorant-aimbot-setup': {
    src: SITE_MEDIA.agentHighlight,
    alt: 'Valorant aimbot FOV circle and smoothing settings',
  },
  'valorant-plans': {
    src: SITE_MEDIA.menuScreenshot,
    alt: 'Valorant cheats monthly vs lifetime pricing menu',
  },
  'valorant-features': {
    src: SITE_MEDIA.hudPanelExtended,
    alt: 'Valorant cheat feature menu — aimbot, ESP, wallhack, radar',
  },
  'buy-valorant-cheats': {
    src: SITE_MEDIA.gameplayWide,
    alt: 'Valorant cheat checkout preview — buy aimbot and ESP access',
  },
};

export function resolveBlogCover(slug: string, featuredImage?: string) {
  if (featuredImage?.trim()) {
    return { src: featuredImage.trim(), alt: '' };
  }
  const cover = BLOG_CARD_COVERS[slug];
  return cover ? { src: cover.src, alt: cover.alt } : { src: '', alt: '' };
}
