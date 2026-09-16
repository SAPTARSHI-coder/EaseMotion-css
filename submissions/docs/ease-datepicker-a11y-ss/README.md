# Accessibility Audit & Specification: Datepicker Grid & Month/Year Keyboard Navigation

## Abstract
This document presents the accessibility implementation and audit guidelines for the EaseMotion CSS Datepicker Grid component (`#86231`). The implementation ensures strict compliance with W3C WAI-ARIA Authoring Practices (APG) for Date Picker Dialogs, WCAG 2.1 AA standards, and high-contrast environment adaptability (`forced-colors`).

## W3C Datepicker Grid Semantics
The datepicker component follows proper ARIA landmark roles and layout hierarchy:

- `role="grid"`: Container element wrapping the entire calendar table, providing grid semantics for screen reader navigation.
- `role="row"`: Containers representing calendar rows (header row and individual week rows).
- `role="columnheader"`: Headers for each day of the week (`Su`, `Mo`, `Tu`, etc.) with full accessible labels (`aria-label="Sunday"`, etc.).
- `role="gridcell"`: Interactive day cells embedded inside rows. Disabled days are properly indicated using standard `disabled` attributes.
- `aria-selected="true"`: Applied dynamically to the currently selected date cell.
- `aria-live="polite"`: Attached to both the month heading and an off-screen live announcer (`#dp-announcer`) to announce date selections and month transitions dynamically without disrupting user focus.

## Roving Tabindex Architecture
Standard HTML implementations often mistakenly assign `tabindex="0"` to every interactive day cell in a month grid. This creates severe usability flaws for keyboard users, who are forced to press Tab up to 31+ times to navigate past the calendar component.

The **Roving Tabindex** pattern solves this focus trap:
1. **Single Tab Stop**: Exactly **one** day cell (the currently selected or active date) maintains `tabindex="0"`. All other day cells carry `tabindex="-1"`.
2. **2D Grid Arrow Key Navigation**:
   - `ArrowLeft` / `ArrowRight`: Move focus to the previous or next day (`index - 1` / `index + 1`).
   - `ArrowUp` / `ArrowDown`: Move focus up or down by 1 week using vertical offset calculation (`index - 7` / `index + 7`).
   - `Home` / `End`: Instantly jump focus to the first or last available day cell in the active grid view.
3. **Dynamic Month Announcements**: When changing months via Previous/Next month controls, screen readers receive polite notifications via the `aria-live` announcer while focus stays anchored to the navigation button.

## Automated Axe-Core CI Audit
The production-ready Node.js Puppeteer + Axe-core audit script below validates zero WCAG 2.1 AA accessibility violations and enforces the 1-tab-stop roving tabindex constraint in CI/CD pipelines.

```javascript
/**
 * CI Integration Script for Datepicker Keyboard & Axe-Core Validation
 */
import puppeteer from 'puppeteer';
import { AxePuppeteer } from '@axe-core/puppeteer';

(async () => {
  console.log('\n[EaseMotion CI] Starting Datepicker A11y Audit...\n');
  
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

  // 2. Validate Roving Tabindex (Only one cell should have tabindex="0")
  const tabbableCellsCount = await page.evaluate(() => {
    return document.querySelectorAll('.ease-dp-cell[tabindex="0"]').length;
  });

  if (tabbableCellsCount !== 1) {
    console.error(`❌ FATAL: Focus Trap Error. Expected exactly 1 cell with tabindex="0", found ${tabbableCellsCount}.`);
    process.exit(1);
  }

  console.log('✅ Roving Tabindex: Validated focus management constraint (1 active tab stop).');

  await browser.close();
  process.exit(0);
})();
```
