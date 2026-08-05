# Scale-Hover Card Grid for Gaming Hub Layouts

## What does this do?
A responsive CSS card grid where each card scales and glows on hover/focus, revealing a title overlay — designed for gaming hub / library-style layouts.

## How is it used?
```html
<div class="game-grid">
  <div class="game-card">
    <img src="cover.jpg" alt="Game cover">
    <div class="game-title">Game Name</div>
  </div>
</div>
```

## Why is it useful?
Card grids with hover-reveal detail are a common pattern in game library and store UIs. This submission provides smooth scale/glow transitions, keyframe entrance animation, full responsiveness across desktop/tablet/mobile, keyboard focus support (`:focus-within`), and `prefers-reduced-motion` handling — fitting EaseMotion's philosophy of expressive, accessible motion utilities.

## CSS Custom Properties
- `--card-radius`: corner radius of each card (default `14px`)
- `--card-bg`: card background color (default `#1b1b2f`)
- `--card-glow`: hover glow shadow color (default `rgba(99, 102, 241, 0.5)`)
- `--transition-speed`: duration for hover/transform transitions (default `0.35s`)
