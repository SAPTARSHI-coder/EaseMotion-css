# Hardware Acceleration Verification Benchmark

## Abstract
This submission provides a benchmark suite and demonstration for verifying CSS Keyframe Animation Hardware Acceleration within EaseMotion CSS. Hardware acceleration ensures that animations run smoothly at 60 FPS by offloading compositing tasks to the GPU. By restricting keyframe properties to composite-only triggers (such as `transform`, `opacity`, and `filter`), layout thrashing and costly CPU repaints are completely prevented.

## CI Compliance Note
To strictly conform to repository CI validation constraints and directory gatekeeper guidelines, all submission assets are isolated within `submissions/docs/ease-hw-accel-benchmark-ss/`. The standalone benchmark runner script provided below (`hw-accel-benchmark.mjs`) can be extracted by maintainers into CI workflow pipelines to automatically validate CSS keyframes against prohibited layout/paint properties.

## The Node.js Hardware Acceleration Benchmark Runner

Below is the complete, production-ready Node.js CI script block (`hw-accel-benchmark.mjs`):

```javascript
import fs from 'fs';
import { performance } from 'perf_hooks';

const BUDGET = {
  maxExecutionMs: 50,
  maxBundleSizeBytes: 51200,
  targetFps: 60,
  bannedProperties: ['margin', 'padding', 'top', 'left', 'right', 'bottom', 'width', 'height', 'border-width']
};

console.log('\n[EaseMotion CI] Starting Hardware Acceleration Benchmark Audit...\n');
const startTime = performance.now();

try {
  // In a real pipeline, this reads the built CSS file (e.g., easemotion.min.css)
  const cssContent = fs.readFileSync('style.css', 'utf8');
  const byteSize = Buffer.byteLength(cssContent, 'utf8');

  if (byteSize > BUDGET.maxBundleSizeBytes) {
    console.error(`❌ FATAL: Bundle size (${byteSize} bytes) exceeds budget (${BUDGET.maxBundleSizeBytes}).`);
    process.exit(1);
  }

  // Regex to extract all blocks within @keyframes
  const keyframeRegex = /@keyframes[^{]+\{([\s\S]*?)\}\s*}/gm;
  let match;
  let hasViolations = false;

  while ((match = keyframeRegex.exec(cssContent)) !== null) {
    const keyframeBody = match[1];
    BUDGET.bannedProperties.forEach(prop => {
      // Look for banned properties triggering layout/paint inside keyframes
      const propRegex = new RegExp(`\\b${prop}\\s*:`, 'i');
      if (propRegex.test(keyframeBody)) {
        console.error(`❌ FATAL: CPU-bound property '${prop}' detected inside @keyframes.`);
        console.error('Animations must only use transform, opacity, or filter for 60 FPS compositing.');
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

  console.log(`✅ Benchmark Passed! Bundle: ${byteSize} bytes | Target: ${BUDGET.targetFps} FPS | Exec: ${executionTime.toFixed(2)}ms`);
  process.exit(0);
} catch (err) {
  console.error(`\n❌ CI PIPELINE FAILURE: ${err.message}\n`);
  process.exit(1);
}
```
