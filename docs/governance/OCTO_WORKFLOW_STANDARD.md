# Octo Workflow Standard

Octo Workflows define the command and delivery standard.

In OctoEngine it is not a model alias. It is the workflow standard for moving from intent to verified completion.

## Octo Command Set

- `/octo-plan`
- `/octo-run`
- `/octo-review`
- `/octo-ship`
- `/octo-pause-work`

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

## Octo Workflow Rules

1. Never skip scope analysis for non-trivial changes.
2. Never edit before inspection.
3. Never ship without verification evidence.
4. Never allow destructive actions without explicit confirmation.
5. Never treat model output as truth without repository evidence.
6. Always record known gaps.
7. Always keep documentation concise and useful.
