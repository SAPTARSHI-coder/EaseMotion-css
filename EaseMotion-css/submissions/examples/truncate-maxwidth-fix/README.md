# Truncate Max-Width Fix

**Fixes:** #3641
**File Modified:** `core/utilities.css`

---

## Problem

The `.ease-truncate` utility lacked `max-width: 100%`. Since
`text-overflow: ellipsis` requires a constrained width to work,
elements inside flex or grid containers without an explicit
width would overflow their parent instead of truncating.

## Fix

Added `max-width: 100%` to `.ease-truncate`:

```css
.ease-truncate {
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  max-width: 100% !important;
}
```

## How to Test

1. Open `demo.html` in any modern browser
2. Compare the "Without max-width" example (text overflows)
   with the "With max-width" example (text truncates properly)

## Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome  | 1+             |
| Firefox | 1+             |
| Safari  | 1+             |
| Edge    | 12+            |

> `max-width: 100%` is universally supported and causes no
> regressions for existing implementations.