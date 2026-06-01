/**
 * octo-router
 * Command/workflow entrypoint for Octo workflows.
 */

export const packageName = "@octoengine/octo-router";

export type OctoWorkflow = {
  id: string;
  name: string;
  description: string;
  stages: string[];
  agents: string[];
  writeAllowed: boolean;
  requiresApproval: boolean;
};

export type OctoRunPayload = {
  command: string;
  workflow: OctoWorkflow;
  claudeCode: {
    ready: true;
    firstTestPrompt: string;
  };
};

export type GsdWorkflow = OctoWorkflow;
export type GsdRunPayload = OctoRunPayload;

const workflows: OctoWorkflow[] = [
  {
    id: "octo-plan",
    name: "Octo Plan",
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
    id: "octo-run",
    name: "Octo Run",
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
    id: "octo-review",
    name: "Octo Review",
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
    id: "octo-ship",
    name: "Octo Ship",
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
    id: "octo-pause-work",
    name: "Octo Pause Work",
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

export function listOctoWorkflows(): OctoWorkflow[] {
  return workflows.map((workflow) => ({
    ...workflow,
    stages: [...workflow.stages],
    agents: [...workflow.agents],
  }));
}

export function resolveOctoWorkflow(command: string): OctoWorkflow {
  const normalized = normalizeCommand(command);
  const workflow = workflows.find((candidate) => candidate.id === normalized);

  if (!workflow) {
    throw new Error(`Unknown Octo workflow: ${command}`);
  }

  return {
    ...workflow,
    stages: [...workflow.stages],
    agents: [...workflow.agents],
  };
}

export function buildOctoRunPayload(command: string): OctoRunPayload {
  const workflow = resolveOctoWorkflow(command);

  return {
    command: normalizeCommandForDisplay(command),
    workflow,
    claudeCode: {
      ready: true,
      firstTestPrompt: buildFirstTestPrompt(workflow),
    },
  };
}

export const listGsdWorkflows = listOctoWorkflows;
export const resolveGsdWorkflow = resolveOctoWorkflow;
export const buildGsdRunPayload = buildOctoRunPayload;

function normalizeCommand(command: string): string {
  const trimmed = command.trim().toLowerCase();
  if (trimmed.startsWith("octo-")) return trimmed;
  if (trimmed.startsWith("octo ")) return `octo-${trimmed.slice(5).trim()}`;
  if (trimmed.startsWith("gsd-")) return `octo-${trimmed.slice("gsd-".length)}`;
  if (trimmed.startsWith("gsd ")) return `octo-${trimmed.slice(4).trim()}`;
  return `octo-${trimmed}`;
}

function normalizeCommandForDisplay(command: string): string {
  return normalizeCommand(command);
}

function buildFirstTestPrompt(workflow: OctoWorkflow): string {
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
