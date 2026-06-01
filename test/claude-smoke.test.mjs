import test from "node:test";
import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

test("Claude Code smoke readiness command reports local prerequisites", async () => {
  const { stdout } = await execFileAsync("npm", [
    "--silent",
    "run",
    "smoke:claude",
  ]);

  assert.match(stdout, /Claude Code smoke readiness: ok/);
  assert.match(stdout, /workflow: octo-run/);
  assert.match(stdout, /prompt: ready/);
  assert.match(stdout, /launcher: adapters\/litellm\/claude-code-launchers.sh/);
});
