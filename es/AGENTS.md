# Spanish Locale Instructions

These instructions apply to every file under `es/` and supplement the root `AGENTS.md`.

## Locale identity

- Use `es` for HTML language metadata unless a maintainer approves a more specific regional locale.
- The production prefix is `/wellmax/es/`.
- A Spanish page must use a self-canonical under `/wellmax/es/`.
- Track the content identity against its English and Portuguese equivalents using the statuses in `docs/I18N_STANDARD.md`.

## Navigation and links

- Keep navigation, CTA, card, breadcrumb, footer, and related-content links inside `/es/` whenever the Spanish destination exists.
- From `es/index.html`, link to a local Spanish destination rather than `../destination.html` when the equivalent exists.
- From nested Spanish pages, calculate paths within the Spanish tree.
- Language switchers may cross locales and must preserve content identity when translations exist.
- Do not create links to missing localized files or silently route a Spanish content link to an English page.

## Translation and science

- Preserve scientific meaning, evidence class, uncertainty, safety language, citations, review dates, and regulatory jurisdiction.
- Do not imply that an FDA, EMA, or other jurisdictional decision automatically applies to every Spanish-speaking jurisdiction.
- Preparation content, label dosing and cited study-arm doses follow `docs/PREPARATION_AND_DOSE_POLICY.md`, with the ES warning text.
- Do not add dose recommendations, invented doses, cycles, stacks, sourcing, or self-administration advice.
- Mark incomplete translations explicitly rather than presenting a shell as complete.

## Required handoff checks

- Correct `lang="es"` and `/es/` canonical.
- ES-local navigation where equivalents exist.
- Reciprocal hreflang when translations exist.
- Locale-specific title and meta description.
- Translation status recorded.
- Links, fragments, assets, sitemap, and JSON-LD validated.
- Scientific claims reviewed under the relevant content-type contract.
