# Safari Hover Animation Lag Fix

## What does it do?
Demonstrates and fixes the Safari animation lag bug where
hover and looping animations stutter due to missing GPU
compositor layer promotion.

## Root Cause
Safari doesn't automatically promote elements to the GPU
compositor layer for CSS animations. Without explicit hints,
animations run on the CPU causing dropped frames and stuttering.

## The Fix
Add these three properties to any lagging animated element:

```css
.your-animated-element {
  will-change: transform;        /* hint browser to prepare GPU layer */
  transform: translateZ(0);      /* force GPU layer promotion */
  backface-visibility: hidden;   /* prevent flicker during compositing */
}
```

## Affected Classes & Fixed Versions
| Original | Fixed Version |
|---|---|
| `.ease-pulse` | `.ease-pulse-fixed` |
| `.ease-bounce` | `.ease-bounce-fixed` |
| `.ease-rotate` | `.ease-rotate-fixed` |
| `.ease-hover-grow` | `.ease-hover-grow-fixed` |
| `.ease-hover-lift` | `.ease-hover-lift-fixed` |
| `.ease-fade-in` | `.ease-fade-in-fixed` |

## Universal Fix Utility
```html
<!-- Add ease-safari-fix to any lagging element -->
<div class="ease-pulse ease-safari-fix">...</div>
```

## Important Notes
- `will-change` should not be applied to too many elements
  as it increases memory usage
- Always include `translateZ(0)` in hover state too:
  `transform: scale(1.06) translateZ(0)`
- Test without the fix in Safari to confirm the difference

## Preview
Open `demo.html` directly in browser.
Best tested in Safari to see before/after difference.