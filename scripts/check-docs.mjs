import fs from 'node:fs';
import path from 'node:path';

const required = [
  'README.md',
  'docs/vision/VISION.md',
  'docs/product/PRD.md',
  'docs/product/MVP.md',
  'docs/architecture/SYSTEM_ARCHITECTURE.md',
  'docs/design/DESIGN_SYSTEM.md',
  'docs/agents/AGENT_CONTRACTS.md',
  'docs/prompts/META_PROMPTS.md'
];

let missing = [];
for (const file of required) {
  if (!fs.existsSync(path.resolve(file))) missing.push(file);
}

if (missing.length) {
  console.error('Missing required docs:');
  for (const file of missing) console.error(`- ${file}`);
  process.exit(1);
}

console.log('Documentation foundation looks complete.');
