/**
 * EaseMotion Headless Chrome Puppeteer FPS Benchmark for Modals
 * Issue #86413
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Performance budget thresholds
const BUDGET = {
  minFps: 55,
  maxBundleSizeBytes: 500000, // 500 KB
  maxExecutionMs: 3000        // 3 seconds
};

(async () => {
  console.log('🚀 Starting Headless Chrome Puppeteer FPS Benchmark for Modals...');
  const startTime = Date.now();

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // Navigate to local or test modal showcase page
  const demoPath = 'file://' + path.resolve(__dirname, 'demo.html');
  await page.goto(demoPath, { waitUntil: 'networkidle0' });

  // Measure bundle size of demo assets
  const htmlContent = fs.readFileSync(path.resolve(__dirname, 'demo.html'), 'utf8');
  const cssContent = fs.readFileSync(path.resolve(__dirname, 'style.css'), 'utf8');
  const bundleSizeBytes = Buffer.byteLength(htmlContent + cssContent, 'utf8');

  // Simulate modal open/close animation and measure FPS via requestAnimationFrame performance timeline
  const fpsResult = await page.evaluate(async () => {
    return new Promise((resolve) => {
      let frames = 0;
      let startTime = performance.now();
      
      // Trigger modal open class
      const modal = document.querySelector('.ease-modal-dialog');
      if (modal) {
        modal.classList.add('active');
      }

      function countFrames(currentTime) {
        frames++;
        const elapsed = currentTime - startTime;
        if (elapsed < 1000) {
          requestAnimationFrame(countFrames);
        } else {
          const fps = Math.round((frames * 1000) / elapsed);
          resolve(fps);
        }
      }

      requestAnimationFrame(countFrames);
    });
  });

  await browser.close();

  const executionMs = Date.now() - startTime;

  const metricsReport = {
    timestamp: new Date().toISOString(),
    fps: fpsResult,
    bundleSizeBytes,
    executionMs,
    budget: BUDGET,
    passed: fpsResult >= BUDGET.minFps && bundleSizeBytes <= BUDGET.maxBundleSizeBytes && executionMs <= BUDGET.maxExecutionMs
  };

  const reportPath = path.resolve(__dirname, 'metrics-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(metricsReport, null, 2));

  console.log('📊 Benchmark Results:');
  console.log(`- FPS: ${fpsResult} (Target >= ${BUDGET.minFps})`);
  console.log(`- Bundle Size: ${bundleSizeBytes} bytes (Target <= ${BUDGET.maxBundleSizeBytes})`);
  console.log(`- Execution Time: ${executionMs} ms (Target <= ${BUDGET.maxExecutionMs})`);

  if (!metricsReport.passed) {
    console.error('❌ Performance budget breached!');
    process.exit(1);
  } else {
    console.log('✅ All performance metrics met successfully!');
    process.exit(0);
  }
})().catch((err) => {
  console.error('❌ Benchmark execution failed:', err);
  process.exit(1);
});
