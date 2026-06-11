# Utilities: Stack classes missing var() fallback values

**Issue:** #5956
**File:** `core/utilities.css`

## Problem

Lines 48-70 define `.ease-stack-sm`, `.ease-stack`, `.ease-stack-lg`, and `.ease-stack-xl` using `var(--ease-space-*)` without fallback values for gap.

## Expected

```css
.ease-stack-sm { gap: var(--ease-space-2, 0.5rem) !important; }
.ease-stack    { gap: var(--ease-space-4, 1rem) !important; }
.ease-stack-lg { gap: var(--ease-space-6, 1.5rem) !important; }
.ease-stack-xl { gap: var(--ease-space-8, 2rem) !important; }
```

## Demo

Open `demo.html` to see stack utilities resolve to `gap: initial` without the base layer.
