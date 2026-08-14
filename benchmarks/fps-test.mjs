#!/usr/bin/env node
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const RESULTS = resolve(__dirname, 'results');

if (!existsSync(RESULTS)) mkdirSync(RESULTS, { recursive: true });

const BUDGETS = {
  minFps: 30, // Relaxed minimum FPS for CI environments
  maxBundleSize: 250000, // bytes
  maxExecutionMs: 500 // Relaxed execution time for CI environments
};

async function runBenchmark() {
  console.log('🚀 Starting CSS Layer Cascade Benchmark...');

  const cssPath = resolve(ROOT, 'easemotion.min.css');
  let cssContent = '';
  try {
    cssContent = readFileSync(cssPath, 'utf8');
  } catch (err) {
    console.error(`❌ Could not read CSS file at ${cssPath}`);
    process.exit(1);
  }

  const bundleSizeBytes = Buffer.byteLength(cssContent, 'utf8');
  console.log(`\n📦 Bundle Size: ${bundleSizeBytes} bytes (Budget: <= ${BUDGETS.maxBundleSize})`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          /* Simulating CSS layer cascade complexity */
          @layer base, theme, layout, components, utilities;
          
          @layer base {
            body { font-family: sans-serif; margin: 0; padding: 0; }
          }
          @layer theme {
            :root { --primary: #3490dc; --bg: #fff; }
          }
          ${cssContent}
        </style>
      </head>
      <body>
        <div id="container"></div>
        <script>
          // Create 2000 elements to force heavy style recalculation
          const container = document.getElementById('container');
          for(let i = 0; i < 2000; i++) {
            const el = document.createElement('div');
            el.className = 'animation-fade-in flex justify-center text-center items-center w-full h-10';
            container.appendChild(el);
          }
        </script>
      </body>
    </html>
  `;

  await page.setContent(html);

  // Measure Execution Time (Style Recalculation + Layout)
  const executionMs = await page.evaluate(() => {
    const start = performance.now();
    // Force reflow
    document.body.offsetHeight;
    return performance.now() - start;
  });

  console.log(`⏱️  Execution Time: ${executionMs.toFixed(2)} ms (Budget: <= ${BUDGETS.maxExecutionMs})`);

  // Measure FPS
  const fps = await page.evaluate(() => {
    return new Promise(resolve => {
      let frames = 0;
      let startTime = performance.now();
      
      function tick(now) {
        frames++;
        if (now - startTime >= 1000) {
          resolve(frames);
        } else {
          requestAnimationFrame(tick);
        }
      }
      requestAnimationFrame(tick);
    });
  });

  console.log(`🎞️  FPS: ${fps} (Budget: >= ${BUDGETS.minFps})`);

  await browser.close();

  const report = {
    timestamp: new Date().toISOString(),
    metrics: {
      fps,
      bundleSizeBytes,
      executionMs
    },
    budgets: BUDGETS,
    passed: fps >= BUDGETS.minFps && bundleSizeBytes <= BUDGETS.maxBundleSize && executionMs <= BUDGETS.maxExecutionMs
  };

  writeFileSync(resolve(RESULTS, 'css-layer-cascade.json'), JSON.stringify(report, null, 2));

  let failed = false;
  if (bundleSizeBytes > BUDGETS.maxBundleSize) {
    console.error(`❌ Bundle size exceeded budget limit.`);
    failed = true;
  }
  if (executionMs > BUDGETS.maxExecutionMs) {
    console.error(`❌ Execution time exceeded budget limit.`);
    failed = true;
  }
  if (fps < BUDGETS.minFps) {
    console.error(`❌ FPS fell below budget limit.`);
    failed = true;
  }

  if (failed) {
    console.error(`\n🚨 Benchmark failed! Performance metrics fell below target thresholds.`);
    process.exit(1);
  } else {
    console.log(`\n✅ All performance metrics are within budgets.`);
    process.exit(0);
  }
}

runBenchmark().catch(err => {
  console.error(err);
  process.exit(1);
});
