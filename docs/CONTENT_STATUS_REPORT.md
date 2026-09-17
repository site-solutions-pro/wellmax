# WellMax Content Status Report

Generated from `data/content-manifest.json` on 2026-08-26. This is an inventory report, not publication or scientific approval.

## Inventory summary

- Total content families: **56**
- Total public pages represented: **168**
- Locales: EN, PT-BR, ES
- Families with all three route files: **56**
- Families complete in every locale: **0**
- Families with at least one shell: **55**
- Families with at least one missing locale: **0**

## Status by locale

| Status | EN | PT-BR | ES | Total |
|---|---:|---:|---:|---:|
| COMPLETE | 1 | 0 | 0 | 1 |
| PARTIAL | 36 | 27 | 3 | 66 |
| SHELL | 19 | 23 | 53 | 95 |
| MISSING | 0 | 0 | 0 | 0 |
| REVIEW_REQUIRED | 0 | 6 | 0 | 6 |

The six PT `REVIEW_REQUIRED` page statuses correspond to the files queued in `docs/SAFETY_CONTENT_REVIEW.md`. Family review fields are broader: **44** families require scientific review, **56** families require SEO review, and **56** families require i18n review. No review field is agent-assigned `HUMAN_APPROVED`.

## Breakdown by type

| Type | Families | Public pages |
|---|---:|---:|
| home | 1 | 3 |
| hub | 10 | 30 |
| peptide | 19 | 57 |
| supplement | 14 | 42 |
| biomarker | 8 | 24 |
| comparison | 1 | 3 |
| research | 2 | 6 |
| membership | 1 | 3 |
| other | 0 | 0 |

## Discovery summary

`linked` excludes language-switcher links and includes public HTML discovery plus the shared primary navigation.

| Locale | Linked families | No non-language inbound discovery |
|---|---:|---:|
| EN | 37 | 19 |
| PT-BR | 34 | 22 |
| ES | 11 | 45 |

## Priority summary

| Priority | Families |
|---|---:|
| CRITICAL | 0 |
| HIGH | 51 |
| MEDIUM | 5 |
| LOW | 0 |

## Top 20 HIGH-priority backlog items

| Rank | Identity | Type | EN | PT-BR | ES | Primary inventory gap |
|---:|---|---|---|---|---|---|
| 1 | `retatrutide` | peptide | PARTIAL | REVIEW_REQUIRED | SHELL | shell: ES; page review: PT; unlinked: ES |
| 2 | `aod-9604` | peptide | SHELL | REVIEW_REQUIRED | SHELL | shell: EN, ES; page review: PT; unlinked: EN, ES |
| 3 | `epitalon` | peptide | SHELL | REVIEW_REQUIRED | SHELL | shell: EN, ES; page review: PT; unlinked: EN, ES |
| 4 | `gloe-70mg` | peptide | SHELL | REVIEW_REQUIRED | SHELL | shell: EN, ES; page review: PT; unlinked: EN, ES |
| 5 | `klow-80mg` | peptide | SHELL | REVIEW_REQUIRED | SHELL | shell: EN, ES; page review: PT; unlinked: EN, ES |
| 6 | `mots-c` | peptide | PARTIAL | REVIEW_REQUIRED | SHELL | shell: ES; page review: PT; unlinked: ES |
| 7 | `hba1c` | biomarker | PARTIAL | SHELL | SHELL | shell: PT, ES; unlinked: PT, ES |
| 8 | `apob` | biomarker | PARTIAL | SHELL | SHELL | shell: PT, ES; unlinked: PT, ES |
| 9 | `lpa` | biomarker | PARTIAL | SHELL | SHELL | shell: PT, ES; unlinked: PT, ES |
| 10 | `hs-crp` | biomarker | PARTIAL | SHELL | SHELL | shell: PT, ES; unlinked: PT, ES |
| 11 | `fasting-insulin` | biomarker | PARTIAL | SHELL | SHELL | shell: PT, ES; unlinked: PT, ES |
| 12 | `ferritin` | biomarker | PARTIAL | SHELL | SHELL | shell: PT, ES; unlinked: PT, ES |
| 13 | `vitamin-d` | biomarker | PARTIAL | SHELL | SHELL | shell: PT, ES; unlinked: PT, ES |
| 14 | `igf-1` | biomarker | PARTIAL | SHELL | SHELL | shell: PT, ES; unlinked: PT, ES |
| 15 | `tirzepatide` | peptide | PARTIAL | SHELL | SHELL | shell: PT, ES; unlinked: PT, ES |
| 16 | `semaglutide` | peptide | PARTIAL | SHELL | SHELL | shell: PT, ES; unlinked: PT, ES |
| 17 | `bpc-157` | peptide | PARTIAL | SHELL | SHELL | shell: PT, ES; unlinked: PT, ES |
| 18 | `tb-500` | peptide | PARTIAL | SHELL | SHELL | shell: PT, ES; unlinked: PT, ES |
| 19 | `ghk-cu` | peptide | PARTIAL | SHELL | SHELL | shell: PT, ES; unlinked: PT, ES |
| 20 | `kpv` | peptide | PARTIAL | SHELL | SHELL | shell: PT, ES; unlinked: PT, ES |

## Translation parity

- **56/56 families** have EN, PT-BR, and ES route files, and all 168 routes are in the sitemap. File parity is complete; content parity is not.
- EN: **1 COMPLETE**, **36 PARTIAL**, **19 SHELL**, **0 MISSING**, **0 REVIEW_REQUIRED**.
- PT-BR: **0 COMPLETE**, **25 PARTIAL**, **25 SHELL**, **0 MISSING**, **6 REVIEW_REQUIRED**.
- ES: **0 COMPLETE**, **1 PARTIAL**, **55 SHELL**, **0 MISSING**, **0 REVIEW_REQUIRED**.
- Spanish has route parity but 55 generated shells; only the homepage is substantive, and it remains partial pending metadata and human i18n review.
- Portuguese contains substantial home, hub, peptide, and supplement content, but 25 shells and six safety-review blockers remain.
- English is strongest for hubs, biomarkers, and peptides, but the supplement family and four PT-origin peptide identities remain shells.
- No family is `COMPLETE` across all three locales.

## Human decisions required

1. Qualified scientific/safety reviewers must resolve the six PT peptide entries in `docs/SAFETY_CONTENT_REVIEW.md`; agents cannot approve them.
2. Maintainers must decide which substantive scientific pages meet the full content-page contract after review; v1 intentionally avoids broad `COMPLETE` claims.
3. Qualified translators or locale owners must review substantive PT/ES variants and all generated shells before status promotion.
4. SEO owners must decide the order for canonical, hreflang, Open Graph, Twitter, JSON-LD, and metadata debt remediation without changing public URLs silently.
5. The GLOE/GLOW product and URL migration remains deferred pending an approved redirect and SEO strategy.
6. Maintainers must define qualified reviewer identities and the evidence record required before any review field can become `HUMAN_APPROVED`.
