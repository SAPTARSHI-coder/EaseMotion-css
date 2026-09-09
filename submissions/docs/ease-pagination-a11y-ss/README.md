# Abstract

This documentation details the WCAG 2.1 AA accessibility implementation for the Pagination component, resolving Issue #86282. The solution incorporates standard `aria-current="page"` semantics for identifying the active page element, combined with a fully keyboard-accessible focus trap within the jump-to-page dialog.

## CONTRIBUTING.md Compliance

### 1. What does this do?
Implements a WCAG 2.1 AA compliant Pagination navigation component utilizing `aria-current="page"` for the active item, alongside a strictly trapped jump-to-page dialog.

### 2. How is it used?
Use `<nav aria-label="Pagination Navigation">` wrapping an `<ol>`. The active page button includes `aria-current="page"`. When the jump modal is invoked, keyboard focus is securely trapped between the modal elements.

### 3. Why is it useful?
`aria-current="page"` explicitly informs screen readers of the user's active page without relying on visual styling alone. The focus trap ensures keyboard users cannot accidentally navigate out of the jump dialog.

## ARIA Current Page Semantics

The pagination list uses `<ol>` wrapped inside `<nav aria-label="Pagination Navigation">`. The active pagination button dynamically receives `aria-current="page"`. This ensures assistive technologies properly announce the current item without reliance solely on visual cues or text heuristics.

## Jump Modal Focus Trap

The jump modal dialog enforces focus trapping when active:
- Upon opening, focus shifts to the modal container (`#jump-box`).
- Pressing `Tab` at the end of the focusable elements (`#jump-submit`) loops focus back to the first focusable element (`#jump-cancel`).
- Pressing `Shift + Tab` at the first focusable element loops focus back to the last element.
- Pressing `Escape` or activating the action buttons closes the dialog and restores focus back to the triggering element (`#jump-trigger`).

## Automated Axe-Core CI Audit

Below is the automated Puppeteer + Axe-core CI audit script (`pagination-a11y-audit.mjs`) used to validate compliance.

```javascript
/**
 * CI Integration Script for Pagination ARIA Current & Focus Trap Validation
 */
import puppeteer from 'puppeteer';
import { AxePuppeteer } from '@axe-core/puppeteer';

(async () => {
  console.log('\n[EaseMotion CI] Starting Pagination ARIA & Focus Trap Audit...\n');
  
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

  // 2. Validate aria-current="page" is present
  const currentPageText = await page.evaluate(() => {
    return document.querySelector('[aria-current="page"]').textContent;
  });

  if (currentPageText !== '3') {
    console.error(`❌ FATAL: ARIA Semantics Error. Could not find aria-current="page" on page 3.`);
    process.exit(1);
  }
  console.log('✅ ARIA Semantics: aria-current="page" verified on active pagination item.');

  // 3. Validate Focus Trap (Tabbing from last element loops to first element)
  await page.click('#jump-trigger'); // Open Dialog
  
  await page.focus('#jump-submit');
  await page.keyboard.press('Tab'); // Tab from submit button (last) should loop to box container (first)
  
  const activeId = await page.evaluate(() => document.activeElement.id);
  if (activeId !== 'jump-box') {
    console.error(`❌ FATAL: Focus Trap Error. Tabbing from submit button did not loop to jump-box. Focused on: ${activeId}`);
    process.exit(1);
  }
  
  console.log('✅ Focus Trap: Verified keyboard constraint successfully traps tab sequence inside jump dialog.');

  await browser.close();
  process.exit(0);
})();
```
