# WellMax Roadmap

Status date: 2026-08-25

Authority: sequencing source for repository work

Production: `https://site-solutions-pro.github.io/wellmax/`

## Roadmap rules

- Execute work through task-specific branches and PRs.
- Preserve published URLs unless a phase explicitly includes an approved migration plan.
- Scientific, safety, regulatory, URL, redirect, and merge gates remain human-controlled.
- A checked item means merged and verified or otherwise explicitly accepted by maintainers.
- Do not treat a phase label as authorization for every item within it.

## Phase 1 — Production integrity

Objective: restore the correct WellMax production base and eliminate immediate navigation, sitemap, and link-integrity failures.

- [x] Correct `robots.txt` to the WellMax sitemap.
- [x] Replace active obsolete PepEducation production-base references.
- [x] Implement repository-base-aware generated navigation.
- [x] Preserve content identity in nested language-selector routes.
- [x] Repair the 30 obsolete homepage fragment links.
- [x] Restore exact 168 public HTML ↔ 168 sitemap URL parity.
- [x] Add CI validation for production base, robots, sitemap parity, links/assets, JSON-LD, and generated navigation.
- [x] Normalize the six HTML5 doctypes that blocked Quality CI.
- [x] Create `docs/SAFETY_CONTENT_REVIEW.md` without automatically rewriting flagged content.
- [ ] Complete qualified human review of the six flagged safety-content pages.

Exit status: core production-integrity work completed; the scientific safety-review queue remains a separate human-controlled follow-up.

## Phase 2 — URL and SEO normalization

Objective: normalize public identity and metadata without breaking indexed paths.

- [ ] Inventory canonical, Open Graph, Twitter, JSON-LD, and hreflang consistency across all public pages.
- [ ] Define and approve redirect architecture suitable for GitHub Pages before any URL rename.
- [ ] Plan the `GLOE` → `GLOW` name and URL migration.
- [ ] Inventory every `gloe-70mg` inbound link, canonical, hreflang, structured-data URL, sitemap entry, and locale variant.
- [ ] Obtain human approval for the GLOE/GLOW redirect and compatibility strategy.
- [ ] Execute the migration with redirects, updated internal links, sitemap, canonicals, hreflang, and production verification.
- [ ] Add non-brittle strict-page metadata and hreflang validation.
- [ ] Resolve duplicate, missing, or generic metadata on publication-ready pages.
- [ ] Document indexing decisions for legacy `SHELL` pages.

Exit criteria: approved URL strategy, no unhandled legacy URLs, strict-page SEO checks green, and production smoke tests pass.

## Phase 3 — i18n content parity

Objective: make EN, PT-BR, and ES variants explicit, identity-preserving, and reviewable.

Enabling component: Content Manifest v1 provides the identity, locale-route, status, review, and priority inventory used to plan and measure this phase.

- [ ] Create a content-identity matrix for all public pages.
- [ ] Assign `COMPLETE`, `PARTIAL`, `SHELL`, `MISSING`, or `REVIEW_REQUIRED` to every locale variant.
- [ ] Correct same-locale navigation and CTA routing across PT-BR and ES.
- [ ] Ensure language switchers preserve identity where translations exist.
- [ ] Normalize self-canonicals and reciprocal hreflang.
- [ ] Localize titles, descriptions, structured data, and navigation labels.
- [ ] Establish linguistic plus scientific review for translated scientific claims.
- [ ] Add CI coverage for declared translation relationships without failing intentionally missing variants.

Exit criteria: complete identity matrix, no accidental locale escapes, reciprocal declared translations, and transparent incomplete states.

## Phase 4 — Structured content and template architecture

Objective: reduce duplicated HTML and metadata while preserving the static deployment and every approved public URL.

Enabling component: Content Manifest v1 supplies stable content identities and filesystem/sitemap parity contracts for incremental template and structured-data migration.

- [ ] Inventory duplicated headers, navigation, footers, metadata, JSON-LD, and page sections.
- [ ] Approve a content/data separation strategy compatible with GitHub Pages.
- [ ] Define machine-readable page manifests based on `CONTENT_PAGE_CONTRACT.md`.
- [ ] Prototype reusable templates/components on a bounded page set.
- [ ] Preserve no-JavaScript navigation and static output.
- [ ] Add generated-output validation and deterministic builds if a build step is approved.
- [ ] Define migration and rollback for existing hand-authored pages.
- [ ] Migrate incrementally with URL, metadata, sitemap, accessibility, and content parity checks.

Exit criteria: approved reusable system, deterministic validation, preserved public contracts, and documented contributor workflow.

## Phase 5 — Scientific content scaling

Objective: scale to 100+ high-quality molecule, supplement, and biomarker identities without flattening evidence or review quality.

Enabling component: Content Manifest v1 supplies the governed backlog, locale readiness, content type, and review fields needed to scale without treating file existence as publication approval.

- [ ] Approve taxonomy and priority backlog across molecules, supplements, and biomarkers.
- [ ] Implement machine-readable evidence and review states.
- [ ] Establish claim/source records and dated regulatory verification.
- [ ] Create editorial and scientific review queues with qualified human approval.
- [ ] Build locale-aware content operations from one stable identity model.
- [ ] Add completeness dashboards that accept `N/A` and `EVIDENCE_UNAVAILABLE`.
- [ ] Prevent orphan pages through automated discovery/link checks.
- [ ] Define scheduled re-review for time-sensitive regulatory and scientific claims.
- [ ] Measure coverage, freshness, translation status, and QA failure rates.

Exit criteria: 100+ governed identities, auditable evidence, explicit review ownership, scalable localization, and green publication contracts.

## Phase 6 — Advanced interactive WellMax tools

Objective: add useful, accessible tools only after content, safety, identity, and architecture foundations are stable.

- [ ] Define approved educational tool categories and clinical-safety boundaries.
- [ ] Prioritize evidence explorers, comparison tools, research timelines, and non-diagnostic biomarker education.
- [ ] Require progressive enhancement, keyboard access, mobile support, and clear limitations.
- [ ] Concentration calculators for lyophilized vials are allowed under `docs/PREPARATION_AND_DOSE_POLICY.md`; prohibit dose, self-medication, or individualized treatment calculators.
- [ ] Define privacy and data-handling requirements before collecting user health data.
- [ ] Add analytics only with an approved measurement and privacy plan.
- [ ] Validate performance budgets and no-JavaScript fallback.
- [ ] Pilot tools behind explicit roadmap status before broad publication.

Exit criteria: human-approved safety model, accessible and tested tools, privacy controls where applicable, and successful production monitoring.

## Cross-phase governance backlog

- [x] Establish WellMax Agent System v1 governance contracts.
- [ ] Reconcile older product documents that still use PepEducation or future-brand language; this requires a deliberate brand/history documentation decision, not a silent rewrite.
- [ ] Approve a machine-readable content manifest format before CI enforces publication states broadly.
- [ ] Define the exact threshold for “substantially modified page” once manifests exist.
- [ ] Define qualified reviewer roles and evidence required for `HUMAN_APPROVED` status.
- [ ] Decide whether historical/migration documents may retain retired production URLs and how CI identifies them.
