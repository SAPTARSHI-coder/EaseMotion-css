# Skeleton: Missing CSS variable fallback values

**Issue:** `#5867`  
**File:** `core/animations.css`

## Problem

The `.ease-skeleton-shimmer` and `.ease-skeleton-pulse` classes use `var(--ease-color-neutral-100)` and `var(--ease-color-neutral-200)` without fallback values. Without the base layer, these resolve to `initial` (transparent/none).

### Affected lines

- Line 772: `background: var(--ease-color-neutral-100);`
- Line 781: `var(--ease-color-neutral-200)`
- Line 787: `background-color: var(--ease-color-neutral-200);`

## Expected

Every `var()` should include a fallback:
- `var(--ease-color-neutral-100, #f1f5f9)`
- `var(--ease-color-neutral-200, #e2e8f0)`

## Demo

Open `demo.html` without the base layer to see the skeleton with transparent (missing) background.
