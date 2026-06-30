# Cards: Glass variant uses hardcoded rgba border

**Issue:** #5944
**File:** `components/cards.css`

## Problem

Line 135 uses `border: 1px solid rgba(255, 255, 255, 0.3)` instead of `var(--ease-glass-border, rgba(255, 255, 255, 0.20))`.

## Expected

```css
border: 1px solid var(--ease-glass-border, rgba(255, 255, 255, 0.2));
```

## Demo

Open `demo.html` to see the glass card with hardcoded border.
