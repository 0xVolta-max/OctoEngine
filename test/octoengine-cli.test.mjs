import test from "node:test";
import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

test("CLI resolves a GSD workflow as JSON for Claude Code smoke tests", async () => {
  const { stdout } = await execFileAsync("node", [
    "--experimental-strip-types",
    "scripts/octoengine.mjs",
    "gsd",
    "run",
    "--json",
  ]);

  const payload = JSON.parse(stdout);

  assert.equal(payload.command, "gsd run");
  assert.equal(payload.workflow.id, "gsd-run");
  assert.equal(payload.claudeCode.ready, true);
  assert.match(payload.claudeCode.firstTestPrompt, /GSD Run/);
});

test("CLI prints a Claude Code first-test prompt", async () => {
  const { stdout } = await execFileAsync("node", [
    "--experimental-strip-types",
    "scripts/octoengine.mjs",
    "claude-test",
  ]);

  assert.match(stdout, /OctoEngine Claude Code smoke test/);
  assert.match(stdout, /npm run octo -- gsd run --json/);
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
    ["gsd-plan", "gsd-run", "gsd-review", "gsd-ship", "gsd-pause-work"],
  );
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
