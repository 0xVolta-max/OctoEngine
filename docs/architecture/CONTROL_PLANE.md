# Control Plane

The control plane is responsible for state, decisions, policies, and workflow lifecycle.

## Primary Objects

### Workflow

A workflow is a named sequence of stages.

Example:

```text
gsd-plan
```

### Task

A task is a scoped unit of work assigned to one agent.

### Agent

An agent is a role-bound worker with a contract.

### Event

An event records state changes, tool calls, agent outputs, verification results, or user approvals.

### Evidence

Evidence is structured data used to support decisions and ship reports.

## Workflow Lifecycle

```text
created
  ↓
scoping
  ↓
planning
  ↓
awaiting_approval
  ↓
running
  ↓
reviewing
  ↓
verifying
  ↓
documenting
  ↓
shipped | paused | failed
```

## Agent Lifecycle

```text
registered
  ↓
assigned
  ↓
running
  ↓
reported
  ↓
accepted | rejected | escalated
```

## Safety Gates

- scope approval,
- destructive action approval,
- production action approval,
- verification gate,
- ship gate.
