# MCP Architecture

MCP servers provide tools to OctoEngine agents.

## Supported MCP Classes

### Repository Intelligence

- Graphify
- Caveman
- GitHub

### Memory and Documentation

- Obsidian
- Memory MCP

### Infrastructure

- Supabase
- Mailcow
- n8n

### Product-Specific Integrations

- Basura
- SafyTrack
- Dealtacho

## Default Policy

All MCP integrations must default to read-only.

Write operations require:

- explicit workflow permission,
- scoped target,
- confirmation gate where destructive or external,
- audit event.

## MCP Access Levels

### Level 0 — Disabled

Tool is registered but unavailable.

### Level 1 — Read-Only

Tool can inspect state.

### Level 2 — Scoped Write

Tool can write within an approved scope.

### Level 3 — Destructive

Tool can delete or mutate critical state. Requires explicit confirmation.

## Mailcow Policy

Mailcow actions must default to read-only.

Allowed MVP use:

- inspect domains,
- inspect mailbox health,
- inspect queues,
- inspect aliases.

Later scoped write actions:

- create test aliases,
- create temporary inboxes,
- route aliases to approved workspaces.

Forbidden without explicit confirmation:

- delete mailboxes,
- delete domains,
- modify production routing,
- flush queues.
