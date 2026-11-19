# WellMax Content Page Contract

## Purpose

This contract defines publication and review fields for molecule, supplement, and biomarker pages. It is designed for human review now and a future machine-readable manifest without requiring unsupported content.

Missing evidence is a valid result. Use:

- `N/A`: the field does not apply to this identity.
- `EVIDENCE_UNAVAILABLE`: the field applies, but reliable evidence was not identified as of the review date.
- `REVIEW_REQUIRED`: content exists but requires qualified review.

Never invent data to replace these states.

## Status vocabulary

```yaml
page_type: MOLECULE | SUPPLEMENT | BIOMARKER
publication_status: SHELL | PARTIAL | REVIEW_REQUIRED | PUBLICATION_READY | PUBLISHED
translation_status: COMPLETE | PARTIAL | SHELL | MISSING | REVIEW_REQUIRED
scientific_review_status: NOT_STARTED | DRAFT | REVIEW_REQUIRED | HUMAN_APPROVED | N/A
regulatory_review_status: NOT_STARTED | DRAFT | REVIEW_REQUIRED | HUMAN_APPROVED | N/A
evidence_status: HUMAN_RANDOMIZED | HUMAN_OBSERVATIONAL | PRECLINICAL | IN_VITRO | MECHANISTIC | THEORETICAL | MIXED | EVIDENCE_UNAVAILABLE
field_status: COMPLETE | PARTIAL | N/A | EVIDENCE_UNAVAILABLE | REVIEW_REQUIRED
```

Agents may not assign `HUMAN_APPROVED` to their own material scientific or regulatory work.

## Identity record

Every content identity should be representable as:

```yaml
identity: stable category/slug
page_type: MOLECULE | SUPPLEMENT | BIOMARKER
category: controlled category label
slug: stable slug
locale: en | pt-BR | es
repository_path: path/to/page.html
production_url: https://site-solutions-pro.github.io/wellmax/...
canonical_url: self canonical
publication_status: STATUS
translation_status: STATUS
evidence_status: STATUS
scientific_review_status: STATUS
scientific_review_date: YYYY-MM-DD | N/A
regulatory_review_status: STATUS
regulatory_verification_date: YYYY-MM-DD | N/A
owner_or_reviewer: value | REVIEW_REQUIRED
```

This schema is a contract, not a requirement to add visible YAML or new meta tags to legacy pages in v1.

`data/content-manifest.json` records family-level routes, locale status, discovery, priority, and review requirements. The manifest must reference this canonical contract for classification rather than copying its field-level checklists. Approved work that materially changes a page or its readiness must update the manifest and status report in the same pull request.

## Common publication checklist

### Identity and SEO

- [ ] Stable identity, category, slug, locale, and repository path.
- [ ] Exactly one title.
- [ ] Exactly one H1.
- [ ] Unique meta description.
- [ ] One self-canonical under the WellMax production base.
- [ ] Correct HTML locale.
- [ ] Reciprocal hreflang for translations that exist.
- [ ] Open Graph and Twitter metadata appropriate to visible content.
- [ ] Appropriate valid JSON-LD or explicit `N/A` with reason.
- [ ] Sitemap entry maps exactly to the file.

### Navigation and discovery

- [ ] Breadcrumb or explicit `N/A` for a page type where not required.
- [ ] Same-locale navigation when equivalents exist.
- [ ] Contextual internal links.
- [ ] Related content or `EVIDENCE_UNAVAILABLE`/`N/A` where no responsible relationship exists.
- [ ] At least one appropriate inbound discovery route before publication.
- [ ] All links, fragments, and local assets resolve.

### Science and safety

- [ ] Educational purpose and boundary.
- [ ] Evidence classes kept separate.
- [ ] Observed outcomes separated from mechanisms and interpretation.
- [ ] Population/model, comparator, endpoint, duration, and limitations when material.
- [ ] Primary/official sources preferred.
- [ ] Scientific review status and date.
- [ ] Regulatory status, jurisdiction, review status, and date where applicable.
- [ ] Safety findings and evidence limitations or `EVIDENCE_UNAVAILABLE`.
- [ ] No fabricated facts or citations.
- [ ] Preparation and dose content complies with `docs/PREPARATION_AND_DOSE_POLICY.md` and shows the standard warning block; no dose recommendations, cycles, stacks or sourcing.

### UX and quality

- [ ] Semantic heading hierarchy.
- [ ] Keyboard-accessible navigation and controls.
- [ ] Visible focus, readable contrast, and responsive layout.
- [ ] Useful alt text or correct decorative treatment.
- [ ] No inert or misleading controls.
- [ ] Required local tests, independent QA, and hosted CI pass.
- [ ] Material scientific content has qualified human approval.

## Molecule contract

Use for peptides, research molecules, approved medicines, investigational compounds, and named blends where identity is reliably established.

```yaml
molecule:
  identity_and_synonyms: STATUS
  compound_class: STATUS
  composition_or_formula: STATUS | EVIDENCE_UNAVAILABLE
  mechanism_receptors_pathways: STATUS | EVIDENCE_UNAVAILABLE
  pharmacology: STATUS | EVIDENCE_UNAVAILABLE
  pharmacokinetics: STATUS | EVIDENCE_UNAVAILABLE
  pharmacodynamics: STATUS | EVIDENCE_UNAVAILABLE
  human_randomized_evidence: STATUS | EVIDENCE_UNAVAILABLE
  human_observational_evidence: STATUS | EVIDENCE_UNAVAILABLE
  preclinical_evidence: STATUS | EVIDENCE_UNAVAILABLE
  in_vitro_evidence: STATUS | EVIDENCE_UNAVAILABLE
  mechanistic_evidence: STATUS | EVIDENCE_UNAVAILABLE
  theoretical_interpretation: STATUS | N/A
  development_status_and_timeline: STATUS | EVIDENCE_UNAVAILABLE
  principal_studies: STATUS | EVIDENCE_UNAVAILABLE
  safety_and_adverse_events: STATUS | EVIDENCE_UNAVAILABLE
  regulatory_status_by_jurisdiction: STATUS | REVIEW_REQUIRED
  evidence_limitations: STATUS
  evidence_based_comparisons: STATUS | N/A | EVIDENCE_UNAVAILABLE
  faq: STATUS | N/A
  references: STATUS
```

Additional rules:

- Named blends require verified composition; do not infer ingredients from a commercial name.
- Approval must not be generalized beyond the official product, indication, population, route, and jurisdiction.
- Study-arm dose reporting may be included as evidence context only when clearly non-prescriptive.
- Product/slug migrations require a human-approved redirect and SEO plan.

## Supplement contract

```yaml
supplement:
  identity_forms_and_synonyms: STATUS
  nutrient_or_compound_class: STATUS
  biological_role: STATUS | EVIDENCE_UNAVAILABLE
  deficiency_context: STATUS | N/A | EVIDENCE_UNAVAILABLE
  formulation_and_bioavailability: STATUS | EVIDENCE_UNAVAILABLE
  human_randomized_evidence: STATUS | EVIDENCE_UNAVAILABLE
  human_observational_evidence: STATUS | EVIDENCE_UNAVAILABLE
  preclinical_evidence: STATUS | EVIDENCE_UNAVAILABLE
  in_vitro_evidence: STATUS | EVIDENCE_UNAVAILABLE
  mechanistic_evidence: STATUS | EVIDENCE_UNAVAILABLE
  clinical_outcome_vs_surrogate_boundary: STATUS
  safety_adverse_effects: STATUS | EVIDENCE_UNAVAILABLE
  interactions_and_contraindication_context: STATUS | EVIDENCE_UNAVAILABLE
  authoritative_reference_values: STATUS | N/A | EVIDENCE_UNAVAILABLE
  regulatory_or_label_context: STATUS | N/A | REVIEW_REQUIRED
  evidence_limitations: STATUS
  references: STATUS
```

Additional rules:

- Separate deficiency correction from supplementation in replete populations.
- Specify the studied chemical form/formulation when it changes interpretation.
- Reference values or upper limits are context, not individualized prescriptions.
- Do not recommend a personalized dose, schedule, combination, or purchase.

## Biomarker contract

```yaml
biomarker:
  analyte_identity_and_synonyms: STATUS
  specimen_and_assay_context: STATUS | EVIDENCE_UNAVAILABLE
  units: STATUS | EVIDENCE_UNAVAILABLE
  biological_role: STATUS | EVIDENCE_UNAVAILABLE
  reference_interval_context: STATUS | EVIDENCE_UNAVAILABLE
  clinical_decision_thresholds: STATUS | N/A | EVIDENCE_UNAVAILABLE
  diagnostic_criteria_boundary: STATUS | N/A | EVIDENCE_UNAVAILABLE
  human_randomized_evidence: STATUS | EVIDENCE_UNAVAILABLE
  human_observational_evidence: STATUS | EVIDENCE_UNAVAILABLE
  preclinical_evidence: STATUS | N/A | EVIDENCE_UNAVAILABLE
  mechanistic_evidence: STATUS | EVIDENCE_UNAVAILABLE
  confounders_and_biological_variation: STATUS | EVIDENCE_UNAVAILABLE
  assay_and_population_limitations: STATUS
  association_vs_causation_boundary: STATUS
  regulatory_or_guideline_context: STATUS | N/A | REVIEW_REQUIRED
  safety_or_critical_value_context: STATUS | N/A | REVIEW_REQUIRED
  references: STATUS
```

Additional rules:

- Distinguish reference intervals, risk associations, diagnostic thresholds, and treatment targets.
- State laboratory, assay, unit, population, and jurisdiction variability.
- Do not diagnose from a value or prescribe testing/treatment.
- Critical-value or urgent-action language requires authoritative sourcing and qualified human review.

## Publication decision

A page may become `PUBLICATION_READY` only when:

- All common required fields are complete or explicitly and validly `N/A`/`EVIDENCE_UNAVAILABLE`.
- Type-specific required fields are complete or explicitly unavailable.
- No `REVIEW_REQUIRED` blocker remains.
- QA and SEO/i18n reviews pass.
- Material scientific and regulatory content has qualified human approval.
- Required CI passes.

Publication readiness is not merge permission. Merge remains a human decision.
