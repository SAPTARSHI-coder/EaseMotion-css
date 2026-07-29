#!/usr/bin/env node
/**
 * EaseMotion CSS — Bundle Size Benchmark
 * ============================================================
 * Compares the gzipped bundle sizes of major animation libraries.
 * Writes results to benchmarks/results/latest.json.
 *
 * Usage:
 *   node benchmarks/bundle-size.mjs
 *
 * CI: runs on every release tag via .github/workflows/benchmarks.yml
 * ============================================================
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';
import { promisify } from 'util';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT      = resolve(__dirname, '..');
const RESULTS   = resolve(__dirname, 'results');

if (!existsSync(RESULTS)) mkdirSync(RESULTS, { recursive: true });

/** Measure gzip size of a file in bytes */
async function gzipSize(filePath) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const gzip = createGzip({ level: 9 });
    const src  = createReadStream(filePath);
    gzip.on('data', chunk => { size += chunk.length; });
    gzip.on('end', () => resolve(size));
    gzip.on('error', reject);
    src.on('error', reject);
    src.pipe(gzip);
  });
}

/** Format bytes → human readable */
function fmt(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function main() {
  console.log('\n📦 EaseMotion CSS — Bundle Size Benchmark\n');
  console.log('─'.repeat(60));

  const results = [];

  // ── EaseMotion CSS (local) ────────────────────────────────────
  const emMinPath  = resolve(ROOT, 'easemotion.min.css');
  const emFullPath = resolve(ROOT, 'easemotion.css');

  const emMinGzip  = await gzipSize(emMinPath);
  const emMinRaw   = readFileSync(emMinPath).length;

  results.push({
    library:    'EaseMotion CSS (min)',
    rawBytes:   emMinRaw,
    gzipBytes:  emMinGzip,
    rawFmt:     fmt(emMinRaw),
    gzipFmt:    fmt(emMinGzip),
    source:     'local',
  });

  const emFullGzip = await gzipSize(emFullPath);
  const emFullRaw  = readFileSync(emFullPath).length;
  results.push({
    library:    'EaseMotion CSS (full)',
    rawBytes:   emFullRaw,
    gzipBytes:  emFullGzip,
    rawFmt:     fmt(emFullRaw),
    gzipFmt:    fmt(emFullGzip),
    source:     'local',
  });

  // ── node_modules (if installed) ───────────────────────────────
  const competitors = [
    {
      name:    'Animate.css',
      paths:   ['node_modules/animate.css/animate.min.css'],
      npmName: 'animate.css',
    },
    {
      name:    'motion (Framer)',
      paths:   ['node_modules/motion/dist/motion.js'],
      npmName: 'motion',
    },
  ];

  for (const c of competitors) {
    const found = c.paths.map(p => resolve(ROOT, p)).find(existsSync);
    if (found) {
      const rawBytes  = readFileSync(found).length;
      const gzipBytes = await gzipSize(found);
      results.push({
        library:   c.name,
        rawBytes,
        gzipBytes,
        rawFmt:    fmt(rawBytes),
        gzipFmt:   fmt(gzipBytes),
        source:    'node_modules',
      });
    } else {
      results.push({
        library:   c.name,
        rawBytes:  null,
        gzipBytes: null,
        rawFmt:    'N/A (run: npm i ' + c.npmName + ')',
        gzipFmt:   'N/A',
        source:    'not installed',
      });
    }
  }

  // ── Print table ───────────────────────────────────────────────
  const COL = [32, 12, 12];
  const header = ['Library', 'Raw', 'Gzip (lvl 9)'];
  console.log(
    header[0].padEnd(COL[0]) +
    header[1].padStart(COL[1]) +
    header[2].padStart(COL[2])
  );
  console.log('─'.repeat(COL[0] + COL[1] + COL[2]));

  for (const r of results) {
    const winner = r.library.startsWith('EaseMotion') ? ' ✓' : '';
    console.log(
      (r.library + winner).padEnd(COL[0]) +
      r.rawFmt.padStart(COL[1]) +
      r.gzipFmt.padStart(COL[2])
    );
  }

  // ── Compute savings vs Animate.css ───────────────────────────
  const animateCss = results.find(r => r.library === 'Animate.css');
  const emMin      = results.find(r => r.library === 'EaseMotion CSS (min)');
  if (animateCss?.gzipBytes && emMin?.gzipBytes) {
    const saving = (((animateCss.gzipBytes - emMin.gzipBytes) / animateCss.gzipBytes) * 100).toFixed(1);
    console.log(`\n🏆 EaseMotion CSS (min) is ${saving}% smaller than Animate.css (gzip)`);
  }

  // ── Write results ─────────────────────────────────────────────
  const output = {
    timestamp:  new Date().toISOString(),
    nodeVersion: process.version,
    results,
  };

  const outPath = resolve(RESULTS, 'latest.json');
  writeFileSync(outPath, JSON.stringify(output, null, 2));
  console.log(`\n📝 Results written to benchmarks/results/latest.json\n`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
