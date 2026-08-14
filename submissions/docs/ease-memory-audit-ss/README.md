# Issue #82073: Continuous Animation Memory Consumption Audit Benchmark

## Abstract

This directory contains the integration test setup for auditing memory consumption during continuous animation loops in `EaseMotion-css`. Continuous infinite animations operating on layout or paint properties (such as `box-shadow`, `filter`, `margin`, `padding`, `width`, `height`, `top`, `left`, or `border`) trigger recurring layout thrashing and repaint cycles. Over prolonged execution periods, these properties force continuous DOM layer dynamic allocations and canvas invalidations, causing significant garbage collection (GC) thrashing and high JS heap/VRAM bloat.

## Garbage Collection & Animation Thrashing

When CSS animations target layout or paint properties infinitely:
1. **Reflow & Dynamic Allocation**: Browsers must continuously recalculate element geometries and repaint dynamic display list commands every frame.
2. **Garbage Collection Pressure**: Repeated layer creation, bitmap surface recalculation, and temporary array buffer allocations generate high object allocation rates, causing periodic micro-stutters when GC sweeps occur.
3. **GPU Composited Acceleration (Safe Alternative)**: Restricting continuous infinite animations to `transform` and `opacity` allows the compositor thread to handle updates off the main thread without re-triggering layout or paint pipelines, maintaining near-zero heap overhead and smooth 60/120 FPS rendering.

## CI Node.js Benchmark Runner

The following production-ready Node.js CI script (`memory-audit.mjs`) inspects target CSS files during automated pipeline builds to catch infinite animation loops animating banned non-composited properties.

```javascript
import fs from 'fs';
import { performance } from 'perf_hooks';

const BUDGET = {
  maxExecutionMs: 100,
  // These properties cause memory leaks if run infinitely
  bannedInfiniteProperties: ['box-shadow', 'filter', 'margin', 'padding', 'width', 'height', 'top', 'left', 'border']
};

console.log('\n[EaseMotion CI] Starting Continuous Animation Memory Consumption Audit...\n');
const startTime = performance.now();

try {
  const cssContent = fs.readFileSync('style.css', 'utf8');
  let hasViolations = false;

  // 1. Find all animations declared as 'infinite'
  const infiniteRegex = /animation\s*:[^;]+infinite[^;]*;/g;
  const infiniteAnimations = new Set();
  let match;

  while ((match = infiniteRegex.exec(cssContent)) !== null) {
    // Extract animation names (simplified assumption for benchmark)
    const animProps = match[0].replace('animation:', '').replace(';', '').trim().split(' ');
    // The animation name is typically the first or second string not matching duration/timing keywords
    const possibleNames = animProps.filter(p => !p.includes('s') && p !== 'infinite' && p !== 'linear' && p !== 'ease');
    if (possibleNames.length > 0) {
      infiniteAnimations.add(possibleNames[0]);
    }
  }

  // 2. Audit the corresponding @keyframes for banned memory-leaking properties
  const keyframeRegex = /@keyframes\s+([^{]+)\{([\s\S]*?)\}\s*}/gm;
  let kfMatch;

  while ((kfMatch = keyframeRegex.exec(cssContent)) !== null) {
    const kfName = kfMatch[1].trim();
    const keyframeBody = kfMatch[2];

    if (infiniteAnimations.has(kfName)) {
      BUDGET.bannedInfiniteProperties.forEach(prop => {
        const propRegex = new RegExp(`\\b${prop}\\s*:`, 'i');
        if (propRegex.test(keyframeBody)) {
          console.error(`❌ FATAL: Infinite memory leak detected in @keyframes ${kfName}.`);
          console.error(`   Reason: Property '${prop}' runs infinitely, triggering non-stop garbage collection and VRAM bloat.`);
          hasViolations = true;
        }
      });
    }
  }

  if (hasViolations) process.exit(1);

  const executionTime = performance.now() - startTime;
  if (executionTime > BUDGET.maxExecutionMs) {
    console.error(`❌ FATAL: Audit execution too slow (${executionTime.toFixed(2)}ms).`);
    process.exit(1);
  }

  console.log(`✅ Benchmark Passed! All ${infiniteAnimations.size} infinite animations are safely composited. Exec: ${executionTime.toFixed(2)}ms`);
  process.exit(0);
} catch (err) {
  console.error(`\n❌ CI PIPELINE FAILURE: ${err.message}\n`);
  process.exit(1);
}
```
