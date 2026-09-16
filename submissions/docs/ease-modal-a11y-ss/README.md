# Modal Backdrop Click Event Dismiss Accessibility (#86288)

## Abstract
This module provides a WCAG 2.1 AA compliant modal dialog implementation for `EaseMotion-css`. It incorporates focus trapping, ARIA landmark/dialog metadata, keyboard navigation (`Escape` key handling), and explicit backdrop click event dismissal without breaking screen reader contexts.

## CONTRIBUTING.md Compliance

1. **What does this do?**
   Implements a WCAG 2.1 AA compliant modal dialog (`role="dialog"`, `aria-modal="true"`) that traps focus and dismisses via `Escape` key or backdrop click.

2. **How is it used?**
   Call `openModal()` to toggle the dialog. The controller traps the `Tab` key cycle between focusable children.

3. **Why is it useful?**
   Prevents users from accidentally navigating into the background document when the modal is active, ensuring a robust and predictable user flow.

## ARIA Modal Semantics
- `role="dialog"`: Informs assistive technologies that the element represents an interactive dialog window.
- `aria-modal="true"`: Indicates to screen readers that content below the modal overlay is inert and hidden from the accessibility tree.
- `aria-labelledby="modal-title"`: Associates the modal container with its accessible heading element.

## Focus Trap Architecture
- Initial focus moves to `div#modal-dialog` (`tabindex="-1"`) upon opening.
- Standard `Tab` / `Shift+Tab` keyboard navigation cycles exclusively through focusable elements inside `.ease-modal-dialog`.
- `Escape` key press safely triggers `closeModal()` and restores focus to the triggering element `#open-modal`.

## Automated Axe-Core CI Audit

Below is the complete, production-ready Puppeteer + Axe-core CI automated audit script (`modal-a11y-audit.mjs`):

```javascript
/**
 * CI Integration Script for Modal Focus Trap & ARIA Validation
 */
import puppeteer from 'puppeteer';
import { AxePuppeteer } from '@axe-core/puppeteer';

(async () => {
  console.log('\n[EaseMotion CI] Starting Modal Backdrop A11y Audit...\n');
  
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto('file://' + process.cwd() + '/demo.html');

  // Open Modal
  await page.click('#open-modal');

  // 1. Run Axe-Core automated accessibility check
  const axeResults = await new AxePuppeteer(page)
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();

  if (axeResults.violations.length > 0) {
    console.error(`❌ FATAL: Axe-core found ${axeResults.violations.length} violations.`);
    process.exit(1);
  }
  console.log('✅ Axe-core: Zero WCAG 2.1 AA automated violations.');

  // 2. Validate Focus Trap (Tabbing from button should loop inside modal)
  await page.focus('#close-modal');
  await page.keyboard.press('Tab'); // Should loop back to close-modal
  
  const activeId = await page.evaluate(() => document.activeElement.id);
  if (activeId !== 'close-modal') {
    console.error(`❌ FATAL: Focus Trap Error. Tabbing did not loop within the modal.`);
    process.exit(1);
  }
  
  console.log('✅ Focus Trap: Verified keyboard constraint successfully traps tab sequence inside dialog.');

  await browser.close();
  process.exit(0);
})();
```
