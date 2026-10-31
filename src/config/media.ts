/**
 * Remote WebP assets (Supabase CDN).
 * Each gameplay/marketing URL is used at most twice sitewide — see comments per asset.
 */

const CDN =
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/valorant';

const folderA = `${CDN}/02ab714e-de37-423b-81f2-afd7f7fd8d28`;
const folderB = `${CDN}/c7f7b806-cb3e-4eea-8fa1-eca85c479073`;

export const SITE_MEDIA = {
  /** Header, footer mark, schema logo (favicon slot — separate from gameplay cap). */
  favicon: `${CDN}/51ffc2cc-57ef-429b-83ff-03a57de958e9/1793305415891-tiq5uo-download.webp`,
  /** Default Open Graph + Valorant ESP module hero (2×). */
  espArchway: `${folderA}/1793449666887-9n7cly-valorant-esp-archway-showdown.webp`,
  /** ESP module gallery + forum wallhack thread (2×). */
  espSnowyAlley: `${folderA}/1793449561475-pz9603-snowy-industrial-alley-with-esp-overlays.webp`,
  /** Homepage hero carousel + forum FOV thread (2×). */
  corridorHud: `${folderA}/1793449284668-okxp6u-futuristic-valorant-corridor-battle-hud.webp`,
  /** Aimbot module + forum aimbot settings thread (2×). */
  sciFiShowdown: `${folderA}/1793449228156-inb3kd-valorant-sci-fi-showdown-hud.webp`,
  /** Triggerbot module + forum hotkeys thread (2×). */
  jettKnives: `${folderA}/1793447216384-wls48q-valorant-jett-knives-at-a-belt-1.webp`,
  /** Aimbot gallery + forum soft-aim thread (2×). */
  aimPanelS1: `${folderB}/1793193955899-buofg1-whsatano-valorant-s1.webp`,
  /** Radar + no recoil module pages (2×). */
  aimPanelS2: `${folderB}/1793193955588-ylzqkj-whsatano-valorant-s2.webp`,
  /** Hero carousel + blog features article (2×). */
  hudPanelExtended: `${folderA}/1793455134160-cu8lx0-whsatano-valorant-s2-e756aae18c6c.webp`,
  /** Hero carousel + blog pricing article (2×). */
  menuScreenshot: `${folderA}/1793455087800-34uufz-images.webp`,
  /** Hero carousel + blog checkout guide (2×). */
  gameplayWide: `${folderA}/1793455063253-xwjslf-1-2-webp-309350f53434ceeb48bfb1837f8647ba.webp`,
  /** Hero carousel + blog aimbot setup (2×). */
  agentHighlight: `${folderA}/1793455027852-e37fgr-5-webp-464f6deb34dc1b8af2bf890f1fbf8367.webp`,
  /** Hero carousel + blog ESP setup (2×). */
  utilityOverlay: `${folderA}/1793455014013-in14n8-2-webp-7f1f09ea0214f5ec9ccb296f8cf86329.webp`,
} as const;

export const SUPABASE_MEDIA_ORIGIN = 'https://ooszazcwzmwhitdxwtom.supabase.co';

export interface MediaSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

/** Six slides for homepage hero — autoplay via ImageSlider + hero-embla. */
export const HERO_CAROUSEL_SLIDES: MediaSlide[] = [
  {
    src: SITE_MEDIA.corridorHud,
    alt: 'Valorant PC gameplay with tactical HUD overlay — aimbot and ESP preview',
    caption: 'Valorant cheat HUD',
    captionDesc: 'Ranked-ready overlay preview on PC.',
  },
  {
    src: SITE_MEDIA.gameplayWide,
    alt: 'Wide Valorant match view with cheat overlay markers for ranked PC play',
    caption: 'In-match overlay',
    captionDesc: 'Readable ESP and radar for rotations.',
  },
  {
    src: SITE_MEDIA.hudPanelExtended,
    alt: 'Valorant cheat menu panel with module toggles for aimbot and ESP',
    caption: 'Module menu',
    captionDesc: 'Grouped aim, ESP, radar, and utility tabs.',
  },
  {
    src: SITE_MEDIA.menuScreenshot,
    alt: 'Valorant cheat settings screenshot with aimbot, ESP, and wallhack options',
    caption: 'Cheat menu',
    captionDesc: 'Compare Valorant aim assist and player ESP modules.',
  },
  {
    src: SITE_MEDIA.agentHighlight,
    alt: 'Valorant agent duel with triggerbot and aim assist overlay active',
    caption: 'Trigger & aim',
    captionDesc: 'Conservative triggerbot and aim assist pairing.',
  },
  {
    src: SITE_MEDIA.utilityOverlay,
    alt: 'Valorant utility and player ESP overlay during a competitive round',
    caption: 'ESP & utility',
    captionDesc: 'Spike, utility, and player wallhack information.',
  },
];

export const HERO_VIDEO = {
  webm: '',
  mp4: '',
  poster: HERO_CAROUSEL_SLIDES[0]!.src,
  durationSec: 0,
  posterOnly: true,
} as const;

export const GAMEPLAY_FRAMES = {
  aimbot: SITE_MEDIA.sciFiShowdown,
  esp: SITE_MEDIA.espArchway,
  trigger: SITE_MEDIA.jettKnives,
  radar: SITE_MEDIA.aimPanelS2,
  noRecoil: SITE_MEDIA.aimPanelS2,
  menu: SITE_MEDIA.aimPanelS1,
  wallhack: SITE_MEDIA.espSnowyAlley,
  aimbotAlt: SITE_MEDIA.aimPanelS1,
  espAlt: SITE_MEDIA.espSnowyAlley,
  triggerAlt: SITE_MEDIA.jettKnives,
  radarAlt: SITE_MEDIA.aimPanelS2,
  noRecoilAlt: SITE_MEDIA.aimPanelS2,
} as const;

/** Blog featuredImage URLs (second use for hero-only assets). */
export const BLOG_FEATURED = {
  features: SITE_MEDIA.hudPanelExtended,
  plans: SITE_MEDIA.menuScreenshot,
  checkout: SITE_MEDIA.gameplayWide,
  aimbotSetup: SITE_MEDIA.agentHighlight,
  espSetup: SITE_MEDIA.utilityOverlay,
} as const;
