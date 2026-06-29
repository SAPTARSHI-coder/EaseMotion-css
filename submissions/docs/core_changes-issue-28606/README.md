# ease-carousel — CSS Scroll-Snap Carousel Component

## What does this do?

Provides a lightweight carousel/slider component using CSS `scroll-snap`. No JavaScript required for basic horizontal scrolling. Supports navigation arrows, dot indicators, auto-play, and responsive slide widths.

## How is it used?

```html
<div class="ease-carousel" aria-label="Image carousel">
  <div class="ease-carousel-track">
    <div class="ease-carousel-slide">Slide 1</div>
    <div class="ease-carousel-slide">Slide 2</div>
    <div class="ease-carousel-slide">Slide 3</div>
  </div>
  <button class="ease-carousel-prev" aria-label="Previous">‹</button>
  <button class="ease-carousel-next" aria-label="Next">›</button>
</div>
<div class="ease-carousel-dots">
  <button class="ease-carousel-dot" aria-label="Go to slide 1"></button>
  <button class="ease-carousel-dot" aria-label="Go to slide 2"></button>
  <button class="ease-carousel-dot" aria-label="Go to slide 3"></button>
</div>
```

### Variants

| Modifier | Effect |
|---|---|
| (none) | Full-width slides with center snap |
| `.ease-carousel-peek` | Shows partial prev/next slides |
| `.ease-carousel-fade` | Fade transition instead of scroll |
| `.ease-carousel-auto` | Auto-play with configurable interval |

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-carousel-slide-width` | `100%` | Width of each slide |
| `--ease-carousel-gap` | `0` | Gap between slides |
| `--ease-carousel-auto-interval` | `4000` | Auto-play interval (ms) |

## Why is it useful?

Carousels are a common UI pattern for galleries, testimonials, hero banners, and product showcases. This component provides a performant, accessible implementation using native CSS scroll-snap — no heavy JS libraries required.

## Features

- CSS scroll-snap for native scrolling performance
- Peek variant shows adjacent slides
- Navigation arrows and dot indicators
- Button-based navigation via JS
- Auto-play with pause on hover/focus
- Keyboard accessible (arrow keys)
- Touch/swipe friendly on mobile
- Screen reader labels on all controls
