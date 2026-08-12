# Scroll Progress Tracker Ring

## What does this do?

It creates a circular scroll progress indicator using SVG stroke parameters linked directly to the viewport scroll position.

## How is it used?

Implement the SVG markup, utilizing the specific path coordinates representing a perimeter of exactly 100 units:

```html
<svg class="scroll-ring-indicator-uj" viewBox="0 0 36 36">
  <!-- Background ring -->
  <path class="ring-bg-uj" d="M 18 2.0845 a 15.9155 15.9155 0 1 1 0 31.831 a 15.9155 15.9155 0 1 1 0 -31.831" fill="none" stroke-width="3"></path>
  <!-- Animated progress fill -->
  <path class="ring-fill-uj" d="M 18 2.0845 a 15.9155 15.9155 0 1 1 0 31.831 a 15.9155 15.9155 0 1 1 0 -31.831" fill="none" stroke-width="3"></path>
</svg>
```

You can customize tracker properties using CSS custom variables:
- `--ring-size`: Display diameter of the widget (defaults to `48px`).
- `--ring-color-bg`: Stroke color of the background track.
- `--ring-color-fill`: Stroke color of the active progress fill.

## Why is this useful?

This indicator provides a modern reading progress visualization for articles, documentations, and blog posts without requiring heavy JavaScript scroll listeners. By running completely on compositor-friendly scroll timelines, it eliminates paint-thrashing main thread lag and falls back to a clean static layout when users request reduced motion.
