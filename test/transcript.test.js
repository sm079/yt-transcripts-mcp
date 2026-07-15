import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseVideoId } from '../src/transcript.js';

test('parseVideoId handles common URL shapes', () => {
  const id = 'dQw4w9WgXcQ';
  for (const input of [
    id,
    `https://www.youtube.com/watch?v=${id}`,
    `https://www.youtube.com/watch?v=${id}&t=42s&list=PL123`,
    `youtube.com/watch?v=${id}`,
    `https://m.youtube.com/watch?v=${id}`,
    `https://youtu.be/${id}?si=abc`,
    `https://www.youtube.com/shorts/${id}`,
    `https://www.youtube.com/embed/${id}`,
    `https://www.youtube.com/live/${id}`,
  ]) {
    assert.equal(parseVideoId(input), id, input);
  }
});

test('parseVideoId rejects non-YouTube input', () => {
  assert.throws(() => parseVideoId('https://example.com/watch?v=dQw4w9WgXcQ'));
  assert.throws(() => parseVideoId('hello world'));
});
