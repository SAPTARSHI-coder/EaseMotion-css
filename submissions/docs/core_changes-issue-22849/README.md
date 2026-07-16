# ease-carousel — Card Carousel Component

## What does this do?

Adds a CSS scroll-snap based card carousel component for showcasing featured content, testimonials, or product cards with previous/next navigation buttons, dot indicators, smooth snap scrolling, and an optional auto-play mode.

## How is it used?

```html
<div class="ease-carousel" data-autoplay>
  <div class="ease-carousel-track">
    <article class="ease-carousel-slide" id="slide-1">...</article>
    <article class="ease-carousel-slide" id="slide-2">...</article>
    <article class="ease-carousel-slide" id="slide-3">...</article>
  </div>
  <button class="ease-carousel-prev" aria-label="Previous">&lsaquo;</button>
  <button class="ease-carousel-next" aria-label="Next">&rsaquo;</button>
  <div class="ease-carousel-dots">
    <button class="ease-carousel-dot" data-slide="0" aria-label="Slide 1"></button>
    <button class="ease-carousel-dot" data-slide="1" aria-label="Slide 2"></button>
  </div>
</div>
```

Open `demo.html` directly in a browser to see the carousel with responsive cards, smooth snap scrolling, and auto-play mode.

## Why is it useful?

Carousels are a common UI pattern for showcasing multiple pieces of content in a compact space. This component uses CSS `scroll-snap` for smooth, native-feeling slide transitions, supports responsive layouts (1 slide on mobile, multiple on desktop), and includes accessible navigation controls — all while integrating with EaseMotion design tokens.

Fixes #22849
