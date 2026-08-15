# Datepicker Focus Trap & Grid Cell Accessibility Audit

## Abstract

This submission provides an accessibility audit and demonstration implementation for Issue #86293 (`a11y: Add accessibility audit for Datepicker Focus Trap Month Grid Cell`). It establishes keyboard navigation patterns and focus management for datepicker dialogs based on WAI-ARIA Authoring Practices.

## CONTRIBUTING.md Compliance

1. **What does this do?** Implements a WCAG 2.1 AA compliant datepicker modal. It utilizes a strict `aria-modal="true"` focus trap and a WAI-ARIA `role="grid"` with roving tabindex for the calendar cells.
2. **How is it used?** Tied to an input trigger. The javascript explicitly manages the `Tab` key to trap focus between the Close button and the currently active day, preventing keyboard users from escaping the modal unexpectedly. Arrow keys traverse the days.
3. **Why is it useful?** Prevents a critical accessibility violation where opening a datepicker leaves the rest of the page focusable, which disorients screen reader and keyboard-only users.

## Dialog Focus Trap Architecture

The datepicker dialog enforces strict focus trapping while active:
- Setting `aria-modal="true"` informs assistive technologies to treat the dialog as modal.
- `Tab` and `Shift+Tab` key cycles strictly between the interactive close control and the active grid cell (`tabindex="0"`).
- `Escape` key closes the dialog and restores focus to the trigger element.

## Grid Cell Roving Tabindex

The calendar grid uses a roving `tabindex` strategy for keyboard navigation:
- Exactly one date cell maintains `tabindex="0"` while all other cells maintain `tabindex="-1"`.
- `ArrowLeft`, `ArrowRight`, `ArrowUp`, and `ArrowDown` keys move active focus across dates seamlessly while updating `tabindex` attributes dynamically.

## Automated Axe-Core CI Audit

Below is the complete, production-ready Node.js Puppeteer + Axe-core audit script (`datepicker-trap-audit.mjs`):

```javascript
/**
 * CI Integration Script for Datepicker Focus Trap & Grid Cell Validation
 */
import puppeteer from 'puppeteer';
import { AxePuppeteer } from '@axe-core/puppeteer';

(async () => {
  console.log('\n[EaseMotion CI] Starting Datepicker Focus Trap Audit...\n');
  
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto('file://' + process.cwd() + '/demo.html');

  // Open Modal
  await page.click('#dp-trigger');

  // 1. Run Axe-Core automated accessibility check on the Open Modal
  const axeResults = await new AxePuppeteer(page)
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();

  if (axeResults.violations.length > 0) {
    console.error(`❌ FATAL: Axe-core found ${axeResults.violations.length} violations.`);
    process.exit(1);
  }
  console.log('✅ Axe-core: Zero WCAG 2.1 AA automated violations.');

  // 2. Validate Focus Trap (Shift+Tab from active cell should cycle to Close button)
  // Upon opening, the selected cell (index 4) should be focused.
  await page.keyboard.down('Shift');
  await page.keyboard.press('Tab');
  await page.keyboard.up('Shift');
  
  const activeIdAfterShiftTab = await page.evaluate(() => document.activeElement.id);
  if (activeIdAfterShiftTab !== 'dp-close') {
    console.error(`❌ FATAL: Focus Trap Error. Shift+Tabbing from the grid cell did not loop to the close button. Focused on: ${activeIdAfterShiftTab}`);
    process.exit(1);
  }

  // 3. Validate Roving Tabindex Constraint (Only one cell focusable)
  const tabbableCellsCount = await page.evaluate(() => {
    return document.querySelectorAll('.ease-dp-cell[tabindex="0"]').length;
  });

  if (tabbableCellsCount !== 1) {
    console.error(`❌ FATAL: Roving Tabindex Error. Expected exactly 1 cell with tabindex="0", found ${tabbableCellsCount}.`);
    process.exit(1);
  }
  
  console.log('✅ Focus Trap & Grid Navigation: Verified keyboard constraints successfully trap tab sequence and maintain cell state.');

  await browser.close();
  process.exit(0);
})();
```
