# Shimmer-Sweep Card Grid for Gaming Hub Layouts

## What does this do?
A responsive CSS card grid where each card plays a diagonal shimmer-sweep effect on hover/focus and lifts with a shadow, designed for gaming hub / library-style layouts.

## How is it used?
```html
<div class="shimmer-grid">
  <div class="shimmer-card">
    <img src="cover.jpg" alt="Game cover">
    <div class="card-title">Game Name</div>
  </div>
</div>
```

## Why is it useful?
Shimmer effects add a premium, polished feel to card-based UIs like game libraries and storefronts. This submission provides a diagonal light-sweep on hover using a pseudo-element gradient, a subtle lift + shadow transition, keyframe entrance animation, full responsiveness across desktop/tablet/mobile, keyboard focus support (`:focus-within`), and `prefers-reduced-motion` handling — fitting EaseMotion's accessible, animation-first philosophy.

## CSS Custom Properties
- `--card-radius`: corner radius of each card (default `14px`)
- `--card-bg`: card background color (default `#1b1b2f`)
- `--shimmer-color`: color/opacity of the sweep highlight (default `rgba(255, 255, 255, 0.35)`)
- `--transition-speed`: duration for shimmer sweep and hover transitions (default `0.4s`)
