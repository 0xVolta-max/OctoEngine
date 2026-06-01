# Verification Ladder

The Verification Ladder defines increasing levels of confidence.

## Level 0 — Stated Reasoning

The agent explains what it believes is correct.

Not sufficient for shipping.

## Level 1 — Static Inspection

Relevant files were inspected and cited in internal agent evidence.

## Level 2 — Diff Review

Changes were reviewed for scope, consistency, and obvious regressions.

## Level 3 — Automated Checks

Run applicable commands:

- lint
- typecheck
- unit tests
- build
- schema validation

## Level 4 — Runtime Smoke

Run or simulate the feature in its intended environment.

## Level 5 — Release Evidence

Provide final ship report:

- what changed,
- why it changed,
- verification commands,
- known gaps,
- rollback notes,
- docs updated.

## Minimum Standards

### Documentation-only change

Level 2.

### Code change

Level 3.

### UI change

Level 3 + visual/smoke evidence.

### Database/infrastructure change

Level 4 + rollback notes.

### Production-impacting change

Level 5 + explicit approval.
