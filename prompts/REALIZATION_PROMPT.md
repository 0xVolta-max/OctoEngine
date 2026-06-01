# OctoEngine Realization Prompt

Use this prompt in Claude Code, OpenCode, Codex, or another implementation agent to create the first public repository.

```text
You are implementing OctoEngine.

Goal:
Create the first public repository foundation for an open-source Agent Engineering Control Plane.

Use the provided documentation set as the source of truth.

Core architecture:
- Engineering OS = governance
- Octogen = orchestration
- Hermes = execution/runtime adapter
- GSD Router = workflow command layer
- LiteLLM = model routing
- MCP = tool integration
- AionUI = primary workspace UI
- Claude Desktop/Cowork = secondary compatibility interface

Required:
1. Preserve all docs.
2. Create modular package scaffolding.
3. Add schemas.
4. Add example configs.
5. Add README files for all packages.
6. Add validation scripts.
7. Do not implement unsafe automation.
8. MCP integrations default to read-only.
9. Destructive actions require explicit confirmation.
10. Keep repository public-ready and professional.

Implementation order:
1. Validate repository structure.
2. Create package scaffolds.
3. Add type definitions for agents, workflows, events, workspace graph.
4. Add static registry loader.
5. Add workflow parser.
6. Add CLI stub for gsd commands.
7. Add workspace graph JSON generator stub.
8. Add docs validation.
9. Run verification.
10. Produce final report.

Do not connect to real external systems in the first implementation wave.
Use adapters and mocks only.
```
