# Product and Architecture Decisions

## 2026-08-02 — Platform-led homepage

**Decision:** The homepage leads with platform services and health intelligence rather than individual peptide cards.

**Reason:** The product is broader than a molecule directory and is evolving toward research, biomarkers, comparisons, reports and AI-assisted discovery.

**Status:** Adopted in Release 0.2.

## 2026-08-02 — Static architecture preserved

**Decision:** Continue with HTML, shared CSS, progressive JavaScript and GitHub Pages for Release 0.2.

**Reason:** The current architecture supports the immediate product experience without migration risk. A framework migration would add cost before authentication, content scale and data requirements are validated.

**Status:** Adopted.

## 2026-08-02 — Public profiles remain accessible

**Decision:** Do not hide existing scientific profiles behind a fake paywall.

**Reason:** Authentication and entitlement systems are not implemented. Public content supports discovery, trust and SEO. Future membership will add depth, tools, reports and personalization.

**Status:** Adopted.

## 2026-08-02 — Planned features are labeled

**Decision:** Membership, AI Advisor, dashboards and enterprise features must be visibly described as planned until operational.

**Reason:** The interface must not create false product availability.

**Status:** Adopted.

## 2026-08-02 — Balanced scientific tone

**Decision:** Explain the strongest evidence signal before the limitation. Avoid repetitive defensive phrasing while preserving evidence and regulatory boundaries.

**Reason:** Scientific uncertainty can be communicated accurately without making every section read like a warning.

**Status:** Adopted through `docs/EDITORIAL_STYLE.md`.

## 2026-08-02 — PepEducation remains the public name

**Decision:** Keep PepEducation in titles, navigation, structured data and public copy for Release 0.2. Treat MaxWellness as a future brand direction only.

**Reason:** Domain, legal, visual identity, redirects and SEO migration have not been approved.

**Status:** Superseded on 2026-10-31 by "WellMax becomes the public name".

## 2026-08-02 — Biomarker Center begins as architecture

**Decision:** Publish an indexable pilot center with clearly labeled planned profiles rather than inventing complete biomarker pages.

**Reason:** This creates navigation, taxonomy and product direction without presenting incomplete summaries as finished clinical guidance.

**Status:** Adopted.

## 2026-08-02 — Comparison framework is non-prescriptive

**Decision:** Comparisons organize mechanism, evidence maturity, population, outcomes, safety and regulation. They do not rank treatments or recommend individualized choices.

**Reason:** Comparative intelligence should increase context without becoming prescribing guidance.

**Status:** Adopted.
## 2026-10-31 — WellMax becomes the public name

**Decision:** Use WellMax in titles, navigation, footers, structured data and public copy on every page. The repository URL (`/wellmax/`) is unchanged, so no redirect or URL migration is involved.

**Reason:** The maintainer asked for WellMax branding on every page as part of turning the site into a wellness portal. Production already lives under `/wellmax/`, and mixed PepEducation/WellMax naming confused readers.

**Status:** Adopted on branch `feat/portal-foundation`; pending human merge.

## 2026-10-31 — Supplements join the primary navigation

**Decision:** Primary navigation becomes Explore, Library, Peptides, Supplements, Biomarkers and Comparisons. Membership moves to page footers and homepage calls to action.

**Reason:** Supplements and peptides are the two most requested content areas; Membership describes planned features that are not available yet.

**Status:** Adopted on branch `feat/portal-foundation`; pending human merge.
