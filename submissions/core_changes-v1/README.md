# EaseMotion Carousel / Slider Component

## What does this do?
Adds a CSS scroll-snap powered carousel/slider component with autoplay, dot navigation, and prev/next controls. Uses `.ease-carousel`, `.ease-carousel-track`, `.ease-carousel-slide` classes with full ARIA accessibility support.

## How is it used?
```html
<div class="ease-carousel" data-carousel-autoplay="4000" aria-roledescription="carousel">
  <div class="ease-carousel-track">
    <div class="ease-carousel-slide" role="group" aria-roledescription="slide">...</div>
    <div class="ease-carousel-slide" role="group" aria-roledescription="slide">...</div>
  </div>
  <button class="ease-carousel-btn ease-carousel-prev" aria-label="Previous">&#10094;</button>
  <button class="ease-carousel-btn ease-carousel-next" aria-label="Next">&#10095;</button>
  <div class="ease-carousel-dots" role="tablist">
    <button class="ease-carousel-dot active" role="tab" data-index="0"></button>
    <button class="ease-carousel-dot" role="tab" data-index="1"></button>
  </div>
</div>
```

## Why is it useful?
EaseMotion CSS is an animation-first framework but lacked a carousel/slider component. This addition fills that gap by providing:
- **CSS scroll-snap** — performant native scrolling without heavy JS libraries
- **Autoplay** — configurable interval via `data-carousel-autoplay` attribute
- **Dot + arrow navigation** — prev/next buttons with clickable dot indicators
- **Pause on hover** — autoplay pauses when the user interacts
- **ARIA accessible** — proper roles and labels for screen readers
- **Dark mode** — adapts via CSS variables and `prefers-color-scheme`
- **Reduced motion** — respects `prefers-reduced-motion`

Fixes #12447
