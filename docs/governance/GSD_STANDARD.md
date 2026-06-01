# GSD Standard

GSD means **Get Shit Done**.

In OctoEngine it is not a model alias. It is the workflow standard for moving from intent to verified completion.

## GSD Command Set

- `/gsd-plan`
- `/gsd-run`
- `/gsd-review`
- `/gsd-ship`
- `/gsd-pause-work`

## Standard Workflow Shape

```text
Intent
  ↓
Memory Retrieval
  ↓
Scope Graph
  ↓
Targeted Inspection
  ↓
Plan
  ↓
Implementation
  ↓
Verification
  ↓
Documentation
  ↓
Ship or Pause
```

## GSD Rules

1. Never skip scope analysis for non-trivial changes.
2. Never edit before inspection.
3. Never ship without verification evidence.
4. Never allow destructive actions without explicit confirmation.
5. Never treat model output as truth without repository evidence.
6. Always record known gaps.
7. Always keep documentation concise and useful.
