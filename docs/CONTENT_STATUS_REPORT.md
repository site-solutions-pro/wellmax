# WellMax Content Status Report

Generated from `data/content-manifest.json` on 2026-10-31. This is an inventory report, not publication or scientific approval.

## Inventory summary

- Total content families: **56**
- Total public pages represented: **168**
- Locales: EN, PT-BR, ES
- Families with all three route files: **56**
- Families complete in every locale: **0**
- Families with at least one shell: **48**
- Families with at least one missing locale: **0**

## Status by locale

| Status | EN | PT-BR | ES | Total |
|---|---:|---:|---:|---:|
| COMPLETE | 0 | 0 | 0 | 0 |
| PARTIAL | 38 | 26 | 8 | 72 |
| SHELL | 18 | 24 | 48 | 90 |
| MISSING | 0 | 0 | 0 | 0 |
| REVIEW_REQUIRED | 0 | 6 | 0 | 6 |

Family review fields: **51** families require scientific review, **56** families require SEO review, and **56** families require i18n review. No review field is agent-assigned `HUMAN_APPROVED`.

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
| EN | 52 | 4 |
| PT-BR | 52 | 4 |
| ES | 52 | 4 |

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
| 1 | `aod-9604` | peptide | SHELL | REVIEW_REQUIRED | SHELL | shell: EN, ES; page review: PT; unlinked: EN, PT, ES |
| 2 | `epitalon` | peptide | SHELL | REVIEW_REQUIRED | SHELL | shell: EN, ES; page review: PT; unlinked: EN, PT, ES |
| 3 | `gloe-70mg` | peptide | SHELL | REVIEW_REQUIRED | SHELL | shell: EN, ES; page review: PT; unlinked: EN, PT, ES |
| 4 | `klow-80mg` | peptide | SHELL | REVIEW_REQUIRED | SHELL | shell: EN, ES; page review: PT; unlinked: EN, PT, ES |
| 5 | `biomarkers` | hub | PARTIAL | SHELL | SHELL | shell: PT, ES |
| 6 | `apob` | biomarker | PARTIAL | SHELL | SHELL | shell: PT, ES |
| 7 | `fasting-insulin` | biomarker | PARTIAL | SHELL | SHELL | shell: PT, ES |
| 8 | `ferritin` | biomarker | PARTIAL | SHELL | SHELL | shell: PT, ES |
| 9 | `hba1c` | biomarker | PARTIAL | SHELL | SHELL | shell: PT, ES |
| 10 | `hs-crp` | biomarker | PARTIAL | SHELL | SHELL | shell: PT, ES |
| 11 | `igf-1` | biomarker | PARTIAL | SHELL | SHELL | shell: PT, ES |
| 12 | `lpa` | biomarker | PARTIAL | SHELL | SHELL | shell: PT, ES |
| 13 | `vitamin-d` | biomarker | PARTIAL | SHELL | SHELL | shell: PT, ES |
| 14 | `ahk-cu` | peptide | PARTIAL | SHELL | SHELL | shell: PT, ES |
| 15 | `ara-290` | peptide | PARTIAL | SHELL | SHELL | shell: PT, ES |
| 16 | `bpc-157` | peptide | PARTIAL | SHELL | SHELL | shell: PT, ES |
| 17 | `cjc-1295` | peptide | PARTIAL | SHELL | SHELL | shell: PT, ES |
| 18 | `ghk-cu` | peptide | PARTIAL | SHELL | SHELL | shell: PT, ES |
| 19 | `ipamorelin` | peptide | PARTIAL | SHELL | SHELL | shell: PT, ES |
| 20 | `kpv` | peptide | PARTIAL | SHELL | SHELL | shell: PT, ES |

## Translation parity

- EN: **0 COMPLETE**, **38 PARTIAL**, **18 SHELL**, **0 MISSING**, **0 REVIEW_REQUIRED**.
- PT-BR: **0 COMPLETE**, **26 PARTIAL**, **24 SHELL**, **0 MISSING**, **6 REVIEW_REQUIRED**.
- ES: **0 COMPLETE**, **8 PARTIAL**, **48 SHELL**, **0 MISSING**, **0 REVIEW_REQUIRED**.
- No family is `COMPLETE` across all three locales.

## Human decisions required

1. Qualified scientific/safety reviewers must resolve the PT peptide entries in `docs/SAFETY_CONTENT_REVIEW.md`; agents cannot approve them.
2. Maintainers must decide which substantive scientific pages meet the full content-page contract after review; agents do not assign `COMPLETE`.
3. Qualified translators or locale owners must review substantive PT/ES variants and all generated shells before status promotion.
4. SEO owners must decide the order for remaining canonical, hreflang, Open Graph, Twitter, JSON-LD and metadata debt without changing public URLs silently.
5. The GLOE/GLOW product and URL migration remains deferred pending an approved redirect and SEO strategy.
6. Maintainers must define qualified reviewer identities and the evidence record required before any review field can become `HUMAN_APPROVED`.
