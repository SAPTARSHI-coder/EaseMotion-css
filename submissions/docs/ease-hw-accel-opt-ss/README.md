# Hardware Acceleration & Animation Optimization (#83899)

## Abstract

This documentation details the optimization strategy for hardware acceleration in EaseMotion CSS. Animating layout-triggering CSS properties causes repetitive CPU reflows and repaints, resulting in frame drops, high main-thread activity, and battery drain on modern web engines. By refactoring keyframe definitions to strictly leverage GPU-accelerated CSS properties (`transform` and `opacity`) along with intelligent hardware promotion techniques (`will-change`, `transform: translateZ(0)`), EaseMotion CSS achieves butter-smooth 60+ FPS animations with minimal performance overhead.

## Browser Rendering Pipeline Mechanics

The browser rendering engine follows a sequential multi-stage execution pipeline:

1. **JavaScript / CSS Animations**: Recalculates style rules and applies keyframe interpolations.
2. **Style Calculation**: Recalculates computed styles for affected DOM elements.
3. **Layout (Reflow)**: Computes geometry, sizes, and relative positions of elements on the page.
4. **Paint (Rasterization)**: Draws pixels, text, colors, borders, and shadows onto graphics layers.
5. **Composite**: Offloads layer assembly, positioning, and final pixel composition to the GPU.

Modifying properties like `width`, `height`, `left`, `top`, `margin`, or `padding` forces the browser to re-execute the pipeline starting from Stage 3 (**Layout**), invalidating visual layout trees across sibling elements. 

Conversely, modifying `transform` or `opacity` skips Stage 3 (Layout) and Stage 4 (Paint) completely, handing layer manipulations directly to the GPU **Compositor thread**.

## Refactoring Audit Matrix

To eliminate CPU layout-thrashing, all keyframe rules are refactored according to the following mapping table:

| Deprecated Layout Property (CPU Reflow) | GPU Composited Replacement | Performance Impact |
| :--- | :--- | :--- |
| `left` / `right` / `top` / `bottom` | `transform: translate(x, y)` | Skips Layout & Paint passes entirely |
| `width` / `height` | `transform: scale(x, y)` | Skips Layout & Paint passes entirely |
| `margin` / `padding` | `transform: translate(x, y)` | Prevents sibling reflow recalculations |

### Layer Promotion & VRAM Management

To ensure optimal GPU performance without causing graphics memory bloat:

- **Layer Promotion Hints**: `will-change: transform, opacity;` informs the browser compositor to allocate a dedicated GPU backing store prior to animation trigger.
- **Hardware Acceleration Fallback**: `transform: translateZ(0);` and `backface-visibility: hidden;` force hardware layer creation on legacy engines.
- **VRAM Safeguards**: `will-change` should be used selectively on actively animated elements and removed post-animation to prevent excessive GPU VRAM consumption.

## Static Analysis CI Audit Script

To enforce hardware acceleration compliance across the CI pipeline, the following static analysis script (`hw-accel-audit.mjs`) scans all non-deprecated CSS `@keyframes` definitions for layout-thrashing properties.

```javascript
import fs from 'fs';
import { performance } from 'perf_hooks';

const BUDGET = {
  maxExecutionMs: 100,
  bannedReflowProperties: ['left', 'right', 'top', 'bottom', 'width', 'height', 'margin', 'padding']
};

console.log('\n[EaseMotion CI] Starting Hardware Acceleration Keyframe Audit...\n');
const startTime = performance.now();

try {
  const cssContent = fs.readFileSync('style.css', 'utf8');
  const keyframeRegex = /@keyframes\s+([^{]+)\{([\s\S]*?)\}\s*\}/gm;
  let match;
  let violations = 0;

  while ((match = keyframeRegex.exec(cssContent)) !== null) {
    const animName = match[1].trim();
    const body = match[2];

    // Ignore intentionally deprecated/educational classes in the demo
    if (animName.includes('cpu')) continue;

    BUDGET.bannedReflowProperties.forEach(prop => {
      const propRegex = new RegExp(`\\b${prop}\\s*:`, 'i');
      if (propRegex.test(body)) {
        console.error(`❌ Reflow property '${prop}' detected in @keyframes ${animName}.`);
        violations++;
      }
    });
  }

  if (violations > 0) {
    console.error(`\n❌ FATAL: Found ${violations} keyframe rules triggering layout reflows.`);
    process.exit(1);
  }

  const execTime = performance.now() - startTime;
  console.log(`✅ All @keyframes successfully optimized for GPU compositing (${execTime.toFixed(2)}ms).`);
  process.exit(0);
} catch (err) {
  console.error(`\n❌ Execution Error: ${err.message}\n`);
  process.exit(1);
}
```
