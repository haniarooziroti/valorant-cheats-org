import { normalizeSeoPath } from './pageSeo';

export interface ForumThreadSeo {
  title: string;
  description: string;
  logoAlt: string;
  sidebarHeading: string;
  extraBody?: string[];
}

const FORUM_THREAD_SEO: Record<string, ForumThreadSeo> = {
  'aimbot-settings-smooth-level-killcam': {
    title: 'Aimbot Settings: Smooth Level & Killcams | Valorant Cheat',
    description:
      'Aimbot settings for ranked smooth level: how conservative players tune FOV and smoothing so killcams still look like PC aim, not snap bots.',
    logoAlt: 'Valorant aimbot smooth settings menu screenshot',
    sidebarHeading: 'valorant/aimbot',
    extraBody: [
      'When you shop Valorant aimbot settings, start mid-high smooth with a modest FOV and test one unrated match before you touch bone priority.',
      'Pair aim assist with normal crosshair placement—ESP helps info, but pre-aim still sells the clip when someone reports you.',
      'If killcams still look robotic, lower strength one notch and keep hold-to-aim only. Soft assist with chest priority at mid-range usually reads cleaner than full head lock.',
      'Save a ranked profile and an unrated profile so you are not re-tuning aimbot settings every time you change playlist.',
      'After agent patches, re-test one deathmatch before competitive: FOV that worked last week can over-pull on new movement kits.',
    ],
  },
  'aimbot-fov-ranked-unrated': {
    title: 'Aimbot FOV: Ranked vs Unrated Defaults | Valorant Cheat',
    description:
      'Valorant cheats aimbot FOV circle sizes for Ascent duels vs Swiftplay—players compare defaults after the latest agent patch.',
    logoAlt: 'Valorant aimbot FOV ring overlay screenshot',
    sidebarHeading: 'valorant/aimbot',
  },
  'first-time-loader-valorant': {
    title: 'Install Valorant Cheat Loader — First Session | Valorant Cheat',
    description:
      'Valorant cheat loader order on Windows 11: secure boot, HVCI, and when to launch Vanguard-safe steps before your first comp queue.',
    logoAlt: 'Valorant cheat loader setup on Windows PC',
    sidebarHeading: 'valorant/setup',
  },
  'esp-box-style-unrated': {
    title: 'Valorant ESP Box Style for Unrated | Valorant Cheat',
    description:
      'Valorant ESP corner boxes vs skeleton for unrated—minimal wallhack layout that stays readable on Bind and Haven.',
    logoAlt: 'Valorant ESP player boxes and health bars screenshot',
    sidebarHeading: 'valorant/esp',
  },
  'wallhack-spike-colors': {
    title: 'Valorant Wallhack Colors for Spike Holds | Valorant Cheat',
    description:
      'Valorant wallhack muted colors behind cover—when a second ESP tone helps site holds without cluttering the reticle.',
    logoAlt: 'Valorant wallhack ESP color settings screenshot',
    sidebarHeading: 'valorant/esp',
  },
  'triggerbot-delay-valorant': {
    title: 'Valorant Triggerbot Delay in Ms | Valorant Cheat',
    description:
      'Valorant triggerbot delay ranges for Vandal taps vs Spectre—hold key binding and human-feeling shot timing.',
    logoAlt: 'Valorant triggerbot delay settings screenshot',
    sidebarHeading: 'valorant/triggerbot',
  },
  'no-recoil-spray-valorant': {
    title: 'Valorant No Recoil vs Spray Control | Valorant Cheat',
    description:
      'Valorant no recoil sliders with aimbot—light recoil assist for Phantom bursts without killing your muscle memory.',
    logoAlt: 'Valorant no recoil spray control menu screenshot',
    sidebarHeading: 'valorant/features',
  },
  'radar-haven-split': {
    title: 'Valorant Radar Hack Range on Haven | Valorant Cheat',
    description:
      'Valorant radar hack zoom synced to ESP distance on Haven splits—lane awareness without a noisy minimap.',
    logoAlt: 'Valorant radar hack overlay screenshot',
    sidebarHeading: 'valorant/esp',
  },
  'monthly-vs-lifetime-valorant': {
    title: 'Monthly vs Lifetime Valorant Cheat Access | Valorant Cheat',
    description:
      'Valorant cheat monthly key vs lifetime license—what players buy for one act versus year-round ranked and premier.',
    logoAlt: 'Valorant cheat checkout plans comparison',
    sidebarHeading: 'valorant/setup',
  },
  'soft-aim-vs-visible-aimbot': {
    title: 'Soft Aim vs Full Aimbot in Valorant | Valorant Cheat',
    description:
      'Valorant soft aim and silent aim discussions—when closet cheating configs beat rage FOV in ranked.',
    logoAlt: 'Valorant soft aim tuning screenshot',
    sidebarHeading: 'valorant/aimbot',
  },
  'external-vs-internal-valorant': {
    title: 'External vs Internal Valorant Cheat | Valorant Cheat',
    description:
      'Valorant external cheat overlay vs internal mod menu tradeoffs for ESP, aimbot, and stream capture.',
    logoAlt: 'Valorant external cheat overlay screenshot',
    sidebarHeading: 'valorant/features',
  },
  'cheat-menu-hotkeys-ranked': {
    title: 'Valorant Cheat Menu Hotkeys for Ranked | Valorant Cheat',
    description:
      'Valorant cheat menu hold keys for aimbot, ESP, and triggerbot—ranked panic binds that will not fat-finger mid-round.',
    logoAlt: 'Valorant cheat mod menu hotkey bindings screenshot',
    sidebarHeading: 'valorant/features',
  },
  'checkout-license-delivery': {
    title: 'Valorant Cheat Checkout & License Email | Valorant Cheat',
    description:
      'Valorant hacks checkout timing, license delivery, and what to send support if the key email lands in spam.',
    logoAlt: 'Valorant cheat license delivery email help',
    sidebarHeading: 'valorant/setup',
  },
  'patch-day-module-status': {
    title: 'Valorant Patch Day — Module Status | Valorant Cheat',
    description:
      'Valorant cheat status after a Riot patch—when to pause ranked until aimbot and ESP modules show online again.',
    logoAlt: 'Valorant cheat status after game patch',
    sidebarHeading: 'valorant/setup',
  },
};

export function getForumThreadSeo(slug: string): ForumThreadSeo | undefined {
  return FORUM_THREAD_SEO[slug];
}

export function forumThreadPath(slug: string): string {
  return normalizeSeoPath(`/forum/${slug}`);
}
