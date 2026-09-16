# Spacing Gap Utility Fallbacks

This submission demonstrates and fixes the issue where some space/gap utility classes lack fallback definitions, leading to grid collapsed states in environments where `--ease-space-*` variables aren't globally defined.

---

## The Issue

In `core/utilities.css`, utilities like `.ease-gap-1`, `.ease-gap-3`, and `.ease-gap-10` reference variables without standard fallback fallbacks:
- `gap: var(--ease-space-1)` (missing `, 0.25rem`)
- `gap: var(--ease-space-3)` (missing `, 0.75rem`)
- `gap: var(--ease-space-10)` (missing `, 2.5rem`)

If the space variables are not resolved or missing from the stylesheet, browser spacing collapses entirely.

## The Fix

Provide explicit fallback parameters inside `var()` properties:

```css
/* Gap-1 Fix */
.ease-gap-1 {
  gap: var(--ease-space-1, 0.25rem);
}

/* Gap-3 Fix */
.ease-gap-3 {
  gap: var(--ease-space-3, 0.75rem);
}

/* Gap-10 Fix */
.ease-gap-10 {
  gap: var(--ease-space-10, 2.5rem);
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. In the "Before" section, observe that the three grids have collapsed gap borders (0px spacing).
3. In the "After" section, verify that standard spacing gaps (4px, 12px, 40px) are successfully applied.
