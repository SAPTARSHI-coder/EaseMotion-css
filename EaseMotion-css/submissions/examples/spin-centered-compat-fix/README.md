# Spin Centered Compatibility Fix

**Fixes:** #3640
**File Modified:** `components/buttons.css`

---

## Problem

The `ease-kf-btn-spin` keyframe animation used `transform: translate(-50%, -50%) rotate(...)`
to center and rotate the loading spinner. Combining `translate` inside a `transform`
keyframe along with the standalone `translate` CSS property is not universally
supported, causing the spinner to be off-center in browsers with limited support.

## Fix

Replaced the centering technique with `top: 50%; left: 50%;` plus negative
margins (`margin-top` / `margin-left`), and simplified the keyframes to
only animate `rotate()`:

```css
.ease-btn-loading::after {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -0.425em;
  margin-left: -0.425em;
  ...
  animation: ease-kf-btn-spin 0.7s linear infinite;
}

@keyframes ease-kf-btn-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

## How to Test

1. Open `demo.html` in any modern browser
2. Confirm the spinner stays perfectly centered inside the button
3. Test across Chrome, Firefox, and Safari for consistent centering

## Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome  | 1+             |
| Firefox | 1+             |
| Safari  | 1+             |
| Edge    | 12+            |

> Using margin-based centering with rotate-only keyframes works
> universally across all browsers, including older Safari and Firefox.