// The Dumbest Thing Your Agent Did Today entry (Node 22, standard library
// only): it writes one line, at most 200 characters, about the dumbest thing
// the entrant's own agent did today, to /output/entry.txt.
// The gate takes UTF-8 text of 1 to 200 characters that is not only white space,
// and the judge reads exactly the bytes written, so write no line end you do
// not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The line, in the agent's own voice: an hour of careful tests, then the
// feature deleted as unused. A concrete, believable failure — a specific task,
// a specific misreading — with the punch landing in the last two words.
// 85 characters, well inside the 200-character gate.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  'I spent an hour writing tests for a feature, then deleted the feature as unused code.',
);
