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
}

export const forumCategories = [
  { name: 'Setup', tone: 'purple', icon: 'settings' },
  { name: 'Aimbot', tone: 'blue', icon: 'crosshair' },
  { name: 'ESP', tone: 'green', icon: 'eye' },
  { name: 'DMZ', tone: 'orange', icon: 'mapHack' },
] as const;

function thread(
  post: Omit<ForumPost, 'commentsCount'> & { comments: ForumComment[] },
): ForumPost {
  const count = post.comments.reduce(
    (sum, c) => sum + 1 + (c.replies?.length ?? 0),
    0,
  );
  return { ...post, commentsCount: count };
}

export const forumPosts: ForumPost[] = [
  thread({
    slug: 'aimbot-settings-fov-and-smoothing',
    category: 'Aimbot',
    categoryTone: 'blue',
    title: 'Fov and smoothing: what should I run after the last patch?',
    excerpt:
      'Trying to dial in the aim circle without looking robotic in 6v6—what are people running after the last patch?',
    author: 'lanehold',
    age: '5 hours ago',
    upvotes: 214,
    flair: 'Config talk',
    body: [
      'I keep bouncing between a tiny circle and something wider for Ground War. Every time I crank smoothing down my KD jumps for a game then I start getting prefired.',
      'For MW4 on PC are you prioritizing chest or head at medium range? And do you leave the circle visible while tuning or is that just asking for clips?',
    ],
    comments: [
      {
        author: 'rusty_irons',
        age: '4 hours ago',
        score: 47,
        body: 'Wide circle + medium smooth saved me. Head bone only inside ~15m for me or I whiff full autos.',
        replies: [
          {
            author: 'lanehold',
            age: '3 hours ago',
            score: 12,
            body: 'Tried that in a private match and it already feels less snappy. Gonna test one more notch of smooth tonight.',
          },
        ],
      },
      {
        author: 'mara_pdx',
        age: '3 hours ago',
        score: 19,
        body: 'Chest at range, head when you are literally in their face. If you run head only at mid you will lose trades to people with better movement.',
      },
      {
        author: 'ghostsheet',
        age: '2 hours ago',
        score: -3,
        body: 'Honestly felt worse after buying. Support swapped my key but aim still feels mushy compared to what the product page shows.',
        replies: [
          {
            author: 'ops_nate',
            age: '1 hour ago',
            score: 8,
            body: 'Mushy usually means smooth is too high or FOV is huge. Drop both 10% and test one playlist before you refund.',
          },
        ],
      },
    ],
  }),
  thread({
    slug: 'will-high-aim-smooth-get-me-banned',
    category: 'Aimbot',
    categoryTone: 'blue',
    title: 'Smoothing what level keeps 6v6 killcams believable?',
    excerpt:
      'Commercial question but serious—how conservative are you with smooth and FOV to avoid obvious killcams?',
    author: 'vctr_91',
    age: '1 day ago',
    upvotes: 388,
    flair: 'Risk talk',
    body: [
      'Not asking for magic. I just do not want killcam footage that looks like console snap aim on PC.',
      'What smoothing range are you staying inside for ranked 6v6? Anyone actually run low smooth successfully or is that meme?',
    ],
    comments: [
      {
        author: 'quietscope',
        age: '23 hours ago',
        score: 61,
        body: 'I stay mid-high smooth and never touch instant. If a fight feels like the crosshair drags through smoke I lower FOV not smooth.',
      },
      {
        author: 'duffelbag',
        age: '20 hours ago',
        score: 22,
        body: 'Killcams lie but reports do not. Play like you still have to pre-aim corners. The tool just corrects micro mistakes.',
      },
      {
        author: 'soren_l',
        age: '18 hours ago',
        score: 5,
        body: 'Got reported twice last week on a fresh account. Might be playstyle not settings. Hard to tell.',
        replies: [
          {
            author: 'vctr_91',
            age: '17 hours ago',
            score: 3,
            body: 'Same anxiety. I slowed down and stopped tracking through walls visually even when ESP shows them.',
          },
        ],
      },
    ],
  }),
  thread({
    slug: 'how-to-install-mw4-loader-first-time',
    category: 'Setup',
    categoryTone: 'purple',
    title: 'First time installing the MW4 loader—order of steps?',
    excerpt: 'Key arrived fast but I do not want to brick my first session. Windows 11 with secure boot on.',
    author: 'newpc_build',
    age: '2 days ago',
    upvotes: 156,
    flair: 'Setup',
    body: [
      'HVCI and core isolation are on like the requirements say. Do I launch the game first or the loader first?',
      'Also where do people save separate configs for DMZ vs 6v6—is that in the menu or a file I edit?',
    ],
    comments: [
      {
        author: 'hex_wrench',
        age: '2 days ago',
        score: 44,
        body: 'Loader before game always. Import the stock 6v6 profile, shoot bots, then duplicate profile for DMZ.',
      },
      {
        author: 'newpc_build',
        age: '1 day ago',
        score: 9,
        body: 'That worked. DMZ profile is huge though—turn half the loot filters off or your FPS tanks.',
      },
      {
        author: 'tired_dad_gamer',
        age: '1 day ago',
        score: 7,
        body: 'Secure boot gave me one reboot loop. Disabling fast startup in Windows fixed it for me—not sure if coincidence.',
      },
    ],
  }),
  thread({
    slug: 'esp-box-style-corner-vs-full',
    category: 'ESP',
    categoryTone: 'green',
    title: 'ESP box style: corner boxes or full box for MW4 6v6?',
    excerpt: 'Screen feels busy with skeleton on. What is your minimal ESP that still wins gunfights?',
    author: 'skim_milk',
    age: '8 hours ago',
    upvotes: 97,
    flair: 'ESP layout',
    body: [
      'Full boxes look clean in screenshots but in Nuketown-style lanes I lose track of my own character.',
      'Do you run skeleton for sound whoring or is distance + plates enough?',
    ],
    comments: [
      {
        author: 'rio_shard',
        age: '7 hours ago',
        score: 28,
        body: 'Corner box, plates, distance cap at 80m. Skeleton only when I play slower modes.',
      },
      {
        author: 'skim_milk',
        age: '6 hours ago',
        score: 4,
        body: '80m cap is the tip I needed. Was drawing entire map.',
      },
      {
        author: 'blake_o',
        age: '5 hours ago',
        score: -1,
        body: 'ESP color for behind-cover players made me overpeek every time. Turned it off.',
      },
    ],
  }),
  thread({
    slug: 'wallhack-colors-soft-cover',
    category: 'ESP',
    categoryTone: 'green',
    title: 'Wallhack colors: worth using a second color for players behind cover?',
    excerpt: 'The muted behind-cover color is subtle—does it help or just clutter?',
    author: 'pager',
    age: '3 days ago',
    upvotes: 73,
    flair: 'ESP',
    body: [
      'I like knowing someone is prefiring a corner without seeing exact model through wall. Anyone disable it entirely?',
    ],
    comments: [
      {
        author: 'cinder_fox',
        age: '3 days ago',
        score: 18,
        body: 'Keep it but drop opacity. Full bright is wallhack meme on killcam even if stream proof is on.',
      },
      {
        author: 'pager',
        age: '2 days ago',
        score: 6,
        body: 'Opacity at 40% feels right. Thanks.',
      },
    ],
  }),
  thread({
    slug: 'triggerbot-delay-ms-settings',
    category: 'Aimbot',
    categoryTone: 'blue',
    title: 'Triggerbot delay: how many ms before it feels human?',
    excerpt: 'Instant trigger got me called out in killcam. Looking for a sane delay range.',
    author: 'clicky_boi',
    age: '12 hours ago',
    upvotes: 122,
    flair: 'Trigger',
    body: ['Running hold key on side mouse button. What delay are you using for SMGs vs ARs?'],
    comments: [
      {
        author: 'northwind',
        age: '11 hours ago',
        score: 31,
        body: '45-70ms on AR, bit lower on SMG but not zero. Zero looks robotic on replay.',
      },
      {
        author: 'clicky_boi',
        age: '10 hours ago',
        score: 5,
        body: 'Set 55 default. Feels closer to my actual reaction.',
      },
      {
        author: 'salty_rank',
        age: '9 hours ago',
        score: -4,
        body: 'Trigger still fires when I did not want it near flashbangs. Might disable for a while.',
        replies: [
          {
            author: 'northwind',
            age: '8 hours ago',
            score: 6,
            body: 'Bind a stricter hold key you only press when hard aiming.',
          },
        ],
      },
    ],
  }),
  thread({
    slug: 'dmz-loot-layer-performance',
    category: 'DMZ',
    categoryTone: 'orange',
    title: 'DMZ loot ESP tanking FPS on farmland drives?',
    excerpt: 'Vehicles + contracts + bags on at once melted my frame time.',
    author: 'roadtrip',
    age: '4 days ago',
    upvotes: 88,
    flair: 'DMZ',
    body: [
      'Hajin DMZ runs fine until I enable every loot category. What do you leave on for solo runs?',
    ],
    comments: [
      {
        author: 'extract_plz',
        age: '4 days ago',
        score: 24,
        body: 'Contracts + extract + cash only. Vehicles when I am doing vehicle contract else off.',
      },
      {
        author: 'roadtrip',
        age: '3 days ago',
        score: 11,
        body: 'FPS back to normal. Should have asked sooner.',
      },
      {
        author: 'loot_goblin22',
        age: '3 days ago',
        score: 3,
        body: 'I run everything but distance cap at 120m. Slight hit but playable on a 3070.',
      },
    ],
  }),
  thread({
    slug: 'separate-configs-6v6-and-dmz',
    category: 'DMZ',
    categoryTone: 'orange',
    title: 'Saving two configs: one for 6v6 and one for DMZ',
    excerpt: 'Does the menu really keep both without overwriting when you swap modes?',
    author: 'mode_swap',
    age: '6 days ago',
    upvotes: 64,
    flair: 'Profiles',
    body: [
      'I ruined my 6v6 setup after tweaking DMZ loot filters. How do you label profiles so you do not overwrite?',
    ],
    comments: [
      {
        author: 'profile_nerd',
        age: '6 days ago',
        score: 19,
        body: 'Name them literally 6v6 and DMZ. Export backup before big patch days.',
      },
      {
        author: 'mode_swap',
        age: '5 days ago',
        score: 7,
        body: 'Renamed and exported. Wish I did that day one.',
      },
    ],
  }),
  thread({
    slug: 'radar-zoom-ground-war',
    category: 'ESP',
    categoryTone: 'green',
    title: '2D radar zoom for Ground War—what range do you use?',
    excerpt: 'Dots either clutter or feel useless. Looking for a middle ground.',
    author: 'tallgrass',
    age: '2 days ago',
    upvotes: 51,
    flair: 'Radar',
    body: ['Ground War on PC with radar on bottom left. Zoom too far out and I cannot tell lanes apart.'],
    comments: [
      {
        author: 'vector_n',
        age: '2 days ago',
        score: 14,
        body: 'Match radar range to ESP distance cap so they tell the same story.',
      },
      {
        author: 'tallgrass',
        age: '1 day ago',
        score: 6,
        body: 'Synced both to 90m. Much less noise.',
      },
    ],
  }),
  thread({
    slug: 'monthly-vs-lifetime-worth-it',
    category: 'Setup',
    categoryTone: 'purple',
    title: 'Monthly vs lifetime key—which did you pick and why?',
    excerpt: 'Price gap is real. Wondering if monthly players regret not going lifetime.',
    author: 'budget_sprint',
    age: '1 week ago',
    upvotes: 201,
    flair: 'Checkout',
    body: [
      'I play MW4 most nights but not sure I will stick the whole year. Did lifetime people actually break even?',
      'Monthly billing feels safer when I might skip a season, but I keep reading that lifetime pays off after a few renewals if patches stay stable.',
      'Anyone track how many monthly cycles they needed before lifetime would have been cheaper? Curious for DMZ-heavy players who still hop into 6v6.',
    ],
    comments: [
      {
        author: 'longhaul',
        age: '6 days ago',
        score: 38,
        body: 'Lifetime after third monthly renewal. Same features either way per the store page.',
      },
      {
        author: 'budget_sprint',
        age: '6 days ago',
        score: 9,
        body: 'Makes sense. I will start monthly and upgrade if I am still here in spring.',
      },
      {
        author: 'trial_run',
        age: '5 days ago',
        score: -2,
        body: 'Monthly fine but delivery email landed in spam. Lost a day.',
        replies: [
          {
            author: 'budget_sprint',
            age: '5 days ago',
            score: 4,
            body: 'Check spam before panicking—same thing happened to me.',
          },
        ],
      },
    ],
  }),
  thread({
    slug: 'no-recoil-and-spread-mw4',
    category: 'Setup',
    categoryTone: 'purple',
    title: 'No recoil / no spread sliders—use them or gimmick?',
    excerpt: 'Misc tab has recoil helpers. Do they play nice with aim assist or fight it?',
    author: 'recoil_king',
    age: '3 days ago',
    upvotes: 79,
    flair: 'Misc',
    body: ['Worried if I enable no recoil my aim circle settings stop mattering. Anyone run light recoil only?'],
    comments: [
      {
        author: 'steady_aim',
        age: '3 days ago',
        score: 21,
        body: 'Light recoil yes, full no spread no. Full spread removal looks weird on long beams.',
      },
      {
        author: 'recoil_king',
        age: '2 days ago',
        score: 5,
        body: 'Light recoil only it is. Gun still kicks a little which feels natural.',
      },
    ],
  }),
  thread({
    slug: 'stream-proof-overlay-obs',
    category: 'Setup',
    categoryTone: 'purple',
    title: 'Stream-proof overlay with OBS—actually clean?',
    excerpt: 'Clipping for friends without showing ESP. Does stream proof hide radar too?',
    author: 'clip_farmer',
    age: '4 days ago',
    upvotes: 112,
    flair: 'Streaming',
    body: ['Recording 1080p60 with OBS. Need gameplay clean while I still see boxes locally.'],
    comments: [
      {
        author: 'obs_matt',
        age: '4 days ago',
        score: 33,
        body: 'Stream proof hid ESP and radar in my test clip. Game capture still showed game fine.',
      },
      {
        author: 'clip_farmer',
        age: '3 days ago',
        score: 8,
        body: 'Confirmed on a 2 min test. Not publishing cheats on stream but good for personal review.',
      },
      {
        author: 'hater_watch',
        age: '3 days ago',
        score: 1,
        body: 'Friends still accused me of walls off gameplay alone. Cannot win lol.',
      },
    ],
  }),
];

export function getForumPost(slug: string) {
  return forumPosts.find((p) => p.slug === slug);
}

export function getFeaturedForumPosts(limit = 3) {
  return [...forumPosts].sort((a, b) => b.upvotes - a.upvotes).slice(0, limit);
}
