# Landmark Role & Navigation Focus Trap Accessibility Audit

## Abstract
This module provides a fully accessible HTML5 structural layout incorporating standard W3C landmark roles (`banner`, `navigation`, `main`, `contentinfo`), a skip-to-main-content shortcut link, and a strict keyboard focus trap within a modal navigation dialog.

## CONTRIBUTING.md Compliance

### 1. What does this do?
Implements WCAG 2.1 AA compliant semantic landmark roles (`banner`, `navigation`, `main`, `contentinfo`) alongside a strictly trapped mobile navigation modal.

### 2. How is it used?
Used as the root structural template for accessible web applications. The JS controller safely traps the user's `Tab` key inside the `<nav>` dialog when opened and provides a skip-link mechanism for fast main-content access.

### 3. Why is it useful?
Landmarks allow screen reader users to bypass repetitive content via rotor menus. The focus trap explicitly fulfills the issue's acceptance criteria by ensuring keyboard users cannot accidentally navigate into the hidden background `<main>` area while a navigation modal is active.

## Semantic Landmark Architecture
- `<header role="banner">`: Primary application header.
- `<nav role="navigation" aria-label="Main Navigation">`: Primary navigation container containing the modal trigger and dialog menu.
- `<main role="main" id="main-content" tabindex="-1">`: Main content landmark optimized for direct focus target transfer via skip link.
- `<footer role="contentinfo">`: Page footer containing metadata and copyright statements.

## Focus Trap & Dialog Semantics
- Modal container uses `role="dialog"`, `aria-modal="true"`, and `aria-label="Mobile Navigation"`.
- Keyboard navigation traps focus using dynamic detection of focusable elements (`button, a[href]`) and boundary wrap logic on `Tab` and `Shift+Tab`.
- `Escape` key automatically closes the modal dialog and returns focus to the `aria-expanded` toggle trigger button (`#menu-open`).

## Automated Axe-Core CI Audit

Below is the complete Node.js Puppeteer + Axe-core CI audit script (`landmark-a11y-audit.mjs`):

```javascript
/**
 * CI Integration Script for Landmark Roles & Nav Focus Trap Validation
 */
import puppeteer from 'puppeteer';
import { AxePuppeteer } from '@axe-core/puppeteer';

(async () => {
  console.log('\n[EaseMotion CI] Starting Landmark Role & Focus Trap Audit...\n');
  
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
  console.log('✅ Axe-core: Zero WCAG 2.1 AA automated violations (Landmarks verified).');

  // 2. Validate Focus Trap inside the Navigation Modal
  await page.click('#menu-open');
  
  // Ensure focus moved to the close button inside modal
  const activeId = await page.evaluate(() => document.activeElement.id);
  if (activeId !== 'menu-close') {
     console.error(`❌ FATAL: Focus did not move into the modal upon opening.`);
     process.exit(1);
  }

  // Shift+Tab from top should loop to bottom (last link)
  await page.keyboard.down('Shift');
  await page.keyboard.press('Tab');
  await page.keyboard.up('Shift');
  
  const activeTextAfterShiftTab = await page.evaluate(() => document.activeElement.textContent);
  if (activeTextAfterShiftTab !== 'Components') {
    console.error(`❌ FATAL: Focus Trap Error. Shift+Tabbing from top did not loop to last link.`);
    process.exit(1);
  }
  
  console.log('✅ Focus Trap: Verified keyboard constraint successfully traps tab sequence inside <nav> dialog.');

  await browser.close();
  process.exit(0);
})();
```
