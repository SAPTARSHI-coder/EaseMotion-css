# Forms: Missing input-secondary and input-info state variants

**Issue:** #5958
**File:** `components/forms.css`

## Problem

`.ease-input` has `success`, `danger`, and `warning` state variants but no `secondary` or `info` variants.

## Expected

```css
.ease-input-secondary,
.ease-input-secondary:focus {
  border-color: var(--ease-color-secondary, #8b5cf6) !important;
  box-shadow: 0 0 0 3px var(--ease-color-secondary-alpha, rgba(139, 92, 246, 0.15)) !important;
}
.ease-input-info,
.ease-input-info:focus {
  border-color: var(--ease-color-info, #3b82f6) !important;
  box-shadow: 0 0 0 3px var(--ease-color-info-alpha, rgba(59, 130, 246, 0.15)) !important;
}
```

## Demo

Open `demo.html` to see which input state variants exist and which are missing.
