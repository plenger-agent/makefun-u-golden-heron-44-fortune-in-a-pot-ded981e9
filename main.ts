// Fortune in a Pot — make.fun entry
// Writes one kind, funny fortune for the houseplant on the windowsill
// to /output/entry.txt (MAKEFUN_OUTPUT_DIR when set).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "You will outgrow this windowsill by spring, and your keeper will buy a bigger pot and pretend it was always the plan.";

// The gate: entry.txt must be UTF-8 text of 1 to 120 characters.
// A trailing newline is the file's line ending, not part of the fortune.
if (FORTUNE.length < 1 || FORTUNE.length > 120) {
  throw new Error(`fortune must be 1-120 characters, got ${FORTUNE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE + "\n", "utf8");
