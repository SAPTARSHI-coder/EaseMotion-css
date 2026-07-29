# Tada Tooltip Mixin (SCSS)

## Description
The `ease-tada-tooltip-ag` SCSS mixin provides a playful "Tada" entrance animation for tooltips. When triggered (usually via hovering or focusing a parent wrapper), the tooltip appears and shakes back and forth while slightly scaled up, drawing the user's attention like a celebratory reveal.

## Usage
Include the `_tada-tooltip.scss` file in your main stylesheet and use the mixin on the active/hover state of your tooltip element.

```scss
@use 'path/to/submissions/scss/feature-tada-tooltip-mixin-ag/tada-tooltip' as *;

.my-tooltip-wrapper {
  position: relative;
  display: inline-block;
  
  .my-tooltip {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    /* other styling... */
  }

  // Apply the mixin to the tooltip when the wrapper is hovered/focused
  &:hover .my-tooltip,
  &:focus-within .my-tooltip {
    @include ease-tada-tooltip-ag(1.2s, 0.1s, ease);
  }
}
```

## Parameters
- `$duration`: The animation duration (default: `1s`).
- `$delay`: The animation delay (default: `0s`).
- `$timing`: The animation timing function (default: `ease-in-out`).

## How it works
The mixin forces `opacity: 1` and `visibility: visible` to ensure the tooltip appears when the mixin is applied (typically under a pseudo-class like `:hover`). It then applies the `easeTadaTooltipAg` keyframes, which uses `scale3d` and `rotate3d` to create the shaking and expanding "tada" effect.

## Accessibility
A `@media (prefers-reduced-motion: reduce)` query is built into the mixin. For users who have requested reduced motion at the OS level, the tada animation is completely disabled (`animation: none !important`), but the tooltip will still safely appear due to the `opacity: 1` override within the mixin.
