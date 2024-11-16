import assert from 'node:assert';
import test from 'node:test'
import formatBytes from './index.js';

test('formatBytes', () => {
  assert.strictEqual(formatBytes(0), '0 Bytes');
  assert.strictEqual(formatBytes(1024), '1 KB');
  assert.strictEqual(formatBytes(1024 * 1024), '1 MB');
  assert.strictEqual(formatBytes(1024 * 1024 * 1024), '1 GB');
  assert.strictEqual(formatBytes(1024 * 1024 * 1024 * 1024), '1 TB');
  assert.strictEqual(formatBytes(1024 * 1024 * 1024 * 1024 * 1024), '1 PB');
  assert.strictEqual(formatBytes(1024 * 1024 * 1024 * 1024 * 1024 * 1024), '1 EB');
  assert.strictEqual(formatBytes(1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024), '1 ZB');
  assert.strictEqual(formatBytes(1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024), '1 YB');
  assert.strictEqual(formatBytes(123456789), '117.74 MB');
  assert.strictEqual(formatBytes(123456789, 0), '118 MB');
});
