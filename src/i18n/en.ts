import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { PRODUCT_BASE } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'MW4 Cheat',
    domain: 'mw4cheat.org',
    title: 'MW4 Cheat — Aimbot, ESP & Wallhack for PC',
    description:
      'MW4 cheats for Modern Warfare 4 on PC: aimbot, player ESP, wallhack, radar, and DMZ loot tools. Setup guides, forum threads, and secure checkout on mw4cheat.org.',
    discord: PRIMARY_CHECKOUT_PATH,
  },
  nav: [
    { href: '/', label: 'Home' },
    { href: `${productBase}`, label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/reviews/', label: 'Reviews' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  forumHome: {
    eyebrow: 'Community',
    title: 'Forum threads from MW4 players',
    subtitle:
      'Real setup questions, aim tuning, ESP layouts, and DMZ routing—browse before you change your config.',
    viewAll: 'Open the forum',
  },
  hero: {
    status: 'Modern Warfare 4 — PC modules online',
    eyebrow: 'Built for 6v6 & DMZ',
    titleLine1: 'Modern Warfare 4 Cheat',
    titleLine2: 'Aimbot, ESP and Wallhack',
    subtitle:
      'Clean overlays, tuned aim assist, and player ESP that stays readable in fast playlists—explore modules, compare settings in the forum, and upgrade your PC sessions without cluttering the screen.',
    ctaPrimary: 'Explore modules',
    ctaDiscord: 'Get access',
    modesLabel: 'Playlists',
    modes: ['6v6', 'Ground War', 'Gunfight', 'Hajin DMZ'],
    metrics: [
      { label: 'Player reviews', strong: '100+' },
      { label: 'Config profiles', strong: '2 saved' },
      { label: 'Stream overlay', strong: 'Proof mode' },
      { label: 'Support window', strong: '24/7' },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Modules that match how MW4 plays',
    subtitle: 'Aim assist, player ESP, radar, and DMZ loot layers tuned for PC multiplayer playlists.',
    items: [
      {
        title: 'Aim assist',
        subtitle: 'Smooth, circle-based',
        desc: 'FOV ring, smoothing, and bone priority that respects visibility—built for 6v6 gunfights on PC.',
        bullets: [
          'Adjustable aim circle around the crosshair',
          'Head, chest, or closest target modes',
          'Team and downed player filters',
          'Distance caps per playlist',
        ],
        tags: ['mw4 aimbot', 'aim assist', 'fov circle'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Player ESP',
        subtitle: 'Boxes that stay readable',
        desc: 'Health, armor plates, skeleton, and weapon labels without turning the HUD into noise.',
        bullets: ['Corner or full box styles', 'Squad color coding', 'Distance slider', 'Soft-cover color option'],
        tags: ['mw4 esp', 'wallhack', 'player esp'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: '2D radar',
        subtitle: 'Lane awareness',
        desc: 'Operator markers with zoom and range that mirror your ESP distance cap.',
        bullets: ['Compact overlay placement', 'Zoom for Ground War', 'Shared color logic with ESP'],
        tags: ['mw4 radar', 'ground war', 'map awareness'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Trigger module',
        subtitle: 'Confirm your shots',
        desc: 'Optional fire-on-target with delay tuning and the same wall checks as aim assist.',
        bullets: ['Hold key binding', 'Head or chest priority', 'Humanized delay slider'],
        tags: ['mw4 triggerbot', 'trigger', 'gunfight'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'DMZ loot layer',
        subtitle: 'Routing in Hajin',
        desc: 'Contracts, extracts, cash, and vehicles for DMZ—automatically off when you queue 6v6.',
        bullets: ['Contract and extract highlights', 'Cash and bag ESP', 'Vehicle markers on roads'],
        tags: ['mw4 dmz', 'loot esp', 'contracts'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Misc & capture',
        subtitle: 'Recoil help & stream mode',
        desc: 'Light recoil assist, custom crosshair, dual config slots, and stream-proof overlay for recordings.',
        bullets: ['Separate 6v6 and DMZ profiles', 'Stream-proof for OBS tests', 'Saved config export'],
        tags: ['no recoil', 'stream proof', 'mw4 config'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why players stay',
    title: 'Configs that survive patch week',
    subtitle:
      'MW4 playlists move fast. We focus on readable ESP, conservative aim defaults, and support that answers loader questions without copy-paste scripts.',
    usLabel: 'MW4 Cheat',
    otherLabel: 'Typical listing',
    rows: [
      {
        title: 'Playlist-aware defaults',
        desc: 'Separate starter profiles for 6v6 and Hajin DMZ so you are not dragging DMZ loot filters into small maps.',
      },
      {
        title: 'Smoothing-first aim',
        desc: 'FOV circles and smoothing sliders that reward crosshair placement—not snap kills that look wrong on killcam.',
      },
      {
        title: 'Human support hours',
        desc: 'Operators help with loader errors, secure boot checks, and config exports when something blocks launch.',
      },
      {
        title: 'Stream-proof overlay',
        desc: 'Keep ESP and radar on your monitor while OBS captures a clean gameplay feed for personal review.',
      },
      {
        title: '100+ verified reviews',
        desc: 'Players leave detailed feedback on aim tuning, ESP density, and DMZ performance—not star spam.',
      },
      {
        title: 'License transfer help',
        desc: 'Machine swaps handled through support when you upgrade PC parts instead of buying twice.',
      },
    ],
    metrics: [
      {
        value: '100+',
        title: 'Player reviews',
        desc: 'Documented experiences with aim, ESP, and DMZ loot modules on PC.',
      },
      {
        value: '24/7',
        title: 'Support window',
        desc: 'Ticket and chat coverage for loader, checkout, and config questions.',
      },
      {
        value: '2',
        title: 'Saved profiles',
        desc: 'Dedicated slots for 6v6 and DMZ without overwriting sliders.',
      },
    ],
  },
  setup: {
    eyebrow: 'Quick start',
    titleLead: 'From key delivery to your first',
    titleHighlight: 'tuned match',
    intro:
      'Checkout sends a license email. Install the loader on Windows, import a starter profile, and test in a private match before hopping into multiplayer.',
    ctaPrimary: 'Browse modules',
    ctaSecondary: 'Read FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Deliver & download',
        desc: 'Complete checkout, open the delivery email, and download the current Windows loader build.',
      },
      {
        step: 'Step 2',
        title: 'Load a starter profile',
        desc: 'Pick the 6v6 or DMZ preset, verify secure boot and TPM requirements, and map your hold keys.',
      },
      {
        step: 'Step 3',
        title: 'Test then queue',
        desc: 'Run a bot or private match, adjust ESP distance and aim smoothness, then save before public playlists.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Built for MW4 on PC.',
    subtitle: 'Confirm the homepage status note after major game updates.',
    items: [
      'Windows 10 & 11',
      'MW4 PC build',
      'Secure Boot + TPM',
      'HVCI / Core Isolation',
      'Dual config slots',
      'Stream-proof mode',
      'Loader auto-update',
      'Email support',
    ],
  },
  cheats: {
    eyebrow: 'Full access',
    title: 'MW4 cheat suite',
    subtitle: 'One pass covers aim assist, ESP, trigger, radar, DMZ loot, and misc tools.',
    viewAll: 'Compare modules',
    explore: 'Explore',
    items: [
      {
        badge: 'Popular',
        tier: 'PC',
        name: 'Full access',
        title: 'MW4 full module pass',
        desc: 'Aimbot, player ESP, triggerbot, 2D radar, DMZ loot layer, no-recoil helpers, and stream-proof overlay.',
        features: ['Aim circle + smooth', 'Player ESP suite', 'Trigger + radar', 'DMZ loot layer', 'Stream-proof', 'Two saved configs'],
        more: 18,
        href: productBase,
        variant: 'popular',
      },
    ],
  },
  products: {
    eyebrow: 'Modules',
    title: 'Modern Warfare 4 cheat modules',
    subtitle: 'MW4 aimbot, ESP wallhack, triggerbot, radar, and DMZ loot tools for PC multiplayer.',
    viewAll: 'View all modules',
    get: 'Get access',
    explore: 'Details',
    items: [
      {
        badge: 'Core',
        category: 'Aim assist',
        title: 'MW4 Aimbot',
        subtitle: 'Circle FOV & smoothing',
        desc: 'Tune aim assist for 6v6 with visibility checks, team filters, and bone priority.',
        features: ['FOV ring', 'Smooth strength', 'Wall logic', 'Distance cap'],
        more: 8,
        href: `${productBase}aimbot/`,
      },
      {
        badge: 'Core',
        category: 'Visuals',
        title: 'Player ESP',
        subtitle: 'Boxes & skeleton',
        desc: 'Health, plates, distance, and squad colors that stay readable in fast fights.',
        features: ['Box styles', 'Skeleton toggle', 'Weapon label', 'Cover color'],
        more: 10,
        href: `${productBase}esp/`,
      },
      {
        badge: 'DMZ',
        category: 'Loot',
        title: 'DMZ loot ESP',
        subtitle: 'Contracts & extracts',
        desc: 'Highlight cash, bags, contracts, and vehicles in Hajin DMZ—off in 6v6.',
        features: ['Contracts', 'Extracts', 'Cash & bags', 'Vehicles'],
        more: 6,
        href: `${productBase}dmz-loot/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'MW4 cheat blog',
    subtitle:
      'MW4 aimbot, player ESP, and wallhack guides for PC—setup, patch-day checks, and checkout walkthroughs for Modern Warfare 4.',
    latestTitle: 'Latest articles',
    latestSubtitle: 'Filter by topic or sort to find setup guides, feature deep-dives, and patch-day notes.',
    searchLabel: 'Search MW4 blog',
    searchPlaceholder: 'Search aimbot, ESP, wallhack, setup…',
    filterAll: 'All blogs',
    articlesCountLabel: 'articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match your search or filters.',
    viewAll: 'View all articles',
    read: 'Read',
    items: [],
  },
  toolkit: {
    eyebrow: 'Menu layout',
    title: 'Grouped for mid-match tweaks',
    subtitle: 'Aim, visuals, radar, loot, and misc sit in separate tabs so you are not hunting checkboxes.',
    items: [
      { num: '01', label: 'Aim', title: 'Circle & smooth', desc: 'FOV ring, smoothing, bones, and team filters in one aim tab.' },
      { num: '02', label: 'ESP', title: 'Player visuals', desc: 'Boxes, skeleton, plates, and distance caps with squad colors.' },
      { num: '03', label: 'Radar', title: '2D awareness', desc: 'Operator dots with zoom and range tied to ESP distance.' },
      { num: '04', label: 'Trigger', title: 'Shot confirm', desc: 'Delay, hold key, and hitbox choice sharing wall logic with aim.' },
      { num: '05', label: 'DMZ', title: 'Loot routing', desc: 'Contracts, extracts, cash, and vehicles for Hajin playlists.' },
      { num: '06', label: 'Profiles', title: '6v6 vs DMZ', desc: 'Two saved configs plus export when you rebuild your PC.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved profile',
    subtitle: 'A straight path from checkout to MW4 configs you can reuse every session.',
    ctaLabel: 'View modules',
    ctaHref: productBase,
    ctaSecondary: 'Forum tips',
    ctaSecondaryHref: '/forum/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Read status & forum',
        desc: 'Check the homepage note and skim forum threads for current aim and ESP defaults.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Pick monthly or lifetime',
        desc: 'Same module list on both—choose the window that fits your season.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Install & import',
        desc: 'Run the Windows loader, import the 6v6 preset, and map your hold keys.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save both profiles',
        desc: 'Duplicate for DMZ when you rotate modes so loot filters never touch 6v6.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Built for MW4 playlists.',
    items: [
      { num: '01', title: 'Patch-week caution', desc: 'Read the status note after major MW4 updates before launching modules.' },
      { num: '02', title: 'Conservative defaults', desc: 'Start with wider aim circles and lighter ESP, then tighten—not the reverse.' },
      { num: '03', title: 'Support with context', desc: 'Send order email, Windows build, and loader error text when something blocks install.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'MW4 Cheat support',
    subtitle: 'Loader, checkout, and config help for PC players.',
    channels: [
      {
        icon: 'users',
        title: 'Before checkout',
        desc: 'Compare modules and pricing on the products hub.',
        linkLabel: 'Get access',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Email support',
        desc: 'Loader delivery, secure boot, and license questions.',
        linkLabel: 'support@mw4cheat.org',
        href: 'mailto:support@mw4cheat.org',
      },
      {
        icon: 'navFaq',
        title: 'Read the FAQ',
        desc: 'Compatibility, risk, and setup—before you buy.',
        linkLabel: 'View all FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Forum answers',
        desc: 'Player threads on aim, ESP, and DMZ routing.',
        linkLabel: 'Open forum',
        href: '/forum/',
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The address used at secure checkout for your MW4 license.' },
      { title: 'Platform', desc: 'Windows 10 or 11 build and MW4 PC version.' },
      { title: 'Error detail', desc: 'Exact loader message or steps that fail before the game opens.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Straight answers before checkout.',
    subtitle: 'Compatibility, risk, and access—plain language.',
    items: [
      {
        num: '01',
        q: 'Where do I check if MW4 modules are online?',
        a: 'Use the status note on the mw4cheat.org homepage before you launch after a game patch.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Checkout sends a license email with loader access. Install on Windows, import a preset, and test privately first.',
      },
      {
        num: '03',
        q: 'Can I get banned using MW4 cheats?',
        a: 'Yes—any third-party tool in multiplayer carries account risk. Accept that risk before you play.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Modern Warfare 4 on PC with Windows 10 or 11. Console is not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Contact support with your order email when you replace hardware. Transfers are handled case by case.',
      },
      {
        num: '06',
        q: 'Where are modules listed?',
        a: 'Aimbot, ESP, triggerbot, radar, and DMZ loot pages live under /products/mw4-cheats/ with checkout via Get access buttons.',
      },
    ],
  },
  footer: {
    tagline: 'Modern Warfare 4 PC modules — ESP, aim assist, and DMZ tools.',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: `${productBase}aimbot/`, label: 'MW4 aimbot module', ariaLabel: 'Aimbot' },
      { href: productBase, label: 'All MW4 modules', ariaLabel: 'Products' },
      { href: '/blog/', label: 'MW4 cheat blog', ariaLabel: 'Blog' },
      { href: '/forum/', label: 'Community forum', ariaLabel: 'Forum' },
      { href: '/reviews/', label: 'Player reviews', ariaLabel: 'Reviews' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'Forum: About MW4 Cheat',
      description:
        'MW4 Cheat publishes Modern Warfare 4 PC module info, community discussions, and support paths at mw4cheat.org.',
      sections: [
        {
          heading: 'What this site covers',
          paragraphs: [
            'mw4cheat.org documents aim assist, player ESP, triggerbot, radar, and Hajin DMZ loot tools for Modern Warfare 4 on PC. We focus on module comparisons, conservative defaults, and player-written threads—not hype.',
            'Browse community posts before you buy if you want honest setup talk from people running the same modules.',
            'Game names and trademarks belong to their owners and are used for identification only.',
          ],
        },
        {
          heading: 'How content is updated',
          paragraphs: [
            'Product pages and community threads reflect current module behavior after patches. Check the homepage status note before you launch following a game update.',
            'Blog guides and pinned threads are refreshed when loader steps or default configs change so newcomers are not stuck on outdated screenshots.',
          ],
        },
        {
          heading: 'Community discussion',
          paragraphs: [
            'Use the forum for feature questions that are too specific for FAQ entries—aim circle tuning, ESP colors, DMZ routing, and billing timing.',
            'Moderation is light: keep replies on-topic and avoid sharing license keys or loader downloads in public threads.',
            'Long-form guides live on the blog; quick comparisons stay in discussion posts where players share patch-day notes.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Loader, billing, and license questions go through email support. Include your order email, Windows version, and any loader error text.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description: 'How mw4cheat.org handles analytics, cookies, and contact data.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect standard web analytics such as page views, device type, browser, and approximate region when analytics are enabled. Checkout happens on external pages—we do not store payment card data on mw4cheat.org.',
            'When you email support, we retain the address and message content until the ticket is resolved. Forum posts you write are public by design.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics help us improve product and forum pages. Support messages may retain the email address and content you send until the issue is resolved.',
            'We do not sell personal data. Aggregated traffic patterns may inform which guides we expand after major game patches.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use minimal cookies required for analytics. You can block cookies in your browser; core content remains available.',
            'Partner checkout pages may set their own cookies when you complete payment—we do not control those settings.',
          ],
        },
        {
          heading: 'Your privacy choices',
          paragraphs: [
            'You can request deletion of support correspondence tied to your email where retention is not required for fraud prevention or legal compliance.',
            'Privacy questions about analytics or cookies should include the browser and region you browse from so we can reproduce the issue.',
          ],
        },
        {
          heading: 'Contact',
          paragraphs: [
            'For privacy questions, use the Support page. Purchase rules are in our Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description: 'Purchase, license, refund, and use terms for MW4 cheat access via mw4cheat.org.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: October 2026. By using mw4cheat.org or completing checkout for access listed here, you agree to these Terms & Conditions and our Privacy Policy.',
            'These terms govern how you may use the site, forum, and purchased licenses. If a section conflicts with mandatory local law, the law controls only where required.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell access to Modern Warfare 4 PC modules delivered through a loader and license key. Feature lists describe what is included at purchase time and may change after game updates.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. mw4cheat.org does not process or store payment card numbers.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use. Do not share loader files, logins, or keys. Device limits may apply and are enforced through support.',
          ],
        },
        {
          heading: 'Refunds',
          paragraphs: [
            'Sales are final once checkout completes except where required by law. We may offer replacement access when a fault is confirmed on a supported Windows setup.',
          ],
        },
        {
          heading: 'Risk',
          paragraphs: [
            'Third-party tools in multiplayer can lead to account penalties. You use this software at your own risk. Check the homepage status note before each session.',
            'We may update these terms when checkout partners, module delivery, or support processes change. Continued use after updates means you accept the revised terms.',
          ],
        },
      ],
    },
    support: {
      title: 'MW4 Cheat Support',
      description: 'Loader and checkout help for Modern Warfare 4 PC access.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Get access',
    browseCheatsMobile: 'Get access',
    homeAria: 'MW4 Cheat home',
    checkoutAria: 'Secure checkout',
    discordAria: 'Open checkout',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
