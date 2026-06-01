import test from 'node:test';
import assert from 'node:assert/strict';

import {
  listGsdWorkflows,
  resolveGsdWorkflow
} from '../src/index.ts';

test('resolves common GSD command forms to workflow metadata', () => {
  const workflow = resolveGsdWorkflow('gsd run');

  assert.equal(workflow.id, 'gsd-run');
  assert.equal(workflow.writeAllowed, true);
  assert.equal(workflow.requiresApproval, false);
  assert.deepEqual(workflow.stages, [
    'load_approved_plan',
    'assign_implementation',
    'execute_changes',
    'collect_diff',
    'handoff_to_review'
  ]);
});

test('lists workflows in stable command order', () => {
  assert.deepEqual(
    listGsdWorkflows().map((workflow) => workflow.id),
    ['gsd-plan', 'gsd-run', 'gsd-review', 'gsd-ship']
  );
});

test('rejects unknown GSD commands', () => {
  assert.throws(
    () => resolveGsdWorkflow('gsd improvise'),
    /Unknown GSD workflow/
  );
});
