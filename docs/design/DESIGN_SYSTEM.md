# OctoUI Design System

OctoUI is the visual language for OctoEngine workspace experiences.

## Design Direction

**Cyber Brutalism for engineering control planes.**

The interface should feel:

- operational,
- precise,
- technical,
- high-contrast,
- dark-first,
- agent-aware,
- graph-native.

It should not feel:

- playful,
- generic SaaS,
- soft pastel,
- overly decorative,
- consumer-chat oriented.

## Visual References

- Octogent-style graph workspaces
- GitHub developer ergonomics
- Linear density and polish
- OpenCode / terminal-native clarity
- Basura cyber-brutalism atmosphere

## Color Tokens

```css
:root {
  --octo-bg: #07090d;
  --octo-bg-elevated: #0b0f16;
  --octo-panel: #10151d;
  --octo-panel-strong: #151b25;
  --octo-border: #2a3342;
  --octo-border-strong: #3b4658;

  --octo-text: #eef3f8;
  --octo-text-muted: #8c98a8;
  --octo-text-dim: #5f6b7a;

  --octo-lime: #d4ff3f;
  --octo-green: #32ff7e;
  --octo-orange: #ff9d3f;
  --octo-purple: #d46bff;
  --octo-blue: #61a8ff;
  --octo-red: #ff5c5c;
  --octo-yellow: #ffd84d;
}
```

## Typography

Recommended:

- UI: Inter or Geist Sans
- Code/metadata: IBM Plex Mono or Geist Mono

## Layout Principles

### Command-First

The command bar is the primary interaction model.

### Graph-Native

Agent relationships, dependencies, MCP tools, and knowledge nodes should be visually represented.

### Evidence-Driven

Verification status and evidence must be visible.

### Dense but Legible

Professional engineering users need information density, not oversized empty UI.

## Component Classes

### Agent Node

Represents a running or available agent.

States:

- idle
- planned
- running
- waiting
- reviewing
- failed
- complete

### Tool Node

Represents MCP tools or external integrations.

### Knowledge Node

Represents Obsidian docs, memory entries, decisions, or project facts.

### Workflow Card

Represents one GSD workflow execution.

### Activity Event

Represents agent messages, tool calls, state changes, verification results, and approvals.

## Status Colors

| Status | Color |
|---|---|
| Planned | Blue |
| Running | Lime |
| Waiting | Yellow |
| Review | Purple |
| Failed | Red |
| Complete | Green |
| External Tool | Orange |
