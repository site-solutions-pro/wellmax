# n8n Integration Contract for WellMax

## Purpose
This document defines the minimum contract for an n8n instance to orchestrate WellMax autonomous agents while preserving GitHub as the authoritative source-control and publication system.

## Required n8n credentials
Configure credentials in n8n, not in the repository:
- GitHub credential with repository read/write, pull-request and workflow-read permissions;
- model/API credentials for research, drafting and review agents;
- optional search/research provider credentials;
- optional notification channel credentials.

Never commit secrets, personal access tokens or API keys to this repository.

## Master workflow
Recommended workflow name: `WellMax - Master Orchestrator`.

Trigger options:
- Cron every 15-60 minutes; or
- GitHub webhook plus a periodic reconciliation cron.

Nodes:
1. Trigger.
2. Load current roadmap/backlog.
3. Load open GitHub PRs and branches.
4. Load pipeline state store.
5. Reconcile state with GitHub reality.
6. Select highest-priority unlocked item.
7. Acquire item lock.
8. Switch on `status`.
9. Execute the responsible sub-workflow.
10. Persist state/result.
11. Release or renew lock.
12. Stop without notification when no action is required.

## Suggested sub-workflows

### `WellMax - Research Agent`
Input:
- item_id
- title
- content_type
- locale
- existing_page_path
- research_question

Output:
- state
- evidence summary
- source list
- unresolved questions
- blocking reason

### `WellMax - Content Agent`
Input:
- approved research package
- applicable page contract
- existing content

Output:
- proposed files
- change summary
- scientific review notes

### `WellMax - Design UX Agent`
Input:
- PR/branch files

Output:
- UX approval or requested changes
- accessibility notes
- responsive notes

### `WellMax - SEO Agent`
Input:
- PR/branch files
- public URL

Output:
- SEO approval or requested changes
- metadata/internal-link recommendations

### `WellMax - Tier 2 Science Reviewer`
Input:
- complete PR diff
- research package

Output exactly one decision:
- `TIER_2_SCIENCE_APPROVED`
- `TIER_2_SCIENCE_CHANGES_REQUIRED`

The decision must include evidence and a concise reason.

### `WellMax - Tier 3 Publisher`
Input:
- PR number
- current approvals
- required check status

Hard conditions before merge:
- Tier 2 approved;
- UX approved;
- SEO approved;
- required checks green;
- no unresolved change requests;
- branch mergeable;
- AGENTS.md safety requirements satisfied.

If true: squash merge.
If false: `TIER_3_BLOCKED`.

## State store
Preferred options:
1. PostgreSQL / Supabase;
2. n8n Data Tables if available and appropriate;
3. small external database.

Do not use GitHub comments as the only state store. Comments are audit evidence, not reliable workflow state.

Use `automation/wellmax-agent-state.schema.json` as the canonical record shape.

## Locking
Before an agent acts, set:
- `lock_owner`
- `lock_expires_at`

If an unexpired lock exists, do not dispatch another agent for the same item.

Expired locks may be reclaimed after reconciling GitHub state.

## GitHub event handling
Useful webhook events:
- pull_request
- pull_request_review
- check_suite / workflow_run
- push to task branches
- issues if the roadmap uses GitHub Issues

Every webhook should trigger reconciliation, not blindly advance state.

## Retry policy
Retry only transient failures such as:
- API rate limits;
- temporary network failure;
- external service 5xx responses.

Do not automatically override or retry away:
- scientific review failures;
- unsupported claims;
- broken tests;
- accessibility defects;
- merge conflicts;
- safety-policy violations.

Those must return to the responsible agent.

## Publication policy
The n8n workflow must never push directly to `main`.

Publication sequence:
1. content committed to task branch;
2. PR opened/updated;
3. Tier 1 approvals;
4. Tier 2 approval;
5. GitHub Actions green;
6. Tier 3 approval;
7. squash merge;
8. deployment verification;
9. state becomes `PUBLISHED`.

## Notifications
Default behavior should be quiet. Notify the maintainer only for:
- persistent external-service failure;
- unresolved scientific/regulatory ambiguity;
- architecture decision;
- security/credential issue;
- repeated Tier 3 block after automatic correction attempts.

Routine successful transitions should be recorded in state and PR audit trail without requiring human intervention.
