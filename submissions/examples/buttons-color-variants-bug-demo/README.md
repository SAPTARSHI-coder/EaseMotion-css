# Buttons: Missing warning, info, secondary color variants

**Issue:** #5940
**File:** `components/buttons.css`

## Problem

`.ease-btn` has `primary`, `success`, `danger`, `outline`, `ghost`, and `link` variants but no `warning`, `info`, or `secondary` variants.

## Expected

```css
.ease-btn-warning {
  background-color: var(--ease-color-warning, #f59e0b);
  border-color: var(--ease-color-warning, #f59e0b);
  color: #fff;
}
.ease-btn-info {
  background-color: var(--ease-color-info, #3b82f6);
  border-color: var(--ease-color-info, #3b82f6);
  color: #fff;
}
.ease-btn-secondary {
  background-color: var(--ease-color-secondary, #8b5cf6);
  border-color: var(--ease-color-secondary, #8b5cf6);
  color: #fff;
}
```

## Demo

Open `demo.html` to see which button colors are available and which are missing.
