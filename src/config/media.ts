/** Self-hosted hero clip + gameplay frames (from configured source segment). */

export const HERO_VIDEO = {
  webm: '/videos/mw4-hero.webm',
  mp4: '/videos/mw4-hero.mp4',
  /** Dedicated poster so frame assets stay within the two-use cap sitewide. */
  poster: '/images/gameplay/hero-poster.webp',
  /** Clip length in seconds (5:15–5:30). */
  durationSec: 15,
} as const;

const frame = (n: number) =>
  `/images/gameplay/frames/mw4-frame-${String(n).padStart(2, '0')}.png`;

export const GAMEPLAY_FRAMES = {
  f01: frame(1),
  f02: frame(2),
  f03: frame(3),
  f04: frame(4),
  f05: frame(5),
  f06: frame(6),
  f07: frame(7),
  f08: frame(8),
  f09: frame(9),
  f10: frame(10),
  f11: frame(11),
  f12: frame(12),
} as const;
