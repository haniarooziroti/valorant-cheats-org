import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedForumSlugs: string[];
}

export const productRelatedForumSlugs: Record<string, string[]> = {
  aimbot: ['aimbot-settings-smooth-level-killcam', 'soft-aim-vs-visible-aimbot', 'aimbot-fov-ranked-unrated'],
  esp: ['esp-box-style-unrated', 'wallhack-spike-colors', 'radar-haven-split'],
  triggerbot: ['triggerbot-delay-valorant', 'aimbot-settings-smooth-level-killcam', 'cheat-menu-hotkeys-ranked'],
  radar: ['radar-haven-split', 'esp-box-style-unrated', 'patch-day-module-status'],
  'no-recoil': ['no-recoil-spray-valorant', 'cheat-menu-hotkeys-ranked', 'external-vs-internal-valorant'],
};

import { GAMEPLAY_FRAMES, HERO_CAROUSEL_SLIDES } from '../config/media';

const productBase = '/products/valorant-cheats/';

const sharedAcquisition: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Pick your access window',
    desc: 'Monthly or lifetime keys cover the same Valorant module list—choose what fits your season on PC.',
  },
  {
    num: '02',
    title: 'Complete secure checkout',
    desc: 'Checkout runs on our partner page. Keep the email you pay with handy for delivery.',
  },
  {
    num: '03',
    title: 'Install the loader',
    desc: 'Follow the delivery email, run the loader on Windows 10/11, and import a starter config.',
  },
  {
    num: '04',
    title: 'Tune in a private match',
    desc: 'Test aim circle size, ESP density, and radar zoom before jumping into ranked playlists.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return { title: `How to get ${productName}`, steps: sharedAcquisition };
}

const sharedGoodToKnow =
  'Valorant receives frequent updates. Confirm the status note on the homepage before you launch. Stream-proof overlay mode is available when you record gameplay.';

const sharedLimitations =
  'Third-party software in online multiplayer can violate publisher terms and lead to account penalties. You accept that risk. Features and compatibility can change after game or Windows updates without notice.';

const valorantSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Windows 10 or Windows 11 (64-bit).' },
  { icon: 'reqCpu', text: 'Intel or AMD CPU that meets Valorant PC requirements.' },
  { icon: 'reqSettings', text: 'Secure Boot, TPM, HVCI, and Core Isolation enabled where required.' },
  { icon: 'reqWifi', text: 'Stable internet for loader access and module updates.' },
];

const slides = {
  aimbot: {
    src: GAMEPLAY_FRAMES.aimbot,
    alt: 'Valorant aimbot menu showing FOV circle and smoothing sliders',
    caption: 'Aim assist tuning',
    captionDesc: 'FOV ring, smooth strength, and bone priority for ranked engagements.',
  },
  esp: {
    src: GAMEPLAY_FRAMES.esp,
    alt: 'Valorant player ESP with boxes, health bars, and skeleton overlay',
    caption: 'Player ESP layout',
    captionDesc: 'Corner boxes, armor readout, and distance caps for readable ranked fights.',
  },
  trigger: {
    src: GAMEPLAY_FRAMES.trigger,
    alt: 'Valorant triggerbot settings with delay and hitbox options',
    caption: 'Trigger module',
    captionDesc: 'Delay, hold key, and shared wall checks with aim assist.',
  },
  radar: {
    src: GAMEPLAY_FRAMES.radar,
    alt: 'Valorant 2D radar with operator markers and zoom controls',
    caption: '2D radar',
    captionDesc: 'Operator dots with range and zoom for Premier rotations.',
  },
  noRecoil: {
    src: GAMEPLAY_FRAMES.noRecoil,
    alt: 'Valorant no recoil spray control settings on cheat menu',
    caption: 'No recoil assist',
    captionDesc: 'Light spray control for Vandal and Phantom without zero-recoil meme configs.',
  },
  menu: {
    src: GAMEPLAY_FRAMES.menu,
    alt: 'Valorant cheat menu with ranked and unrated config profiles',
    caption: 'Config profiles',
    captionDesc: 'Separate saved setups for ranked and unrated playlists.',
  },
  aimbotB: {
    src: GAMEPLAY_FRAMES.aimbotAlt,
    alt: 'Valorant aim assist circle overlay during a gunfight',
    caption: 'Aim circle',
    captionDesc: 'On-screen FOV ring for believable tracking help.',
  },
  espB: {
    src: GAMEPLAY_FRAMES.espAlt,
    alt: 'Valorant wallhack style player boxes in a multiplayer match',
    caption: 'Readable ESP',
    captionDesc: 'Soft colors for cover vs line-of-sight targets.',
  },
  triggerB: {
    src: GAMEPLAY_FRAMES.triggerAlt,
    alt: 'Valorant triggerbot hold key binding in the menu',
    caption: 'Trigger hold key',
    captionDesc: 'Fire only when you mean to.',
  },
  radarB: {
    src: GAMEPLAY_FRAMES.radarAlt,
    alt: 'Valorant radar overlay beside the minimap',
    caption: 'Radar zoom',
    captionDesc: 'Pull zoom in for Premier lanes.',
  },
  noRecoilB: {
    src: GAMEPLAY_FRAMES.noRecoilAlt,
    alt: 'Valorant Phantom spray pattern with light recoil assist enabled',
    caption: 'Spray tuning',
    captionDesc: 'Pair light recoil with your existing crosshair placement.',
  },
  menuB: {
    src: GAMEPLAY_FRAMES.menu,
    alt: 'Valorant misc tab with stream-proof toggle',
    caption: 'Stream-proof mode',
    captionDesc: 'Keep overlays off capture when you record.',
  },
};

type ModuleDef = {
  slug: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  badge: string;
  category: string;
  variant?: ProductPage['variant'];
  imageKey: keyof typeof slides;
  fullFeatures: string[];
  overview: string[];
  body: { type: 'h2' | 'p'; text: string }[];
};

const modules: ModuleDef[] = [
  {
    slug: 'aimbot',
    name: 'Aimbot',
    title: 'Valorant Aimbot — Soft Aim & FOV Tuning Module',
    subtitle: 'Smooth aim inside your FOV ring',
    desc: 'Precision aim assist for Valorant PC multiplayer with circle FOV, smoothing, and visibility checks.',
    features: ['Adjustable aim circle', 'Head or chest priority', 'Team and downed filters', 'Shared wall logic'],
    more: 8,
    badge: 'Core module',
    category: 'Aim assist',
    variant: 'popular',
    imageKey: 'aimbot',
    fullFeatures: [
      'Aim circle sized around your crosshair',
      'Smooth tracking instead of instant snaps',
      'Head, upper chest, or closest bone selection',
      'Ignores operators behind hard cover',
      'Distance cap per playlist',
      'Skip teammates and downed players',
      'Optional FOV ring draw for tuning',
    ],
    overview: [
      'The aim module eases onto targets inside a circle you control. It respects the same visibility rules you expect in a competitive match—no tracking through solid walls.',
      'Start with a wide circle and higher smoothing in private matches, then tighten values once your crosshair placement feels natural.',
    ],
    body: [
      { type: 'h2', text: 'Who this fits' },
      {
        type: 'p',
        text: 'Players who want steadier gunfights in ranked and Premier without jerky camera movement. Pair with player ESP if you need extra context on flanks.',
      },
    ],
  },
  {
    slug: 'esp',
    name: 'Player ESP',
    title: 'Valorant ESP & Wallhack — Agent Boxes & Health',
    subtitle: 'Readable boxes, health, and skeleton',
    desc: 'Player ESP for Valorant with armor plates, distance, weapon readouts, and squad colors tuned for fast TTK playlists.',
    features: ['Box or corner style', 'Health and plates', 'Skeleton option', 'Squad color coding'],
    more: 10,
    badge: 'Core module',
    category: 'Visuals',
    variant: 'essential',
    imageKey: 'esp',
    fullFeatures: [
      'Full box or corner box styles',
      'Skeleton for stance reads',
      'Health and armor plate display',
      'Distance readout with cap slider',
      'Optional name tags',
      'Weapon in hand label',
      'Snaplines with distance limit',
      'Muted color for players behind soft cover',
      'Squad color grouping',
    ],
    overview: [
      'ESP keeps fights readable: you see who is pushing, who is one plate away, and how far the duel actually is.',
      'Names stay off by default so the screen stays clean—toggle them when you are reviewing demos or coaching friends.',
    ],
    body: [
      { type: 'h2', text: 'Ranked vs unrated' },
      {
        type: 'p',
        text: 'For long ranked nights, keep boxes tight and distance capped. In unrated, you can widen ESP slightly—see the radar module when you want map-wide awareness.',
      },
    ],
  },
  {
    slug: 'triggerbot',
    name: 'Triggerbot',
    title: 'Valorant Triggerbot',
    subtitle: 'Shots only when you are on target',
    desc: 'Trigger module fires when your crosshair is already on an operator, with delay tuning and shared visibility checks.',
    features: ['Hold key', 'Shot delay', 'Head or chest', 'Wall check parity'],
    more: 4,
    badge: 'Add-on',
    category: 'Combat',
    imageKey: 'trigger',
    fullFeatures: [
      'Fires on crosshair contact only',
      'Short delay before shot',
      'Head or upper chest selection',
      'Same wall validation as aim assist',
      'Hold key binding',
    ],
    overview: [
      'Trigger does not pull your aim—it only confirms the shot when you are already lined up. That keeps recoil control in your hands.',
    ],
    body: [
      {
        type: 'p',
        text: 'Use a slightly longer delay if you want the module to feel closer to manual clicking in clutch moments.',
      },
    ],
  },
  {
    slug: 'radar',
    name: '2D Radar',
    title: 'Valorant 2D Radar',
    subtitle: 'Minimap-style operator feed',
    desc: 'Compact radar with operator markers, zoom, and range limits for Premier and large playlists.',
    features: ['Operator dots', 'Zoom slider', 'Range cap', 'Matches ESP colors'],
    more: 3,
    badge: 'Awareness',
    category: 'Radar',
    imageKey: 'radar',
    fullFeatures: ['2D radar overlay', 'Operator markers', 'Radar range control', 'Radar zoom'],
    overview: [
      'The radar mirrors ESP logic in a smaller footprint—handy when you are holding a lane and do not want to scan the whole screen.',
    ],
    body: [],
  },
  {
    slug: 'no-recoil',
    name: 'No Recoil Assist',
    title: 'Valorant No Recoil Module',
    subtitle: 'Light spray control for rifles',
    desc: 'Valorant no recoil helpers for Vandal and Phantom—subtle spray control that pairs with aimbot without looking robotic.',
    features: ['Light recoil slider', 'Per-weapon profiles', 'Works with aimbot', 'Ranked-safe defaults'],
    more: 6,
    badge: 'Combat',
    category: 'Recoil',
    imageKey: 'noRecoil',
    fullFeatures: [
      'Adjustable recoil compensation strength',
      'Separate profiles per rifle',
      'Optional SMG preset',
      'Does not remove spread entirely',
      'Toggle with hold key',
      'Syncs with aimbot smooth settings',
    ],
    overview: [
      'Full zero-recoil looks wrong on spectate. This module keeps a light pull so your spray still has human variance.',
      'Test in the range before you enable it in ranked—pair with conservative aimbot FOV for believable clips.',
    ],
    body: [
      {
        type: 'p',
        text: 'Use this when you want Valorant no recoil assistance without turning every fight into a laser beam.',
      },
    ],
  },
];

type SlideKey = keyof typeof slides;

const moduleSecondSlide: Record<string, SlideKey> = {
  aimbot: 'aimbotB',
  esp: 'espB',
  triggerbot: 'triggerB',
  radar: 'radarB',
  'no-recoil': 'noRecoilB',
};

function buildPages(): ProductPage[] {
  return modules.map((mod) => ({
    slug: mod.slug,
    kind: 'tier',
    badge: mod.badge,
    category: mod.category,
    tier: mod.name,
    name: mod.name,
    title: mod.title,
    subtitle: mod.subtitle,
    desc: mod.desc,
    features: mod.features,
    more: mod.more,
    variant: mod.variant,
    buyUrl: checkoutForSlug(mod.slug),
    images:
      mod.slug === 'aimbot' || mod.slug === 'esp'
        ? [slides[mod.imageKey], slides[moduleSecondSlide[mod.slug] ?? 'menuB']]
        : [slides[mod.imageKey]],
    overview: { title: `${mod.name} overview`, paragraphs: mod.overview },
    acquisition: acquisitionFor(mod.title),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    fullFeatures: mod.fullFeatures,
    systemRequirements: valorantSystemRequirements,
    body: mod.body,
    relatedForumSlugs: productRelatedForumSlugs[mod.slug] ?? [],
  }));
}

export const productPages: ProductPage[] = buildPages();

export const cheatPages = productPages;

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return getProductPage(slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return productPages.map((p) => p.slug);
}

export const heroSlides = HERO_CAROUSEL_SLIDES;

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description:
    'Valorant PC modules—aim assist, player ESP, triggerbot, radar hack, and no recoil tools in one access pass.',
  buyUrl: checkoutPath('valorant'),
};
