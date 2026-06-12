# Ease Slide-In Sn

## What does this do?

A CSS-only slide-in animation utility with left and right slide-in effects, configurable via `--slide-duration` and `--slide-distance` CSS custom properties.

## How is it used?

```html
<!-- Slide in from left -->
<div class="animate-slide-in-left">Slides from left</div>

<!-- Slide in from right -->
<div class="animate-slide-in-right">Slides from right</div>

<!-- Custom speed and distance -->
<div class="animate-slide-in-left slide-fast slide-far">Fast and far</div>
<div
  class="animate-slide-in-right"
  style="--slide-duration: 0.8s; --slide-distance: 150px"
>
  Custom slide
</div>
```

Speed modifier classes:

- `.slide-fast` — sets `--slide-duration: 0.2s`
- `.slide-slow` — sets `--slide-duration: 1s`
- `.slide-slower` — sets `--slide-duration: 1.5s`

Distance modifier classes:

- `.slide-near` — sets `--slide-distance: 50px`
- `.slide-far` — sets `--slide-distance: 200px`

Customize via CSS custom properties:

- `--slide-duration` — controls animation speed (default: `0.5s`)
- `--slide-distance` — controls slide distance (default: `100px`)

## Why is it useful?

Slide animations are essential for modern UI interactions like notification panels, sidebars, and content reveals. This implementation is zero-dependency CSS-only, uses GPU-accelerated `translateX` transforms, respects `prefers-reduced-motion`, and automatically reduces distance on mobile.
