import { SITE_MEDIA } from '../config/media';

export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  featureImage?: { src: string; alt: string };
}

export const forumCategories = [
  { name: 'Setup', tone: 'purple', icon: 'settings' },
  { name: 'Aimbot', tone: 'blue', icon: 'crosshair' },
  { name: 'ESP', tone: 'green', icon: 'eye' },
  { name: 'Features', tone: 'orange', icon: 'layers' },
  { name: 'Triggerbot', tone: 'blue', icon: 'target' },
] as const;

function thread(
  post: Omit<ForumPost, 'commentsCount'> & { comments: ForumComment[] },
): ForumPost {
  const count = post.comments.reduce((sum, c) => sum + 1 + (c.replies?.length ?? 0), 0);
  return { ...post, commentsCount: count };
}

export const forumPosts: ForumPost[] = [
  thread({
    slug: 'aimbot-settings-smooth-level-killcam',
    category: 'Aimbot',
    categoryTone: 'blue',
    title: 'Valorant Cheat aimbot settings: what smooth level keeps killcams believable?',
    excerpt:
      'Buying Valorant aimbot access this week—what FOV and smooth combo are you actually running in ranked without looking like a highlight reel?',
    author: 'neon_ridge',
    age: 'Sep 14, 2026',
    upvotes: 312,
    flair: 'Checkout talk',
    featureImage: {
      src: SITE_MEDIA.sciFiShowdown,
      alt: 'Valorant aimbot smooth and FOV settings on PC cheat menu',
    },
    body: [
      'I am not trying to meme configs. I just want Valorant aimbot settings that still look like I am tracking with my hand when someone watches the replay.',
      'Are you running soft aim low FOV on Vandal or widening the circle for Spectre fights? Curious what people settled on after the last agent patch.',
    ],
    comments: [
      {
        author: 'tacti_k',
        age: '3 hours ago',
        score: 52,
        body: 'Mid smooth + small FOV saved me. Head priority only inside like 12m or I whiff full sprays.',
      },
      {
        author: 'neon_ridge',
        age: '2 hours ago',
        score: 11,
        body: 'Tried that in unrated and it already feels less snappy. Testing one more notch tonight before comp.',
      },
      {
        author: 'sable_00',
        age: '2 hours ago',
        score: -2,
        body: 'Felt worse after purchase honestly. Support swapped the key but aim still feels mushy vs the product page clip.',
        replies: [
          {
            author: 'vault_ops',
            age: '1 hour ago',
            score: 9,
            body: 'Mushy is usually smooth too high. Drop both FOV and smooth ten percent before you refund.',
          },
        ],
      },
    ],
  }),
  thread({
    slug: 'aimbot-fov-ranked-unrated',
    category: 'Aimbot',
    categoryTone: 'blue',
    title: 'Aimbot FOV: tighter for ranked or same as unrated?',
    excerpt: 'Swiftplay feels fine with a wide circle but Ascent long fights look sus. Split profiles or one global FOV?',
    author: 'lane_9',
    age: 'Jul 28, 2026',
    upvotes: 188,
    flair: 'Config',
    featureImage: {
      src: SITE_MEDIA.corridorHud,
      alt: 'Valorant ranked firefight with tactical HUD and aimbot FOV overlay',
    },
    body: ['Do you duplicate configs for ranked vs unrated or lazy one-size?'],
    comments: [
      { author: 'chip_m', age: '8 hours ago', score: 34, body: 'Two profiles. Ranked FOV smaller always.' },
      { author: 'lane_9', age: '7 hours ago', score: 6, body: 'Copied preset and renamed. Should have day one.' },
      { author: 'quiet_aim', age: '6 hours ago', score: 3, body: 'One profile works if smooth is high enough. YMMV.' },
    ],
  }),
  thread({
    slug: 'first-time-loader-valorant',
    category: 'Setup',
    categoryTone: 'purple',
    title: 'First Valorant cheat loader install—launch order?',
    excerpt: 'Key hit inbox fast. Vanguard already installed. Do I open Valorant first or loader first on Win11?',
    author: 'fresh_pc',
    age: 'Jun 3, 2026',
    upvotes: 164,
    flair: 'Setup',
    body: ['Secure boot on like the requirements page says. scared to brick first session.'],
    comments: [
      { author: 'hex_line', age: '23 hours ago', score: 41, body: 'Loader before game. Import stock ranked preset, shoot range, then tweak.' },
      { author: 'fresh_pc', age: '22 hours ago', score: 8, body: 'Worked. ten min total.' },
      { author: 'tired_queue', age: '20 hours ago', score: -1, body: 'HVCI blocked me once. Core isolation toggle fixed it maybe coincidence.' },
    ],
  }),
  thread({
    slug: 'esp-box-style-unrated',
    category: 'ESP',
    categoryTone: 'green',
    title: 'Valorant ESP: corner box or skeleton for unrated?',
    excerpt: 'Screen noisy with full boxes on Bind. Minimal wallhack that still wins trades?',
    author: 'skim_val',
    age: 'Apr 18, 2026',
    upvotes: 94,
    flair: 'ESP layout',
    featureImage: {
      src: SITE_MEDIA.espSnowyAlley,
      alt: 'Valorant ESP wallhack overlays in a snowy industrial alley on PC',
    },
    body: ['Skeleton looks cool in clips but I lose my own agent in chaos.'],
    comments: [
      { author: 'rio_t', age: '5 hours ago', score: 27, body: 'Corner box + health + 70m cap. skeleton off unless coaching friends.' },
      { author: 'skim_val', age: '4 hours ago', score: 5, body: '70m was the tip. was drawing whole map lol.' },
    ],
  }),
  thread({
    slug: 'wallhack-spike-colors',
    category: 'ESP',
    categoryTone: 'green',
    title: 'Wallhack color for players behind cover on spike site?',
    excerpt: 'Muted tone helps prefires but I overpeek when it pulses bright.',
    author: 'pager_a',
    age: 'Mar 5, 2026',
    upvotes: 71,
    flair: 'Wallhack',
    body: ['Anyone run second color or disable entirely for comp?'],
    comments: [
      { author: 'cinder_v', age: '2 days ago', score: 19, body: 'Keep it but 35% opacity. bright green is clip bait.' },
      { author: 'pager_a', age: '1 day ago', score: 6, body: '40% feels right ty.' },
      { author: 'salty_r', age: '1 day ago', score: -3, body: 'Turned off. played worse because I stared at walls.' },
    ],
  }),
  thread({
    slug: 'triggerbot-delay-valorant',
    category: 'Triggerbot',
    categoryTone: 'blue',
    title: 'Valorant triggerbot delay—how many ms feels human?',
    excerpt: 'Instant trigger got me reported twice in unrated. sane delay for Vandal?',
    author: 'clicky_val',
    age: 'Jan 20, 2026',
    upvotes: 130,
    flair: 'Trigger',
    body: ['Side mouse hold key. what delay for tap vs burst?'],
    comments: [
      { author: 'north_v', age: '10 hours ago', score: 33, body: '50-65ms vandal. lower on sheriff but never zero.' },
      { author: 'clicky_val', age: '9 hours ago', score: 6, body: '55 default. closer to my actual click.' },
      {
        author: 'rank_salt',
        age: '8 hours ago',
        score: -4,
        body: 'Still fires near flashbangs. disabled for now.',
        replies: [{ author: 'north_v', age: '7 hours ago', score: 5, body: 'Stricter hold key only when hard aiming.' }],
      },
    ],
  }),
  thread({
    slug: 'no-recoil-spray-valorant',
    category: 'Features',
    categoryTone: 'orange',
    title: 'Valorant no recoil slider—light assist or full spray lock?',
    excerpt: 'Misc tab recoil helper fights my aimbot smooth when both cranked.',
    author: 'spray_kid',
    age: 'Dec 8, 2025',
    upvotes: 82,
    flair: 'No recoil',
    body: ['Want phantom control without looking like zero recoil meme.'],
    comments: [
      { author: 'steady_v', age: '3 days ago', score: 22, body: 'Light recoil yes. full spread lock looks weird on spectate.' },
      { author: 'spray_kid', age: '2 days ago', score: 4, body: 'Light only. gun still kicks a bit.' },
    ],
  }),
  thread({
    slug: 'radar-haven-split',
    category: 'ESP',
    categoryTone: 'green',
    title: 'Valorant radar hack zoom on Haven split?',
    excerpt: 'Dots clutter mid or useless zoomed out. middle ground?',
    author: 'tall_haven',
    age: 'Oct 22, 2025',
    upvotes: 58,
    flair: 'Radar',
    body: ['Radar bottom left. match ESP range or separate?'],
    comments: [
      { author: 'vector_v', age: '2 days ago', score: 15, body: 'Sync radar range to ESP cap. same story both tools.' },
      { author: 'tall_haven', age: '1 day ago', score: 5, body: 'Synced 85m. less noise.' },
    ],
  }),
  thread({
    slug: 'monthly-vs-lifetime-valorant',
    category: 'Setup',
    categoryTone: 'purple',
    title: 'Monthly vs lifetime Valorant cheat access—which did you pick?',
    excerpt: 'Price gap hurts. play most nights but might skip an act.',
    author: 'budget_act',
    age: 'Aug 14, 2025',
    upvotes: 205,
    flair: 'Checkout',
    body: ['Did lifetime people break even or regret not going monthly first?'],
    comments: [
      { author: 'long_act', age: '4 days ago', score: 36, body: 'Lifetime after third monthly. same module list either way.' },
      { author: 'budget_act', age: '4 days ago', score: 8, body: 'Starting monthly then upgrade if still here.' },
      {
        author: 'trial_v',
        age: '3 days ago',
        score: -2,
        body: 'Email landed in spam. lost a day panicking.',
        replies: [{ author: 'budget_act', age: '3 days ago', score: 3, body: 'spam folder first always.' }],
      },
    ],
  }),
  thread({
    slug: 'soft-aim-vs-visible-aimbot',
    category: 'Aimbot',
    categoryTone: 'blue',
    title: 'Soft aim vs full aimbot for ranked closet cheating?',
    excerpt: 'Valorant legit cheat vibes vs rage FOV. what actually passes in gold lobbies?',
    author: 'closet_main',
    age: 'Jun 30, 2025',
    upvotes: 241,
    flair: 'Soft aim',
    featureImage: {
      src: SITE_MEDIA.aimPanelS1,
      alt: 'Valorant soft aim and aimbot panel settings for ranked play',
    },
    body: ['Not asking for spinbot nonsense. just sensible silent aim / soft aim discussion.'],
    comments: [
      { author: 'low_pro', age: '16 hours ago', score: 44, body: 'Soft aim + manual prefire. full lock is for unrated trolling only.' },
      { author: 'closet_main', age: '15 hours ago', score: 7, body: 'Makes sense. lowered FOV again.' },
      { author: 'rage_b', age: '14 hours ago', score: -5, body: 'Full rage got me timed out two acts ago. not worth.' },
    ],
  }),
  thread({
    slug: 'external-vs-internal-valorant',
    category: 'Features',
    categoryTone: 'orange',
    title: 'External vs internal Valorant cheat—which are you on?',
    excerpt: 'Overlay external feels safer to me but menu looks basic. internal mod menu scary.',
    author: 'ext_user',
    age: 'May 2, 2025',
    upvotes: 167,
    flair: 'Architecture',
    body: ['Does stream capture hide external ESP the same as internal?'],
    comments: [
      { author: 'obs_check', age: '4 days ago', score: 29, body: 'Stream proof hid my ESP in test clip. game capture clean.' },
      { author: 'ext_user', age: '3 days ago', score: 6, body: 'Confirmed 2 min test.' },
    ],
  }),
  thread({
    slug: 'cheat-menu-hotkeys-ranked',
    category: 'Features',
    categoryTone: 'orange',
    title: 'Valorant cheat menu hotkeys you use in ranked?',
    excerpt: 'Fat fingered aimbot toggle mid-round. need panic bind layout.',
    author: 'bind_f',
    age: 'Mar 16, 2025',
    upvotes: 99,
    flair: 'Mod menu',
    featureImage: {
      src: SITE_MEDIA.jettKnives,
      alt: 'Valorant cheat mod menu and hotkey layer on PC',
    },
    body: ['What hold keys for aimbot esp trigger without touching function row?'],
    comments: [
      { author: 'mouse_side', age: '1 day ago', score: 24, body: 'Side buttons only. never keyboard toggles in comp.' },
      { author: 'bind_f', age: '20 hours ago', score: 5, body: 'Moved to mouse 4/5. fewer accidents.' },
      { author: 'kb_risk', age: '18 hours ago', score: 2, body: 'Keyboard toggle once during clutch. lost round. mouse only now.' },
    ],
  }),
  thread({
    slug: 'checkout-license-delivery',
    category: 'Setup',
    categoryTone: 'purple',
    title: 'Checkout done—how long until license email arrives?',
    excerpt: 'Paid ten minutes ago. refresh spam. normal delay?',
    author: 'new_buyer',
    age: 'Jan 28, 2025',
    upvotes: 73,
    flair: 'Billing',
    body: ['First Valorant hacks purchase. nervous I typoed email.'],
    comments: [
      { author: 'support_fan', age: '6 hours ago', score: 18, body: 'Usually under 15 min. spam + promotions tab.' },
      { author: 'new_buyer', age: '5 hours ago', score: 9, body: 'Found in spam. all good.' },
      { author: 'impatient', age: '4 hours ago', score: -1, body: 'Took 40 min for me. support resent manually.' },
    ],
  }),
  thread({
    slug: 'patch-day-module-status',
    category: 'Setup',
    categoryTone: 'purple',
    title: 'Patch dropped—are Valorant cheat modules online yet?',
    excerpt: 'Status page still yellow. anyone loading ranked or waiting?',
    author: 'patch_watch',
    age: 'Nov 9, 2024',
    upvotes: 142,
    flair: 'Patch day',
    body: ['Riot notes hit this morning. pause comp until green?'],
    comments: [
      { author: 'safe_q', age: '11 hours ago', score: 31, body: 'Wait for green. played legit one night. not worth ban wave guess.' },
      { author: 'patch_watch', age: '10 hours ago', score: 8, body: 'Fair. unrated only till status flips.' },
      { author: 'yolo_v', age: '9 hours ago', score: -6, body: 'Loaded anyway. fine so far. probably dumb.' },
    ],
  }),
];

export function getForumPost(slug: string) {
  return forumPosts.find((p) => p.slug === slug);
}

export function getFeaturedForumPosts(limit = 3) {
  return [...forumPosts].sort((a, b) => b.upvotes - a.upvotes).slice(0, limit);
}
