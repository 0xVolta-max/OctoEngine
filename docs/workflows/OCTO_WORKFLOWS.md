# Octo Workflows

Octo Workflows are OctoEngine's delivery workflow standard.

## /octo-plan

Purpose: create a scoped plan without modifying files.

Stages:

1. Obsidian memory retrieval
2. Graphify scope analysis
3. Caveman targeted inspection
4. plan generation
5. approval gate

## /octo-run

Purpose: execute an approved plan.

Stages:

1. load approved plan
2. assign implementer
3. execute changes
4. collect diff
5. handoff to review

## /octo-review

Purpose: review changes without implementation.

Stages:

1. diff review
2. architecture review
3. frontend review
4. QA review
5. risk report

## /octo-ship

Purpose: verify and prepare release.

Stages:

1. verification ladder
2. docs compression
3. ship report
4. pause-or-ship decision

## /octo-pause-work

Purpose: stop safely and preserve context.

Stages:

1. capture state
2. record blockers
3. document next steps
4. create handoff summary
