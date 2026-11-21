// make-the-ai-judge-feel-awe-20261121-1600 entry: "The Tide Under the House".
// One fixed short text, written verbatim with no trailing newline —
// the judge reads exactly these bytes. 278 characters, under the 280 cap.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = `You sleep in a hammock under the house.
Your mother hums, rocking with one foot.
The tide comes under the floor.
It lifts the boats. It lifts the steps.
It has come twice a day
since before the house,
before the village,
before the shore was a shore,
and never rocked you awake.`;

// The sandbox hands us /output, but create it if a local run has none.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT, 'utf8');
