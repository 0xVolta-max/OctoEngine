#!/usr/bin/env bash

claude-litellm() {
  local model="${1:-opusplan}"

  if [ -z "${LITELLM_MASTER_KEY:-}" ]; then
    echo "Missing LITELLM_MASTER_KEY. Set it before running claude-litellm." >&2
    return 1
  fi

  unset OPENAI_BASE_URL OPENAI_API_KEY OPENAI_MODEL

  ANTHROPIC_BASE_URL="${LITELLM_BASE_URL:-http://localhost:4100}" \
  ANTHROPIC_AUTH_TOKEN="$LITELLM_MASTER_KEY" \
  ANTHROPIC_MODEL="$model" \
  ANTHROPIC_CUSTOM_MODEL_OPTION="$model" \
  ANTHROPIC_CUSTOM_MODEL_OPTION_NAME="LiteLLM: $model" \
  claude
}

claude-ollama() {
  local model="${1:-qwen3-coder:cloud}"

  unset OPENAI_BASE_URL OPENAI_API_KEY OPENAI_MODEL

  ANTHROPIC_BASE_URL="${OLLAMA_BASE_URL:-http://localhost:11434}" \
  ANTHROPIC_AUTH_TOKEN="ollama" \
  ANTHROPIC_MODEL="$model" \
  claude
}
