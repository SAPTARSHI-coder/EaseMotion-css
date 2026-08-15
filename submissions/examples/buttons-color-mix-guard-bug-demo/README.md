# Buttons: color-mix() used without @supports guard

**Issue:** #5941
**File:** `components/buttons.css`

## Problem

Line 299 uses `border-right-color: color-mix(in srgb, currentColor 30%, transparent)` outside an `@supports` guard. Browsers that don't support `color-mix()` (e.g. older Safari) will drop the entire property.

## Expected

```css
@supports (color: color-mix(in srgb, red 50%, transparent)) {
  .ease-btn-group .ease-btn:not(:last-child) {
    border-right-color: color-mix(in srgb, currentColor 30%, transparent);
  }
}
```

## Demo

Open `demo.html` in a browser that doesn't support `color-mix()` to see the missing border-right-color between grouped buttons.
