# OctoEngine

**OctoEngine** is an open-source Agent Engineering Control Plane.

It turns persona-based engineering guidance into an orchestrated, verifiable, multi-agent operating system for AI-native software delivery.

OctoEngine unifies:

- **Engineering OS** as governance and delivery standard
- **Octogen** as orchestration and agent management layer
- **Hermes** as optional execution/runtime adapter
- **GSD Router MCP** as command and workflow entrypoint
- **LiteLLM** as model routing layer
- **MCP ecosystem** as tool layer
- **AionUI** as primary visual workspace
- **Claude Desktop/Cowork** as secondary compatibility interface

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

This package is the professional foundation set for creating the public OctoEngine repository or repository ecosystem.

Generated: `2026-05-31`

## Recommended Initial Repo Strategy

Start as a single public repository:

```text
octoengine/
```

Keep internal packages modular so they can later be extracted:

```text
packages/
  engineering-os/
  octogen/
  gsd-router/
  workspace-core/
  litellm-adapter/
  mcp-adapter/
  hermes-adapter/
```

## License

MIT. See [LICENSE](./LICENSE).
