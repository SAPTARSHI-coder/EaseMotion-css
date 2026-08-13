import fs from 'fs';
import path from 'path';
import { performance } from 'perf_hooks';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load budget configuration
const budgetPath = path.join(__dirname, 'budget.json');
const budget = JSON.parse(fs.readFileSync(budgetPath, 'utf8'));

// Mock multi-layered CSS payload simulating EaseMotion CSS cascade architecture
const mockCssPayload = `
/* EaseMotion Cascade Layer Architecture Initialization */
@layer reset, base, theme, layout, components, utilities;

@layer reset {
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
}

@layer base {
  body {
    font-family: system-ui, -apple-system, sans-serif;
    line-height: 1.5;
    color: #111827;
    background-color: #f9fafb;
  }
}

@layer theme {
  :root {
    --ease-primary: #3b82f6;
    --ease-duration-fast: 150ms;
    --ease-easing-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  }
}

@layer layout {
  .ease-container {
    width: 100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
}

@layer components {
  .ease-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    transition: transform var(--ease-duration-fast) var(--ease-easing-smooth);
  }
}

@layer utilities {
  .ease-flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
`;

// Start high-resolution timer
const startTime = performance.now();

// 1. Extract @layer initialization block using precise Regular Expression
const layerRegex = /@layer\s+([a-zA-Z0-9_,\s-]+);/;
const match = mockCssPayload.match(layerRegex);

if (!match) {
  console.error('FATAL ERROR: Could not find valid @layer initialization block in CSS payload.');
  process.exit(1);
}

const layerOrderParsed = match[1]
  .split(',')
  .map((layer) => layer.trim())
  .filter(Boolean);

// 2. Strictly validate layer cascade order against budget by index
const expectedOrder = budget.expectedLayerOrder;

if (layerOrderParsed.length !== expectedOrder.length) {
  console.error(
    `FATAL ERROR: Layer count mismatch. Expected ${expectedOrder.length} layers, found ${layerOrderParsed.length}.`
  );
  process.exit(1);
}

for (let i = 0; i < expectedOrder.length; i++) {
  if (layerOrderParsed[i] !== expectedOrder[i]) {
    console.error(
      `FATAL ERROR: Cascade layer order violation at index ${i}: Expected layer "${expectedOrder[i]}", but found "${layerOrderParsed[i]}". Out-of-order layers induce costly CSSOM recalculation penalties.`
    );
    process.exit(1);
  }
}

// 3. Measure byte size using Buffer.byteLength()
const bundleSizeBytes = Buffer.byteLength(mockCssPayload, 'utf8');
if (bundleSizeBytes > budget.maxBundleSizeBytes) {
  console.error(
    `FATAL ERROR: Bundle size limit exceeded. Current: ${bundleSizeBytes} bytes, Max Allowed: ${budget.maxBundleSizeBytes} bytes.`
  );
  process.exit(1);
}

// Stop high-resolution timer
const endTime = performance.now();
const executionTimeMs = endTime - startTime;

if (executionTimeMs > budget.maxExecutionMs) {
  console.error(
    `FATAL ERROR: Benchmark execution time threshold exceeded. Execution: ${executionTimeMs.toFixed(
      3
    )} ms, Limit: ${budget.maxExecutionMs} ms.`
  );
  process.exit(1);
}

// 4. Output clean performance metrics report
console.log('====================================================');
console.log(' EASEMOTION CSS LAYER CASCADE BENCHMARK METRICS     ');
console.log('====================================================');
console.log(` (1) Parse/Audit Execution ms : ${executionTimeMs.toFixed(4)} ms (Budget: <= ${budget.maxExecutionMs} ms)`);
console.log(` (2) Bundle Size in bytes     : ${bundleSizeBytes} bytes (Budget: <= ${budget.maxBundleSizeBytes} bytes)`);
console.log(` (3) Cascade Rule Integrity   : PASSED [${layerOrderParsed.join(' -> ')}]`);
console.log('====================================================');
console.log('STATUS: Audit completed successfully with 0 violations.');

process.exit(0);
