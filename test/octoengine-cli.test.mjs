import test from "node:test";
import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

test("CLI resolves an Octo workflow as JSON for Claude Code smoke tests", async () => {
  const { stdout } = await execFileAsync("node", [
    "--experimental-strip-types",
    "scripts/octoengine.mjs",
    "octo-run",
    "--json",
  ]);

  const payload = JSON.parse(stdout);

  assert.equal(payload.command, "octo-run");
  assert.equal(payload.workflow.id, "octo-run");
  assert.equal(payload.claudeCode.ready, true);
  assert.match(payload.claudeCode.firstTestPrompt, /Octo Run/);
});

test("CLI prints a Claude Code first-test prompt", async () => {
  const { stdout } = await execFileAsync("node", [
    "--experimental-strip-types",
    "scripts/octoengine.mjs",
    "claude-test",
  ]);

  assert.match(stdout, /OctoEngine Claude Code smoke test/);
  assert.match(stdout, /Workflow: Octo Run/);
  assert.doesNotMatch(stdout, /Run this inside the repository/);
});

test("CLI lists workflows as JSON", async () => {
  const { stdout } = await execFileAsync("node", [
    "--experimental-strip-types",
    "scripts/octoengine.mjs",
    "workflows",
    "--json",
  ]);

  const payload = JSON.parse(stdout);

  assert.deepEqual(
    payload.workflows.map((workflow) => workflow.id),
    ["octo-plan", "octo-run", "octo-review", "octo-ship", "octo-pause-work"],
  );
});

test("CLI keeps legacy octo-run alias working", async () => {
  const { stdout } = await execFileAsync("node", [
    "--experimental-strip-types",
    "scripts/octoengine.mjs",
    "gsd",
    "run",
    "--json",
  ]);

  const payload = JSON.parse(stdout);

  assert.equal(payload.command, "octo-run");
  assert.equal(payload.workflow.id, "octo-run");
});

test("CLI exits nonzero for unknown commands", async () => {
  await assert.rejects(
    execFileAsync("node", [
      "--experimental-strip-types",
      "scripts/octoengine.mjs",
      "nonsense",
    ]),
    /Unknown octoengine command/,
  );
});
