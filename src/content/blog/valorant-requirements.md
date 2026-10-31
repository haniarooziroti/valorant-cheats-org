---
title: 'Valorant cheat system requirements: TPM 2.0, Secure Boot and Vanguard'
description: >-
  Before you buy, check these Windows settings. Here's how to verify TPM 2.0,
  Secure Boot and your Windows version for Valorant on Windows 10 and 11.
category: Setup
publishDate: '2026-01-17'
readMinutes: 6
tags:
  - requirements
  - tpm
  - secure boot
  - windows
relatedSlugs:
  - buy-valorant-cheats
  - valorant-loader-fix
---
## Check before you pay
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

<div class="blog-post-cta blog-post-cta--inline">
  <p><strong>Ready to try it?</strong> <a href="/go/valorant/">See Valorant plans</a></p>
</div>

## How to check Secure Boot
Press Win+R, type msinfo32, Enter. Look at "Secure Boot State": it should say On. If it says Off or Unsupported, enable it in BIOS/UEFI (steps vary by motherboard).

## Common mistakes
- Enabling Secure Boot while the disk is MBR (it needs UEFI/GPT).
- Leaving TPM disabled in BIOS (look for "fTPM" on AMD or "PTT" on Intel).
- Skipping Windows Updates.

## Next step
All green? Continue to [How to buy Valorant cheats in 2026: checkout to first launch](/blog/buy-valorant-cheats/).
