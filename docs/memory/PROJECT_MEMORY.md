# OctoEngine Project Memory

## Identity

OctoEngine is an open-source Agent Engineering Control Plane. It turns persona-based engineering guidance into orchestrated, verifiable, multi-agent software delivery.

## Current Release

- GitHub: `https://github.com/0xVolta-max/OctoEngine`
- Initial release: `v0.1.0`
- Local repo: `/Volumes/SSD 1TB Portabel 1/Dev/OctoEngine`

## Active Development Surface

- Root CLI: `npm run octo -- <command>`
- First Claude Code smoke command: `npm run octo -- gsd run --json`
- Claude Code smoke prompt command: `npm run octo -- claude-test`
- Quickstart: `docs/integrations/CLAUDE_CODE_QUICKSTART.md`

## Governance Rules

- Use memory and graph context before broad implementation.
- Keep MCP integrations read-only by default.
- Keep destructive actions behind explicit approval.
- Verify with build, tests, docs check, and schema/workflow validation before shipping.

## Graphify Status

- Local graph output: `graphify-out/`
- `graphify-out/` is ignored and not committed.
- Current graph is AST/code best-effort because semantic Graphify needs `MOONSHOT_API_KEY` or `ANTHROPIC_API_KEY`.
- Refresh command: `graphify update . --force`

## Obsidian Notes

Vault folder: `OctoEngine/`

- `00 Project Brief`
- `01 Architecture`
- `02 Governance`
- `03 Graphify Memory`
- `04 Workflows`
- `99 Handoffs`
