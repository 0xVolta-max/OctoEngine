# Product Requirements Document: OctoEngine

## 1. Product Overview

OctoEngine is an open-source Agent Engineering Control Plane.

It coordinates AI engineering agents, model routers, MCP tools, workspace views, and governance rules into a cohesive system for planning, implementing, reviewing, and shipping software.

## 2. Problem

Developers increasingly use multiple AI tools:

- Claude Code
- OpenCode
- Codex
- Hermes
- AionUI
- Claude Desktop
- LiteLLM
- local and cloud models
- MCP servers

However, these tools are fragmented.

Common problems:

- no consistent workflow standard,
- uncontrolled context growth,
- duplicated tool configuration,
- unclear agent responsibilities,
- weak verification discipline,
- no visual state of agent work,
- no evolution process for engineering rules,
- expensive token usage through over-contextualized desktop workflows.

## 3. Target Users

### Primary

AI-native solo builders and technical founders who run complex projects with multiple coding agents.

### Secondary

Small engineering teams using AI coding agents across multiple repositories.

### Tertiary

Open-source maintainers building agent workflows, MCP servers, model-router integrations, and workspace tooling.

## 4. Goals

OctoEngine must:

- define a professional governance layer for agentic engineering,
- provide a command/workflow layer through Octo Router,
- orchestrate agents through Octogen,
- integrate runtime/execution systems such as Hermes,
- support LiteLLM-based model routing,
- support MCP-based tool access,
- support AionUI-first visual workspaces,
- support Claude Desktop/Cowork as a compatibility layer,
- produce public-repo-ready documentation and conventions.

## 5. Non-Goals

OctoEngine is not:

- a replacement for all coding agents,
- a proprietary SaaS-first platform,
- a single monolithic chat UI,
- a hidden autonomous deployment system,
- a tool that performs destructive actions without confirmation.

## 6. Core Components

### Engineering OS

Governance layer defining standards, workflows, verification ladders, and operating principles.

### Octogen

Orchestration layer that decomposes tasks, assigns agents, manages dependencies, and collects outputs.

### Hermes Adapter

Runtime adapter for executing agent tasks, swarms, sessions, and parallel work where available.

### Octo Router

Command and workflow entrypoint for `/octo-plan`, `/octo-run`, `/octo-review`, `/octo-ship`, and `/octo-pause-work`.

### LiteLLM Adapter

Model routing abstraction for cloud and local models.

### MCP Adapter

Tool integration layer for Graphify, Caveman, Obsidian, Memory, Supabase, Mailcow, GitHub, and future tools.

### Octo Workspace

Visual representation layer for AionUI and compatible clients.

## 7. Key User Stories

### US-001: Plan a scoped implementation

As a developer, I want to run `/octo-plan` so that the system analyzes scope, retrieves memory, inspects relevant files, and creates a safe plan before editing.

### US-002: Execute an approved plan

As a developer, I want to run `/octo-run` so that implementation proceeds under Engineering OS constraints.

### US-003: Review a change

As a developer, I want `/octo-review` to run architecture, QA, frontend, and documentation review agents.

### US-004: Ship safely

As a developer, I want `/octo-ship` to verify, document, and summarize a release.

### US-005: Visualize agent work

As a developer, I want AionUI to show a graph and activity view of agents, workflows, tools, and knowledge nodes.

### US-006: Extend the system

As a contributor, I want to add new agents through documented contracts and schemas.

## 8. Requirements

### Functional Requirements

- Define workflow commands and lifecycle states.
- Define agent contracts.
- Provide schema for workspace graph views.
- Provide LiteLLM model role mappings.
- Provide MCP policy documentation.
- Provide AionUI workspace adapter specs.
- Provide Claude Desktop compatibility config examples.
- Provide professional repository documentation.
- Provide evolution-manager process for improving Engineering OS.

### Non-Functional Requirements

- modular architecture,
- open-source friendly,
- provider-agnostic,
- UI-agnostic core,
- safe by default,
- observable workflows,
- reproducible verification.

## 9. Risks

- excessive abstraction before implementation,
- overreliance on one UI,
- unsafe MCP permissions,
- hidden model-router costs,
- workflow bloat,
- unclear agent boundaries.

## 10. Mitigations

- MVP-first repository structure,
- read-only default for MCPs,
- explicit confirmation for destructive actions,
- clear agent contracts,
- strict verification ladder,
- separation of UI, orchestration, runtime, and governance.
