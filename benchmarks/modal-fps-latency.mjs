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
  maxExecutionMs: 15000, 
  maxBundleSizeBytes: 204800, // 200 KB
};

async function main() {
  console.log('🚀 Starting Modal Rendering FPS Benchmark...\n');
  const startTime = Date.now();
  
  // 1. Measure bundle size
  const cssPath = resolve(ROOT, 'easemotion.min.css');
  let bundleSize = 0;
  if (existsSync(cssPath)) {
    bundleSize = readFileSync(cssPath).length;
  } else {
    console.warn(`⚠️ Could not find minified CSS at: ${cssPath}`);
  }

  // 2. Launch Puppeteer
  const browser = await puppeteer.launch({ 
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });
  
  const page = await browser.newPage();
  
  // 3. Prepare HTML Content
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <style>
        body, html { margin: 0; padding: 0; height: 100%; background: #000; overflow: hidden; }
        .modal {
          position: fixed;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 300px; height: 200px;
          background: #fff;
          display: none;
          opacity: 0;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .modal.open {
          display: block;
          opacity: 1;
        }
      </style>
    </head>
    <body>
      <div id="modal" class="modal ease-in-out">
        Modal Content
      </div>
      <script>
        let frameCount = 0;
        let running = true;
        
        function loop() {
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
  if (existsSync(cssPath)) {
    await page.addStyleTag({ path: cssPath });
  }

  // 4. Simulate Rapid Modal Open/Close
  const testDuration = 2000; // ms
  
  await page.evaluate(() => {
    const modal = document.getElementById('modal');
    // toggle every 100ms
    window.intervalId = setInterval(() => {
      modal.classList.toggle('open');
      // force reflow
      void modal.offsetWidth;
    }, 100);
  });

  await new Promise(r => setTimeout(r, testDuration));
  
  await page.evaluate(() => {
    clearInterval(window.intervalId);
  });
  
  const fps = await page.evaluate((duration) => window.getFPS(duration), testDuration);
  
  await browser.close();

  const executionTimeMs = Date.now() - startTime;

  console.log('📊 Metrics Report:');
  console.log(`- FPS: ${fps.toFixed(2)} (Budget: >= ${BUDGETS.minFPS})`);
  console.log(`- Bundle Size: ${bundleSize} bytes (Budget: <= ${BUDGETS.maxBundleSizeBytes} bytes)`);
  console.log(`- Execution Time: ${executionTimeMs} ms (Budget: <= ${BUDGETS.maxExecutionMs} ms)\n`);

  let failed = false;

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
