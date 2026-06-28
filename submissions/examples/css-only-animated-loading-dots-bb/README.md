# CSS-Only Animated Loading Dots

A collection of loading dot animations (bounce, pulse, fade, wave, scale) in multiple sizes and colors.

## What does this do?

Provides animated loading dots for indicating progress or loading states. Includes 5 animation styles, 3 sizes, 5 color variants, and a gradient variant.

## How is it used?

```html
<div class="loading-dots">
  <span class="loading-dots__dot"></span>
  <span class="loading-dots__dot"></span>
  <span class="loading-dots__dot"></span>
</div>
```

### With label

```html
<div class="loading-dots">
  <span class="loading-dots__dot"></span>
  <span class="loading-dots__dot"></span>
  <span class="loading-dots__dot"></span>
  <span class="loading-dots__label">Loading...</span>
</div>
```

### Variants

```html
<!-- Animation styles -->
<div class="loading-dots loading-dots--pulse">...</div>
<div class="loading-dots loading-dots--fade">...</div>
<div class="loading-dots loading-dots--wave">...</div>
<div class="loading-dots loading-dots--scale">...</div>

<!-- Sizes -->
<div class="loading-dots loading-dots--sm">...</div>
<div class="loading-dots loading-dots--lg">...</div>

<!-- Colors -->
<div class="loading-dots loading-dots--success">...</div>
<div class="loading-dots loading-dots--gradient">...</div>
```

## Why is it useful?

- **5 animation styles** — bounce, pulse, fade, wave, and scale
- **Accessible** — respects `prefers-reduced-motion` by pausing animations
- **Multiple variants** — 3 sizes, 5 colors, gradient option
- **Lightweight** — minimal CSS, no JavaScript
- **Production-ready** — suitable for loading states, buttons, and data fetchers
