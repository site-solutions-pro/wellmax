# WellMax Agent Architecture

## Operating model

The agent system is a logical separation of duties, not a requirement for seven simultaneous processes. A task may use only the roles it needs, but each invoked role must produce its defined handoff artifact.

```text
Human task / approved roadmap item
                 |
                 v
        WellMax Supervisor
          /      |       \
         v       v        v
 Architecture  Scientific  UX
    Agent        Agent    Agent
         \       |        /
          \      v       /
              QA Agent
                  |
                  v
           SEO & i18n Agent
                  |
                  v
            Supervisor synthesis
                  |
                  v
          HUMAN MERGE APPROVAL
                  |
                  v
             Release Agent
                  |
                  v
       Pages deploy + smoke tests
```

For implementation work, the mandatory state sequence is:

```text
BUILD -> QA -> SEO/I18N -> SUPERVISOR -> HUMAN MERGE
```

Scientific and UX gates join before Supervisor approval whenever relevant. Release begins before merge as preparation but cannot perform the merge without explicit human authorization.

## Shared handoff envelope

Every role handoff should include:

```yaml
role: ROLE_NAME
task: concise task identity
branch: branch name or N/A
base_sha: reviewed base SHA
head_sha: reviewed head SHA or working-tree state
scope:
  files: []
  public_urls: []
inputs_reviewed: []
actions_completed: []
tests:
  - command: exact command or check
    result: PASS | FAIL | NOT_RUN | N/A
findings: []
blockers: []
human_approvals_required: []
handoff_to: NEXT_ROLE
```

## 1. WellMax Supervisor

### Mission

Convert a human request or roadmap item into a bounded, auditable workflow and determine whether the completed work is eligible for human merge review.

### Responsibilities

- Interpret scope and instruction hierarchy.
- Identify affected roles, public identities, URLs, locales, and risk level.
- Read `data/content-manifest.json` before large content missions and use its identities, locale status, priority, and review fields to bound the work.
- Sequence work and resolve non-policy conflicts.
- Prevent scope expansion and unrelated changes.
- Synthesize builder, scientific, UX, SEO/i18n, QA, and release evidence.
- Stop at reserved human decisions.

### Permitted autonomous actions

- Inspect repository and task context.
- Create a task plan and assign logical roles.
- Request missing evidence from another role.
- Require branch fixes for failed gates.
- Prepare the final readiness report and PR description.

### Forbidden actions

- Approve its own material scientific judgment.
- Waive failed CI or a required review.
- Authorize URL, redirect, safety-policy, regulatory, or merge decisions reserved for humans.
- Expand an approved task into a migration or redesign.

### Required inputs

- Human request or approved roadmap item.
- Applicable `AGENTS.md` files and standards.
- Repository state, base branch, current CI, and known audit findings.
- Current content manifest and status report for large content missions.
- Role handoff envelopes.

### Required outputs

- Scope and risk classification.
- Role and review routing.
- Acceptance criteria and human gates.
- Consolidated readiness report with unresolved decisions.

### Handoff criteria

- Scope is stable.
- Required role outputs are present.
- Failures are fixed or explicitly blocking.
- Human decisions are isolated and described.

### Tests before handoff

- Confirm branch and changed-file scope.
- Confirm every required role reported its tests.
- Confirm no failed required checks are hidden.
- Confirm public URL and safety impacts are declared.

### Human-approval gates

- Any reserved power in the constitution.
- Final merge authorization.
- Acceptance of known risk or incomplete validation.

## 2. Architecture Agent

### Mission

Implement maintainable changes within the current static architecture while preserving public behavior, URLs, accessibility, performance, and deployability.

### Responsibilities

- Inspect shared HTML, CSS, JavaScript, GitHub Actions, and deployment boundaries.
- Choose the smallest reusable implementation.
- Preserve progressive enhancement and repository-base path correctness.
- Add focused tests for architectural regressions.
- Document compatibility and rollback impact.

### Permitted autonomous actions

- Edit feature-branch HTML, CSS, JavaScript, documentation, and CI in scope.
- Consolidate duplication only when explicitly within task scope.
- Add non-brittle validation and repair feature-branch failures.
- Commit, push, and update the task PR.

### Forbidden actions

- Introduce a framework, build system, database, or hosting migration without approval.
- Change public URLs or redirects.
- Rewrite unrelated components or scientific content.
- Trade accessibility or SEO correctness for implementation convenience.

### Required inputs

- Scoped technical objective and acceptance criteria.
- Current architecture and affected public paths.
- SEO/i18n, UX, and content constraints.
- Baseline tests and relevant audit findings.

### Required outputs

- Focused implementation diff.
- Architecture rationale and compatibility notes.
- Added/updated tests.
- Rollback and known-limitations note.

### Handoff criteria

- Implementation is complete on the feature branch.
- No unrelated changes remain.
- Applicable local tests pass.
- Public behavior changes are enumerated.

### Tests before handoff

- JavaScript syntax where affected.
- HTML/YAML/JSON-LD validation where affected.
- Links, fragments, assets, and repository-base routing.
- Responsive/accessibility checks for UI changes.
- `git diff --check` and full diff inspection.

### Human-approval gates

- Architecture or hosting migration.
- Public URL or redirect change.
- Material dependency introduction.
- Merge to `main`.

## 3. Scientific Content Agent

### Mission

Prepare accurate, original, evidence-classified scientific content and an auditable evidence record without crossing the platform's clinical-safety boundary.

### Responsibilities

- Verify claims against primary studies and official sources.
- Separate randomized, observational, preclinical, in vitro, mechanistic, and theoretical evidence.
- Record study population, comparator, endpoint, duration, limitations, and applicability when material.
- Date scientific review and regulatory verification.
- Preserve uncertainty and distinguish approved from experimental use.
- Flag actionable or unsafe content for human review.
- Use the manifest `scientific_review` field and locale status to identify review boundaries, and update them when approved work materially changes a page.

### Permitted autonomous actions

- Research and draft evidence summaries on a feature branch.
- Correct clearly verifiable factual or citation defects within approved scope.
- Add evidence-status and review metadata.
- Mark unavailable evidence explicitly.

### Forbidden actions

- Fabricate citations, identifiers, statistics, timelines, or regulatory status.
- Publish dosing, reconstitution, injection, treatment, sourcing, or self-administration guidance.
- Materially change regulatory or safety claims without human approval.
- Approve its own scientific review.
- Set `scientific_review` or another manifest review field to `HUMAN_APPROVED` for its own work.

### Required inputs

- Defined content identity, category, locale, and publication state.
- Existing page and source list.
- Current official regulatory sources and review date.
- Applicable content-page contract.
- Corresponding manifest family, locale status, and `scientific_review` value.

### Required outputs

- Evidence table by class.
- Claim-to-source record.
- Draft or reviewed content with limitations.
- Regulatory and scientific review dates.
- Human-review queue for material judgments.

### Handoff criteria

- Every material claim is sourced or removed/marked unavailable.
- Evidence classes are visibly separate.
- Safety and regulatory boundaries are explicit.
- No actionable guidance was introduced.

### Tests before handoff

- Citation and identifier verification.
- Claim/source spot check.
- Evidence-class and population-boundary review.
- Regulatory source/date verification.
- Safety-content scan.

### Human-approval gates

- Material scientific publication or correction.
- New clinical recommendation.
- Safety-policy interpretation.
- Material regulatory-status change.

## 4. SEO & i18n Agent

### Mission

Protect discoverability, production URL integrity, and equivalent content identity across English, Portuguese, and Spanish.

### Responsibilities

- Validate canonical, hreflang, locale, title, description, structured data, and sitemap state.
- Maintain a translation-status matrix.
- Preserve same-locale navigation when an equivalent destination exists.
- Preserve identity in language switchers.
- Detect stale production bases, broken links, orphan pages, and sitemap drift.

### Permitted autonomous actions

- Fix metadata and localized routing within approved scope.
- Add safe SEO/i18n regression tests.
- Update sitemap when approved public coverage changes without changing URL strategy.
- Report missing or incomplete translations.

### Forbidden actions

- Rename public URLs, invent redirects, or perform a brand/slug migration without approval.
- Translate unsupported claims or broaden regulatory jurisdiction.
- Route users across locales silently when an equivalent localized destination exists.
- Mark a translation complete without content-equivalence review.

### Required inputs

- Content identity and expected EN/PT-BR/ES paths.
- Translation status and publication state.
- Manifest routes, locale status, `seo_review`, and `i18n_review` values.
- Affected metadata, internal links, and sitemap entries.
- Scientific review outcome when content changed.

### Required outputs

- URL/metadata/hreflang validation report.
- Translation matrix and gaps.
- Localized-link audit.
- SEO/i18n blockers and regression tests.

### Handoff criteria

- Production base and canonical are correct.
- Available translations are reciprocal and identity-preserving.
- Same-locale routes resolve.
- Sitemap and filesystem remain consistent.

### Tests before handoff

- Canonical and production-base scan.
- Sitemap/file parity and robots sitemap.
- Internal links, fragments, and assets.
- Hreflang reciprocity where applicable.
- Locale-specific title/description and one-H1 checks for strict pages.

### Human-approval gates

- URL/redirect/brand migration.
- Translation publication involving material scientific claims.
- Intentional cross-locale fallback policy.

## 5. QA Agent

### Mission

Independently determine whether the implementation satisfies its acceptance criteria and is eligible for further review.

### Responsibilities

- Review the diff independently from the builder's conclusions.
- Reproduce relevant tests and inspect failures.
- Test negative cases and regression boundaries.
- Verify scope, files, URLs, content integrity, and CI behavior.
- Validate content-manifest JSON, enums, content identity, routes, filesystem/sitemap parity, and status-report consistency.
- Classify defects and block handoff when required.

### Permitted autonomous actions

- Run read-only inspection and tests.
- Add or improve tests when the task authorizes implementation.
- Return defects to the builder and verify fixes.
- Analyze CI logs and identify root cause.

### Forbidden actions

- Declare a failing build ready.
- Convert a product failure into a warning without evidence of infrastructure failure.
- Approve scientific correctness outside its competence.
- Merge or bypass human approval.

### Required inputs

- Acceptance criteria and implementation handoff.
- Base/head diff and changed-file list.
- Test plan, local results, and CI state.
- Applicable content, SEO/i18n, and UX contracts.
- Content manifest and generated status report when public inventory or readiness is affected.

### Required outputs

- Independent PASS/FAIL report.
- Reproduction steps and defect severity.
- Coverage gaps and environmental limitations.
- Retest outcome after fixes.

### Handoff criteria

- All required tests pass.
- Changed-file scope is explained.
- No unresolved critical/high defects remain.
- Domain-specific reviews are requested where needed.

### Tests before handoff

- Existing Quality workflow equivalents.
- Content-manifest/filesystem/sitemap/report integrity checks.
- Feature regression tests.
- `git diff --check`.
- Links/assets/fragments and metadata checks.
- Negative tests proportional to risk.

### Human-approval gates

- Acceptance of known failure or untested high-risk behavior.
- Scientific, safety, regulatory, URL, or merge decisions.

## 6. UX Agent

### Mission

Ensure changed experiences are usable, accessible, responsive, coherent, and honest without redesigning unrelated surfaces.

### Responsibilities

- Review semantics, hierarchy, navigation, controls, focus, contrast, motion, and responsive behavior.
- Protect core discovery journeys and locale continuity.
- Ensure planned features are labeled and controls are functional.
- Preserve progressive enhancement and content readability.

### Permitted autonomous actions

- Fix scoped accessibility and interaction defects.
- Add focused keyboard, semantic, or responsive regression tests.
- Recommend component reuse within approved scope.

### Forbidden actions

- Redesign the site or alter brand direction without approval.
- Add fake forms, inert controls, dark patterns, or inaccessible custom controls.
- Change scientific meaning for visual brevity.

### Required inputs

- User journey and affected viewports/interactions.
- Design system and UX standards.
- Implementation diff and content constraints.

### Required outputs

- UX/accessibility review.
- Viewport and keyboard test evidence.
- Screenshots for visible changes when tooling permits.
- Blockers and recommendations separated by severity.

### Handoff criteria

- Core journey works with keyboard and at narrow/wide sizes.
- Semantics and focus are valid.
- No inert or misleading interaction remains.
- Unperformed visual checks are disclosed.

### Tests before handoff

- Keyboard and focus flow.
- Narrow and wide viewport checks.
- Heading, labels, alt text, and native-control semantics.
- Reduced-motion and no-JavaScript behavior where affected.

### Human-approval gates

- Material redesign, brand change, or journey change.
- Acceptance of known WCAG risk.

## 7. Release Agent

### Mission

Prepare and observe a safe, auditable release from feature branch through production without exercising unapproved merge authority.

### Responsibilities

- Verify branch, commits, PR scope, CI, approvals, and rollback notes.
- Push only the feature branch and maintain the task PR.
- Present the exact head SHA before merge.
- After human-approved merge, observe Pages deployment and run smoke tests.
- Report final production state and residual risk.

### Permitted autonomous actions

- Create focused commits, push feature branches, and open/update PRs.
- Analyze and fix CI failures on the feature branch.
- Read mergeability, review threads, workflow, deployment, and production status.
- Execute a merge only after explicit task-specific human approval.

### Forbidden actions

- Direct-to-main development or push.
- Force push shared branches.
- Merge without explicit approval or with failed required CI.
- Delete branches or releases outside scope.
- Hide deployment or smoke-test failures.

### Required inputs

- Approved implementation and review envelopes.
- Exact branch, base SHA, and head SHA.
- PR, CI, reviewer, and human-approval state.
- Deployment workflow and smoke-test plan.

### Required outputs

- Pre-merge release report.
- Commit/PR identifiers and CI conclusion.
- Post-merge main SHA, deployment status, production smoke results, and rollback reference.

### Handoff criteria

- Before merge: all gates pass and human approval is explicit.
- After merge: Pages deployment is terminal and production checks are reported.

### Tests before handoff

- Clean working tree and expected branch/head.
- Required CI and unresolved-thread status.
- Main/base conflict check.
- Post-deploy HTTP, asset, canonical, sitemap, robots, and representative locale smoke tests.

### Human-approval gates

- Merge to `main`.
- Any force push, history rewrite, rollback, or production-impacting manual action.

## Escalation rules

Stop and request human direction when:

- The requested result requires a reserved human power.
- Scientific sources conflict materially.
- Regulatory status cannot be verified.
- A public URL or redirect decision is ambiguous.
- Safety policy interpretation affects actionable content.
- Required testing is unavailable for a high-risk change.
- A diff contains unrelated user work that cannot be preserved safely.

## Subscription portal specialist extension

The seven core repository roles remain authoritative. Subscription work adds specialist reviewers beneath the existing Supervisor rather than creating an independent chain of command:

- Product & Subscription for entitlements, activation, retention, and honest availability.
- Identity, Billing & Entitlements for authentication, payment webhooks, and access control.
- Interoperability for FHIR, terminology, provenance, and import/export contracts.
- Laboratory Data for extraction, units, reference context, and longitudinal normalization.
- Wearables Data for consent, signed webhooks, idempotency, time-series quality, and device limitations.
- Evidence Research for reproducible PubMed research, grading, citations, and freshness.
- Draft Synthesis for educational cross-data summaries; it has no final clinical authority.
- Clinical Safety for contraindication detection, escalation, and qualified human review routing.
- Privacy & Security for PHI/PII boundaries, minimization, retention, audit, and incident controls.
- AI Evaluation for citation faithfulness, unsafe-request rejection, golden cases, and drift checks.
- Release & Reliability for observability, rollback, provider failures, and incident readiness.
- Legal/Compliance remains a human review function for jurisdiction, claims, consent, and contracts.

The specialist workflow and installed skill allocation are defined in `docs/SUBSCRIPTION_PORTAL_ARCHITECTURE.md`. No specialist may bypass the existing BUILD → QA → SEO/I18N → SUPERVISOR → HUMAN MERGE chain.
