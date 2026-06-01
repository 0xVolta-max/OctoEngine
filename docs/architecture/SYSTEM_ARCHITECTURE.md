# System Architecture

## Overview

OctoEngine separates responsibilities across clear layers.

```text
User / Developer
  ↓
AionUI / CLI / Claude Desktop
  ↓
Octo Router
  ↓
Octogen Orchestrator
  ↓
Agent Registry + Workflow Engine
  ↓
Hermes / Claude Code / OpenCode / Codex
  ↓
LiteLLM
  ↓
Models

Side Channels:
- MCP Tools
- Obsidian Memory
- Graphify Scope
- Caveman Inspection
- GitHub / Supabase / Mailcow integrations
```

## Layer Responsibilities

### UI Layer

Provides interaction and visualization.

Examples:

- AionUI
- CLI
- Claude Desktop/Cowork

The UI layer must not own orchestration logic.

### Command Layer

Octo Router translates user intent into workflow invocations.

### Orchestration Layer

Octogen decomposes tasks, assigns agents, manages dependencies, and collects outputs.

### Runtime Layer

Hermes or compatible executors run tasks and sessions.

### Model Layer

LiteLLM provides model routing and provider abstraction.

### Tool Layer

MCP adapters provide access to repository, docs, memory, databases, email systems, and other tools.

### Governance Layer

Engineering OS defines rules that constrain every layer.
