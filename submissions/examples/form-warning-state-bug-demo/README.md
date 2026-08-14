# Form Warning: Hardcoded rgba shadow instead of CSS variable

**Issue:** `#5873`  
**File:** `components/forms.css`

## Problem

Line 115 uses `rgba(245, 158, 11, 0.15)` directly for the warning state focus shadow, instead of a CSS variable with fallback. Compare with the success state (line 95) which correctly uses `var(--ease-color-success-alpha, rgba(34, 197, 94, 0.15))`.

## Expected

```css
.ease-input-warning,
.ease-input-warning:focus {
  border-color: var(--ease-color-warning, #f59e0b) !important;
  box-shadow: 0 0 0 3px var(--ease-color-warning-alpha, rgba(245, 158, 11, 0.15)) !important;
}
```

## Demo

Open `demo.html` to see the warning input with its hardcoded shadow color.
