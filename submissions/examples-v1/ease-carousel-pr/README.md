# Image Carousel with CSS Scroll-Snap

## What does this do?

A horizontal image carousel built entirely with CSS `scroll-snap`. Slides
snap into place on swipe/scroll, and navigation dots (anchor links to
each slide's ID) let users jump directly to a slide.

- `.ease-carousel` — horizontal scroll container with
  `scroll-snap-type: x mandatory` and a hidden scrollbar.
- `.ease-carousel-item` — individual slide with `scroll-snap-align: start`.
- `.ease-carousel-nav` / `.ease-carousel-dot` — CSS-styled navigation dots
  (anchor links to slide IDs).

## How is it used?

```html
<div class="ease-carousel" id="carousel">
  <div class="ease-carousel-item" id="slide-1">Slide 1</div>
  <div class="ease-carousel-item" id="slide-2">Slide 2</div>
  <div class="ease-carousel-item" id="slide-3">Slide 3</div>
</div>

<div class="ease-carousel-nav">
  <a href="#slide-1" class="ease-carousel-dot" aria-label="Go to slide 1"></a>
  <a href="#slide-2" class="ease-carousel-dot" aria-label="Go to slide 2"></a>
  <a href="#slide-3" class="ease-carousel-dot" aria-label="Go to slide 3"></a>
</div>
```

## Why is it useful?

EaseMotion CSS had no image carousel or slider component. Carousels are
a common UI pattern for hero banners, testimonials, and gallery sections.
This provides a fully CSS scroll-snap solution with zero JavaScript —
swipeable on touch devices and navigable via anchor-link dots. Wrapped
in `@layer easemotion-components` for predictable cascade ordering,
with prefers-reduced-motion support.
