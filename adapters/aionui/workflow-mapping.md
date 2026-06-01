# AionUI Workflow Mapping

## Command Palette Actions

| AionUI Action       | OctoEngine Command |
| ------------------- | ------------------ |
| Plan Task           | `/octo-plan`       |
| Run Approved Plan   | `/octo-run`        |
| Review Current Diff | `/octo-review`     |
| Prepare Ship Report | `/octo-ship`       |
| Pause Work          | `/octo-pause-work` |

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
