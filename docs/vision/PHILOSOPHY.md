# Philosophy

## Core Belief

AI agents become valuable when they are constrained by operating principles, evidence, and verification.

Unconstrained agent automation produces impressive demos but unstable engineering outcomes.

## Engineering Posture

OctoEngine is built around the following beliefs:

1. **Context must be earned**  
   Agents should not load everything by default. They should narrow scope first.

2. **Inspection before editing**  
   Tools like Graphify and Caveman should identify the smallest meaningful surface before implementation.

3. **Memory before planning**  
   Project decisions, prior constraints, and known risks should be retrieved before new plans are generated.

4. **Verification before shipping**  
   Lint, typecheck, tests, smoke checks, and documentation updates are first-class workflow gates.

5. **Orchestration over mega-prompts**  
   A single large prompt is fragile. A system of smaller agents with clear contracts is more maintainable.

6. **UI is a cockpit, not the brain**  
   AionUI, Claude Desktop, or any other interface should render and trigger workflows, not own orchestration logic.
