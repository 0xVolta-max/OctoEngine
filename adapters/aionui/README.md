# AionUI Adapter

AionUI is the primary visual workspace target for OctoEngine.

## Role

AionUI should:

- display workflow state,
- render graph views,
- render kanban views,
- show agent activity,
- trigger GSD workflows,
- expose command and chat interfaces.

AionUI should not own orchestration logic.

## Integration Pattern

```text
AionUI
  ↓
OctoEngine Workspace API
  ↓
GSD Router
  ↓
Octogen
```

## Required Views

- Graph View
- Kanban View
- Activity View
- Knowledge View
- Workflow View
