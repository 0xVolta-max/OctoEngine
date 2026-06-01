#!/usr/bin/env node

import fs from "node:fs";
import { buildGsdRunPayload } from "../packages/gsd-router/src/index.ts";

const launcherPath = "adapters/litellm/claude-code-launchers.sh";
const quickstartPath = "docs/integrations/CLAUDE_CODE_QUICKSTART.md";

try {
  assertNodeVersion();
  assertFile(launcherPath);
  assertFile(quickstartPath);

  const payload = buildGsdRunPayload("gsd run");
  if (!payload.claudeCode.ready) {
    throw new Error("Claude Code payload is not marked ready.");
  }
  if (!payload.claudeCode.firstTestPrompt.includes("Workflow: GSD Run")) {
    throw new Error("Claude Code prompt does not describe GSD Run.");
  }

  process.stdout.write(
    [
      "Claude Code smoke readiness: ok",
      `node: ${process.versions.node}`,
      `workflow: ${payload.workflow.id}`,
      "prompt: ready",
      `launcher: ${launcherPath}`,
      `quickstart: ${quickstartPath}`,
      "",
      "Next:",
      "  NODE_NO_WARNINGS=1 npm --silent run octo -- claude-test",
      "  source adapters/litellm/claude-code-launchers.sh",
      "  claude-litellm opusplan",
    ].join("\n") + "\n",
  );
} catch (error) {
  process.stderr.write(
    `Claude Code smoke readiness: failed\n${error instanceof Error ? error.message : String(error)}\n`,
  );
  process.exitCode = 1;
}

function assertNodeVersion() {
  const major = Number(process.versions.node.split(".")[0]);
  if (major < 22) {
    throw new Error(`Node >=22 required, found ${process.versions.node}.`);
  }
}

function assertFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing required file: ${filePath}`);
  }
}
