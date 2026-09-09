# Buttons: Loading spinner uses hardcoded 0.7s duration

**Issue:** #5942
**File:** `components/buttons.css`

## Problem

Line 240 uses `animation: ease-kf-btn-spin 0.7s linear infinite` with a hardcoded `0.7s` instead of referencing a CSS variable.

## Expected

```css
.ease-btn-loading::after {
  animation: ease-kf-btn-spin var(--ease-btn-spin-speed, 0.7s) linear infinite;
}
```

## Demo

Open `demo.html` to see the loading spinner with its hardcoded animation duration.
