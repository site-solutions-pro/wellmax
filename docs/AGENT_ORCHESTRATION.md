# WellMax Autonomous Agent Orchestration

## Objective
Operate WellMax as a continuous editorial and product pipeline with independent production, review and publication roles. n8n is the preferred orchestration layer. GitHub remains the system of record for branches, pull requests, checks, approvals and deployment.

## Command hierarchy
The **Master Orchestrator** is the only agent allowed to decide what work starts next. It reads the roadmap, repository state, open PRs and pipeline state before assigning work.

Agents must not create duplicate work when an item already has an active branch or PR.

## Tier 1 — Production

### 1. Research Agent
Responsibilities:
- identify primary studies, systematic reviews, guidelines and official regulatory sources;
- record publication date, population, intervention, comparator, endpoint and limitations when material;
- separate human, animal, in vitro and mechanistic evidence;
- never invent citations, trial IDs, effect sizes or regulatory status.

Output state: `RESEARCH_COMPLETE` or `RESEARCH_BLOCKED`.

### 2. Content Agent
Responsibilities:
- draft original educational content from approved research;
- follow AGENTS.md and page contracts;
- preserve evidence uncertainty and safety framing;
- update internal links, hub discovery and sitemap when required.

Output state: `CONTENT_COMPLETE` or `CONTENT_CHANGES_REQUIRED`.

### 3. Design & UX Agent
Responsibilities:
- improve semantic structure, readability, mobile behavior and accessibility;
- reuse existing WellMax CSS and design tokens;
- avoid unnecessary dependencies and visual-only churn.

Output state: `UX_APPROVED` or `UX_CHANGES_REQUIRED`.

### 4. SEO & Marketing Agent
Responsibilities:
- validate title, meta description, canonical, OG/Twitter metadata, headings, internal links and search intent;
- improve educational CTAs and discoverability without unsupported claims;
- ensure new public pages are discoverable from an appropriate hub/category.

Output state: `SEO_APPROVED` or `SEO_CHANGES_REQUIRED`.

## Tier 2 — Independent Review

### Scientific & Safety Reviewer
Must be independent from the Content Agent for the same item.

Responsibilities:
- verify material claims against current primary/official sources;
- check numerical claims, safety, interactions, contraindications and regulatory language;
- reject fabricated citations, unsupported generalizations, medical claims or self-administration guidance;
- explicitly separate mechanism, biomarker and clinical outcome.

Approval marker: `TIER_2_SCIENCE_APPROVED`.
Failure marker: `TIER_2_SCIENCE_CHANGES_REQUIRED`.

## Tier 3 — Final Approval & Publication

### Publisher
May merge only when all gates are satisfied:
- Tier 1 outputs are approved;
- Tier 2 marker is `TIER_2_SCIENCE_APPROVED`;
- no unresolved change requests remain;
- required GitHub checks are complete and green;
- PR scope is coherent and limited;
- canonical, sitemap, links, accessibility and SEO checks pass;
- PR is mergeable;
- AGENTS.md safety rules are satisfied.

If any condition fails, set `TIER_3_BLOCKED` and do not merge.

If all conditions pass:
1. record `TIER_3_APPROVED`;
2. squash merge into `main` using a Conventional Commit title;
3. verify post-merge workflow/deployment status;
4. move the pipeline item to `PUBLISHED` only after merge confirmation.

## Pipeline states

Recommended canonical states:

`BACKLOG` → `SELECTED` → `RESEARCHING` → `RESEARCH_COMPLETE` → `DRAFTING` → `CONTENT_COMPLETE` → `UX_REVIEW` → `SEO_REVIEW` → `TIER_2_REVIEW` → `TIER_2_SCIENCE_APPROVED` → `TIER_3_REVIEW` → `PUBLISHED`

Any stage may move to a corresponding `*_CHANGES_REQUIRED` or `BLOCKED` state. The Master Orchestrator must route the item back to the responsible agent instead of skipping gates.

## n8n role
n8n should maintain pipeline state and execute the control loop:

1. Load roadmap and active work.
2. Find the highest-priority eligible item.
3. Ensure no duplicate active branch/PR exists.
4. Dispatch the correct agent based on current state.
5. Persist the new state and evidence of completion.
6. Poll or receive GitHub events for PR/check changes.
7. Route failures back to the responsible agent.
8. Invoke Tier 3 only after every prerequisite is satisfied.

## GitHub role
GitHub is authoritative for:
- source files;
- branches;
- commits;
- PRs and reviews;
- Actions checks;
- merge history;
- GitHub Pages deployment.

No agent may push directly to `main`.

## Concurrency
- Maximum one primary content batch active at a time until the pipeline is stable.
- Research-only work may be prepared ahead, but publication branches must remain isolated.
- The Orchestrator must lock an item before dispatch to avoid duplicate execution.

## Failure policy
Never convert scientific, safety or CI failures into warnings solely to keep the pipeline moving. External infrastructure failures may be retried; content or quality failures must return to the responsible agent.

## Human intervention
Routine work should not require maintainer approval. Human intervention is required only for:
- irreversible architecture migrations;
- conflicting product requirements;
- legal/regulatory ambiguity that cannot be resolved from authoritative sources;
- changes to public URL strategy or repository identity;
- secrets, credentials or external-service authorization.
