# Contributing to OctoEngine

OctoEngine is designed as a modular open-source control plane for AI-native engineering workflows.

## Contribution Principles

All contributions must preserve the following principles:

1. **Governance before automation**  
   Automation must be constrained by Engineering OS rules.

2. **Read-only before write-capable**  
   New adapters and MCP integrations must default to read-only.

3. **Explicit confirmation for destructive actions**  
   Any workflow that deletes, force-pushes, drops data, rotates secrets, modifies production infrastructure, or sends external messages must require explicit user confirmation.

4. **Small, inspectable changes**  
   The default implementation style is scoped, reviewable, and verifiable.

5. **Documentation is part of the product**  
   Any new agent, workflow, adapter, or command must include documentation and a contract.

## Pull Request Requirements

A PR should include:

- clear description of intent,
- affected packages,
- test or verification evidence,
- docs updates where applicable,
- security considerations for tool and MCP integrations.

## Commit Style

Use concise conventional commits:

```text
feat: add graph workspace schema
fix: harden mcp adapter read-only policy
docs: document gsd ship workflow
chore: update repository map
```
