# OctoEngine

[![CI](https://github.com/0xVolta-max/OctoEngine/actions/workflows/ci.yml/badge.svg)](https://github.com/0xVolta-max/OctoEngine/actions/workflows/ci.yml)

**OctoEngine** is an open-source Agent Engineering Control Plane.

It turns persona-based engineering guidance into an orchestrated, verifiable, multi-agent operating system for AI-native software delivery.

OctoEngine unifies:

- **Engineering OS** as governance and delivery standard
- **Octogen** as orchestration and agent management layer
- **Hermes** as optional execution/runtime adapter
- **Octo Router** as command and workflow entrypoint
- **LiteLLM** as model routing layer
- **MCP ecosystem** as tool layer
- **AionUI** as primary visual workspace
- **Claude Code and Claude Desktop/Cowork** as compatibility interfaces

## North Star

A developer can start a project workflow with one command or one workspace action. OctoEngine then:

1. retrieves project memory,
2. narrows scope,
3. inspects only relevant files,
4. decomposes work,
5. assigns agents,
6. verifies changes,
7. updates documentation,
8. prepares a safe ship report.

## Repository Status

This repository is the public OctoEngine foundation.

Current version: `0.1.0`

Initial release: [`v0.1.0`](https://github.com/0xVolta-max/OctoEngine/releases/tag/v0.1.0)

## Quick Start

Requirements:

- Node.js `>=22`
- npm

Install and verify:

```bash
npm install
npm run build
npm test
npm run docs:check
npm run validate:schemas
```

## OctoEngine CLI

The repository includes a local smoke-test CLI:

```bash
NODE_NO_WARNINGS=1 npm --silent run octo -- workflows --json
NODE_NO_WARNINGS=1 npm --silent run octo -- octo-run --json
NODE_NO_WARNINGS=1 npm --silent run octo -- claude-test
```

Claude Code readiness check:

```bash
npm run smoke:claude
```

See [Claude Code Quickstart](./docs/integrations/CLAUDE_CODE_QUICKSTART.md) for the LiteLLM launch flow.

## Workflow Commands

- `octo-plan`
- `octo-run`
- `octo-review`
- `octo-ship`
- `octo-pause-work`

`npm run validate:schemas` checks JSON schemas, workflow YAML files, and workflow registry consistency.

## Repository Layout

OctoEngine currently ships as a single public repository:

```text
octoengine/
```

Keep internal packages modular so they can later be extracted:

```text
packages/
  engineering-os/
  octogen/
  octo-router/
  workspace-core/
  litellm-adapter/
  mcp-adapter/
  hermes-adapter/
```

## License

MIT. See [LICENSE](./LICENSE).
