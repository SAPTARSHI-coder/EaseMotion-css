# Accessibility Audit: Switch Toggle Space Key Press Handler

## Abstract
This module provides a WCAG 2.1 AA compliant switch toggle implementation with ARIA semantics, custom focus styles, high-contrast support, keyboard interaction (handling both Space and Enter key presses), and a contained keyboard focus trap within the dialog container.

## CONTRIBUTING.md Compliance

### 1. What does this do?
Implements a WCAG 2.1 AA compliant switch toggle using `role="switch"` and `aria-checked`, complete with a keyboard focus trap to keep interaction contained.

### 2. How is it used?
Use as a standalone input replacement. The JS controller maps `Space` and `Enter` to the toggle state and manages a Tab loop across all focusable elements within the widget container.

### 3. Why is it useful?
Prevents accessibility bugs where screen reader users might not recognize the state (`checked`/`unchecked`) of a toggle, and ensures keyboard users remain within the widget context when active.

## ARIA Switch Semantics
- Utilizes `role="switch"` on the `<button>` element to convey switch semantics to assistive technologies.
- Controls the state dynamically using `aria-checked="true"` or `aria-checked="false"`.
- Associates accessible labels using `aria-labelledby`.

## Focus Trap Logic
- Restricts keyboard navigation (`Tab` and `Shift + Tab`) to focusable elements within the widget dialog (`role="dialog"`).
- Automatically loops focus from the last focusable element back to the first, and vice-versa when tabbing backwards.

## Automated Axe-Core CI Audit

Below is the production-ready Node.js Puppeteer + Axe-core CI audit script (`switch-a11y-audit.mjs`):

```javascript
/**
 * CI Integration Script for Switch Toggle Keyboard & Axe-Core Validation
 */
import puppeteer from 'puppeteer';
import { AxePuppeteer } from '@axe-core/puppeteer';

(async () => {
  console.log('\n[EaseMotion CI] Starting Switch Toggle A11y Audit...\n');
  
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

  // 2. Validate Space keypress handler
  await page.focus('#toggle-switch');
  await page.keyboard.press('Space');
  
  const isChecked = await page.evaluate(() => document.getElementById('toggle-switch').getAttribute('aria-checked'));
  if (isChecked !== 'true') {
    console.error(`❌ FATAL: Space Key Handler Error. Switch did not toggle on Space press.`);
    process.exit(1);
  }

  // 3. Validate Focus Trap (Tabbing from last element loops to first)
  const buttons = await page.$$('button');
  await buttons[buttons.length - 1].focus();
  await page.keyboard.press('Tab');
  
  const activeEl = await page.evaluate(() => document.activeElement.id);
  if (activeEl !== 'toggle-switch') {
    console.error(`❌ FATAL: Focus Trap Error. Tabbing from last button did not loop to toggle-switch.`);
    process.exit(1);
  }
  
  console.log('✅ Focus Trap: Verified keyboard constraint successfully traps tab sequence.');

  await browser.close();
  process.exit(0);
})();
```
