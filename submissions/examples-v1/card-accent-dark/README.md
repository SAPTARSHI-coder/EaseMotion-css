# Card Accent Dark Mode Fix

**Fixes:** #3644
**File Modified:** `components/cards.css`

---

## Problem

The `.ease-card-accent`, `.ease-card-accent-success`, `.ease-card-accent-danger`,
and `.ease-card-accent-warning` variants used hardcoded light mode border colors
with no `@media (prefers-color-scheme: dark)` overrides. In dark mode, the bright
accent colors clashed with dark backgrounds, reducing visual harmony and contrast.

## Fix

Added `@media (prefers-color-scheme: dark)` overrides with softer, lighter tinted
variants of each accent color so the cards look polished in both light and dark mode.

| Variant | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Primary | `#6c63ff` | `#a5b4fc` |
| Success | `#22c55e` | `#86efac` |
| Danger  | `#ef4444` | `#fca5a5` |
| Warning | `#f59e0b` | `#fcd34d` |

## How to Test

1. Open `demo.html` in any modern browser
2. Enable dark mode on your OS or simulate via browser DevTools
3. Confirm accent border colors are softer and harmonious in dark mode
4. Switch back to light mode and confirm original colors are unchanged

## Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome  | 76+            |
| Firefox | 67+            |
| Safari  | 12.1+          |
| Edge    | 79+            |

> Browsers that do not support prefers-color-scheme will use light mode
> colors by default — no regression occurs.