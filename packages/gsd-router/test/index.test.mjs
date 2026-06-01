import test from "node:test";
import assert from "node:assert/strict";

import {
  buildGsdRunPayload,
  listGsdWorkflows,
  resolveGsdWorkflow,
} from "../src/index.ts";

test("resolves common GSD command forms to workflow metadata", () => {
  const workflow = resolveGsdWorkflow("gsd run");

  assert.equal(workflow.id, "gsd-run");
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
    listGsdWorkflows().map((workflow) => workflow.id),
    ["gsd-plan", "gsd-run", "gsd-review", "gsd-ship", "gsd-pause-work"],
  );
});

test("resolves pause-work workflow from documented command form", () => {
  const workflow = resolveGsdWorkflow("gsd pause-work");

  assert.equal(workflow.id, "gsd-pause-work");
  assert.deepEqual(workflow.agents, ["docs-compression-agent"]);
});

test("builds a Claude Code ready GSD payload", () => {
  const payload = buildGsdRunPayload("gsd run");

  assert.equal(payload.command, "gsd run");
  assert.equal(payload.workflow.id, "gsd-run");
  assert.equal(payload.claudeCode.ready, true);
  assert.match(
    payload.claudeCode.firstTestPrompt,
    /OctoEngine Claude Code smoke test/,
  );
});

test("rejects unknown GSD commands", () => {
  assert.throws(
    () => resolveGsdWorkflow("gsd improvise"),
    /Unknown GSD workflow/,
  );
});
