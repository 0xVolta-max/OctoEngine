# Model Routing

LiteLLM is the preferred model routing layer.

## Role-Based Model Aliases

Do not encode workflow names into model aliases. GSD is the workflow standard, not a model class.

Recommended role aliases:

```yaml
model_list:
  - model_name: opusplan
    litellm_params:
      model: ollama/deepseek-v4-pro:cloud
      api_base: http://localhost:11434

  - model_name: implementer
    litellm_params:
      model: ollama/kimi-k2.6:cloud
      api_base: http://localhost:11434

  - model_name: fast-cloud
    litellm_params:
      model: ollama/nemotron-3-nano:30b-cloud
      api_base: http://localhost:11434

  - model_name: fast-local
    litellm_params:
      model: ollama/gemma4:latest
      api_base: http://localhost:11434

  - model_name: vision
    litellm_params:
      model: ollama/nemotron-3-super:cloud
      api_base: http://localhost:11434
```

## Recommended Routing

| Role | Preferred Model |
|---|---|
| Deep planning | `opusplan` |
| Implementation | `implementer` |
| Fast triage | `fast-cloud` |
| Local/private compression | `fast-local` |
| Visual/media analysis | `vision` |

## Claude Code Through LiteLLM

Claude Code should target LiteLLM through Anthropic-compatible variables:

```bash
ANTHROPIC_BASE_URL=http://localhost:4100
ANTHROPIC_AUTH_TOKEN=$LITELLM_MASTER_KEY
ANTHROPIC_MODEL=opusplan
```

Do not append `/v1` to `ANTHROPIC_BASE_URL` when using the Anthropic-compatible LiteLLM interface.
