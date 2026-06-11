# Mobile Responsive Alignment Fix

## What was broken?

Stats dashboard cards lost their centered alignment on mobile viewports (<768px). Content shifted hard to the left edge, causing text clipping and a broken layout appearance.

## Root Cause

The layout container used `display: flex; flex-direction: column; width: 100%; text-align: left;` without responsive overrides for mobile. When combined with `width: 100%` on a flex column, the content aligned to the left edge with no centering mechanism on narrow screens.

## Fix

Added a `@media (max-width: 768px)` breakpoint with:
- `width: 90%; margin: 0 auto;` — constrains width and auto-centers horizontally
- `align-items: center;` — flexbox centering override
- `text-align: center;` — text centering override
- `padding: 20px;` — consistent inner spacing on mobile
- `box-sizing: border-box;` — prevents overflow from padding

Additional improvements:
- Light mode support via `prefers-color-scheme: light`
- Transition disabled for `prefers-reduced-motion: reduce`
- Further refinement at 480px breakpoint
- Responsive stat row with wrapping

## How to apply to your own components

```css
.my-component {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
  /* default centering */
  align-items: center;
  text-align: center;
}

@media (max-width: 768px) {
  .my-component {
    width: 90%;
    margin: 0 auto;
    padding: 20px;
    /* re-declare centering to override any inherited left-align */
    align-items: center;
    text-align: center;
  }
}
```

## Tech Stack
- HTML
- CSS (flexbox, media queries)

## Preview
Open `demo.html` directly in your browser and resize below 768px.

Closes #1232
