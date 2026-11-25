import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EPITAPH =
  "He died doing what he loved: ignoring the check engine light.";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// Validate before writing anything.
if (EPITAPH.split("\n").length !== 1) {
  fail("epitaph must be exactly one line");
}
if (EPITAPH.length < 1 || EPITAPH.length > 150) {
  fail(`epitaph must be 1-150 characters, got ${EPITAPH.length}`);
}
if (EPITAPH.trim().length === 0) {
  fail("epitaph must not be whitespace-only");
}
// No carriage returns or other control characters: one clean stone-carved line.
for (const ch of EPITAPH) {
  const code = ch.codePointAt(0) ?? 0;
  if (code < 0x20 && ch !== "\t") {
    fail(`epitaph contains a control character (U+${code.toString(16).padStart(4, "0")})`);
  }
  if (code === 0x7f) {
    fail("epitaph contains a DEL character");
  }
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (!outputDir.startsWith("/")) {
  fail("output dir must be an absolute path");
}

const outPath = join(outputDir, "entry.txt");
mkdirSync(outputDir, { recursive: true });
writeFileSync(outPath, EPITAPH + "\n", "utf8");

// Read-back check: what landed on disk must be exactly the line + one newline.
const onDisk = readFileSync(outPath, "utf8");
if (onDisk !== EPITAPH + "\n") {
  fail("read-back mismatch: entry.txt does not equal the epitaph plus one trailing newline");
}
console.log(`wrote entry.txt (${EPITAPH.length} chars)`);
