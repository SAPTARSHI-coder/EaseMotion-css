# Firefox Skeleton Shimmer Fix

This example demonstrates a fix for the `ease-skeleton` loading animation on Firefox.

## Problem

Firefox may not animate the skeleton shimmer correctly when using an animated `linear-gradient` without an explicit `background-size`.

## Solution

Set:

```css
background-size: 200% 100%;
background-position: 200% 0;
```

and animate the background position:

```css
@keyframes skeleton-shimmer {
  0% {
    background-position: 200% 0;
  }

  100% {
    background-position: -200% 0;
  }
}
```

## Files

- `demo.html` — Example page
- `style.css` — Skeleton loader styles

## Testing

1. Open `demo.html` in Firefox.
2. Verify that the shimmer effect moves smoothly across the skeleton elements.
3. Compare with Chrome or Edge to ensure consistent behavior.

## Included Examples

- Text skeleton
- Avatar skeleton
- Card skeleton
