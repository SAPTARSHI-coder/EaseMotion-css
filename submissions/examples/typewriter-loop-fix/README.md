# Typewriter Loop Cursor Flicker Fix

**Fixes:** #3645
**File Modified:** `core/animations.css`

---

## Problem

The `ease-kf-typewriter-loop` keyframe animation ended at `100%` with
`border-right-color: transparent`, meaning the cursor was invisible at
the exact moment the animation restarted. This caused a brief but
noticeable flicker where the cursor disappeared between loop cycles.

## Fix

Added an extra keyframe at `99%` to keep the cursor transparent just
before the loop ends, and reset `border-right-color: currentColor` at
`100%` so the cursor is immediately visible when the next cycle begins.

```css
@keyframes ease-kf-typewriter-loop {
  0%   { width: 0; border-right-color: currentColor; }
  40%  { width: var(--ease-typewriter-length, 12ch); border-right-color: currentColor; }
  50%  { width: var(--ease-typewriter-length, 12ch); border-right-color: transparent; }
  60%  { width: var(--ease-typewriter-length, 12ch); border-right-color: transparent; }
  99%  { width: 0; border-right-color: transparent; }
  100% { width: 0; border-right-color: currentColor; }
}
```

## How to Test

1. Open `demo.html` in any modern browser
2. Watch the typewriter animation loop multiple times
3. Confirm the cursor does not flicker or disappear between cycles

## Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome  | 80+            |
| Firefox | 80+            |
| Safari  | 14+            |
| Edge    | 80+            |

> This fix is fully backward-compatible — no existing implementations are affected.