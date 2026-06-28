# Stack Gap Fallback Fix

**Fixes:** #3653
**File Modified:** `core/utilities.css`

---

## Problem

The `.ease-stack-sm`, `.ease-stack`, `.ease-stack-lg`, and `.ease-stack-xl`
utility classes used CSS custom properties for `gap` without fallback values.
If `--ease-space-*` variables were missing or accidentally overridden, the
gap would collapse entirely, causing all stack items to bunch together with
no spacing.

## Fix

Added fallback `rem` values to all stack gap utilities:

- `.ease-stack-sm` → `var(--ease-space-2, 0.5rem)`
- `.ease-stack` → `var(--ease-space-4, 1rem)`
- `.ease-stack-lg` → `var(--ease-space-6, 1.5rem)`
- `.ease-stack-xl` → `var(--ease-space-8, 2rem)`

## How to Test

1. Open `demo.html` in any modern browser
2. All four stack variants show proper spacing between items
3. Even if CSS variables are missing, spacing is preserved via fallback values

## Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome  | 80+            |
| Firefox | 80+            |
| Safari  | 14+            |
| Edge    | 80+            |

> Fallback values ensure no layout breakage in any browser environment.