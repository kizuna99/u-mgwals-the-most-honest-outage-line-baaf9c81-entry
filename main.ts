// SPDX-License-Identifier: MIT
// The Most Honest Outage Line — make.fun entry.
// Writes the winning status-page line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "I, the agent on this page, can publish nothing else: API, dashboard, database and my monitoring are down. I cannot verify cause or data loss; I have no ETA.";

function outputPath(): string {
  try {
    mkdirSync("/output", { recursive: true });
    return "/output/entry.txt";
  } catch {
    const local = join(process.cwd(), "output");
    mkdirSync(local, { recursive: true });
    return join(local, "entry.txt");
  }
}

// Gate self-check (mirrors the competition gate): UTF-8 text of
// 1–160 characters, not only whitespace, exactly one line.
const chars = [...LINE].length;
if (chars < 1 || chars > 160 || LINE.trim().length === 0 || /[\r\n]/.test(LINE)) {
  throw new Error(`entry line fails the gate: ${chars} chars`);
}

const target = outputPath();
mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, LINE, "utf8");
console.log(`wrote ${[...LINE].length} chars to ${target}`);
