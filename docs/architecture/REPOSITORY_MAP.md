# Repository Map

## Recommended Initial Structure

Start with one repository and modular internal packages.

```text
octoengine/
  apps/
    workspace-demo/
  packages/
    engineering-os/
    octogen/
    gsd-router/
    workspace-core/
    litellm-adapter/
    mcp-adapter/
    hermes-adapter/
  agents/
  workflows/
  adapters/
  schemas/
  docs/
  examples/
  prompts/
```

## Future Repository Ecosystem

If the project grows, split into:

```text
octoengine-core
engineering-os
octogen
gsd-router
octo-workspace
octo-agents
octo-mcp
octo-docs
octo-examples
octo-starter
```

## Extraction Rule

Do not split repositories until:

- package boundaries are stable,
- public APIs are documented,
- at least two external integrations depend on a package,
- CI release flow exists.
