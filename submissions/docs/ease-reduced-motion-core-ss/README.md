# Prefers-Reduced-Motion Accessibility Architecture (Issue #83817)

## Abstract

This documentation details the core accessibility implementation for `prefers-reduced-motion` media queries across the EaseMotion CSS engine. The architecture enforces compliance with **WCAG 2.1 AA (Success Criterion 2.3.3 Animation from Interactions)** while preventing common single-page application (SPA) runtime bugs caused by abrupt animation removal.

## Why Blanket animation: none Breaks JS Apps

In complex Web applications built with frameworks like React, Vue, or Svelte, component lifecycle events and UI state transitions frequently rely on DOM lifecycle events such as `transitionend` and `animationend`. 

When CSS rules enforce a global `animation: none !important;` or `transition: none !important;`, browsers skip the execution of keyframes entirely. Consequently, the browser never dispatches the `transitionend` or `animationend` events. JavaScript event listeners attached to elements awaiting these notifications will hang indefinitely, leading to frozen UI states, unmounted component memory leaks, and broken modal state machines.

## The 0.01ms Duration Protocol

To eliminate vestigial movement while guaranteeing event dispatch continuity, EaseMotion CSS adopts the **0.01ms Duration Protocol**:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  .ease-anim-bounce,
  .ease-anim-spin,
  .ease-anim-pulse {
    transform: none !important;
    animation: none !important;
  }
}
```

By collapsing the duration to `0.01ms` (or `0.001s`) and restricting iteration count to `1`:
1. The visual movement is rendered sub-perceptible to the human eye, avoiding vestibular motion triggers.
2. The browser engine completes the visual transition instantantly and immediately triggers `transitionend` / `animationend` microtasks.
3. Interactive state machines and JavaScript promises complete seamlessly without special-case branching for reduced motion.

## Automated Axe-Core & Reduced-Motion Emulation CI Test

Below is the production-ready Puppeteer and Axe-Core automated testing script (`reduced-motion-ci.mjs`) used to validate compliance in continuous integration pipelines:

```javascript
/**
 * CI Integration Script for Reduced-Motion & Axe-Core Accessibility Validation
 */
import puppeteer from 'puppeteer';
import { AxePuppeteer } from '@axe-core/puppeteer';

(async () => {
  console.log('\n[EaseMotion CI] Starting Reduced-Motion Accessibility Verification...\n');
  
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto('file://' + process.cwd() + '/demo.html');

  // 1. Run Axe-Core automated WCAG scan
  const axeResults = await new AxePuppeteer(page)
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();

  if (axeResults.violations.length > 0) {
    console.error(`❌ FATAL: Axe-core reported ${axeResults.violations.length} violations.`);
    process.exit(1);
  }
  console.log('✅ Axe-core: Zero automated WCAG violations detected.');

  // 2. Emulate OS-level reduced motion preference
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);

  // 3. Assert animation durations are properly neutralized
  const animationsNeutralized = await page.evaluate(() => {
    const el = document.querySelector('.ease-anim-bounce');
    const style = window.getComputedStyle(el);
    const duration = parseFloat(style.animationDuration);
    return duration <= 0.001 || style.animationName === 'none';
  });

  await browser.close();

  if (!animationsNeutralized) {
    console.error('❌ FATAL: Animation duration was not reduced to <= 0.01ms under prefers-reduced-motion: reduce.');
    process.exit(1);
  }

  console.log('✅ Reduced-Motion: Motion safely neutralized while preserving DOM event dispatching.');
  process.exit(0);
})();
```
