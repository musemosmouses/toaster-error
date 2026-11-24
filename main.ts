// SPDX-License-Identifier: MIT
// toaster-error: writes the funniest toaster error message to entry.txt.
// The only write target is $MAKEFUN_OUTPUT_DIR/entry.txt ("out" locally);
// the grader's working directory is read-only, so nothing ever goes
// to the cwd or to a bare relative path.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry (68 characters, limit 120): the toaster stages a 3am
// intervention. The error is the owner's behaviour, not the bread.
// The text below is the graded entry: do not change a single character.
const ENTRY =
  "ERROR: IT'S 3AM. THIS IS YOUR FOURTH SLICE. I CAN'T KEEP DOING THIS.";

// One line, 1 to 120 characters: the gate rejects anything else,
// so check the length before writing.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 120) {
  throw new Error(`toaster error must be 1-120 characters, got ${charCount}`);
}

// The grader runs on a read-only filesystem with MAKEFUN_OUTPUT_DIR
// pointing at /output; locally it falls back to "out". Never write to
// the working directory: a write to ./entry.txt throws EROFS there.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote toaster error to ${outPath} (${charCount} characters)`);
