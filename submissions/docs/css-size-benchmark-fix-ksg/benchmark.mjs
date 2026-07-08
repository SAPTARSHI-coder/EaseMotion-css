/**
 * CSS Size Benchmark — corrected label mapping
 *
 * Bug fixed: EaseMotion CSS (min) and EaseMotion CSS (full) were swapped.
 *   Before fix → (min) read easemotion.css (~2 KB entry file)
 *                (full) read easemotion.min.css (~174 KB bundled file)
 *   After fix  → (min) reads easemotion.min.css (bundled + minified output)
 *                (full) reads easemotion.css     (source entry with @imports)
 */

import fs from "node:fs";
import zlib from "node:zlib";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Root of the EaseMotion CSS project (3 levels up from this file)
const rootDir = path.resolve(__dirname, "../../..");

// ─── Helper: format raw bytes into a human-readable string ───────────────────
function formatBytes(bytes) {
  if (bytes === null || bytes === undefined) return "N/A";
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(1)} KB`;
}

// ─── Helper: measure a local file ─────────────────────────────────────────────
function measureLocal(filePath) {
  if (!fs.existsSync(filePath)) return null;
  const buf = fs.readFileSync(filePath);
  return {
    rawBytes: buf.length,
    gzipBytes: zlib.gzipSync(buf).length,
  };
}

// ─── Helper: measure an npm-installed package ─────────────────────────────────
function measurePackage(packageName) {
  try {
    // resolve() throws if the package is not installed
    const resolved = new URL(import.meta.resolve(packageName)).pathname;
    return measureLocal(resolved);
  } catch {
    return null;
  }
}

// ─── Benchmark entries ────────────────────────────────────────────────────────
//
//  IMPORTANT — the two EaseMotion entries were previously swapped:
//    "EaseMotion CSS (min)" was pointing at easemotion.css  ← BUG
//    "EaseMotion CSS (full)" was pointing at easemotion.min.css ← BUG
//
//  Corrected mapping below:
//    "EaseMotion CSS (min)"  → easemotion.min.css (the bundled+minified output)
//    "EaseMotion CSS (full)" → easemotion.css     (the source entry file)
//
const entries = [
  {
    library: "EaseMotion CSS (min)",
    // ✅ FIXED: was previously reading easemotion.css by mistake
    filePath: path.join(rootDir, "easemotion.min.css"),
    source: "local",
  },
  {
    library: "EaseMotion CSS (full)",
    // ✅ FIXED: was previously reading easemotion.min.css by mistake
    filePath: path.join(rootDir, "easemotion.css"),
    source: "local",
  },
  {
    library: "Animate.css",
    packageName: "animate.css",
    installHint: "npm i animate.css",
    source: "npm",
  },
  {
    library: "motion (Framer)",
    packageName: "motion",
    installHint: "npm i motion",
    source: "npm",
  },
];

// ─── Run measurements ─────────────────────────────────────────────────────────
const results = entries.map((entry) => {
  let sizes =
    entry.source === "local"
      ? measureLocal(entry.filePath)
      : measurePackage(entry.packageName);

  if (sizes) {
    return {
      library: entry.library,
      rawBytes: sizes.rawBytes,
      gzipBytes: sizes.gzipBytes,
      rawFmt: formatBytes(sizes.rawBytes),
      gzipFmt: formatBytes(sizes.gzipBytes),
      source: entry.source,
    };
  }

  // Package not installed or file missing
  const hint = entry.installHint ? `N/A (run: ${entry.installHint})` : "N/A";
  return {
    library: entry.library,
    rawBytes: null,
    gzipBytes: null,
    rawFmt: hint,
    gzipFmt: "N/A",
    source: "not installed",
  };
});

// ─── Sanity check: warn if min ≥ full (the original bug symptom) ──────────────
const minEntry = results.find((r) => r.library === "EaseMotion CSS (min)");
const fullEntry = results.find((r) => r.library === "EaseMotion CSS (full)");

if (
  minEntry?.rawBytes !== null &&
  fullEntry?.rawBytes !== null &&
  minEntry.rawBytes < fullEntry.rawBytes
) {
  // This should not happen after the fix — min bundle is always larger than
  // the entry file which only contains @import statements.
  // If it does, something is wrong with the build.
  process.stderr.write(
    "[benchmark] WARNING: easemotion.min.css is smaller than easemotion.css.\n" +
      "            Run `npm run build` to regenerate the minified bundle.\n"
  );
}

// ─── Output ───────────────────────────────────────────────────────────────────
const report = {
  timestamp: new Date().toISOString(),
  nodeVersion: process.version,
  results,
};

process.stdout.write(JSON.stringify(report, null, 2) + "\n");
