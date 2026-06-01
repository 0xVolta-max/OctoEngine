# Claude Code Quickstart

Use this path for the first OctoEngine smoke test. It keeps Claude Code as the execution shell and routes models through LiteLLM.

## Prerequisites

- Claude Code CLI installed and authenticated.
- Node.js `>=22`.
- LiteLLM proxy reachable at `http://localhost:4100`.
- Ollama or another LiteLLM backend reachable for the aliases in `adapters/litellm/litellm-config.example.yaml`.
- `LITELLM_MASTER_KEY` set for the proxy.
- Repository dependencies installed with `npm install`.

## Start LiteLLM

Use an existing LiteLLM service if one is already running. For a local smoke test, start a proxy from the example config:

```bash
cd /path/to/octoengine
export LITELLM_MASTER_KEY="sk-local-dev"
litellm --config adapters/litellm/litellm-config.example.yaml --port 4100
```

The example config routes model aliases to `http://localhost:11434`, so that backend must also be available.

## Prepare OctoEngine

```bash
cd /path/to/octoengine
npm run build
npm test
NODE_NO_WARNINGS=1 npm --silent run smoke:claude
NODE_NO_WARNINGS=1 npm --silent run octo -- gsd run --json
```

The smoke command verifies local readiness. The last command prints the workflow payload Claude Code should use for the smoke test.

## First Prompt

Generate the paste-ready prompt before opening Claude Code:

```bash
NODE_NO_WARNINGS=1 npm --silent run octo -- claude-test
```

Paste this text into Claude Code after launch. For a full realization pass, use `prompts/REALIZATION_PROMPT.md` after the smoke test passes.

## Launch Claude Code Through LiteLLM

```bash
cd /path/to/octoengine
export LITELLM_BASE_URL="http://localhost:4100"
export LITELLM_MASTER_KEY="sk-local-dev"
source adapters/litellm/claude-code-launchers.sh
claude-litellm opusplan
```

Use the real local `LITELLM_MASTER_KEY` value if it differs from `sk-local-dev`.

## Pass Criteria

- Claude Code opens from the repository root.
- The model selection shows the LiteLLM `opusplan` route.
- `NODE_NO_WARNINGS=1 npm --silent run octo -- gsd run --json` returns a workflow with `claudeCode.ready: true`.
- Claude Code follows the workflow stages without contacting external systems or performing destructive actions.
