# CSS-Only Carousel Component

## What does this do?

A lightweight CSS carousel component using `scroll-snap-type: x mandatory` with navigation dots, prev/next buttons, and responsive behavior. No JavaScript required for basic scrolling — dots use `:target` anchors, while prev/next buttons are enhanced with optional JS for smooth scroll-by.

## How is it used?

```html
<div class="ease-carousel" id="my-carousel">
  <div class="ease-carousel-track">
    <div class="ease-carousel-slide" id="slide-1">
      <img src="..." alt="..." />
    </div>
    <div class="ease-carousel-slide" id="slide-2">
      <img src="..." alt="..." />
    </div>
  </div>
  <div class="ease-carousel-dots">
    <a href="#slide-1" class="ease-carousel-dot active"></a>
    <a href="#slide-2" class="ease-carousel-dot"></a>
  </div>
</div>
```

Add prev/next buttons:

```html
<button class="ease-carousel-btn ease-carousel-btn-prev">&#8249;</button>
<button class="ease-carousel-btn ease-carousel-btn-next">&#8250;</button>
```

Variants:

- `.ease-carousel-multi` — show 2 slides at once
- `.ease-carousel-3` — show 3 slides (with `.ease-carousel-multi`)
- `.ease-carousel-elevated` — add shadow
- `.ease-carousel-auto` — auto-play

## Why is it useful?

Replaces heavy third-party carousel libraries with a zero-dependency, accessible, scroll-snap-based component. Integrates with EaseMotion CSS tokens (colors, spacing, radius, shadows) and respects `prefers-reduced-motion`.
