# Chip: Wrong primary color fallback value

**Issue:** `#5865`  
**File:** `components/chip.css`

## Problem

Every `var(--ease-color-primary, #6366f1)` in chip.css uses `#6366f1` (Tailwind `indigo-500`) as the fallback, but the actual framework primary color is `#6c63ff`.

### Affected lines

- Line 26: `outline: 2px solid var(--ease-color-primary, #6366f1);`
- Line 52: `border-color: var(--ease-color-primary, #6366f1);`
- Line 69: `background: var(--ease-color-primary, #6366f1);`
- Line 70: `border-color: var(--ease-color-primary, #6366f1);`
- Line 111: `border-color: var(--ease-color-primary, #6366f1);`
- Line 115: `background: var(--ease-color-primary, #6366f1);`
- Line 116: `border-color: var(--ease-color-primary, #6366f1);`

## Expected

`var(--ease-color-primary, #6c63ff)`

## Demo

Open `demo.html` without the base layer. The chips render with `#6366f1` (indigo) instead of the correct `#6c63ff` (framework purple).
