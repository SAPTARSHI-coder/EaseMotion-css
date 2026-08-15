# SR Only Forced Colors Fix for `.ease-sr-only`

**Fixes:** #3646
**File Modified:** `core/utilities.css`

---

## Problem

The `.ease-sr-only` utility class did not include a
`@media (forced-colors: active)` override for Windows High Contrast Mode.
In High Contrast Mode, the browser's forced colors engine can override
CSS clipping behavior, causing visually hidden elements to either become
visible to sighted users or inaccessible to screen readers.

## Fix

Added a `@media (forced-colors: active)` block with `forced-color-adjust: none`
to ensure `.ease-sr-only` elements remain visually hidden while staying fully
accessible to assistive technologies in High Contrast Mode.

## How to Test

1. Open `demo.html` in any modern browser
2. Enable Windows High Contrast Mode or simulate via browser DevTools
3. Confirm the button label "Submit Form" is not visible on screen
4. Use a screen reader to confirm the label is still announced correctly

## Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome  | 89+            |
| Firefox | 89+            |
| Safari  | 15.4+          |
| Edge    | 89+            |

> Browsers that do not support forced-colors will simply ignore the
> media query — no regression occurs.