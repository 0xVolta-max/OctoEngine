import fs from "node:fs";
import path from "node:path";

const schemas = [
  "schemas/agent-contract.schema.json",
  "schemas/workflow.schema.json",
  "schemas/workspace-graph.schema.json",
];

for (const schema of schemas) {
  JSON.parse(fs.readFileSync(schema, "utf8"));
  console.log(`valid json: ${schema}`);
}

for (const workflowFile of fs
  .readdirSync("workflows")
  .filter((file) => file.endsWith(".yaml"))
  .sort()) {
  const workflowPath = path.join("workflows", workflowFile);
  const workflow = parseWorkflowYaml(fs.readFileSync(workflowPath, "utf8"));
  validateWorkflow(workflow, workflowPath);
  console.log(`valid workflow: ${workflowPath}`);
}

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
  const required = ["id", "name", "stages", "agents"];
  for (const key of required) {
    if (!(key in workflow))
      throw new Error(`${workflowPath}: missing required field ${key}`);
  }

  assertString(workflow.id, workflowPath, "id");
  assertString(workflow.name, workflowPath, "name");
  assertStringArray(workflow.stages, workflowPath, "stages");
  assertStringArray(workflow.agents, workflowPath, "agents");

  if ("description" in workflow)
    assertString(workflow.description, workflowPath, "description");
  if ("write_allowed" in workflow)
    assertBoolean(workflow.write_allowed, workflowPath, "write_allowed");
  if ("requires_approval" in workflow)
    assertBoolean(
      workflow.requires_approval,
      workflowPath,
      "requires_approval",
    );
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
