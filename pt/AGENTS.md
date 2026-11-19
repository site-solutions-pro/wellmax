# Portuguese Locale Instructions

These instructions apply to every file under `pt/` and supplement the root `AGENTS.md`.

## Locale identity

- Use `pt-BR` for HTML language metadata and Brazilian Portuguese for visible copy.
- The production prefix is `/wellmax/pt/`.
- A Portuguese page must use a self-canonical under `/wellmax/pt/`.
- Track the content identity against its English and Spanish equivalents using the statuses in `docs/I18N_STANDARD.md`.

## Navigation and links

- Keep navigation, CTA, card, breadcrumb, footer, and related-content links inside `/pt/` whenever the Portuguese destination exists.
- From `pt/index.html`, link to `library.html`, not `../library.html`, when `pt/library.html` exists.
- From nested Portuguese pages, calculate the relative path to the Portuguese destination; do not escape to the English root accidentally.
- Language switchers may cross locales. When the equivalent translation exists, preserve the same content identity rather than routing to a locale homepage.
- Do not create a localized link to a missing file. Use a clearly documented fallback only when the product decision permits it.

## Translation and science

- Translation must preserve meaning, evidence class, uncertainty, safety boundaries, references, regulatory jurisdiction, dates, and structured-data claims.
- Do not translate an English approval statement into a broader Brazilian regulatory claim.
- Regulatory claims relevant to Brazil require an official Brazilian source and dated verification when presented as Brazilian status.
- Preparation content, label dosing and cited study-arm doses follow `docs/PREPARATION_AND_DOSE_POLICY.md`, with the PT-BR warning text.
- Do not add dose recommendations, invented doses, cycles, stacks, sourcing, or self-administration advice.
- Existing flagged safety content remains subject to `docs/SAFETY_CONTENT_REVIEW.md` and human review.

## Required handoff checks

- Correct `lang="pt-BR"` and `/pt/` canonical.
- PT-local navigation where equivalents exist.
- Reciprocal hreflang when translations exist.
- Locale-specific title and meta description.
- Translation status recorded.
- Links, fragments, assets, sitemap, and JSON-LD validated.
- Scientific claims reviewed under the relevant content-type contract.
