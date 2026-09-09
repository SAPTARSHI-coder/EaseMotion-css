# Accessibility Audit: Prefers-Reduced-Motion for Zoom Animations (#81930)

## Abstract
This document presents an accessibility architecture breakdown and CI validation framework for zoom and scale animations within the EaseMotion CSS library. It addresses WCAG 2.1 AA compliance (Criterion 2.3.3 Animation from Interactions) by implementing system-level `prefers-reduced-motion` media queries and Windows High-Contrast Mode (`forced-colors`) support for zoom animation primitives.

## Vestibular Disorder & Scale Transformation Risks
Zoom and scale transformations (`transform: scale()`) introduce rapid screen area expansions and optical depth illusions. For users with vestibular spectrum disorders (such as inner ear balance disorders, vertigo, or motion sensitivity), scaling animations produce spatial disorientation, nausea, and motion sickness. 

Unlike linear translations or minor opacity shifts, scale transformations deceive the visual cortex into perceiving motion along the Z-axis (towards or away from the viewer). To comply with WCAG 2.1 AA Criterion 2.3.3:
- Spatial scaling animations must be completely removable or neutralized.
- Essential visual feedback for interactive states (e.g., hover, focus) must be preserved using non-vestibular alternatives, such as static border color changes, subtle opacity fades, or outline shifts.

## CSS Reduced-Motion Implementation
The reduced motion overrides use `@media (prefers-reduced-motion: reduce)` to strip `transform: scale()` while ensuring interactive feedback remains active:

```css
@media (prefers-reduced-motion: reduce) {
  .ease-zoom-in {
    animation: ease-fade-in-kf 0.2s ease-out forwards !important;
    transform: none !important;
  }

  .ease-zoom-hover,
  .ease-zoom-hover:hover {
    transform: none !important;
    transition: opacity 0.2s ease, border-color 0.2s ease !important;
  }

  .ease-zoom-hover:hover {
    border-color: #38bdf8;
  }

  @keyframes ease-fade-in-kf {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
}
```

Additionally, dual-layer keyboard focus visibility and Windows High-Contrast Mode (`forced-colors: active`) are enforced:

```css
.ease-zoom-card:focus-visible {
  outline: 2px solid #38bdf8;
  outline-offset: 4px;
}

@media (forced-colors: active) {
  .ease-zoom-card {
    border: 2px solid CanvasText;
  }

  .ease-zoom-card:focus-visible {
    outline: 3px solid Highlight;
  }
}
```

## Automated Axe-Core & Motion Emulation CI Test
Below is the production-ready Node.js Puppeteer + Axe-core CI audit script (`reduced-motion-audit.mjs`) used in automated pipelines to verify WCAG 2.1 AA compliance and ensure scaling transforms are strictly neutralized when `prefers-reduced-motion: reduce` is active.

```javascript
/**
 * CI Integration Script for Reduced-Motion & Axe-Core Accessibility Validation
 * Uses Puppeteer to emulate OS-level 'prefers-reduced-motion' and test for scale transforms.
 */
import puppeteer from 'puppeteer';
import { AxePuppeteer } from '@axe-core/puppeteer';

(async () => {
  console.log('\n[EaseMotion CI] Starting Prefers-Reduced-Motion & WCAG Zoom Audit...\n');
  
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto('file://' + process.cwd() + '/demo.html');

  // 1. Run Axe-Core automated accessibility check
  const axeResults = await new AxePuppeteer(page)
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();

  if (axeResults.violations.length > 0) {
    console.error(`❌ FATAL: Axe-core found ${axeResults.violations.length} violations.`);
    process.exit(1);
  }
  console.log('✅ Axe-core: Zero WCAG 2.1 AA automated violations.');

  // 2. Emulate OS Reduced Motion
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);

  // 3. Evaluate computed transform on zoom elements
  const hasTransform = await page.evaluate(() => {
    const card = document.querySelector('.ease-zoom-in');
    const style = window.getComputedStyle(card);
    // Transform must be none or matrix(1, 0, 0, 1, 0, 0)
    return style.transform !== 'none' && style.transform !== 'matrix(1, 0, 0, 1, 0, 0)';
  });

  await browser.close();

  if (hasTransform) {
    console.error('❌ FATAL: Transform scale was not neutralized under prefers-reduced-motion: reduce.');
    process.exit(1);
  }

  console.log('✅ Reduced-Motion: Scaling animations correctly neutralized under reduced-motion preference.');
  process.exit(0);
})();
```
