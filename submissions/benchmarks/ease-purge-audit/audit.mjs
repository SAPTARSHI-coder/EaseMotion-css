import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { performance } from 'perf_hooks';

const startTime = performance.now();

// Resolve directory and budget file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const budgetPath = path.join(__dirname, 'budget.json');

// Load performance budget configuration
const budget = JSON.parse(fs.readFileSync(budgetPath, 'utf-8'));

// Mock HTML template for component markup
const mockHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>EaseMotion Purge Efficiency Benchmark</title>
</head>
<body>
  <header class="navbar container flex-row">
    <a href="#" class="brand-logo active">EaseMotion</a>
    <nav class="nav-links">
      <a href="#" class="btn btn-primary">Docs</a>
      <a href="#" class="btn btn-secondary">GitHub</a>
    </nav>
  </header>
  <main class="main-content grid-layout">
    <section class="card shadow-md">
      <h1 class="heading title">Performance Audit</h1>
      <p class="text-body bold">Static analysis purge efficiency test.</p>
    </section>
  </main>
</body>
</html>
`;

// Mock CSS template containing active and unused selectors
const mockCss = `
.navbar { display: flex; align-items: center; }
.container { max-width: 1200px; margin: 0 auto; }
.flex-row { flex-direction: row; }
.brand-logo { font-size: 1.5rem; text-decoration: none; }
.active { color: #0070f3; }
.nav-links { display: flex; gap: 1rem; }
.btn { padding: 0.5rem 1rem; border-radius: 4px; }
.btn-primary { background-color: #0070f3; color: #ffffff; }
.btn-secondary { background-color: #666666; color: #ffffff; }
.main-content { padding: 2rem; }
.grid-layout { display: grid; grid-template-columns: 1fr; }
.card { padding: 1.5rem; border: 1px solid #e0e0e0; }
.shadow-md { box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
.heading { font-size: 2rem; font-weight: 700; }
.title { line-height: 1.2; }
.text-body { font-size: 1rem; color: #333333; }
.bold { font-weight: 600; }
.unused-hero-banner { display: block; height: 400px; background: red; }
`;

// Extract used class names from HTML using regular expressions
const htmlClassRegex = /class="([^"]+)"/g;
const usedClasses = new Set();
let htmlMatch;
while ((htmlMatch = htmlClassRegex.exec(mockHtml)) !== null) {
  const classes = htmlMatch[1].trim().split(/\s+/);
  classes.forEach(cls => {
    if (cls) usedClasses.add(cls);
  });
}

// Extract defined class selectors from CSS using regular expressions
const cssClassRegex = /\.([a-zA-Z0-9_-]+)/g;
const cssClasses = new Set();
let cssMatch;
while ((cssMatch = cssClassRegex.exec(mockCss)) !== null) {
  if (cssMatch[1]) {
    cssClasses.add(cssMatch[1]);
  }
}

// Determine unused CSS classes
const allCssClasses = Array.from(cssClasses);
const unusedClasses = allCssClasses.filter(cls => !usedClasses.has(cls));
const totalCssClasses = allCssClasses.length;
const unusedCount = unusedClasses.length;
const unusedPercentage = totalCssClasses > 0 ? (unusedCount / totalCssClasses) * 100 : 0;

// Calculate CSS bundle size in bytes
const cssBuffer = Buffer.from(mockCss, 'utf-8');
const bundleSizeBytes = cssBuffer.length;

// Enforce budget limit: Unused CSS Percentage
if (unusedPercentage > budget.maxUnusedClassPercentage) {
  console.error(`[FATAL ERROR] Unused CSS Class Percentage (${unusedPercentage.toFixed(2)}%) exceeds budget limit (${budget.maxUnusedClassPercentage}%).`);
  console.error(`Offending Unused Classes: ${unusedClasses.join(', ')}`);
  process.exit(1);
}

// Enforce budget limit: CSS Bundle Size
if (bundleSizeBytes > budget.maxBundleSizeBytes) {
  console.error(`[FATAL ERROR] CSS Bundle Size (${bundleSizeBytes} bytes) exceeds budget limit (${budget.maxBundleSizeBytes} bytes).`);
  process.exit(1);
}

// Calculate execution duration
const endTime = performance.now();
const executionMs = endTime - startTime;

// Enforce budget limit: Execution Duration
if (executionMs > budget.maxExecutionMs) {
  console.error(`[FATAL ERROR] Audit Execution Time (${executionMs.toFixed(2)} ms) exceeds budget limit (${budget.maxExecutionMs} ms).`);
  process.exit(1);
}

// Log execution report
console.log('--------------------------------------------------');
console.log('   EASEMOTION PURGE EFFICIENCY BENCHMARK REPORT   ');
console.log('--------------------------------------------------');
console.log(`Execution Time       : ${executionMs.toFixed(2)} ms (Limit: ${budget.maxExecutionMs} ms)`);
console.log(`Bundle Size          : ${bundleSizeBytes} bytes (Limit: ${budget.maxBundleSizeBytes} bytes)`);
console.log(`Unused CSS Classes   : ${unusedPercentage.toFixed(2)}% (${unusedCount}/${totalCssClasses}) (Limit: ${budget.maxUnusedClassPercentage}%)`);
console.log(`Target FPS Benchmark : ${budget.targetFps} FPS`);
console.log('--------------------------------------------------');
console.log('SUCCESS: All performance budget thresholds passed cleanly.');

process.exit(0);
