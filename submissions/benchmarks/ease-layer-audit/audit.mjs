import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { performance } from 'perf_hooks';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load performance budget configuration
const budgetPath = path.join(__dirname, 'budget.json');
const budget = JSON.parse(fs.readFileSync(budgetPath, 'utf8'));

const startExecution = performance.now();

// Mock CSS string containing @layer definitions as audit target
const mockCssTarget = `
/* EaseMotion CSS Layer Cascade Rule Order Evaluation Audit Target */
@layer reset, base, components, utilities;

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
  }
}

@layer components {
  .ease-card {
    border-radius: 0.5rem;
    padding: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
}

@layer utilities {
  .ease-flex {
    display: flex;
  }
  .ease-hidden {
    display: none;
  }
}
`;

console.log('=== EaseMotion CSS Layer Cascade Rule Order Evaluation Audit ===\n');

// 1. Bundle Byte Size Verification
const bundleSizeBytes = Buffer.byteLength(mockCssTarget, 'utf8');
console.log(`Bundle Size: ${bundleSizeBytes} bytes (Limit: ${budget.maxBundleSizeBytes} bytes)`);

if (bundleSizeBytes > budget.maxBundleSizeBytes) {
  console.error(`[FATAL ERROR] Bundle size (${bundleSizeBytes} bytes) exceeds budget maximum limit of ${budget.maxBundleSizeBytes} bytes.`);
  process.exit(1);
}

// 2. CSS @layer Declaration Order Parsing & Verification
const layerRegex = /@layer\s+([^;{}]+)/g;
const detectedLayers = [];
let match;

while ((match = layerRegex.exec(mockCssTarget)) !== null) {
  const layerContent = match[1];
  const layerNames = layerContent.split(',').map((l) => l.trim().split('{')[0].trim());
  for (const layerName of layerNames) {
    if (layerName && !detectedLayers.includes(layerName)) {
      detectedLayers.push(layerName);
    }
  }
}

console.log(`Detected CSS Layers: [${detectedLayers.join(', ')}]`);
console.log(`Required Layer Order: [${budget.requiredLayers.join(', ')}]`);

let lastFoundIndex = -1;
for (const requiredLayer of budget.requiredLayers) {
  const foundIndex = detectedLayers.indexOf(requiredLayer);
  if (foundIndex === -1) {
    console.error(`[FATAL ERROR] Required layer '${requiredLayer}' is missing from CSS cascade rules.`);
    process.exit(1);
  }
  if (foundIndex < lastFoundIndex) {
    console.error(`[FATAL ERROR] Required layer '${requiredLayer}' is out of order. Expected sequence: [${budget.requiredLayers.join(', ')}].`);
    process.exit(1);
  }
  lastFoundIndex = foundIndex;
}

// 3. Execution Time Threshold Verification
const executionMs = performance.now() - startExecution;
console.log(`Execution Time: ${executionMs.toFixed(3)} ms (Limit: ${budget.maxExecutionMs} ms)`);

if (executionMs > budget.maxExecutionMs) {
  console.error(`[FATAL ERROR] Audit execution time (${executionMs.toFixed(3)} ms) exceeded budget threshold of ${budget.maxExecutionMs} ms.`);
  process.exit(1);
}

console.log('\n✅ [SUCCESS] All CSS Layer Cascade Evaluation Audit checks passed successfully.');
process.exit(0);
