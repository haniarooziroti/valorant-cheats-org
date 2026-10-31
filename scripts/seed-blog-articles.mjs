import fs from 'node:fs';
import path from 'node:path';

const outDir = path.join(process.cwd(), 'src/content/blog');
fs.mkdirSync(outDir, { recursive: true });

const midCta = `
<div class="blog-post-cta blog-post-cta--inline">
  <p><strong>Ready to try it?</strong> <a href="/go/valorant/">See Valorant plans</a></p>
</div>
`;

const articles = [
  {
    file: 'valorant-cheat-risk.md',
    fm: {
      title: 'Risk and ban exposure: an honest Valorant cheats safety guide',
      description:
        "No tool is risk-free. Here's what raises or lowers your chances of trouble in Valorant, what we can't promise, and why free downloads are a bad bet.",
      category: 'Guides',
      publishDate: '2026-10-30',
      readMinutes: 6,
      tags: ['risk', 'ban', 'vanguard', 'safety'],
      relatedSlugs: ['valorant-requirements', 'valorant-patch-day', 'valorant-plans'],
    },
    body: `## The honest answer first
Valorant is protected by Riot's Vanguard anti-cheat, one of the most aggressive in PC gaming. No seller can honestly promise zero risk, and anyone who does is selling you a story. What you can do is understand what increases your exposure and make informed choices.

## What increases your risk
- Playing flagrantly: instant snaps, impossible tracking, or wallhacking through every wall on every round.
- Running at your highest settings in ranked right after a game patch.
- Using free or cracked downloads from forums and file-sharing sites.
- Reusing a main account you can't afford to lose.
- Ignoring the product's update notices and launching on an outdated build.
${midCta}
## What can lower your exposure
- Use conservative settings: small aim circles, high smoothing and limited ESP information.
- Wait for status confirmation after every Valorant patch before launching.
- Follow the setup steps exactly, including Windows security requirements.
- Keep your play believable: miss a few shots, don't pre-aim every corner.
- Buy only from a seller with a support channel, a forum and a clear refund/terms page.

## Why free downloads are a bad bet
Free "Valorant hacks" are the most common way people lose accounts, passwords and money. They are widely circulated, so they are quickly flagged, and many bundle info-stealers or loaders that you can't inspect. A paid product with active updates and a support team is a very different risk profile than a file from a random video description.

## Accounts and hardware bans
Riot can restrict an account and, in some cases, apply hardware-level restrictions. That means a ban can follow you to a new account on the same PC. Decide in advance what you're willing to risk, and never play on an account tied to purchases or rank you can't replace.

## What we can't promise
We can't promise you will never be banned, and we can't speak for how Riot changes enforcement. We can promise clear guidance, patch-day communication and support if something goes wrong with the software itself.

## Next step
If you accept the risks and want to compare tools, start with the [product page](/products/valorant-cheats/). Before buying, read [Valorant cheat system requirements: TPM, Secure Boot and Vanguard](/blog/valorant-requirements/).`,
  },
  {
    file: 'valorant-patch-day.md',
    fm: {
      title: 'After a Valorant patch: your cheat update checklist',
      description:
        "A Valorant update just landed. Here's what to check before launching your tools so you don't waste time or take unnecessary risks.",
      category: 'Updates',
      publishDate: '2026-10-27',
      readMinutes: 5,
      tags: ['patch', 'update', 'status', 'vanguard'],
      relatedSlugs: ['valorant-loader-fix', 'valorant-cheat-risk'],
    },
    body: `## Why patch day matters
Every Valorant patch can change game files, and Vanguard updates often ship alongside them. A cheat that worked yesterday may be outdated today. Launching too early is the most common avoidable mistake.

## Your patch-day checklist
1. Let Valorant and Vanguard finish updating fully, then restart your PC.
2. Check the product status page or announcement channel for a "working / updating" notice.
3. Download the latest loader build only from your account dashboard.
4. Confirm that Windows security settings haven't been reset by a Windows Update.
5. Launch in a low-stakes mode (Deathmatch or a custom game) before ranked.
${midCta}
## How long do updates take?
Minor patches are often handled quickly; large updates or Vanguard changes can take longer. We recommend waiting for an explicit status confirmation instead of guessing.

## What to do if status says "updating"
Don't launch. Don't reinstall random files. Check the forum thread for the update and wait for the all-clear announcement.

## If you've already launched and something looks wrong
Close the game, don't retry repeatedly, and read [Valorant cheat loader not working? Fixes for the usual problems](/blog/valorant-loader-fix/).

## Next step
Subscribers get status notices first on the [forum](/forum/). Not a member yet? See [Valorant cheats monthly vs lifetime](/blog/valorant-plans/).`,
  },
  {
    file: 'valorant-loader-fix.md',
    fm: {
      title: 'Valorant cheat loader not working? Fixes for the usual problems',
      description: "Loader won't open, menu won't show, or the game crashes? Work through these fixes before opening a ticket.",
      category: 'Troubleshooting',
      publishDate: '2026-10-25',
      readMinutes: 6,
      tags: ['loader', 'crash', 'fix', 'support'],
      relatedSlugs: ['valorant-requirements', 'valorant-patch-day'],
    },
    body: `## Start with the basics
Most loader problems come from a short list of causes: outdated game build, security software, missing runtimes or a stale download.

## Loader won't open
- Run as administrator.
- Temporarily disable third-party antivirus or add an exclusion for the loader folder.
- Install the latest Microsoft Visual C++ Redistributable and .NET runtime.
- Re-download the loader from your dashboard; old copies stop working after updates.
${midCta}
## Menu doesn't appear in game
- Confirm the game is running in borderless/windowed-fullscreen, if your product guide recommends it.
- Check your menu key and that no overlay app (Discord, GeForce, Steam) is conflicting.
- Launch order matters: follow the exact order in your setup guide.

## Game crashes on launch
- Update graphics drivers.
- Close all overlays and screen recorders.
- Verify game files, then restart the PC.

## Vanguard errors
If you see a Vanguard error such as VAN9003 or VAN9001, it's usually a Windows security setting (Secure Boot/TPM). See [Valorant cheat system requirements](/blog/valorant-requirements/).

## Still stuck?
Collect: your Windows version, the exact error text, a screenshot and the time it happened. Then open a ticket through [support](/support/) or post on the [forum](/forum/).

## Next step
Once the loader runs, continue with [How to buy Valorant cheats in 2026](/blog/buy-valorant-cheats/).`,
  },
  {
    file: 'valorant-requirements.md',
    fm: {
      title: 'Valorant cheat system requirements: TPM 2.0, Secure Boot and Vanguard',
      description:
        'Before you buy, check these Windows settings. Here\'s how to verify TPM 2.0, Secure Boot and your Windows version for Valorant on Windows 10 and 11.',
      category: 'Setup',
      publishDate: '2026-10-23',
      readMinutes: 6,
      tags: ['requirements', 'tpm', 'secure boot', 'windows'],
      relatedSlugs: ['buy-valorant-cheats', 'valorant-loader-fix'],
    },
    body: `## Check before you pay
Most "it doesn't work" tickets trace back to a PC that doesn't meet requirements. Spend five minutes verifying this list first.

## Requirements at a glance
| Item | What you need | Where to check |
| Windows | 64-bit Windows 10 or 11, fully updated | Settings > System > About |
| TPM | TPM 2.0 enabled (required by Vanguard on Windows 11) | Win+R > tpm.msc |
| Secure Boot | Enabled (required by Vanguard on Windows 11) | Win+R > msinfo32 > Secure Boot State |
| Virtualization | Per product guide | Task Manager > Performance > CPU |
| CPU / GPU | Any modern gaming PC | — |

<!-- TODO: confirm product-specific requirements -->

## How to check TPM
Press Win+R, type tpm.msc, press Enter. The status should say the TPM is ready, with specification version 2.0.
${midCta}
## How to check Secure Boot
Press Win+R, type msinfo32, Enter. Look at "Secure Boot State": it should say On. If it says Off or Unsupported, enable it in BIOS/UEFI (steps vary by motherboard).

## Common mistakes
- Enabling Secure Boot while the disk is MBR (it needs UEFI/GPT).
- Leaving TPM disabled in BIOS (look for "fTPM" on AMD or "PTT" on Intel).
- Skipping Windows Updates.

## Next step
All green? Continue to [How to buy Valorant cheats in 2026: checkout to first launch](/blog/buy-valorant-cheats/).`,
  },
  {
    file: 'valorant-triggerbot.md',
    fm: {
      title: 'Valorant triggerbot and no recoil: how to use them without overdoing it',
      description:
        'How a Valorant triggerbot decides when to fire, how light recoil control works on rifles like the Vandal and Phantom, and when to use each one.',
      category: 'Setup',
      publishDate: '2026-10-21',
      readMinutes: 5,
      tags: ['triggerbot', 'recoil', 'settings'],
      relatedSlugs: ['valorant-aimbot-setup', 'valorant-features'],
    },
    body: `## What a triggerbot actually does
A triggerbot fires when your crosshair is already on an enemy. It doesn't aim for you, which is why many players pair it with careful manual crosshair placement.

<!-- TODO: confirm against actual product -->

## Setting a believable delay
Instant firing looks inhuman. Add a small randomized delay and consider limiting it to specific weapons (Sheriff, Vandal, Phantom, Operator).
${midCta}
## Recoil control on rifles
Light recoil compensation helps with spray patterns on the Vandal and Phantom. Keep the strength modest: perfectly flat sprays at long range are obvious in replays.

## When to use each
| Situation | Suggested approach |
| Holding angles with a rifle | Triggerbot with delay, no aim assist |
| Spray transfers at mid range | Light recoil compensation |
| Operator peeks | Triggerbot off; manual timing |
| Ranked, close score | Lowest-profile settings |

## Common mistakes
- Maxing every slider because it's "better".
- Using the same settings on every agent and map.
- Never missing.

## Next step
Compare module bundles on the [product page](/products/valorant-cheats/) or continue to [Aim circle size, smoothing and bone choice](/blog/valorant-aimbot-setup/).`,
  },
  {
    file: 'valorant-agent-utility-guide.md',
    fm: {
      title: 'Valorant ESP for agent utility, spike and economy: what extra information helps',
      description:
        'Beyond player outlines: how information overlays for spike status, utility and rounds can change decisions, and why you should show less, not more.',
      category: 'Features',
      publishDate: '2026-10-19',
      readMinutes: 5,
      tags: ['esp', 'spike', 'utility', 'economy'],
      relatedSlugs: ['valorant-esp-setup', 'valorant-features'],
    },
    body: `## ESP is more than wallhack boxes
Valorant rounds are decided by information: where the spike is, where utility landed, who has what. A good overlay surfaces only what you act on.

## Useful overlays (if your product includes them)
- Player outlines/boxes with health
- Spike carrier and plant timers
- Utility indicators (smokes, molly zones, turrets)
- Weapon and credits info for economy reads

<!-- TODO: confirm which of these exist in the product -->
${midCta}
## Show less to see more
A screen full of text slows you down. Start with players + spike only, then add one layer at a time.

## Mode considerations
Competitive and Unrated reward subtle information use; Deathmatch is the safest place to test overlays.

## Next step
Read [Valorant player ESP and radar setup](/blog/valorant-esp-setup/) or view the [ESP module](/products/valorant-cheats/esp/).`,
  },
  {
    file: 'valorant-esp-setup.md',
    fm: {
      title: 'Valorant player ESP and radar setup for readable rounds',
      description:
        'Valorant maps are tight and busy. Here\'s how to set up player ESP and radar so you get useful information instead of a cluttered screen.',
      category: 'Setup',
      publishDate: '2026-10-17',
      readMinutes: 5,
      tags: ['esp', 'radar', 'setup', 'hud'],
      relatedSlugs: ['valorant-aimbot-setup', 'valorant-agent-utility-guide'],
    },
    body: `## Aim for readable, not loud
Start with the minimum: enemy outlines, small distance text, and radar off. Add features only when you know why.

## Recommended starting setup
1. Outline style: thin, enemy-only, high-contrast color that doesn't clash with agent abilities.
2. Distance: small, near the feet, or off.
3. Radar: on a corner of the screen, scaled small, enemy-only.
4. Visible-only vs. through-walls: start visible-check to reduce obvious behavior.
5. Save a profile per mode (Competitive, Unrated, Deathmatch).
${midCta}
## Per-map adjustments
Open maps with long sightlines (Breeze, Icebox) benefit from radar and distance; tight maps (Bind, Split) usually don't need distance text.

## Performance tips
Disable overlays you don't use, cap FPS to a stable value, and update GPU drivers.

## Next step
Pair this with [Aim circle size, smoothing and bone choice](/blog/valorant-aimbot-setup/) and check [Valorant cheats monthly vs lifetime](/blog/valorant-plans/) when you're ready.`,
  },
  {
    file: 'valorant-aimbot-setup.md',
    fm: {
      title: 'Aim circle size, smoothing and bone choice for Valorant',
      description:
        'How to set up Valorant aim assist so it helps your tracking without looking like a screen-snap. Starting values for Competitive, Unrated and Deathmatch.',
      category: 'Setup',
      publishDate: '2026-10-15',
      readMinutes: 6,
      tags: ['aimbot', 'smoothing', 'fov', 'bone'],
      relatedSlugs: ['valorant-triggerbot', 'valorant-features'],
    },
    body: `## Think "assist", not "autopilot"
The most common reason players get reported is over-aggressive aim. The goal is to nudge your crosshair, not teleport it.

<!-- TODO: confirm against actual product -->

## Starting values
| Setting | Competitive | Unrated | Deathmatch |
| Aim circle (FOV) | Small | Small–medium | Medium |
| Smoothing | High | High | Medium |
| Target bone | Head only when already near; otherwise chest | Chest/Head mix | Any |
| Aim key | Hold-to-aim | Hold-to-aim | Hold-to-aim |

(Qualitative starting points; tune to your sensitivity and playstyle.)
${midCta}
## Circle size
A smaller circle only helps when you're already close to the target, which is closer to how a skilled player behaves.

## Smoothing
Higher smoothing slows the correction and removes snap. If you can see the crosshair "jump", raise smoothing.

## Bone choice
Head-only is the riskiest. Chest or a mixed bone selection looks more natural and still increases consistency.

## Test before you queue
Use the range or Deathmatch to check how settings feel, then save separate profiles.

## Next step
See the [Valorant aimbot module](/products/valorant-cheats/aimbot/) or continue with [Triggerbot and no recoil](/blog/valorant-triggerbot/).`,
  },
  {
    file: 'valorant-plans.md',
    fm: {
      title: 'Valorant cheats monthly vs lifetime: which one is cheaper for you?',
      description: "Monthly or lifetime? Here's the break-even math, and the situations where each option makes sense.",
      category: 'Guides',
      publishDate: '2026-10-13',
      readMinutes: 5,
      tags: ['pricing', 'monthly', 'lifetime', 'plans'],
      relatedSlugs: ['buy-valorant-cheats', 'valorant-features'],
    },
    body: `## The simple math
Use the pricing callout on this page for current monthly and lifetime amounts. Break-even months = lifetime price ÷ monthly price (rounded up).

<!-- PRICING_CALLOUT -->

## When monthly makes sense
- You're testing the product.
- You only play during certain acts or seasons.
- You can't afford a ban-related loss of a bigger purchase.

## When lifetime makes sense
- You'll use it for longer than the break-even point.
- You want to avoid renewals and price changes.
- You play every week.
${midCta}
## Things "lifetime" doesn't mean
Lifetime refers to the license for the product's life, not a guarantee against bans or against the product being discontinued. Read the terms before you buy.

## Decision table
| You are… | Pick |
| New and unsure | Monthly |
| Playing daily, ranked grind | Lifetime |
| Seasonal player | Monthly |

## Next step
Check current pricing on the [checkout page](/go/valorant/) and read [How to buy Valorant cheats in 2026](/blog/buy-valorant-cheats/).`,
  },
  {
    file: 'valorant-features.md',
    fm: {
      title: 'Valorant cheat features explained: aim assist, ESP, radar and what each does',
      description:
        "A plain-English walkthrough of the features you'll find in a Valorant cheat menu, which modes they suit, and who actually needs each one.",
      category: 'Features',
      publishDate: '2026-10-11',
      readMinutes: 5,
      tags: ['features', 'aimbot', 'esp', 'radar'],
      relatedSlugs: ['buy-valorant-cheats', 'valorant-aimbot-setup'],
    },
    body: `## Features at a glance
| Feature | What it does | Best for |
| Aim assist | Nudges your crosshair toward targets | Tracking, close duels |
| ESP / wallhack | Shows players/info through walls | Info gathering, rotations |
| Radar | 2D overview of positions | Macro awareness |
| Triggerbot | Fires when on target | Angle holding |
| Recoil control | Reduces spray drift | Rifles |

<!-- TODO: confirm against product feature list -->
${midCta}
## Do you need all of them?
No. Most buyers use one or two. Aim assist and ESP are the usual starting pair.

## Modes
Competitive, Unrated, Swiftplay, Spike Rush and Deathmatch behave differently; build profiles per mode.

## Picking a bundle vs single modules
If you're unsure, compare modules on the product page and choose the smallest set that solves your problem.

## Next step
Browse [all modules](/products/valorant-cheats/) or read [How to buy Valorant cheats](/blog/buy-valorant-cheats/).`,
  },
  {
    file: 'buy-valorant-cheats.md',
    fm: {
      title: 'How to buy Valorant cheats in 2026: checkout to first launch',
      description:
        "Buying Valorant cheats for the first time? Here's how checkout, delivery and first launch work, plus what to check on your PC before you pay.",
      category: 'Guides',
      publishDate: '2026-10-09',
      readMinutes: 6,
      tags: ['buy', 'checkout', 'delivery', 'first launch'],
      relatedSlugs: ['valorant-requirements', 'valorant-plans', 'valorant-features'],
    },
    body: `## Before you pay
1. Verify TPM 2.0 and Secure Boot ([requirements guide](/blog/valorant-requirements/)).
2. Decide on monthly or lifetime ([plans guide](/blog/valorant-plans/)).
3. Decide which modules you need ([features guide](/blog/valorant-features/)).

## Checkout step by step
1. Open the product page and pick your plan.
2. Enter your email carefully; delivery and your dashboard go there.
3. Pay with an available method on the checkout page.
<!-- TODO: add real payment methods -->
4. Receive your confirmation email and dashboard login.
${midCta}
## Delivery and first launch
1. Download the loader from your dashboard.
2. Follow the setup guide in order.
3. Test in Deathmatch or a custom game, not ranked.
4. Save a conservative profile.

## Refunds, support and updates
Read our [Terms & Conditions](/terms/) for refund rules. <!-- TODO: add refund policy -->

## Common first-time mistakes
- Buying before checking requirements
- Launching right after a patch
- Using a main account for testing

## Next step
Ready? [Get access](/go/valorant/). Questions first? Ask on the [forum](/forum/) or read the [FAQ](/faq/).`,
  },
];

function yamlList(key, arr) {
  if (!arr?.length) return '';
  return `${key}:\n${arr.map((v) => `  - ${JSON.stringify(v)}`).join('\n')}\n`;
}

for (const { file, fm, body } of articles) {
  const front = `---
title: ${JSON.stringify(fm.title)}
description: ${JSON.stringify(fm.description)}
category: ${fm.category}
publishDate: ${fm.publishDate}
readMinutes: ${fm.readMinutes}
tags:
${fm.tags.map((t) => `  - ${t}`).join('\n')}
${yamlList('relatedSlugs', fm.relatedSlugs)}---
${body.trim()}
`;
  fs.writeFileSync(path.join(outDir, file), front, 'utf8');
  console.log('Wrote', file);
}
