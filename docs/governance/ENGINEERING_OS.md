# Engineering OS

Engineering OS is the governance layer of OctoEngine.

It defines how agentic engineering work is planned, executed, reviewed, documented, and shipped.

## Core Principles

### 1. Memory First

Before planning, retrieve existing project memory, documented constraints, prior decisions, and known risks.

### 2. Graphify Narrowing

Before inspecting or editing files, create a scope map of relevant modules, dependencies, routes, packages, and domains.

### 3. Caveman Inspection

Inspect only the smallest set of files required to make a correct decision.

### 4. Obsidian Intent Check

Confirm the work aligns with project intent, roadmap, and previously recorded decisions.

### 5. Scoped Execution

No agent may modify outside the approved scope.

### 6. Review Lenses

Architecture, QA, security, product, design, and documentation lenses must be applied according to task type.

### 7. Verification Ladder

The implementation is not complete until verification evidence is collected.

### 8. Documentation Compression

After meaningful work, update concise project memory and handoff notes.

### 9. Octo Ship

Shipping requires evidence, known gaps, next steps, and documentation status.

### 10. Octo Pause Work

When context, verification, or safety is insufficient, pause and report instead of guessing.

## Role in OctoEngine

Engineering OS does not execute tasks directly.

It governs:

- Octogen orchestration,
- Hermes execution,
- Octo Router workflows,
- agent contracts,
- review gates,
- documentation standards.
