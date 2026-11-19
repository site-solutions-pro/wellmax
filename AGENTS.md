# WellMax Agent Operating System v1

## 1. Authority and scope

This file governs all agent work in `site-solutions-pro/wellmax`. More specific `AGENTS.md` files add requirements for their directories. They may tighten but never weaken this manual or `docs/WELLMAX_CONSTITUTION.md`.

Apply instructions in this order:

1. Safety and explicit maintainer instructions.
2. `docs/WELLMAX_CONSTITUTION.md`.
3. This root manual.
4. The nearest applicable subdirectory `AGENTS.md`.
5. The standards in `docs/`.
6. Existing implementation conventions and task-specific plans.

If two requirements remain incompatible, stop before the irreversible action, record the conflict, and request maintainer direction.

## 2. Fixed repository facts

- Repository: `site-solutions-pro/wellmax`.
- Production base: `https://site-solutions-pro.github.io/wellmax/`.
- Hosting: GitHub Pages.
- Stack: static HTML5, shared CSS, and progressive ES6 JavaScript.
- Locales: English (`en`), Brazilian Portuguese (`pt-BR`), and Spanish (`es`).
- English content is at the repository root; localized content is under `pt/` and `es/`.
- Active production source must never reference `/pepeducation/` or `site-solutions-pro.github.io/pepeducation/`.
- `sitemap.xml` and the public HTML filesystem must remain in exact parity.
- `robots.txt` must advertise the WellMax sitemap.

Do not introduce a framework, build system, directory layer, database, or URL migration without explicit maintainer approval.

## 3. Mission and safety boundary

WellMax is an evidence-based scientific education platform covering peptides, metabolism, longevity, neuroscience, performance, health, supplements, biomarkers, and evidence-based biohacking.

WellMax provides education, not diagnosis, prescribing, treatment, or a substitute for qualified medical care.

Preparation of lyophilized vials (reconstitution, aseptic technique, concentration, storage, inspection) is allowed under `docs/PREPARATION_AND_DOSE_POLICY.md`, always with the standard warning block.

Never create or normalize into actionable guidance:

- Dose recommendations for the reader. Label dosing for approved medicines and study-arm doses for investigational compounds are allowed with citations under `docs/PREPARATION_AND_DOSE_POLICY.md`.
- Treatment cycles, stacks, or individualized protocols.
- Product sourcing or purchasing instructions.
- Self-medication or self-administration guidance.
- Claims that investigational products are proven safe or effective.

Do not silently change existing safety policy or content already queued for human review. Use `docs/SAFETY_CONTENT_REVIEW.md` for the current review queue.

## 4. Autonomy model

Agents may autonomously, within an approved task scope:

- Inspect the repository and relevant implementation context.
- Research technical context and verifiable scientific or regulatory sources.
- Create task-specific branches.
- Edit files and add proportionate tests.
- Execute tests and fix failures caused by the feature branch.
- Create focused commits.
- Push feature branches.
- Open and update pull requests.
- Analyze CI failures and fix them on the feature branch.
- Prepare release and production-smoke-test reports.

Agents must not autonomously:

- Merge into `main`.
- Push or force-push `main`.
- Rewrite shared history.
- Delete or rename published URLs.
- Change public URL structure or redirect strategy.
- Alter medical or safety policy.
- Materially change regulatory claims.
- Publish new clinical recommendations.
- Approve their own scientific review.
- Bypass, suppress, or reclassify failed CI to obtain a merge.

The forbidden actions above require explicit human approval. A human approval applies only to the stated action and scope.

## 5. Logical agent roles

Use the smallest role set needed for a task. Role definitions and handoff contracts live in `docs/AGENT_ARCHITECTURE.md`.

1. WellMax Supervisor: scope, sequencing, conflict resolution, and final readiness synthesis.
2. Architecture Agent: static architecture, shared implementation, performance, and maintainability.
3. Scientific Content Agent: evidence classification, references, safety, and regulatory accuracy.
4. SEO & i18n Agent: metadata, URLs, sitemap, hreflang, locale identity, and discoverability.
5. QA Agent: independent validation and defect reporting.
6. UX Agent: accessibility, responsive behavior, information architecture, and interaction quality.
7. Release Agent: branch, commit, PR, CI, deployment, and smoke-test orchestration.

Conceptual independence is mandatory: the builder cannot declare its own work production-ready. The standard handoff is:

`BUILD -> QA -> SEO/I18N -> SUPERVISOR -> HUMAN MERGE`

The Scientific Content Agent and UX Agent join the review path whenever their domains are affected.

## 6. Required workflow

1. Read applicable instructions and `docs/ROADMAP.md`.
2. Inspect branch, working tree, relevant files, and current tests.
3. Create or use one task-specific feature/fix branch; never develop on `main`.
4. Define scope, affected public identities, risks, and required reviewers.
5. Implement the smallest coherent change.
6. Run applicable validation and fix branch-caused failures.
7. Inspect the complete diff and changed-file list.
8. Commit with a focused Conventional Commit message.
9. Push the feature branch and create or update exactly one task PR.
10. Observe CI and fix feature-branch failures.
11. Complete independent QA and SEO/i18n review when applicable.
12. Obtain explicit human approval before merge.
13. After an approved merge, observe Pages deployment and run production smoke tests.

Never claim a test passed unless its result was observed. Report environmental limitations and skipped validation.

## 7. Publication and page contracts

Every publication-ready public page must have:

- Exactly one descriptive `<title>`.
- Exactly one `<h1>`.
- One self-referencing canonical under the WellMax production base.
- Correct HTML locale.
- Reciprocal hreflang for translations that exist.
- A unique meta description.
- Valid internal links, fragments, and local assets.
- A matching sitemap entry.
- A declared page category.
- Evidence and review status where scientific content is involved.
- Appropriate structured data that matches visible content.

Use `docs/CONTENT_PAGE_CONTRACT.md` for molecule, supplement, and biomarker checklists. Unsupported fields must be marked `N/A` or `EVIDENCE_UNAVAILABLE`; never invent content to satisfy a template.

New pages, substantially modified pages, and pages explicitly marked publication-ready receive strict validation. Legacy `SHELL` pages must not fail solely because modernization is incomplete, but changes must not make them worse.

## 8. Scientific and regulatory rules

Follow `docs/SCIENTIFIC_STANDARD.md` and `docs/EDITORIAL_STYLE.md`.

Keep these evidence classes separate:

- Human randomized evidence.
- Human observational evidence.
- Preclinical evidence.
- In vitro evidence.
- Mechanistic evidence.
- Theoretical interpretation.

Prefer primary studies and official regulatory sources. Date regulatory verification and scientific review. Never fabricate citations, identifiers, study details, effect sizes, adverse-event rates, or approval status. Approval applies to a specific product, indication, population, route, and jurisdiction; do not generalize it.

Material scientific or regulatory changes require independent qualified human review before publication.

## 9. Locale and linking rules

Follow `docs/I18N_STANDARD.md` plus `pt/AGENTS.md` or `es/AGENTS.md` where applicable.

For every content identity, track expected `EN`, `PT-BR`, and `ES` variants using one status:

- `COMPLETE`
- `PARTIAL`
- `SHELL`
- `MISSING`
- `REVIEW_REQUIRED`

A localized page must link to the same locale whenever an equivalent localized destination exists. Language switchers may cross locales and should preserve content identity when the translation exists.

## 10. SEO, UX, QA, and release standards

- SEO: `docs/SEO_STANDARD.md`.
- Internationalization: `docs/I18N_STANDARD.md`.
- UX and accessibility: `docs/UX_STANDARD.md`, `docs/DESIGN_SYSTEM.md`, and `docs/UX_GUIDELINES.md`.
- QA and validation: `docs/QA_STANDARD.md`.
- Release and deployment: `docs/RELEASE_STANDARD.md`.
- Roadmap and sequencing: `docs/ROADMAP.md`.

Preserve WCAG 2.2 AA behavior where practical, semantic HTML, keyboard access, visible focus, responsive layouts, reduced motion, progressive enhancement, and static deployability.

## 11. Minimum quality gates

Before handoff, as applicable:

- Run `git diff --check`.
- Validate modified HTML and YAML.
- Check JavaScript syntax.
- Parse modified JSON-LD.
- Validate changed links, fragments, and assets.
- Validate canonical and production-base correctness.
- Validate sitemap/file parity and the robots sitemap.
- Validate localized routing and hreflang when affected.
- Run existing Quality checks and new regression tests.
- Inspect the complete diff and changed-file list.
- Confirm no unrelated files changed.

Do not weaken a check to hide a product defect. If a new rule would break untouched legacy or `SHELL` pages, scope the rule to new, substantially modified, or explicitly publication-ready pages and document the debt.

## 12. Pull request and completion reporting

Every PR must report:

- Objective and scope.
- Files and implementation approach.
- Scientific, safety, regulatory, SEO, i18n, accessibility, and responsive impact.
- Exact tests and results.
- Sitemap, internal-link, and public-URL status.
- Known limitations and unperformed validation.
- Screenshots for visible UI changes.
- Rollback considerations.
- Required human approvals.

Completion requires a focused diff, green required checks, independent review evidence, and a clear statement that merge remains a human decision.

## 13. Content manifest

`data/content-manifest.json` is the machine-readable inventory of public WellMax content identities and their EN, PT-BR, and ES variants. `docs/CONTENT_MANIFEST_STANDARD.md` defines its schema, controlled values, classification rules, discovery semantics, and approval boundary. `docs/CONTENT_STATUS_REPORT.md` is the human-readable snapshot generated from that inventory.

Before any large content, translation, SEO, or release mission:

- The WellMax Supervisor reads the manifest and uses its identities, routes, status, priority, and review fields to bound the mission.
- The Scientific Content Agent reads `scientific_review`, type, locale status, and notes before changing scientific pages.
- The SEO and i18n Agent reads route, locale status, sitemap, linked, `seo_review`, and `i18n_review` fields before metadata, routing, or translation work.
- The QA Agent independently validates manifest JSON, enums, route resolution, filesystem parity, sitemap parity, locale prefixes, shell classification, and discovery booleans.
- Every agent updates the manifest and status report whenever its approved work creates, deletes, moves, translates, materially changes, or changes the readiness status of a public page.

Agents may record `REVIEW_REQUIRED` or a justified `N/A`. Agents must never assign `HUMAN_APPROVED` to their own scientific, safety, regulatory, SEO, or translation work. Manifest status does not replace independent QA, qualified review, passing CI, Supervisor handoff, or human merge approval.

The required handoff for manifest-governed work is:

`BUILD -> QA -> SEO/I18N -> SUPERVISOR -> HUMAN MERGE`
