import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const schemas = [
  "schemas/agent-contract.schema.json",
  "schemas/workflow.schema.json",
  "schemas/workspace-graph.schema.json",
];

for (const schema of schemas) {
  JSON.parse(fs.readFileSync(schema, "utf8"));
  console.log(`valid json: ${schema}`);
}

const workflows = [];

for (const workflowFile of fs
  .readdirSync("workflows")
  .filter((file) => file.endsWith(".yaml"))
  .sort()) {
  const workflowPath = path.join("workflows", workflowFile);
  const workflow = parseWorkflowYaml(fs.readFileSync(workflowPath, "utf8"));
  validateWorkflow(workflow, workflowPath);
  workflows.push(normalizeWorkflow(workflow));
  console.log(`valid workflow: ${workflowPath}`);
}

validateWorkflowRegistry(workflows);
console.log("workflow registry matches workflow files");

function parseWorkflowYaml(source) {
  const workflow = {};
  let activeList = null;

  for (const rawLine of source.split("\n")) {
    const line = rawLine.trimEnd();
    if (!line.trim()) continue;

    const listItem = line.match(/^\s+-\s+(.+)$/);
    if (listItem) {
      if (!activeList)
        throw new Error(`YAML list item without parent: ${line}`);
      workflow[activeList].push(unquote(listItem[1]));
      continue;
    }

    const pair = line.match(/^([a-z_]+):(?:\s+(.*))?$/);
    if (!pair) throw new Error(`Unsupported workflow YAML line: ${line}`);

    const [, key, rawValue] = pair;
    if (rawValue === undefined) {
      workflow[key] = [];
      activeList = key;
      continue;
    }

    workflow[key] = parseScalar(rawValue);
    activeList = null;
  }

  return workflow;
}

function parseScalar(value) {
  if (value === "true") return true;
  if (value === "false") return false;
  return unquote(value);
}

function unquote(value) {
  return value.replace(/^"|"$/g, "");
}

function validateWorkflow(workflow, workflowPath) {
  const required = [
    "id",
    "name",
    "description",
    "stages",
    "agents",
    "write_allowed",
    "requires_approval",
  ];
  for (const key of required) {
    if (!(key in workflow))
      throw new Error(`${workflowPath}: missing required field ${key}`);
  }

  assertString(workflow.id, workflowPath, "id");
  assertString(workflow.name, workflowPath, "name");
  assertStringArray(workflow.stages, workflowPath, "stages");
  assertStringArray(workflow.agents, workflowPath, "agents");

  assertString(workflow.description, workflowPath, "description");
  assertBoolean(workflow.write_allowed, workflowPath, "write_allowed");
  assertBoolean(workflow.requires_approval, workflowPath, "requires_approval");
}

function assertString(value, workflowPath, key) {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`${workflowPath}: ${key} must be a non-empty string`);
  }
}

function assertStringArray(value, workflowPath, key) {
  if (
    !Array.isArray(value) ||
    value.length === 0 ||
    value.some((item) => typeof item !== "string" || item.length === 0)
  ) {
    throw new Error(`${workflowPath}: ${key} must be a non-empty string array`);
  }
}

function assertBoolean(value, workflowPath, key) {
  if (typeof value !== "boolean") {
    throw new Error(`${workflowPath}: ${key} must be a boolean`);
  }
}

function normalizeWorkflow(workflow) {
  return {
    id: workflow.id,
    name: workflow.name,
    description: workflow.description,
    stages: workflow.stages,
    agents: workflow.agents,
    writeAllowed: workflow.write_allowed,
    requiresApproval: workflow.requires_approval,
  };
}

function validateWorkflowRegistry(fileWorkflows) {
  const output = execFileSync(
    process.execPath,
    [
      "--experimental-strip-types",
      "scripts/octoengine.mjs",
      "workflows",
      "--json",
    ],
    { encoding: "utf8", env: { ...process.env, NODE_NO_WARNINGS: "1" } },
  );
  const registryWorkflows = JSON.parse(output).workflows.sort(compareWorkflow);
  const normalizedFileWorkflows = [...fileWorkflows].sort(compareWorkflow);

  if (
    JSON.stringify(registryWorkflows) !==
    JSON.stringify(normalizedFileWorkflows)
  ) {
    throw new Error(
      `workflow registry mismatch: registry=${JSON.stringify(registryWorkflows)} files=${JSON.stringify(normalizedFileWorkflows)}`,
    );
  }
}

function compareWorkflow(left, right) {
  return left.id.localeCompare(right.id);
}
