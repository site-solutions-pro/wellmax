# Molecule Profile Instructions

These instructions apply to English molecule profiles under `peptides/`. The scientific contract also governs equivalent molecule pages under `pt/peptides/` and `es/peptides/` through their locale manuals.

## Evidence contract

- Identify the compound, class, synonyms, and research identity without conflating similarly named products or blends.
- Separate human randomized, human observational, preclinical, in vitro, mechanistic, and theoretical evidence.
- Describe population, intervention or exposure, comparator, endpoint, duration, and material limitations when reliable data exist.
- Separate observed outcomes from proposed mechanisms.
- Date scientific review and regulatory verification.
- Use official sources for approval, authorization, trial status, and labeling claims.
- State `EVIDENCE_UNAVAILABLE` or `N/A` rather than filling unsupported sections.

## Safety and regulatory boundaries

- Clearly distinguish approved therapies from investigational compounds and approved indications from off-label or theoretical applications.
- Preparation content, label dosing and cited study-arm doses follow `docs/PREPARATION_AND_DOSE_POLICY.md`, with the standard warning block.
- Do not provide dose recommendations, invented doses, cycles, stacks, sourcing, or self-administration advice.
- Do not infer safety from absent reports or efficacy from a mechanism.
- Material scientific, safety, or regulatory changes require independent qualified human approval.

## Page requirements

Use the molecule checklist in `docs/CONTENT_PAGE_CONTRACT.md`. Publication-ready profiles require a breadcrumb, overview, evidence-separated sections, regulatory status, safety findings, limitations, references, related content, review dates, educational boundary, SEO metadata, and appropriate JSON-LD when reliable evidence supports them.

Comparisons must be evidence-based and non-prescriptive. Product or blend names must not be normalized, renamed, or migrated without an approved URL and redirect plan.

## Handoff

The Scientific Content Agent prepares the evidence record. The QA Agent validates structure and references. The SEO & i18n Agent validates identity, metadata, URLs, and translations. A qualified human approves material scientific publication.
