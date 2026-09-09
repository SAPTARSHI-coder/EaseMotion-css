# Wave Animation Duration Fix for `.ease-wave`

**Fixes:** #3652
**File Modified:** `core/animations.css`

---

## Problem

The `.ease-wave` animation class had a hardcoded `2s` duration,
ignoring the `--ease-speed-medium` CSS custom property. Users who
customized `--ease-speed-medium` saw no effect on `.ease-wave`,
while other animation classes like `.ease-bounce` correctly used
the custom property.

## Fix

Replaced the hardcoded `2s` with `var(--ease-speed-medium, 2s)` so
that the animation respects user-defined speed tokens while falling
back to `2s` for backward compatibility.

## How to Test

1. Open `demo.html` in any modern browser
2. The left card shows default speed (2s)
3. The right card overrides `--ease-speed-medium: 400ms` and waves faster
4. This confirms the custom property is now respected

## Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome  | 80+            |
| Firefox | 80+            |
| Safari  | 14+            |
| Edge    | 80+            |

> The fallback value `2s` ensures no regression for existing implementations.