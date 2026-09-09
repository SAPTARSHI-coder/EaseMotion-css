# Scroll Reveal: Hardcoded 0.7s duration

**Issue:** `#5870`  
**File:** `core/animations.css`

## Problem

The scroll-reveal transition uses a hardcoded `0.7s` duration instead of referencing a design token like `var(--ease-speed-slow, 0.6s)`.

### Affected lines

- Lines 1202–1203: `opacity 0.7s ...`, `transform 0.7s ...`
- Line 1229: `animation: ease-kf-reveal-up 0.7s ...`

## Expected

```css
transition:
  opacity var(--ease-reveal-duration, 0.7s) ...,
  transform var(--ease-reveal-duration, 0.7s) ...;
```

## Demo

Open `demo.html` to see the reveal effect with the hardcoded 0.7s duration.
