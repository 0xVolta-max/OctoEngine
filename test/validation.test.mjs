import test from "node:test";
import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

test("schema validation checks workflow files", async () => {
  const { stdout } = await execFileAsync("npm", ["run", "validate:schemas"]);

  assert.match(stdout, /valid workflow: workflows\/octo-run.yaml/);
  assert.match(stdout, /valid workflow: workflows\/octo-pause-work.yaml/);
  assert.match(stdout, /workflow registry matches workflow files/);
});
