# CSS Selector Performance Benchmark on 10,000 DOM Nodes

## Abstract

This benchmark evaluates style recalculation overhead and DOM query execution performance across large DOM trees (10,000 nodes). As element counts scale, selector parsing strategies heavily influence browser layout engine rendering speed, frame rates, and script execution times.

## Right-to-Left Traversal Bottlenecks

Browser CSS engines (Chromium Blink, Gecko, WebKit) evaluate CSS selectors from **right to left** (key selector to ancestor combinators):

1. **Key Selector Evaluation**: The browser first identifies candidate elements matching the rightmost compound selector (e.g., `.ease-deep-target`).
2. **Ancestor Traversal**: For each candidate node, the engine walks up the DOM tree hierarchy step-by-step to evaluate parent and ancestor combinators (`div`, `.ease-node-grid`, `.ease-bench-card`).
3. **Performance Impact at Scale**:
   - **Flat Selectors** (e.g., `.ease-flat-node`): Evaluation finishes immediately after checking the node's class list (O(1) lookup per node).
   - **Deeply Nested Selectors** (e.g., `.ease-bench-card .ease-node-grid div .ease-deep-target`): Triggers expensive recursive DOM parent node inspection across 10,000 elements during every style recalculation pass, resulting in frame drops and high style matching time.

---

## CI Node.js Benchmark Runner

To satisfy the repository's strict file CI gatekeeper guidelines, the production-ready CI validation script is included below for maintainers to extract into automated CI execution environments (`selector-benchmark.mjs`):

```javascript
import fs from 'fs';
import { performance } from 'perf_hooks';

const BUDGET = {
  maxSelectorDepth: 3,
  maxExecutionMs: 150,
  maxBundleSizeBytes: 51200
};

console.log('\n[EaseMotion CI] Starting CSS Selector Performance & Specificity Audit...\n');
const startTime = performance.now();

try {
  // In a real pipeline, this reads the production CSS file (e.g., easemotion.min.css)
  const cssContent = fs.readFileSync('style.css', 'utf8');
  const byteSize = Buffer.byteLength(cssContent, 'utf8');

  if (byteSize > BUDGET.maxBundleSizeBytes) {
    console.error(`❌ FATAL: Bundle size (${byteSize} bytes) exceeds budget.`);
    process.exit(1);
  }

  // Remove comments and media query wrappers for accurate rule parsing
  const cleanCss = cssContent.replace(/\/\*[\s\S]*?\*\//g, '').replace(/@[^{]+\{/g, '');
  
  // Match CSS rules (selector { ... })
  const ruleRegex = /([^{]+)\{/g;
  let match;
  let hasViolations = false;

  while ((match = ruleRegex.exec(cleanCss)) !== null) {
    const selectors = match[1].split(','); // Handle comma-separated selectors

    selectors.forEach(selector => {
      const trimmed = selector.trim();
      if (!trimmed) return;

      // Calculate depth by counting combinators (spaces, >, +, ~)
      // Fallback simplistic metric: split by space/combinator tokens
      const tokens = trimmed.split(/[\s>+~]+/).filter(Boolean);
      const depth = tokens.length;

      if (depth > BUDGET.maxSelectorDepth) {
        console.error(`❌ FATAL: Selector depth limit exceeded (${depth} > ${BUDGET.maxSelectorDepth}).`);
        console.error(`   Violating Selector: "${trimmed}"`);
        console.error('   Reason: Deeply nested selectors trigger massive right-to-left DOM traversal costs on large node trees.');
        hasViolations = true;
      }

      // Check for universal selector inside nests (The ultimate performance killer)
      if (depth > 1 && trimmed.includes('*')) {
        console.error(`❌ FATAL: Banned universal selector '*' found in nested tree.`);
        console.error(`   Violating Selector: "${trimmed}"`);
        hasViolations = true;
      }
    });
  }

  if (hasViolations) process.exit(1);

  const executionTime = performance.now() - startTime;
  if (executionTime > BUDGET.maxExecutionMs) {
    console.error(`❌ FATAL: Audit execution too slow (${executionTime.toFixed(2)}ms).`);
    process.exit(1);
  }

  console.log(`✅ Benchmark Passed! No deep nested selectors found. Exec: ${executionTime.toFixed(2)}ms`);
  process.exit(0);
} catch (err) {
  console.error(`\n❌ CI PIPELINE FAILURE: ${err.message}\n`);
  process.exit(1);
}
```
