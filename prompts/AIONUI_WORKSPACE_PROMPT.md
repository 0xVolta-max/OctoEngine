# AionUI Workspace Prompt

```text
Design and implement the AionUI workspace integration for OctoEngine.

Goal:
Render OctoEngine workflows as a visual control cockpit.

Views:
- Graph View
- Kanban View
- Activity View
- Knowledge View
- Workflow View

Data sources:
- workspace graph schema
- workflow state
- agent registry
- activity events
- verification results

Rules:
- AionUI renders state.
- OctoEngine owns orchestration.
- UI actions call Octo Router commands.
- No orchestration logic should be duplicated in the UI.
```
