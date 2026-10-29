import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic = 'all' | 'plans' | 'esp' | 'aim' | 'safety' | 'products' | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const productsHub = link('MW4 modules', ROUTES.products);
const aimPage = link('MW4 aimbot page', productPath('aimbot'));
const espPage = link('player ESP page', productPath('esp'));
const faqPage = link('full FAQ', ROUTES.faq);
const forum = link('community forum', ROUTES.forum);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if MW4 modules are online?',
    a: a('Read the status note on the mw4cheat.org homepage before launching after a game patch.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a('Checkout sends a license email with loader access. Install on Windows 10/11, import a preset, and test privately first.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using MW4 cheats?',
    a: a('Yes—third-party tools in multiplayer carry account risk. Accept that risk before you play.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('Modern Warfare 4 on PC with Windows 10 or 11. Console is not supported.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a('Contact support with your order email when you replace hardware. Transfers are handled case by case.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are MW4 modules listed?',
    a: a(`Feature pages for aimbot, ESP, triggerbot, radar, and DMZ loot live under ${productsHub}.`),
  },
  {
    id: 'monthly-lifetime',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'Monthly or lifetime access?',
    a: a('Both include the same module list—pick the window that fits your season. Details appear at checkout.'),
  },
  {
    id: 'aim-smooth',
    topic: 'aim',
    icon: 'faqBlogSlugScripts',
    q: 'How should I tune aim smoothing?',
    a: a(`Start with a wider FOV circle and medium smoothing in a private match. See ${aimPage} and ${forum} for player examples.`),
    scopes: ['aimbot'],
  },
  {
    id: 'esp-density',
    topic: 'esp',
    icon: 'faqBlogSlugEsp',
    q: 'How do I keep ESP readable in 6v6?',
    a: a(`Use corner boxes, distance caps, and squad colors. The ${espPage} lists the full visual options.`),
    scopes: ['esp'],
  },
  {
    id: 'dmz-layer',
    topic: 'esp',
    icon: 'faqBlogSlugEsp',
    q: 'Does DMZ loot ESP run in 6v6?',
    a: a('The Hajin DMZ loot layer stays off in 6v6 playlists so small maps stay clean.'),
    scopes: ['dmz-loot'],
  },
  {
    id: 'stream-proof',
    topic: 'setup',
    icon: 'faqBlogSetupLoader',
    q: 'Does stream-proof hide overlays from OBS?',
    a: a('Stream-proof mode keeps ESP and radar off capture while you still see them locally—test with a short clip first.'),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where can I read more player experiences?',
    a: `Visit the ${forum} for mixed reviews and config tips, or the ${faqPage} for every topic.`,
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'platforms', 'license-move', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Browse by category',
  subtitle: 'Filter aim, ESP, plans, setup, and safety answers for MW4 PC.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = ['all', 'plans', 'esp', 'aim', 'safety', 'products', 'setup'];

export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers tied to what you are reading—visit the FAQ page for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, _kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter((f) => !f.scopes && ['setup', 'safety', 'plans'].includes(f.topic));
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const combined = [...scoped, ...general.slice(0, 6)];
  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

export function getBlogFaqs(_tag: string, _slug: string): SiteFaqItem[] {
  return [];
}
