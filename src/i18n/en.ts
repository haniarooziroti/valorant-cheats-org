import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { DISCORD_INVITE_URL } from '../config/siteConfig';
import { PRIMARY_NAV, HEADER_CTA_LABEL } from '../config/nav';
import { PRODUCT_BASE } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'Valorant Cheat',
    domain: 'valorant-cheat.org',
    title: 'Valorant Esp, Aimbot & Wallhack',
    description:
      'Valorant cheats on PC with aimbot, ESP, wallhack, triggerbot, and radar tools. Browse modules, read player forums, and continue to secure checkout on valorant-cheat.org.',
    discord: PRIMARY_CHECKOUT_PATH,
  },
  nav: PRIMARY_NAV,
  forumHome: {
    eyebrow: 'Community',
    title: 'Forums where Valorant players compare configs',
    subtitle:
      'Aimbot tuning, ESP layouts, trigger timing, and checkout questions—browse before you change your config.',
    viewAll: 'Browse forums',
  },
  hero: {
    status: 'PC modules online',
    eyebrow: 'Built for ranked & unrated',
    titleLine1: 'Valorant Cheats on PC',
    titleLine2: 'Aimbot, ESP and Wallhack',
    subtitle:
      'Tactical overlays, tuned aim assist, and agent ESP that stays readable in ranked and unrated—explore modules, compare settings in the forum, and upgrade your PC sessions without cluttering the screen.',
    ctaPrimary: 'Explore modules',
    ctaDiscord: 'Join Discord',
    modesLabel: 'Playlists',
    modes: ['Competitive', 'Unrated', 'Swiftplay', 'Premier'],
    metrics: [
      { label: 'Player reviews', strong: '100+' },
      { label: 'Config profiles', strong: '2 saved' },
      { label: 'Stream overlay', strong: 'Proof mode' },
      { label: 'Support window', strong: '24/7' },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Modules that match ranked gunplay',
    subtitle: 'Aimbot, ESP wallhack, radar hack, triggerbot, and no recoil helpers tuned for PC.',
    items: [
      {
        title: 'Aim assist',
        subtitle: 'Smooth, circle-based',
        desc: 'FOV ring, smoothing, and bone priority that respects visibility—built for ranked gunfights on PC.',
        bullets: [
          'Adjustable aim circle around the crosshair',
          'Head, chest, or closest target modes',
          'Team and downed player filters',
          'Distance caps per playlist',
        ],
        tags: ['aimbot', 'aim assist', 'fov circle'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Player ESP',
        subtitle: 'Boxes that stay readable',
        desc: 'Health, shields, skeleton, and weapon labels without turning the HUD into noise.',
        bullets: ['Corner or full box styles', 'Squad color coding', 'Distance slider', 'Soft-cover color option'],
        tags: ['esp', 'wallhack', 'player esp'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: '2D radar',
        subtitle: 'Lane awareness',
        desc: 'Operator markers with zoom and range that mirror your ESP distance cap.',
        bullets: ['Compact overlay placement', 'Zoom for Ground War', 'Shared color logic with ESP'],
        tags: ['radar hack', 'map awareness', 'rotations'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Trigger module',
        subtitle: 'Confirm your shots',
        desc: 'Optional fire-on-target with delay tuning and the same wall checks as aim assist.',
        bullets: ['Hold key binding', 'Head or chest priority', 'Humanized delay slider'],
        tags: ['triggerbot', 'trigger', 'gunfight'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'No recoil assist',
        subtitle: 'Spray control',
        desc: 'Light recoil control for Vandal and Phantom without killing your spray muscle memory.',
        bullets: ['Vandal & Phantom spray', 'Ranked-friendly strength', 'Per-weapon toggles'],
        tags: ['no recoil', 'spray control', 'hacks'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Misc & capture',
        subtitle: 'Recoil help & stream mode',
        desc: 'Light recoil assist, custom crosshair, dual config slots, and stream-proof overlay for recordings.',
        bullets: ['Ranked and unrated profiles', 'Stream-proof for OBS tests', 'Saved config export'],
        tags: ['no recoil', 'stream proof', 'cheat menu'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why players stay',
    title: 'Configs that survive patch week',
    subtitle:
      'Patches move fast. We focus on readable ESP, conservative aim defaults, and support that answers loader questions without copy-paste scripts.',
    usLabel: 'Valorant Cheat',
    otherLabel: 'Random reseller page',
    rows: [
      {
        title: 'Playlist-aware defaults',
        desc: 'Separate starter profiles for ranked and unrated so you are not dragging ESP clutter into small maps.',
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
        desc: 'Players leave detailed feedback on aim tuning, ESP density, and ESP readability—not star spam.',
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
        desc: 'Documented experiences with aim, ESP, and triggerbot timing on PC.',
      },
      {
        value: '24/7',
        title: 'Support window',
        desc: 'Ticket and chat coverage for loader, checkout, and config questions.',
      },
      {
        value: '2',
        title: 'Saved profiles',
        desc: 'Dedicated slots for ranked and unrated without overwriting sliders.',
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
        desc: 'Pick a ranked or unrated preset, verify secure boot and TPM requirements, and map your hold keys.',
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
    title: 'Built for PC clients.',
    subtitle: 'Confirm the homepage status note after major game updates.',
    items: [
      'Windows 10 & 11',
      'Valorant PC client',
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
    title: 'Full cheat suite',
    subtitle: 'One pass covers aim assist, ESP, trigger, radar, no recoil helpers, and misc tools.',
    viewAll: 'Compare modules',
    explore: 'Explore',
    items: [
      {
        badge: 'Popular',
        tier: 'PC',
        name: 'Full access',
        title: 'Full module pass',
        desc: 'Aimbot, player ESP, triggerbot, 2D radar, No recoil assist, no-recoil helpers, and stream-proof overlay.',
        features: ['Aim circle + smooth', 'Player ESP suite', 'Trigger + radar', 'No recoil assist', 'Stream-proof', 'Two saved configs'],
        more: 18,
        href: productBase,
        variant: 'popular',
      },
    ],
  },
  products: {
    eyebrow: 'Modules',
    title: 'Cheat modules for PC',
    subtitle: 'Aimbot, ESP wallhack, triggerbot, radar hack, and no recoil tools for PC multiplayer.',
    viewAll: 'View all modules',
    get: 'Try now',
    explore: 'Details',
    items: [
      {
        badge: 'Core',
        category: 'Aim assist',
        title: 'Aimbot module',
        subtitle: 'Circle FOV & smoothing',
        desc: 'Tune aim assist for ranked with visibility checks, team filters, and bone priority on Haven and Ascent.',
        features: ['FOV ring', 'Smooth strength', 'Wall logic', 'Distance cap'],
        more: 8,
        href: `${productBase}aimbot/`,
      },
      {
        badge: 'Core',
        category: 'Visuals',
        title: 'Player ESP',
        subtitle: 'Boxes & skeleton',
        desc: 'Health, distance, and squad colors that stay readable in fast fights on Bind and Haven.',
        features: ['Box styles', 'Skeleton toggle', 'Weapon label', 'Cover color'],
        more: 10,
        href: `${productBase}esp/`,
      },
      {
        badge: 'Utility',
        category: 'Spray',
        title: 'No recoil module',
        subtitle: 'Vandal & Phantom control',
        desc: 'Light spray control for Vandal and Phantom in ranked—pairs with aimbot without killing muscle memory.',
        features: ['Spray strength', 'Weapon toggles', 'Ranked preset', 'Hip-fire option'],
        more: 6,
        href: `${productBase}no-recoil/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Valorant cheat blog — aimbot, wallhack guides',
    subtitle:
      'Valorant aimbot, ESP and wallhack guides for PC — setup, patch-day checks, Vanguard troubleshooting and checkout walkthroughs, written for players who are ready to buy.',
    latestTitle: 'Latest articles',
    latestSubtitle: 'Filter by topic or sort to find setup guides, feature deep-dives, and patch-day notes.',
    searchLabel: 'Search Valorant blog',
    searchPlaceholder: 'Search guides, setup, errors…',
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
    subtitle: 'Aim, visuals, radar, spray control, and misc sit in separate tabs so you are not hunting checkboxes.',
    items: [
      { num: '01', label: 'Aim', title: 'Circle & smooth', desc: 'FOV ring, smoothing, bones, and team filters in one aim tab.' },
      { num: '02', label: 'ESP', title: 'Player visuals', desc: 'Boxes, skeleton, health, and distance caps with squad colors.' },
      { num: '03', label: 'Radar', title: '2D awareness', desc: 'Operator dots with zoom and range tied to ESP distance.' },
      { num: '04', label: 'Trigger', title: 'Shot confirm', desc: 'Delay, hold key, and hitbox choice sharing wall logic with aim.' },
      { num: '05', label: 'Recoil', title: 'Spray assist', desc: 'Light no recoil presets that pair with rifle aimbot settings.' },
      { num: '06', label: 'Profiles', title: 'Ranked vs unrated', desc: 'Two saved configs plus export when you rebuild your PC.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved profile',
    subtitle: 'A straight path from checkout to configs you can reuse every session.',
    ctaLabel: 'View modules',
    ctaHref: productBase,
    ctaSecondary: 'Read guides',
    ctaSecondaryHref: '/blog/',
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
        desc: 'Run the Windows loader, import the ranked preset, and map your hold keys.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save both profiles',
        desc: 'Duplicate for unrated when you rotate playlists so radar zoom never clutters ranked.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Built for ranked maps.',
    items: [
      { num: '01', title: 'Patch-week caution', desc: 'Read the status note after major patches before launching modules.' },
      { num: '02', title: 'Conservative defaults', desc: 'Start with wider aim circles and lighter ESP, then tighten—not the reverse.' },
      { num: '03', title: 'Support with context', desc: 'Send order email, Windows build, and loader error text when something blocks install.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Valorant help desk — loader, checkout & configs',
    subtitle: 'Loader, checkout, and config help for PC players.',
    channels: [
      {
        icon: 'messageCircle',
        title: 'Join Discord',
        desc: 'Talk to support in the Zadeyo Discord—loader help, checkout questions, and patch-day updates.',
        linkLabel: 'Join Discord',
        href: DISCORD_INVITE_URL,
        external: true,
      },
      {
        icon: 'navProducts',
        title: 'Before checkout',
        desc: 'Compare modules and pricing on the products hub.',
        linkLabel: 'View modules',
        href: productBase,
      },
      {
        icon: 'navFaq',
        title: 'Read the FAQ',
        desc: 'Compatibility, risk, and setup—before you buy.',
        linkLabel: 'View all FAQ',
        href: '/faq/',
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The address used at secure checkout for your Valorant license.' },
      { title: 'Platform', desc: 'Windows 10 or 11 build and Valorant PC version.' },
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
        q: 'Where do I check if Valorant modules are online?',
        a: 'Use the status note on the valorant-cheat.org homepage before you launch after a game patch.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Checkout sends a license email with loader access. Install on Windows, import a preset, and test privately first.',
      },
      {
        num: '03',
        q: 'Can I get banned using Valorant cheats?',
        a: 'Yes—any third-party tool in multiplayer carries account risk. Accept that risk before you play.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Valorant on PC with Windows 10 or 11. Console is not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Contact support with your order email when you replace hardware. Transfers are handled case by case.',
      },
      {
        num: '06',
        q: 'Where are modules listed?',
        a: 'Aimbot, ESP, triggerbot, radar, and no recoil pages live under /products/valorant-cheats/ with checkout via Try now buttons.',
      },
    ],
  },
  footer: {
    tagline: 'Valorant PC modules — ESP, aim assist, radar, and utility tools.',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: `${productBase}aimbot/`, label: 'Valorant aimbot module', ariaLabel: 'Aimbot' },
      { href: productBase, label: 'Full module catalog', ariaLabel: 'Products' },
      { href: '/blog/', label: 'Valorant cheat blog', ariaLabel: 'Blog' },
      { href: '/reviews/', label: 'Player reviews', ariaLabel: 'Reviews' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
      { href: '/about/', label: 'About this site', ariaLabel: 'About' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About Valorant Cheat',
      description:
        'Valorant Cheat publishes Valorant PC module info, community discussions, and support paths at valorant-cheat.org.',
      sections: [
        {
          heading: 'What this site covers',
          paragraphs: [
            'valorant-cheat.org documents aim assist, player ESP, triggerbot, radar, and no recoil tools for Valorant on PC. We focus on module comparisons, conservative defaults, and player-written threads—not hype.',
            'The <a href="/products/valorant-cheats/">PC module comparison hub</a> breaks out aimbot, ESP, triggerbot, radar, and no recoil pages with feature lists, preset ideas, and Try now checkout links. The homepage feature grid describes the same modules in plain language—FOV rings, box styles, radar zoom, trigger delay, and recoil presets you can verify before you pay.',
            'Browse community posts before you buy if you want honest setup talk from people running the same modules. Player review pages collect short write-ups when members want to share how a module felt in ranked—not marketing copy.',
            'Game names and trademarks belong to their owners and are used for identification only.',
          ],
        },
        {
          heading: 'How content is updated',
          paragraphs: [
            'Product pages and community threads reflect current module behavior after patches. Check the <a href="/">patch-day status on the homepage</a> before you launch following a game update.',
            'Blog guides and pinned threads are refreshed when loader steps or default configs change so newcomers are not stuck on outdated screenshots. When a loader flow changes, we update the relevant <a href="/blog/">setup blog articles</a> and cross-link from module pages so the first-run path stays consistent.',
            'Forum threads often carry the fastest patch-day notes—players flag when a default preset stops matching live recoil or when ESP colors need tweaking after a UI change.',
          ],
        },
        {
          heading: 'Community discussion',
          paragraphs: [
            'Use the blog and FAQ for feature questions that are too specific for short answers—aim circle tuning, ESP colors, trigger timing, and billing timing.',
            'Moderation is light: keep replies on-topic and avoid sharing license keys or loader downloads in public threads.',
            'Long-form setup notes live in forum threads; quick comparisons stay in discussion posts where players share patch-day notes. If you are comparing monthly versus lifetime access windows, search existing threads before opening a duplicate topic—the FAQ summarizes the plan difference, but players often explain how they use each window in practice.',
          ],
        },
        {
          heading: 'Before you purchase',
          paragraphs: [
            'Read <a href="/faq/">questions answered before checkout</a> for loader steps, pricing windows, supported platforms, and account risk. Valorant on PC with Windows 10 or 11 is what the site documents; console play is not covered here.',
            'Checkout and license delivery run on external pages—valorant-cheat.org does not store payment card numbers. After purchase, the license email is what unlocks loader access; test privately before you queue ranked.',
            'Third-party tools in multiplayer carry ban risk. The FAQ states that plainly so you can decide before you pay. Sales are final once checkout completes except where law requires otherwise; replacement access may be offered when a fault is confirmed on a supported setup—see <a href="/terms/">license and refund terms</a> for the full rules.',
          ],
        },
        {
          heading: 'Support and loader help',
          paragraphs: [
            'Loader, billing, and license questions go through email on the <a href="/support/">Support contact page</a>. Include your order email, Windows version, and any loader error text so support can reproduce the issue without back-and-forth.',
            'Hardware swaps are handled case by case when you contact support with the same order email—do not share keys in forum posts.',
            'Privacy questions about analytics or cookies are separate from loader tickets; use the Support page and reference the Privacy Policy when the issue is data-related, not license-related.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description: 'How valorant-cheat.org handles analytics, cookies, and contact data.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect standard web analytics such as page views, device type, browser, and approximate region when analytics are enabled. Checkout happens on external pages—we do not store payment card data on valorant-cheat.org.',
            'When you email support, we retain the address and message content until the ticket is resolved. Forum posts you write are public by design.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics help us improve product and forum pages. Support messages may retain the email address and content you send until the issue is resolved.',
            'We do not sell personal data. Aggregated traffic patterns may inform which forum topics we expand after major game patches.',
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
      description: 'Purchase, license, refund, and use terms for Valorant cheat access via valorant-cheat.org.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: October 2026. By using valorant-cheat.org or completing checkout for access listed here, you agree to these Terms & Conditions and our Privacy Policy.',
            'These terms govern how you may use the site, forum, and purchased licenses. If a section conflicts with mandatory local law, the law controls only where required.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell access to Valorant PC modules delivered through a loader and license key. Feature lists describe what is included at purchase time and may change after game updates.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. valorant-cheat.org does not process or store payment card numbers.',
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
      title: 'Valorant Cheat Support',
      description: 'Loader and checkout help for Valorant PC access.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: HEADER_CTA_LABEL,
    browseCheatsMobile: HEADER_CTA_LABEL,
    homeAria: 'Valorant Cheat home',
    checkoutAria: 'Secure checkout',
    discordAria: 'Join Discord server',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
