#!/usr/bin/env node

import {
  buildGsdRunPayload,
  listGsdWorkflows,
} from "../packages/gsd-router/src/index.ts";

const args = process.argv.slice(2);

try {
  const output = run(args);
  if (typeof output === "string") {
    process.stdout.write(output.endsWith("\n") ? output : `${output}\n`);
  } else {
    process.stdout.write(`${JSON.stringify(output, null, 2)}\n`);
  }
} catch (error) {
  process.stderr.write(
    `${error instanceof Error ? error.message : String(error)}\n`,
  );
  process.exitCode = 1;
}

function run(argv) {
  const json = argv.includes("--json");
  const cleanArgs = argv.filter((arg) => arg !== "--json");

  if (
    cleanArgs.length === 0 ||
    cleanArgs[0] === "help" ||
    cleanArgs[0] === "--help"
  ) {
    return helpText();
  }

  if (cleanArgs[0] === "claude-test") {
    return buildGsdRunPayload("gsd run").claudeCode.firstTestPrompt;
  }

  if (cleanArgs[0] === "workflows") {
    const workflows = listGsdWorkflows();
    return json
      ? { workflows }
      : workflows
          .map((workflow) => `${workflow.id}\t${workflow.name}`)
          .join("\n");
  }

  if (cleanArgs[0] === "gsd") {
    const workflowName = cleanArgs[1];
    if (!workflowName)
      throw new Error("Usage: octoengine gsd <plan|run|review|ship> [--json]");

    const payload = buildGsdRunPayload(`gsd ${workflowName}`);

    return json ? payload : renderWorkflow(payload);
  }

  throw new Error(`Unknown octoengine command: ${cleanArgs.join(" ")}`);
}

function renderWorkflow(payload) {
  const { workflow } = payload;
  return [
    `${workflow.name} (${workflow.id})`,
    `write_allowed: ${workflow.writeAllowed}`,
    `requires_approval: ${workflow.requiresApproval}`,
    `agents: ${workflow.agents.join(", ")}`,
    `stages: ${workflow.stages.join(" -> ")}`,
    "",
    payload.claudeCode.firstTestPrompt,
  ].join("\n");
}

function helpText() {
  return [
    "OctoEngine CLI",
    "",
    "Commands:",
    "  octoengine workflows [--json]",
    "  octoengine gsd <plan|run|review|ship> [--json]",
    "  octoengine claude-test",
  ].join("\n");
}
