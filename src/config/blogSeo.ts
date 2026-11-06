export interface BlogPostSeo {
  title?: string;
  description?: string;
  keywordHeading?: string;
}

export const BLOG_POST_SEO: Record<string, BlogPostSeo> = {
  'valorant-cheat-risk': {
    title: 'Valorant Cheat Risk — Bans & Vanguard | Valorant Cheat',
    description:
      "No tool is risk-free. Here's what raises or lowers your chances of trouble in Valorant, what we can't promise, and why free downloads are a bad bet.",
  },
  'valorant-patch-day': {
    title: 'After a Valorant Patch — Cheat Checklist | Valorant Cheat',
    description:
      "A Valorant update just landed. Here's what to check before launching your tools so you don't waste time or take unnecessary risks.",
    keywordHeading: 'Updates: Valorant Cheat',
  },
  'valorant-loader-fix': {
    title: 'Valorant Cheat Loader Not Working — Fixes | Valorant Cheat',
    description:
      "Loader won't open, menu won't show, or the game crashes? Work through these fixes before opening a ticket.",
    keywordHeading: 'Troubleshooting: Valorant Cheat',
  },
  'valorant-requirements': {
    title: 'System Requirements — TPM & Secure Boot | Valorant Cheat',
    description:
      'Before you buy, check these Windows settings. Verify TPM 2.0, Secure Boot and your Windows version for Valorant on Windows 10 and 11.',
    keywordHeading: 'Setup: Valorant Cheat',
  },
  'valorant-triggerbot': {
    title: 'Triggerbot & No Recoil Settings | Valorant Cheat',
    description:
      'How a Valorant triggerbot decides when to fire, how light recoil control works on rifles, and when to use each one.',
  },
  'valorant-agent-utility-guide': {
    title: 'Valorant ESP for Utility, Spike & Economy | Valorant Cheat',
    description:
      'Beyond player outlines: how information overlays for spike status, utility and rounds can change decisions before you plant or rotate.',
    keywordHeading: 'Features: Valorant Cheat',
  },
  'valorant-esp-setup': {
    title: 'Valorant Player ESP & Radar Setup | Valorant Cheat',
    description:
      "Valorant maps are tight and busy. Here's how to set up player ESP and radar so you get useful information instead of clutter.",
    keywordHeading: 'Setup: Valorant Cheat',
  },
  'valorant-aimbot-setup': {
    title: 'Valorant Aimbot Setup — FOV & Smoothing | Valorant Cheat',
    description:
      'Set FOV and smoothing so aim assist helps without looking like a screen-snap on PC ranked and unrated.',
    keywordHeading: 'Setup: aim assist',
  },
  'valorant-plans': {
    title: 'Monthly vs Lifetime Plans | Valorant Cheat',
    description:
      "Monthly or lifetime? Here's the break-even math, and the situations where each option makes sense.",
  },
  'valorant-features': {
    title: 'Cheat Features — Aimbot, ESP & Radar | Valorant Cheat',
    description:
      "A plain-English walkthrough of the features you'll find in a Valorant cheat menu and who actually needs each one.",
    keywordHeading: 'Features: Valorant Cheat',
  },
  'buy-valorant-cheats': {
    title: 'Buying Valorant Cheat Access — First-Time Guide | Valorant Cheat',
    description:
      'First-time checkout, delivery, first launch, and what to check on your PC before you pay in 2026.',
  },
};

export function getBlogPostSeo(slug: string): BlogPostSeo | undefined {
  return BLOG_POST_SEO[slug];
}
