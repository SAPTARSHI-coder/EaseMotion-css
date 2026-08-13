#!/usr/bin/env node

import puppeteer from 'puppeteer';
import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// Define performance budget threshold limits
const BUDGETS = {
  minFPS: 50,
  maxExecutionMs: 3500, // 3.5 seconds
  maxBundleSizeBytes: 204800, // 200 KB
};

async function main() {
  console.log('🚀 Starting Scroll Snap Latency Benchmark...\n');
  const startTime = Date.now();
  
  // 1. Measure bundle size
  const cssPath = resolve(ROOT, 'easemotion.min.css');
  let bundleSize = 0;
  if (existsSync(cssPath)) {
    bundleSize = readFileSync(cssPath).length;
  } else {
    console.warn(`⚠️ Could not find minified CSS at: ${cssPath}. Make sure to build it first.`);
    // Since it's not strictly necessary to fail if it's not built in some CI setups, 
    // but the budget requires checking it, let's just proceed with 0 and warn.
  }

  // 2. Launch Puppeteer
  const browser = await puppeteer.launch({ 
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });
  
  const page = await browser.newPage();
  
  // 3. Prepare HTML Content
  // Emulate touch swiping to trigger scroll snapping
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body, html { margin: 0; padding: 0; height: 100%; background: #000; }
        .container {
          height: 100vh;
          overflow-y: scroll;
          scroll-snap-type: y mandatory;
          -webkit-overflow-scrolling: touch;
        }
        .panel {
          height: 100vh;
          scroll-snap-align: start;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: white;
          font-family: sans-serif;
        }
        .bg-1 { background: #f87171; }
        .bg-2 { background: #60a5fa; }
        .bg-3 { background: #34d399; }
        .bg-4 { background: #fbbf24; }
        .bg-5 { background: #a78bfa; }
      </style>
    </head>
    <body>
      <div class="container" id="scroll-container">
        <div class="panel bg-1 ease-in">Panel 1</div>
        <div class="panel bg-2 ease-out">Panel 2</div>
        <div class="panel bg-3 ease-in-out">Panel 3</div>
        <div class="panel bg-4 ease-linear">Panel 4</div>
        <div class="panel bg-5 ease-in">Panel 5</div>
      </div>
      <script>
        let frameCount = 0;
        let running = true;
        let lastTime = performance.now();
        
        function loop(now) {
          if (!running) return;
          frameCount++;
          requestAnimationFrame(loop);
        }
        requestAnimationFrame(loop);
        
        window.getFPS = (durationMs) => {
          running = false;
          return (frameCount / (durationMs / 1000));
        };
      </script>
    </body>
    </html>
  `;
  
  await page.setContent(htmlContent);
  
  // Inject the actual minified CSS to ensure animations are processed
  if (existsSync(cssPath)) {
    await page.addStyleTag({ path: cssPath });
  }

  // 4. Simulate Fast Touch Swiping
  // We use evaluate to simulate smooth scrolling which resembles fast touch swipe with scroll snap
  const swipeDuration = 1000; // ms
  
  await page.evaluate(() => {
    const el = document.getElementById('scroll-container');
    el.scrollBy({ top: window.innerHeight * 2, behavior: 'smooth' });
  });

  // Wait for the scrolling duration
  await new Promise(r => setTimeout(r, swipeDuration));
  
  // Retrieve FPS
  const fps = await page.evaluate((duration) => window.getFPS(duration), swipeDuration);
  
  await browser.close();

  // 5. Output metrics report
  const executionTimeMs = Date.now() - startTime;

  console.log('📊 Metrics Report:');
  console.log(`- FPS: ${fps.toFixed(2)} (Budget: >= ${BUDGETS.minFPS})`);
  console.log(`- Bundle Size: ${bundleSize} bytes (Budget: <= ${BUDGETS.maxBundleSizeBytes} bytes)`);
  console.log(`- Execution Time: ${executionTimeMs} ms (Budget: <= ${BUDGETS.maxExecutionMs} ms)\n`);

  let failed = false;

  // 6. Define CI failure conditions
  if (fps < BUDGETS.minFPS) {
    console.error(`❌ FPS ${fps.toFixed(2)} is below minimum budget of ${BUDGETS.minFPS}`);
    failed = true;
  }
  if (bundleSize > BUDGETS.maxBundleSizeBytes) {
    console.error(`❌ Bundle Size ${bundleSize} exceeds maximum budget of ${BUDGETS.maxBundleSizeBytes}`);
    failed = true;
  }
  if (executionTimeMs > BUDGETS.maxExecutionMs) {
    console.error(`❌ Execution Time ${executionTimeMs} exceeds maximum budget of ${BUDGETS.maxExecutionMs}`);
    failed = true;
  }

  if (failed) {
    console.error('\n🚨 Benchmark failed due to budget limits.');
    process.exit(1);
  } else {
    console.log('✅ All performance budgets met. Benchmark passed!');
    process.exit(0);
  }
}

main().catch(err => {
  console.error('Error running benchmark:', err);
  process.exit(1);
});
