# Container Query Support for `.ease-container`

**Fixes:** #3649
**File Modified:** `core/utilities.css`

---

## Problem

The `.ease-container` utility class was missing the `container-type` property.
Without it, CSS Container Queries cannot be used on child elements that target
`.ease-container` as their container context — even in browsers that fully
support the feature.

## Fix

Added `container-type: inline-size` and `container-name: ease-container` to
the `.ease-container` class in `core/utilities.css`.

```css
.ease-container {
  width: 100% !important;
  max-width: var(--ease-container-max) !important;
  margin-left: auto !important;
  margin-right: auto !important;
  padding-left: var(--ease-space-6) !important;
  padding-right: var(--ease-space-6) !important;
  container-type: inline-size !important;
  container-name: ease-container !important;
}
```

## How to Test

1. Open `demo.html` in any modern browser (Chrome 105+, Firefox 110+, Safari 16+)
2. Resize the browser window
3. When the container width exceeds `600px`, the card background turns green
   and the font size increases — confirming that the container query is working

## Browser Support

| Browser | Minimum Version |
| ------- | --------------- |
| Chrome  | 105+            |
| Firefox | 110+            |
| Safari  | 16+             |
| Edge    | 105+            |

> Older browsers that do not support `container-type` will simply ignore the
> property and fall back to standard block layout — no layout breakage occurs.
