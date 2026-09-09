# Grid Auto Fallback for `.ease-grid-auto`

**Fixes:** #3648
**File Modified:** `core/utilities.css`

---

## Problem

The `.ease-grid-auto` utility class used `min()` inside `minmax()`,
which is not supported in older browsers (Safari < 13.1, Firefox < 75).
These browsers ignored the entire `grid-template-columns` declaration,
causing the grid layout to break completely with no fallback.

## Fix

Added a base fallback `repeat(auto-fit, minmax(240px, 1fr))` for older
browsers, and wrapped the modern `min()` syntax inside an `@supports`
block so it only applies in browsers that support it.

## How to Test

1. Open `demo.html` in any modern browser
2. Resize the window — grid items reflow responsively
3. In older browsers, the fallback 240px minmax ensures the grid still works

## Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome  | 66+            |
| Firefox | 75+            |
| Safari  | 13.1+          |
| Edge    | 79+            |

> Older browsers fall back to `minmax(240px, 1fr)` — no layout breakage occurs.