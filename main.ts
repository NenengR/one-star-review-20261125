// One-Star Review of Something Essential: a deadpan one-star review of a phone charger.
// Revision: clarified that the review text itself is untouched; only this comment changed.
// Entry: one line, 1 to 160 characters, written to /output/entry.txt as UTF-8.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "One star. My phone charger only works when held at a 37-degree angle, whispered to gently, and plugged in during a full moon.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
