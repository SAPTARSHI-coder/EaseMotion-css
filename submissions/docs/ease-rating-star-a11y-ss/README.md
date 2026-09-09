# Rating Star Accessibility Audit & Implementation

## Abstract

This documentation details the accessible implementation of a rating star component designed to pass WCAG 2.1 AA screen reader and touch/keyboard accessibility audits (Issue #86301). By leveraging WAI-ARIA `radiogroup` semantics, a roving tabindex focus pattern, custom focus styling, forced-colors media query support, and dynamic `aria-live` announcements, the rating star component provides seamless usability for keyboard-only users, screen readers, and touch screen navigation.

## CONTRIBUTING.md Compliance

### 1. What does this do?
Implements a WCAG 2.1 AA compliant rating star system using a standard WAI-ARIA `radiogroup` pattern, Roving Tabindex for arrow-key navigation, and an `aria-live` announcer.

### 2. How is it used?
Drop the `.ease-rating-group` HTML structure into any form or modal. Ensure the provided JavaScript controller is initialized so keyboard and screen reader states sync correctly.

### 3. Why is it useful?
Prevents severe accessibility violations caused by non-focusable `<span>` or SVG stars. It ensures screen reader users can independently navigate and verify their rating via tactile and auditory feedback.

## W3C Radiogroup Semantics & Roving Tabindex

The rating star pattern strictly follows the W3C WAI-ARIA Authoring Practices (APG) for radio groups:

- **Single Tab Stop (Roving Tabindex):** Only the selected (or initial active) star button carries `tabindex="0"`, while all inactive stars carry `tabindex="-1"`. Tabbing into the component places focus on the single active item rather than requiring users to tab through all five items.
- **Keyboard Navigation:** Arrow Keys (`ArrowLeft`, `ArrowUp`, `ArrowRight`, `ArrowDown`), `Home`, and `End` shift focus dynamically across the rating stars, automatically adjusting `tabindex` values.
- **Live Announcements:** An `aria-live="polite"` region provides instantaneous, screen-reader-friendly feedback (`You rated this X out of 5 stars.`) whenever a rating selection changes.
- **High Contrast Mode Support:** Dedicated `@media (forced-colors: active)` rules map colors to system tokens (`CanvasText` and `Highlight`) so the stars remain visible and functional in Windows High Contrast Mode.

## Automated Axe-Core CI Audit

Below is the automated Puppeteer + Axe-Core integration audit script (`rating-star-a11y-audit.mjs`) used during continuous integration to ensure zero WCAG 2.1 AA violations and strict tabindex compliance:

```javascript
/**
 * CI Integration Script for Rating Star Keyboard & Axe-Core Validation
 */
import puppeteer from 'puppeteer';
import { AxePuppeteer } from '@axe-core/puppeteer';

(async () => {
  console.log('\n[EaseMotion CI] Starting Rating Star A11y Audit...\n');
  
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto('file://' + process.cwd() + '/demo.html');

  // 1. Run Axe-Core automated accessibility check
  const axeResults = await new AxePuppeteer(page)
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();

  if (axeResults.violations.length > 0) {
    console.error(`❌ FATAL: Axe-core found ${axeResults.violations.length} violations.`);
    console.dir(axeResults.violations, { depth: null });
    process.exit(1);
  }
  console.log('✅ Axe-core: Zero WCAG 2.1 AA automated violations.');

  // 2. Validate Roving Tabindex (Only one star should have tabindex="0")
  const tabbableStarsCount = await page.evaluate(() => {
    return document.querySelectorAll('.ease-star-btn[tabindex="0"]').length;
  });

  if (tabbableStarsCount !== 1) {
    console.error(`❌ FATAL: Focus Trap Error. Expected exactly 1 star with tabindex="0", found ${tabbableStarsCount}.`);
    process.exit(1);
  }

  console.log('✅ Roving Tabindex: Validated focus management constraint (1 active tab stop).');

  await browser.close();
  process.exit(0);
})();
```
