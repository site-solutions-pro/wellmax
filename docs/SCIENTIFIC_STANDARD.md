# WellMax Scientific Standard

## Purpose

This standard governs creation, review, translation, and maintenance of scientific and regulatory content. It preserves the existing safety policy; it does not authorize clinical recommendations or the removal of content awaiting human review.

## Evidence classes

Evidence must be labeled and kept separate.

### Human randomized evidence

Prospective human studies with randomized allocation. Record population, intervention/exposure, comparator, endpoint, duration, sample size, attrition, analysis population, and material limitations. Randomization does not automatically establish generalizability, clinical importance, durability, or rare-event safety.

### Human observational evidence

Cohort, case-control, cross-sectional, registry, case-series, and other non-randomized human evidence. State design, population, exposure, outcome, follow-up, adjustment, and major confounding or selection risks. Association must not be written as causation.

### Preclinical evidence

Whole-animal or other non-human organism research. Name the species/model, intervention, comparator, endpoint, and duration when material. Do not translate model outcomes into human benefit.

### In vitro evidence

Cell, tissue, ex vivo, biochemical, or isolated-system evidence. State the system and experimental conditions. Biological activity in a model is not clinical efficacy or safety.

### Mechanistic evidence

Receptor, pathway, pharmacology, physiology, or causal-mechanism evidence that explains plausibility. Distinguish demonstrated target engagement from a proposed downstream effect.

### Theoretical evidence

Hypothesis, extrapolation, modeling, expert interpretation, or untested synthesis. Label it explicitly and do not present it as an observed result.

## Source hierarchy

Prefer, in order of relevance:

1. Peer-reviewed primary studies.
2. Official product labels and regulator databases.
3. Official trial registries and public-health or laboratory authorities.
4. Peer-reviewed systematic reviews for orientation and synthesis.
5. High-quality guidelines with transparent evidence methods.

Retailers, clinics, resellers, influencers, forums, testimonials, and promotional copy are not scientific evidence. Sponsor releases and conference abstracts may describe emerging results only when labeled non-peer-reviewed and verified against the original material.

## Claim record

Every material claim should be auditable with:

```yaml
claim: concise claim text
evidence_class: HUMAN_RANDOMIZED | HUMAN_OBSERVATIONAL | PRECLINICAL | IN_VITRO | MECHANISTIC | THEORETICAL
population_or_model: value
intervention_or_exposure: value
comparator: value | N/A
endpoint: value
duration: value | N/A
source: primary or official source
limitations: value
reviewed_on: YYYY-MM-DD
review_status: DRAFT | REVIEW_REQUIRED | HUMAN_APPROVED
```

This record may live in a page, structured content source, review report, or PR evidence table. Do not add unsupported visible metadata merely to satisfy the example.

## Writing rules

- Use original writing.
- Present the strongest reliable evidence signal before its boundary.
- Separate observed outcomes from mechanisms and interpretation.
- State population and formulation limits.
- Distinguish statistical from clinical significance when material.
- Do not generalize surrogate endpoints into clinical benefit.
- Distinguish absent data from evidence of no effect or no risk.
- Preserve uncertainty without repetitive or promotional language.
- Follow `docs/EDITORIAL_STYLE.md` where it does not conflict with this standard.

## Regulatory standard

- Verify time-sensitive regulatory statements on the recorded review date.
- Use official sources for approval, authorization, indication, contraindication, warning, label, or trial-status claims.
- Name the jurisdiction when material.
- Approval applies to a particular product/formulation, indication, population, route, and jurisdiction.
- Distinguish registered, recruiting, completed, announced, submitted, authorized, accelerated/conditional, and fully approved states.
- Do not infer approval from availability or a registered trial.
- Material regulatory changes require qualified human approval before publication.

## Safety standard

- Report observed adverse events with study context and denominators when reliably available.
- Describe missing duration, population, formulation, interaction, and rare-event data.
- Do not imply safety from small samples or absent reports.
- Preparation content, label dosing and cited study-arm doses follow `docs/PREPARATION_AND_DOSE_POLICY.md`.
- Do not create dose recommendations, cycles, stacks, sourcing, or individualized treatment guidance.
- Evidence-only descriptions of study arms must be clearly framed as study reporting, not user instructions.
- Flag ambiguous actionable content for human clinical-safety review.

## Review dates and states

Scientific pages should distinguish:

- `scientific_review_date`: when claims and sources were checked.
- `regulatory_verification_date`: when official status was checked.
- `review_status`: `DRAFT`, `REVIEW_REQUIRED`, or `HUMAN_APPROVED`.

Agents may prepare `DRAFT` and `REVIEW_REQUIRED` content. They may not assign `HUMAN_APPROVED` to their own material scientific work.

Before changing a scientific page, the Scientific Content Agent must read the corresponding `scientific_review` value and locale status in `data/content-manifest.json`. Approved work that materially changes the page or its readiness must update the manifest, but an agent must never set a manifest review field to `HUMAN_APPROVED` for its own work.

## Translation rule

Translations preserve claim meaning, evidence class, uncertainty, dates, citations, and jurisdiction. Translation does not substitute for scientific review when the localized text changes meaning or adds locally specific regulatory claims.

## Required scientific handoff

- Evidence table by class.
- Claim/source record for material changes.
- Scientific and regulatory dates.
- Safety scan result.
- Explicit unavailable/N/A fields.
- Qualified human-review items.
