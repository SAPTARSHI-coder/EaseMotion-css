# Infinite Marquee

## What does this do?
A horizontally (or vertically) scrolling strip of content that loops infinitely and seamlessly using pure CSS `@keyframes`. No JS, no gaps, no jump on loop. Pauses on hover. Edge fade via `mask-image`. Configurable speed and direction via CSS variables.

## How it works
Duplicate all items exactly once inside `.marquee-track`. The animation translates the track by `-50%` (exactly half its width — which equals one full set of original items). When the animation loops back to `0%`, the duplicated set is now exactly where the original started — creating a seamless infinite scroll with zero gap or jump.

## How to use it
```html
<div class="marquee">
  <div class="marquee-track">
    <span class="marquee-item">Item 1</span>
    <span class="marquee-item">Item 2</span>
    <span class="marquee-item">Item 3</span>
    <!-- Duplicate once -->
    <span class="marquee-item">Item 1</span>
    <span class="marquee-item">Item 2</span>
    <span class="marquee-item">Item 3</span>
  </div>
</div>

<!-- Reverse direction -->
<div class="marquee marquee--reverse">...</div>

<!-- Custom speed -->
<div class="marquee" style="--marquee-speed: 35s">...</div>

<!-- Vertical -->
<div class="marquee marquee--vertical">
  <div class="marquee-track marquee-track--vertical">...</div>
</div>
```

## Variants
- `.marquee` — base, pauses on hover, edge fade
- `.marquee--reverse` — scrolls right-to-left instead
- `.marquee--vertical` + `.marquee-track--vertical` — vertical scroll
- `.marquee-item` — pill-shaped text item
- `.marquee-item--accent` — primary-colored variant
- `.marquee-logo` — logo strip item with hover opacity

## CSS Variables
```css
.marquee {
  --marquee-speed: 25s;  /* full loop duration */
  --marquee-gap: 2rem;   /* gap between items */
}
```

## Why it fits EaseMotion CSS
A marquee is one of the most requested UI patterns and EaseMotion has zero support for it. The technique is simple but the details — seamless looping, pause-on-hover, edge fade, reduced motion fallback (wraps to static grid) — make it worth standardizing. Pure CSS, zero dependencies, fits animation-first perfectly.
