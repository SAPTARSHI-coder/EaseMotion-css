# CSS Scroll-Driven Horizontal Slideshow Zoom and Slide Transition

This feature implements a high-end product gallery (Apple landing page style) where vertical page scrolling translates cards horizontally and zooms in on the active card using native CSS scroll-driven animations, resolving Issue #11762.

## What does this do?

It provides CSS-driven scroll transitions linking vertical page scrolling to horizontal slide translation and card zooming:

- **Sticky Viewport**: Stays locked in position as the page scrolls vertically.
- **Horizontal Translation**: Translates a horizontal track container proportionally to scroll depth.
- **Active Zoom & Blur**: The centered card scales up to `1` and achieves full opacity, while inactive cards scale down to `0.8` and gain a blur filter.

## How is it used?

Structure of the scroll-driven horizontal gallery:

```html
<div class="scroll-container">
  <div class="sticky-wrapper">
    <div class="horizontal-track">
      <!-- Card 1 -->
      <div class="card card-1">...</div>
      <!-- Card 2 -->
      <div class="card card-2">...</div>
      <!-- Card 3 -->
      <div class="card card-3">...</div>
    </div>

    <!-- Optional Pagination -->
    <div class="pagination-dots">
      <div class="dot active-dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</div>
```

## Viewport Sizing & Calculations

- **Scroll Height**: `.scroll-container` uses `height: 300vh` (for 3 cards) to create scrollable space.
- **Sticky Screen**: `.sticky-wrapper` uses `height: 100vh` and `position: sticky; top: 0` to hold the gallery in place during the scroll.
- **Horizontal Track**: `.horizontal-track` uses `width: 300vw` (3 cards \* 100vw) and translates from `translateX(0)` to `translateX(-200vw)`.
- **Scroll Timeline**: Driven natively by `animation-timeline: scroll(root)` which syncs animations to the root scroll.
- **Accessibility**: Smoothly resets to a standard vertical column layout under `prefers-reduced-motion: reduce`.
