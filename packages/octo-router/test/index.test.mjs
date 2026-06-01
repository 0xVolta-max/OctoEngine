import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

import {
  buildOctoRunPayload,
  listOctoWorkflows,
  resolveOctoWorkflow,
} from "../src/index.ts";

test("resolves canonical Octo command forms to workflow metadata", () => {
  const workflow = resolveOctoWorkflow("octo-run");

  assert.equal(workflow.id, "octo-run");
  assert.equal(workflow.writeAllowed, true);
  assert.equal(workflow.requiresApproval, false);
  assert.deepEqual(workflow.stages, [
    "load_approved_plan",
    "assign_implementation",
    "execute_changes",
    "collect_diff",
    "handoff_to_review",
  ]);
});

test("lists workflows in stable command order", () => {
  assert.deepEqual(
    listOctoWorkflows().map((workflow) => workflow.id),
    ["octo-plan", "octo-run", "octo-review", "octo-ship", "octo-pause-work"],
  );
});

test("resolves pause-work workflow from documented command form", () => {
  const workflow = resolveOctoWorkflow("octo-pause-work");

  assert.equal(workflow.id, "octo-pause-work");
  assert.deepEqual(workflow.agents, ["docs-compression-agent"]);
});

test("builds a Claude Code ready Octo payload", () => {
  const payload = buildOctoRunPayload("octo-run");

  assert.equal(payload.command, "octo-run");
  assert.equal(payload.workflow.id, "octo-run");
  assert.equal(payload.claudeCode.ready, true);
  assert.match(
    payload.claudeCode.firstTestPrompt,
    /OctoEngine Claude Code smoke test/,
  );
});

test("keeps router registry aligned with workflow YAML files", () => {
  const workflowIds = fs
    .readdirSync(path.resolve("workflows"))
    .filter((file) => file.endsWith(".yaml"))
    .map(
      (file) =>
        fs
          .readFileSync(path.resolve("workflows", file), "utf8")
          .match(/^id:\s+"?([^"\n]+)"?/m)?.[1],
    )
    .filter(Boolean)
    .sort();

  assert.deepEqual(
    listOctoWorkflows()
      .map((workflow) => workflow.id)
      .sort(),
    workflowIds,
  );
});

test("keeps legacy command aliases working", () => {
  const workflow = resolveOctoWorkflow("gsd run");

  assert.equal(workflow.id, "octo-run");
});

test("rejects unknown Octo commands", () => {
  assert.throws(
    () => resolveOctoWorkflow("octo-improvise"),
    /Unknown Octo workflow/,
  );
});
