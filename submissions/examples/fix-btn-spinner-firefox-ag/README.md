# Fix Button Loading Spinner Firefox Overflow

## What does this do?
Fixes the loading spinner on `.ease-btn` elements overflowing the button's `border-radius` clipping area in Firefox by adding `isolation: isolate` and `transform: translateZ(0)` to the button.

## How is it used?
```html
<button class="ease-btn ease-btn--loading">
  <span class="ease-btn-spinner"></span>
  Loading...
</button>
```

## Why is it useful?
Firefox has a known rendering quirk where `overflow: hidden` combined with `border-radius` does not reliably clip absolutely-positioned child elements or `::after` pseudo-elements. Adding `isolation: isolate` forces a new stacking context, and `transform: translateZ(0)` triggers GPU-composited rendering, both of which reliably enforce the clip in Firefox. Fixes #32722.
