# Modal Overlay: Hardcoded background color

**Issue:** `#5869`  
**File:** `components/modals.css`

## Problem

Line 14 uses a hardcoded `rgba(15, 23, 42, 0.6)` for the overlay backdrop instead of a CSS variable with fallback.

## Expected

```css
background: var(--ease-modal-overlay, rgba(15, 23, 42, 0.6));
```

## Demo

Open `demo.html` to see the modal overlay with its hardcoded backdrop color.
