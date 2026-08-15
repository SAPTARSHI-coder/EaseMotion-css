# Fix: ease-card-glow Missing will-change Declaration

**Issue:** [#5197](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/5197)

## Problem

`.ease-card-glow` animates `box-shadow` on hover but has no `will-change`
declaration. Without it, the browser repaints the element on every animation
frame, causing visible jank (green paint flash in DevTools) on low-end devices.

`.ease-card-hover` already has `will-change: transform, box-shadow` correctly.
`.ease-card-glow` was inconsistently missing it.

## Fix

Added two declarations to `.ease-card-glow`:

```css
.ease-card-glow {
  will-change: box-shadow, transform;  /* hints browser to use compositor */
  transform: translateZ(0);           /* forces GPU layer creation */
}
```

Also added `prefers-reduced-motion` support to reset GPU hints for users
who prefer no motion.

## How to Verify

1. Open `demo.html` in Chrome
2. DevTools → Rendering → Paint Flashing
3. Hover the **Before fix** card → green flash visible
4. Hover the **After fix** card → no flash

## Files
- `style.css` — the fix
- `demo.html` — three-card comparison (hover + buggy glow + fixed glow)