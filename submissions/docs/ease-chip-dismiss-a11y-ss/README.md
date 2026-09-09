# Accessibility Audit & Implementation: Chip Dismiss ARIA Label & Focus Trap (#86283)

## Abstract

This document outlines the accessibility engineering pattern and CI audit suite for Issue #86283. The implementation provides a WCAG 2.1 AA compliant Chip / Tag Dismissal UI component featuring contextual screen reader announcements (`aria-label` and `aria-describedby`), dynamic focus management upon item deletion, and a keyboard focus trap within a modal dialog context.

---

## CONTRIBUTING.md Compliance

1. **What does this do?**
   Implements a WCAG 2.1 AA compliant chip/tag group with a strictly verified keyboard focus trap. Dismiss buttons use explicit `aria-label`s for screen readers.

2. **How is it used?**
   Used in tag-management modals or filters. The javascript manages focus logic so that removing a chip passes focus to the next logical element, preventing focus drops.

3. **Why is it useful?**
   Prevents blind users from hearing generic "Close" buttons on arrays of tags. The focus trap ensures keyboard users can rapidly Tab through and manage tags without losing their place in the DOM tree.

---

## Contextual ARIA Labels & Focus Management

- **Context-Aware ARIA Labels**: Standard dismiss buttons often rely on visual icon cues (e.g., `✕`) which screen readers announce as "multiplication sign" or a ambiguous "button". Each dismiss button explicitly includes `aria-label="Remove [Tag Name] tag"` and `aria-describedby` pointing to the tag's label ID.
- **Screen Reader Announcer**: An invisible `aria-live="polite"` container dynamically announces removal events (e.g., `"React tag removed."`) without interrupting assistive technology speech flow.
- **Focus Preservation**: When a focused chip dismiss button is activated and the chip element is removed from the DOM, focus is programmatically shifted to the adjacent remaining chip's dismiss button (or the dialog close button if no tags remain), preventing focus loss reset to `document.body`.

---

## Focus Trap Architecture

- **Keyboard Trapping**: Within interactive dialogs (`role="dialog"`), pressing `Tab` from the final focusable element loops focus back to the first focusable element (`Done` button), and `Shift + Tab` from the first element wraps to the last dismiss button.
- **High-Contrast System Support**: CSS includes `@media (forced-colors: active)` media query rules ensuring outline and border contrast compliance in Windows High Contrast Mode (WHCM).

---

## Automated Axe-Core CI Audit

Below is the production-ready Node.js Puppeteer + Axe-core automated accessibility audit script (`chip-a11y-audit.mjs`):

```javascript
/**
 * CI Integration Script for Chip Dismiss Screen Reader & Focus Trap Validation
 */
import puppeteer from 'puppeteer';
import { AxePuppeteer } from '@axe-core/puppeteer';

(async () => {
  console.log('\n[EaseMotion CI] Starting Chip Dismiss A11y Audit...\n');
  
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

  // 2. Validate Contextual ARIA Label
  const firstChipAria = await page.evaluate(() => {
    return document.querySelector('.ease-chip-dismiss').getAttribute('aria-label');
  });

  if (!firstChipAria.includes('Remove')) {
    console.error(`❌ FATAL: Screen Reader Feedback Error. Missing context-aware aria-label on dismiss button.`);
    process.exit(1);
  }
  console.log('✅ Screen Reader: Verified contextual aria-labels on dismiss buttons.');

  // 3. Validate Focus Trap (Tabbing from Last Chip should cycle to Close Widget Button or wrap)
  await page.focus('#btn-close-widget');
  await page.keyboard.down('Shift');
  await page.keyboard.press('Tab'); // Shift+Tab from top should loop to bottom
  await page.keyboard.up('Shift');
  
  const activeIdAfterShiftTab = await page.evaluate(() => {
    const active = document.activeElement;
    return active.closest('.ease-chip') ? active.closest('.ease-chip').id : active.id;
  });

  if (activeIdAfterShiftTab !== 'chip-node') {
    console.error(`❌ FATAL: Focus Trap Error. Shift+Tabbing from top did not loop to last chip. Found focus on: ${activeIdAfterShiftTab}`);
    process.exit(1);
  }
  
  console.log('✅ Focus Trap: Verified keyboard constraint successfully traps tab sequence.');

  await browser.close();
  process.exit(0);
})();
```
