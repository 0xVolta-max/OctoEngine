# MVP Specification

## MVP Objective

Create a public, professional OctoEngine foundation that can be used as the basis for implementation in Claude Code, OpenCode, AionUI, or Hermes.

## MVP Scope

The MVP is documentation-first and architecture-complete.

It must provide:

1. repository structure,
2. governance rules,
3. agent contracts,
4. workflow definitions,
5. adapter specifications,
6. workspace schemas,
7. model routing standards,
8. realization prompts,
9. example project integration.

## MVP Deliverables

### Required Documentation

- `VISION.md`
- `PHILOSOPHY.md`
- `NORTH_STAR.md`
- `PRD.md`
- `MVP.md`
- `ROADMAP.md`
- `SUCCESS_METRICS.md`
- `SYSTEM_ARCHITECTURE.md`
- `CONTROL_PLANE.md`
- `REPOSITORY_MAP.md`
- `MODEL_ROUTING.md`
- `MCP_ARCHITECTURE.md`
- `DESIGN_SYSTEM.md`
- `WORKSPACE_SPEC.md`
- `AGENT_CONTRACTS.md`
- `META_PROMPTS.md`

### Required Agent Specs

- Evolution Manager
- Graphify Scope Agent
- Caveman Inspector Agent
- Obsidian Memory Agent
- Frontend Taste Agent
- Impeccable Reviewer Agent
- Emil Kovalski Director Agent
- QA Verification Agent
- Docs Compression Agent

### Required Workflow Specs

- `/gsd-plan`
- `/gsd-run`
- `/gsd-review`
- `/gsd-ship`
- `/gsd-pause-work`

### Required Adapter Specs

- AionUI
- Claude Desktop/Cowork
- Hermes
- LiteLLM
- MCP
- Octogen

## MVP Acceptance Criteria

The MVP is complete when:

- all required docs exist,
- all core agents have contracts,
- all GSD workflows have lifecycle definitions,
- AionUI workspace schema exists,
- Claude Desktop MCP compatibility example exists,
- LiteLLM model role mapping exists,
- read-only MCP policy is documented,
- realization prompts are ready for implementation.

## Out of Scope for MVP

- production SaaS backend,
- hosted marketplace,
- multi-user auth,
- billing,
- complete custom desktop application,
- autonomous production deployment.
