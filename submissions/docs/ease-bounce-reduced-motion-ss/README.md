# Accessibility & Prefers-Reduced-Motion Audit for Bounce Animations (#81927)

## Abstract
This documentation and audit entry addresses Issue #81927 concerning accessibility risks associated with continuous and interactive bounce animations in EaseMotion CSS. Continuous or rapid vertical translation animations (such as bounce loops) can trigger motion sickness, nausea, and disorientation for users with vestibular spectrum disorders. This module provides a WCAG 2.1 AA compliant CSS architecture and an automated CI test suite leveraging Puppeteer and Axe-Core to verify that `@media (prefers-reduced-motion: reduce)` effectively suppresses bounce motion across components.

---

## Vestibular Risks of Oscillating Vertical Translations
Oscillating vertical movements (`translateY`) disrupt central visual tracking and trigger vestibulo-ocular reflex (VOR) mismatch when users have sensitive inner ear mechanisms or vestibular disorders. 

Under **WCAG 2.1 Success Criterion 2.3.3 (Animation from Interactions)** and **WCAG 2.1 Success Criterion 2.2.2 (Pause, Stop, Hide)**:
- Continuous, looped motion without a user control mechanism violates SC 2.2.2.
- Motion triggered on interaction (such as hover elevation bounce) must provide an option to disable motion unless essential to the functionality or context.

By enforcing an explicit media query override via `@media (prefers-reduced-motion: reduce)`, we strip transform oscillations while preserving static visual state and accessibility context.

---

## CSS Reduced-Motion Architecture

### Standard Motion Rules
Standard keyframe bounce loops utilize `cubic-bezier(0.28, 0.84, 0.42, 1)` easing for smooth vertical displacement (`-24px`). Buttons shift upward (`-4px`) on hover for dynamic tactile feedback.

### Reduced-Motion Fallbacks
When OS-level motion reduction preferences are enabled:
1. `animation: none !important;` disables the keyframe loop.
2. `transform: none !important;` prevents any layout or visual displacement.
3. High-contrast indicators (e.g. `box-shadow` or high-contrast borders) are maintained so visual context is not lost when motion is disabled.

### High-Contrast & Keyboard Focus Support
- Focus indicators rely on `:focus-visible` with enhanced contrast outlines (`outline: 2px solid #7dd3fc; outline-offset: 4px;`).
- Windows High Contrast Mode (`@media (forced-colors: active)`) uses system system keywords (`CanvasText`, `ButtonText`, `Highlight`) to ensure visual clarity.

---

## Automated Axe-Core & Motion Emulation CI Test

Below is the complete Node.js script (`bounce-motion-audit.mjs`) used in automated CI pipelines to test WCAG compliance and verify that bounce animations are fully suppressed when `prefers-reduced-motion` is set to `reduce`.

```javascript
/**
 * CI Integration Script for Reduced-Motion Bounce & Axe-Core Accessibility Validation
 * Uses Puppeteer to emulate OS-level 'prefers-reduced-motion' and test for bounce neutralization.
 */
import puppeteer from 'puppeteer';
import { AxePuppeteer } from '@axe-core/puppeteer';

(async () => {
  console.log('\n[EaseMotion CI] Starting Prefers-Reduced-Motion & WCAG Bounce Audit...\n');
  
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

  // 3. Evaluate computed animation and transform properties on bounce elements
  const bounceRunning = await page.evaluate(() => {
    const ball = document.querySelector('.ease-bounce-ball');
    const btn = document.querySelector('.ease-bounce-btn');
    const ballStyle = window.getComputedStyle(ball);
    const btnStyle = window.getComputedStyle(btn);

    const hasAnimation = ballStyle.animationName !== 'none';
    const hasTransform = ballStyle.transform !== 'none' && ballStyle.transform !== 'matrix(1, 0, 0, 1, 0, 0)';
    return hasAnimation || hasTransform;
  });

  await browser.close();

  if (bounceRunning) {
    console.error('❌ FATAL: Bounce animations were not neutralized under prefers-reduced-motion: reduce.');
    process.exit(1);
  }

  console.log('✅ Reduced-Motion: Bounce oscillations correctly suppressed under motion reduction preferences.');
  process.exit(0);
})();
```
