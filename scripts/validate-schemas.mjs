import fs from 'node:fs';

const schemas = [
  'schemas/agent-contract.schema.json',
  'schemas/workflow.schema.json',
  'schemas/workspace-graph.schema.json'
];

for (const schema of schemas) {
  JSON.parse(fs.readFileSync(schema, 'utf8'));
  console.log(`valid json: ${schema}`);
}
