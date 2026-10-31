export interface BlogPostSeo {
  title?: string;
  description?: string;
  keywordHeading?: string;
}

export const BLOG_POST_SEO: Record<string, BlogPostSeo> = {
  'valorant-cheat-risk': {
    title: 'Valorant Cheat Risk Guide — Ban Exposure & Vanguard | Valorant Cheats',
    description:
      "No tool is risk-free. Here's what raises or lowers your chances of trouble in Valorant, what we can't promise, and why free downloads are a bad bet.",
  },
  'valorant-patch-day': {
    title: 'After a Valorant Patch — Cheat Update Checklist | Valorant Cheats',
    description:
      "A Valorant update just landed. Here's what to check before launching your tools so you don't waste time or take unnecessary risks.",
    keywordHeading: 'Updates: Valorant Cheats',
  },
  'valorant-loader-fix': {
    title: 'Valorant Cheat Loader Not Working — Fixes | Valorant Cheats',
    description:
      "Loader won't open, menu won't show, or the game crashes? Work through these fixes before opening a ticket.",
    keywordHeading: 'Troubleshooting: Valorant Cheats',
  },
  'valorant-requirements': {
    title: 'Valorant Cheat System Requirements — TPM & Secure Boot | Valorant Cheats',
    description:
      'Before you buy, check these Windows settings. Verify TPM 2.0, Secure Boot and your Windows version for Valorant on Windows 10 and 11.',
    keywordHeading: 'Setup: Valorant Cheats',
  },
  'valorant-triggerbot': {
    title: 'Valorant Triggerbot & No Recoil — Believable Settings | Valorant Cheats',
    description:
      'How a Valorant triggerbot decides when to fire, how light recoil control works on rifles, and when to use each one.',
  },
  'valorant-agent-utility-guide': {
    title: 'Valorant ESP for Utility, Spike & Economy | Valorant Cheats',
    description:
      'Beyond player outlines: how information overlays for spike status, utility and rounds can change decisions.',
    keywordHeading: 'Features: Valorant Cheats',
  },
  'valorant-esp-setup': {
    title: 'Valorant Player ESP & Radar Setup | Valorant Cheats',
    description:
      "Valorant maps are tight and busy. Here's how to set up player ESP and radar so you get useful information instead of clutter.",
    keywordHeading: 'Setup: Valorant Cheats',
  },
  'valorant-aimbot-setup': {
    title: 'Valorant Aim Circle, Smoothing & Bone Choice | Valorant Cheats',
    description:
      'How to set up Valorant aim assist so it helps your tracking without looking like a screen-snap.',
    keywordHeading: 'Setup: Valorant Cheats',
  },
  'valorant-plans': {
    title: 'Valorant Cheats Monthly vs Lifetime — Which Is Cheaper? | Valorant Cheats',
    description:
      "Monthly or lifetime? Here's the break-even math, and the situations where each option makes sense.",
  },
  'valorant-features': {
    title: 'Valorant Cheat Features Explained — Aimbot, ESP & Radar | Valorant Cheats',
    description:
      "A plain-English walkthrough of the features you'll find in a Valorant cheat menu and who actually needs each one.",
    keywordHeading: 'Features: Valorant Cheats',
  },
  'buy-valorant-cheats': {
    title: 'How to Buy Valorant Cheats in 2026 — Checkout to First Launch | Valorant Cheats',
    description:
      'Buying Valorant cheats for the first time? Checkout, delivery, first launch, and what to check on your PC before you pay.',
  },
};

export function getBlogPostSeo(slug: string): BlogPostSeo | undefined {
  return BLOG_POST_SEO[slug];
}
