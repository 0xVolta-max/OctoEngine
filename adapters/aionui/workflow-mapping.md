# AionUI Workflow Mapping

## Command Palette Actions

| AionUI Action | OctoEngine Command |
|---|---|
| Plan Task | `/gsd-plan` |
| Run Approved Plan | `/gsd-run` |
| Review Current Diff | `/gsd-review` |
| Prepare Ship Report | `/gsd-ship` |
| Pause Work | `/gsd-pause-work` |

## Workspace Events

AionUI should subscribe to:

- workflow.created
- workflow.stage.changed
- agent.assigned
- agent.output.received
- tool.called
- verification.completed
- approval.required
- workflow.shipped
- workflow.paused
