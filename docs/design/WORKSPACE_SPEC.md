# Workspace Specification

The OctoEngine workspace is the visual cockpit for agent engineering.

AionUI is the primary target UI.

Claude Desktop/Cowork is a compatibility interface and should not duplicate workspace logic.

## Workspace Views

### 1. Graph View

Visualizes:

- agents,
- workflows,
- task dependencies,
- MCP tools,
- knowledge nodes,
- repositories,
- model routes,
- verification gates.

### 2. Kanban View

Columns:

- Backlog
- Planned
- Running
- Review
- Verifying
- Shipped
- Paused

### 3. Activity View

Shows:

- agent events,
- tool calls,
- model invocations,
- user approvals,
- errors,
- verification results.

### 4. Knowledge View

Shows:

- Obsidian notes,
- memory entries,
- decision records,
- architecture docs,
- project context.

### 5. Workflow View

Shows:

- current stage,
- assigned agents,
- pending approvals,
- verification state,
- ship readiness.

## Workspace Data Contract

The workspace should consume normalized state from OctoEngine:

```json
{
  "workflow_id": "wf_123",
  "status": "running",
  "nodes": [],
  "edges": [],
  "events": [],
  "verification": {}
}
```

## UI Rule

The workspace renders state and triggers actions. It does not own orchestration logic.
