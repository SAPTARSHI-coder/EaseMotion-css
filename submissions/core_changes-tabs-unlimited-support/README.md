# Core Changes — Tabs Unlimited Support

## Overview
**Severity:** High  
**Component:** Tabs  
**Files:** `components/tabs.css`, `core/tabs.js`

The tabs component was limited by hardcoded `:nth-of-type()` selectors and only supported up to 6 tabs. This fix enables the tabs component to work with any number of tabs while preserving existing styles, accessibility, and interaction behavior.

## Problem

### Symptoms
- Adding more than 6 tabs breaks active tab state, underline movement, and panel display.
- The tab indicator only supported fixed positions up to 6 items.
- Tab panels beyond the 6th item did not open correctly.

### Root Cause
The original tabs CSS used hardcoded selectors for a maximum of 6 tabs to:
- set focus-visible styles
- set active label color
- translate the underline
- toggle panel display

That approach prevented the component from scaling to larger tab counts.

## Solution

### Fixes applied
- Expanded CSS support to 20 tabs in `components/tabs.css`.
- Added `core/tabs.js` to generate dynamic rules for tabs beyond 20.
- Kept the existing HTML markup unchanged.
- Preserved keyboard accessibility, focus management, and plain CSS fallback.
- Improved underline sizing and positioning for all tab counts.

### Behavior now
- 1–20 tabs: fully supported with CSS-only selectors.
- 21+ tabs: `core/tabs.js` generates the needed rules dynamically at runtime.
- The active tab underline remains accurate and responsive.
- Tab panels toggle correctly even for large tab sets.

## Testing Checklist

- [x] Add 6 or fewer tabs and verify default behavior
- [x] Add more than 6 tabs and verify active labeling and panel display
- [x] Add 20 tabs and confirm all tabs still work
- [x] Add 25 tabs and confirm dynamic JS-generated rules work
- [x] Confirm underline moves correctly on tab selection
- [x] Confirm tab panels display expected content
- [x] Verify keyboard navigation and focus-visible state
- [x] Verify no unrelated files were modified

## Affected Files

- `components/tabs.css` — expanded tab support and styling rules
- `core/tabs.js` — dynamic CSS generation for large tab counts

## Notes for Reviewers
- This is a focused fix for the tabs component.
- It does not change any unrelated behavior or layout.
- The HTML markup remains compatible with the existing component API.
- `demo.html` shows both CSS-only cases and JS-enhanced unlimited tabs.
