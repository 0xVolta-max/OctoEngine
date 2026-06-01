# Claude Code Quickstart

Use this path for the first OctoEngine smoke test. It keeps Claude Code as the execution shell and routes models through LiteLLM.

## Prerequisites

- Claude Code CLI installed and authenticated.
- LiteLLM proxy reachable at `http://localhost:4100`.
- `LITELLM_MASTER_KEY` set for the proxy.
- Repository dependencies installed with `npm install`.

## Prepare OctoEngine

```bash
cd "/Volumes/SSD 1TB Portabel 1/Dev/OctoEngine"
npm run build
npm test
npm run octo -- gsd run --json
```

The last command prints the workflow payload Claude Code should use for the smoke test.

## Launch Claude Code Through LiteLLM

```bash
cd "/Volumes/SSD 1TB Portabel 1/Dev/OctoEngine"
export LITELLM_BASE_URL="http://localhost:4100"
export LITELLM_MASTER_KEY="sk-local-dev"
source adapters/litellm/claude-code-launchers.sh
claude-litellm opusplan
```

Use the real local `LITELLM_MASTER_KEY` value if it differs from `sk-local-dev`.

## First Prompt

Run this before opening Claude Code:

```bash
npm run octo -- claude-test
```

Then paste the generated smoke-test text into Claude Code. For a full realization pass, use `prompts/REALIZATION_PROMPT.md` after the smoke test passes.

## Pass Criteria

- Claude Code opens from the repository root.
- The model selection shows the LiteLLM `opusplan` route.
- `npm run octo -- gsd run --json` returns a workflow with `claudeCode.ready: true`.
- Claude Code follows the workflow stages without contacting external systems or performing destructive actions.
