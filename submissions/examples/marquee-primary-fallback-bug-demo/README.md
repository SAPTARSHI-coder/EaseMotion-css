# Marquee: Wrong primary color fallback value

**Issue:** `#5866`  
**File:** `components/ease-marquee.css`

## Problem

Line 143 uses `var(--ease-color-primary, #6366f1)` but the correct framework primary is `#6c63ff`.

## Expected

`var(--ease-color-primary, #6c63ff)`

## Demo

Open `demo.html` without the base layer. The focus-visible outline on the marquee uses `#6366f1` instead of `#6c63ff`.
