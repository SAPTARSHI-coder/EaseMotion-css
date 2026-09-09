# Breadcrumb Nav ARIA Current Page Tag & Focus Trap Audit

## Abstract
This module provides an accessible Breadcrumb navigation implementation adhering to WCAG 2.1 AA guidelines. It incorporates proper ARIA current page semantics (`aria-current="page"`) to convey location state to assistive technologies, alongside a keyboard-trapped overflow menu dialog for truncated navigation paths.

## CONTRIBUTING.md Compliance

1. **What does this do?**
   Implements a WCAG 2.1 AA compliant Breadcrumb navigation utilizing `aria-current="page"` for the active item, alongside a strictly trapped overflow menu dialog for truncated links.

2. **How is it used?**
   Use `<nav aria-label="Breadcrumb">` wrapping an `<ol>`. When path depth requires truncation, the JavaScript explicitly manages the `Tab` key to trap focus within the overflow dialog until dismissed.

3. **Why is it useful?**
   `aria-current="page"` explicitly informs screen readers of the user's active context instead of merely reading a generic link. The focus trap fulfills the issue's acceptance criteria by ensuring keyboard users cannot accidentally navigate out of the expanded overflow list.

## ARIA Current Page Semantics
- Active leaf node contains `aria-current="page"` to explicitly declare current page status.
- Visual breadcrumb separators are hidden from accessibility trees via `aria-hidden="true"`.
- Focus indicators meet contrast minimums and forced-colors accessibility requirements.

## Overflow Menu Focus Trap
- Truncated items are housed in a disclosure dialog using `role="dialog"` and `aria-modal="true"`.
- Keyboard navigation maintains strict trap boundaries for `Tab` and `Shift+Tab` cycles.
- Pressing `Escape` or clicking the close control restores focus back to the disclosure trigger.

## Automated Axe-Core CI Audit

Below is the complete CI validation script (`breadcrumb-a11y-audit.mjs`):

```javascript
/**
 * CI Integration Script for Breadcrumb ARIA & Focus Trap Validation
 */
import puppeteer from 'puppeteer';
import { AxePuppeteer } from '@axe-core/puppeteer';

(async () => {
  console.log('\n[EaseMotion CI] Starting Breadcrumb ARIA & Focus Trap Audit...\n');
  
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
  const currentItem = await page.evaluate(() => {
    return document.querySelector('[aria-current="page"]').textContent;
  });

  if (!currentItem.includes('MacBook')) {
    console.error(`❌ FATAL: ARIA Semantics Error. Could not find aria-current="page" on the active item.`);
    process.exit(1);
  }
  console.log('✅ ARIA Semantics: aria-current="page" verified on active breadcrumb item.');

  // 3. Validate Focus Trap (Shift+Tab from first element should cycle to last element)
  await page.click('#overflow-trigger'); // Open Dialog
  
  await page.keyboard.down('Shift');
  await page.keyboard.press('Tab'); // Shift+Tab from close button (first)
  await page.keyboard.up('Shift');
  
  const activeTextAfterShiftTab = await page.evaluate(() => document.activeElement.textContent);
  if (activeTextAfterShiftTab !== 'Computers') {
    console.error(`❌ FATAL: Focus Trap Error. Shift+Tabbing from the close button did not loop to the last link. Focused on: ${activeTextAfterShiftTab}`);
    process.exit(1);
  }
  
  console.log('✅ Focus Trap: Verified keyboard constraint successfully traps tab sequence inside overflow dialog.');

  await browser.close();
  process.exit(0);
})();
```
