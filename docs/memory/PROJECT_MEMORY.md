# OctoEngine Project Memory

## Identity

OctoEngine is an open-source Agent Engineering Control Plane. It turns persona-based engineering guidance into orchestrated, verifiable, multi-agent software delivery.

## Current Release

- GitHub: `https://github.com/0xVolta-max/OctoEngine`
- Initial release: `v0.1.0`
- Local repo path varies by workstation.

## Active Development Surface

- Root CLI: `npm run octo -- <command>`
- First Claude Code smoke command: `npm run octo -- octo-run --json`
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
- Full semantic extraction runs through the local LiteLLM-Kimi wrapper:
  `python3 /Users/bjornritzmann/Documents/Codex/2026-06-01/aionui-ist-jetzt-installiert-es-fehlen/work/graphify_litellm_kimi.py extract . --out .`
- Latest semantic run: 30 nodes, 40 links, 12 communities.
- One semantic chunk returned invalid JSON and was skipped; graph remains usable but not complete.
- Refresh command: `graphify update . --force`

## Obsidian Notes

Vault folder: `OctoEngine/`

- `00 Project Brief`
- `01 Architecture`
- `02 Governance`
- `03 Graphify Memory`
- `04 Workflows`
- `99 Handoffs`
