/**
 * gsd-router
 * Command/workflow entrypoint for GSD workflows.
 */

export const packageName = "@octoengine/gsd-router";

export type GsdWorkflow = {
  id: string;
  name: string;
  description: string;
  stages: string[];
  agents: string[];
  writeAllowed: boolean;
  requiresApproval: boolean;
};

export type GsdRunPayload = {
  command: string;
  workflow: GsdWorkflow;
  claudeCode: {
    ready: true;
    firstTestPrompt: string;
  };
};

const workflows: GsdWorkflow[] = [
  {
    id: "gsd-plan",
    name: "GSD Plan",
    description: "Create a scoped implementation plan without modifying files.",
    stages: [
      "memory_retrieval",
      "scope_graph",
      "targeted_inspection",
      "plan_generation",
      "approval_gate",
    ],
    agents: [
      "obsidian-memory-agent",
      "graphify-scope-agent",
      "caveman-inspector-agent",
    ],
    writeAllowed: false,
    requiresApproval: true,
  },
  {
    id: "gsd-run",
    name: "GSD Run",
    description: "Execute an approved implementation plan within scope.",
    stages: [
      "load_approved_plan",
      "assign_implementation",
      "execute_changes",
      "collect_diff",
      "handoff_to_review",
    ],
    agents: ["caveman-inspector-agent"],
    writeAllowed: true,
    requiresApproval: false,
  },
  {
    id: "gsd-review",
    name: "GSD Review",
    description:
      "Review architecture, QA, frontend, and documentation quality.",
    stages: [
      "diff_review",
      "architecture_review",
      "frontend_review",
      "qa_review",
      "risk_report",
    ],
    agents: [
      "qa-verification-agent",
      "frontend-taste-agent",
      "impeccable-reviewer-agent",
      "emil-kovalski-director-agent",
    ],
    writeAllowed: false,
    requiresApproval: false,
  },
  {
    id: "gsd-ship",
    name: "GSD Ship",
    description:
      "Run verification ladder, update docs, and create final ship report.",
    stages: [
      "verification_ladder",
      "docs_compression",
      "ship_report",
      "pause_or_ship_decision",
    ],
    agents: [
      "qa-verification-agent",
      "docs-compression-agent",
      "obsidian-memory-agent",
    ],
    writeAllowed: true,
    requiresApproval: true,
  },
  {
    id: "gsd-pause-work",
    name: "GSD Pause Work",
    description:
      "Pause safely when context, verification, or scope is insufficient.",
    stages: [
      "capture_state",
      "record_blockers",
      "document_next_steps",
      "handoff_summary",
    ],
    agents: ["docs-compression-agent"],
    writeAllowed: true,
    requiresApproval: false,
  },
];

export function listGsdWorkflows(): GsdWorkflow[] {
  return workflows.map((workflow) => ({
    ...workflow,
    stages: [...workflow.stages],
    agents: [...workflow.agents],
  }));
}

export function resolveGsdWorkflow(command: string): GsdWorkflow {
  const normalized = normalizeCommand(command);
  const workflow = workflows.find((candidate) => candidate.id === normalized);

  if (!workflow) {
    throw new Error(`Unknown GSD workflow: ${command}`);
  }

  return {
    ...workflow,
    stages: [...workflow.stages],
    agents: [...workflow.agents],
  };
}

export function buildGsdRunPayload(command: string): GsdRunPayload {
  const workflow = resolveGsdWorkflow(command);

  return {
    command: normalizeCommandForDisplay(command),
    workflow,
    claudeCode: {
      ready: true,
      firstTestPrompt: buildFirstTestPrompt(workflow),
    },
  };
}

function normalizeCommand(command: string): string {
  const trimmed = command.trim().toLowerCase();
  if (trimmed.startsWith("gsd-")) return trimmed;
  if (trimmed.startsWith("gsd ")) return `gsd-${trimmed.slice(4).trim()}`;
  return `gsd-${trimmed}`;
}

function normalizeCommandForDisplay(command: string): string {
  const normalized = normalizeCommand(command);
  return normalized.replace(/^gsd-/, "gsd ");
}

function buildFirstTestPrompt(workflow: GsdWorkflow): string {
  return [
    "OctoEngine Claude Code smoke test",
    "",
    `Workflow: ${workflow.name}`,
    `Goal: execute only the ${workflow.id} planning surface against this repo.`,
    "Rules: inspect relevant files only, do not contact external systems, do not perform destructive actions.",
    `Stages: ${workflow.stages.join(" -> ")}`,
    `Agents: ${workflow.agents.join(", ")}`,
  ].join("\n");
}
