export interface BlogPostSeo {
  /** Full document title (30–60 chars when possible). */
  title?: string;
  description?: string;
  logoAlt?: string;
  /** Visible H2 for keyword scoring (e.g. "Setup: MW4 Cheat"). */
  keywordHeading?: string;
}

export const BLOG_POST_SEO: Record<string, BlogPostSeo> = {
  'mw4-cheat-risk': {
    title: 'Risk – Is it safe to use MW4 cheats? | MW4 Cheat',
    logoAlt: 'Aimbot – logo',
  },
  'mw4-aimbot-setup': {
    description:
      'Circle: How to set up MW4 aim assist so it helps your tracking without looking like a screen-snap. Starting values for 6v6, Ground War and DMZ.',
    logoAlt: 'Aimbot – logo',
  },
  'mw4-esp-setup': {
    description:
      "Setup: 6v6 maps are small and busy. Here's how to set up player ESP and radar so you get useful information instead of a cluttered screen.",
    keywordHeading: 'Setup: MW4 Cheat',
    logoAlt: 'Setup – Aimbot – logo',
  },
  'mw4-patch-day': {
    description:
      "Patch: A game update just landed. Here's what to check before launching your MW4 tools so you don't waste time or take unnecessary risks.",
    keywordHeading: 'Patch: MW4 Cheat',
    logoAlt: 'Patch – Aimbot – logo',
  },
  'mw4-features': {
    keywordHeading: 'Features: MW4 Cheat',
    logoAlt: 'Features – Aimbot – logo',
  },
  'mw4-loader-fix': {
    keywordHeading: 'Loader: MW4 Cheat',
    logoAlt: 'Aimbot – logo',
  },
};

export function getBlogPostSeo(slug: string): BlogPostSeo | undefined {
  return BLOG_POST_SEO[slug];
}
