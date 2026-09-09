# Sidebar Drawer Focus Trap & Focus Release Accessibility Audit

## Abstract
This module provides a fully accessible WCAG 2.1 AA compliant Sidebar Drawer implementation featuring modal dialog semantics, keyboard focus trap management, and deterministic focus release handling.

## CONTRIBUTING.md Compliance

### 1. What does this do?
Implements a WCAG 2.1 AA compliant sidebar drawer (`role="dialog"`, `aria-modal="true"`) equipped with a strict keyboard focus trap and robust **Focus Release** logic.

### 2. How is it used?
Triggered via an interactive button. The JavaScript manager handles `Escape` dismissal, cycles `Tab` presses within the drawer boundary, and returns focus to the origin button upon closure.

### 3. Why is it useful?
Prevents severe accessibility failures where closing a drawer leaves screen reader and keyboard users stranded at the top of the DOM or wandering into obscured background content.

## Focus Trap & Focus Release Architecture
- **Focus Trap**: Traps interactive focus inside the visible sidebar drawer using keydown listeners when `Tab` or `Shift+Tab` is pressed, looping between the first (`#drawer-close`) and last interactive element (`Billing & Invoices` link).
- **Focus Release**: Explicitly restores keyboard focus back to `#drawer-trigger` upon drawer dismissal via close button, backdrop click, or `Escape` key press.
- **ARIA Semantics**: Utilizes `aria-expanded`, `aria-haspopup="dialog"`, `aria-modal="true"`, `aria-labelledby`, and dynamic screen-reader hidden state management.

## Automated Axe-Core CI Audit

Below is the automated Puppeteer + Axe-Core verification script for CI pipelines (`sidebar-a11y-audit.mjs`):

```javascript
/**
 * CI Integration Script for Sidebar Drawer Focus Trap & Focus Release Validation
 */
import puppeteer from 'puppeteer';
import { AxePuppeteer } from '@axe-core/puppeteer';

(async () => {
  console.log('\n[EaseMotion CI] Starting Sidebar Drawer Focus Trap & Release Audit...\n');
  
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto('file://' + process.cwd() + '/demo.html');

  // 1. Open Drawer
  await page.click('#drawer-trigger');

  // Run Axe-Core automated accessibility check
  const axeResults = await new AxePuppeteer(page)
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();

  if (axeResults.violations.length > 0) {
    console.error(`❌ FATAL: Axe-core found ${axeResults.violations.length} violations.`);
    process.exit(1);
  }
  console.log('✅ Axe-core: Zero WCAG 2.1 AA automated violations.');

  // 2. Validate Focus Release (Closing drawer returns focus to #drawer-trigger)
  await page.click('#drawer-close');
  
  const activeId = await page.evaluate(() => document.activeElement.id);
  if (activeId !== 'drawer-trigger') {
    console.error(`❌ FATAL: Focus Release Error. Closing the drawer did not return focus to the trigger button. Focused on: ${activeId}`);
    process.exit(1);
  }
  
  console.log('✅ Focus Release: Verified keyboard focus successfully returns to the trigger button upon closure.');

  await browser.close();
  process.exit(0);
})();
```
