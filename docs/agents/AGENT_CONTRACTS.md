# Agent Contracts

Agent contracts make OctoEngine replaceable and extensible.

## Contract Shape

```yaml
id: graphify-scope-agent
name: Graphify Scope Agent
mission: Understand repository scope and dependency impact.
inputs:
  - task_intent
  - repository_metadata
outputs:
  - scope_summary
  - impacted_areas
  - recommended_inspection_targets
tools:
  - graphify
forbidden:
  - editing files
  - running destructive commands
```

## Required Output Format

Every agent output must include:

```yaml
agent_id:
task_id:
summary:
evidence:
findings:
risks:
recommendation:
next_actions:
```

## Escalation Rules

Agents must escalate when:

- required context is missing,
- scope is ambiguous,
- requested action is destructive,
- verification cannot be completed,
- tool output conflicts with memory or repository state.
