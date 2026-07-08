# ease-sparkle — Sparkle Animation Utility

**Fixes:** Issue #11908

## Overview

A pure CSS animation that makes 4 small "sparkle" stars appear around an element at random-ish positions. The effect uses a clever `box-shadow` trick combined with `::before` and `::after` pseudo-elements to create independently staggered "twinkles" with zero JavaScript.

## Usage

```html
<!-- Premium Badge — sparkles infinitely -->
<span class="ease-sparkle">⭐ Premium Member</span>

<!-- CTA Button — sparkles on hover -->
<button class="ease-sparkle ease-sparkle-hover">Unlock Rewards</button>

<!-- Featured Image -->
<div class="card ease-sparkle">
  <img src="product.jpg" alt="Featured" />
</div>

<!-- Fast Sparkle -->
<div class="ease-sparkle ease-sparkle-fast">Hot Deal!</div>
```

## Variants

| Class                 | Description                 |
| --------------------- | --------------------------- |
| `.ease-sparkle`       | Infinite sparkles (default) |
| `.ease-sparkle-hover` | Triggers only on `:hover`   |
| `.ease-sparkle-fast`  | Duration `1.2s`             |
| `.ease-sparkle-slow`  | Duration `3s`               |

## Customization

You can easily change the sparkle color or size using CSS variables:

```css
.my-custom-item {
  --ease-sparkle-color: #00ffcc; /* Cyan sparkle */
  --ease-sparkle-size: 3px; /* Larger sparkle */
}
```

## How it works (The "Box-Shadow Trick")

Each of the two pseudo-elements (`::before` and `::after`) manages two sparkle points using the `box-shadow` property. By animating the spread radius and opacity within a single keyframe, and offsetting the `animation-delay` of the second pseudo-element, we achieve 4 distinct sparkles that appear at different times.

## Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  .ease-sparkle::before,
  .ease-sparkle::after {
    animation: none !important;
    display: none !important;
  }
}
```

The animation is automatically disabled for users who prefer reduced motion.

## Acceptance Criteria

- [x] 4 sparkle points using `::before`, `::after` and `box-shadow` trick
- [x] Each sparkle: `scale(0)` -> `scale(1)` -> `scale(0)` (via spread radius)
- [x] Staggered delay for each sparkle
- [x] Gold color default (`--ease-color-warning`)
- [x] `prefers-reduced-motion` fallback included
- [x] Zero JavaScript
- [x] No `core/` or `components/` files modified
