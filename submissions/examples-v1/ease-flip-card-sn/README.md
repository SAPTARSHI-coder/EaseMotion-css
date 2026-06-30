# Ease Flip Card Sn

## What does this do?

A pure CSS 3D flip card component that reveals content on the back side when hovered, using CSS perspective and 3D transforms.

## How is it used?

```html
<!-- Y-axis flip (default — horizontal) -->
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h3>Front Side</h3>
    </div>
    <div class="flip-card-back">
      <h3>Back Side</h3>
    </div>
  </div>
</div>

<!-- X-axis flip (vertical modifier) -->
<div class="flip-card flip-card-vertical">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h3>Front</h3>
    </div>
    <div class="flip-card-back">
      <h3>Back</h3>
    </div>
  </div>
</div>

<!-- Custom duration and dimensions -->
<div
  class="flip-card"
  style="--flip-duration: 0.3s; --flip-width: 400px; --flip-height: 280px"
>
  ...
</div>
```

Customize via CSS custom properties:

- `--flip-duration` — animation speed (default: `0.6s`)
- `--flip-axis` — rotation axis, `Y` or `X` (default: `Y`)
- `--flip-width` — card width (default: `300px`)
- `--flip-height` — card height (default: `200px`)

## Why is it useful?

Flip cards are widely used in modern web interfaces for portfolio items, team member cards, product showcases, and interactive galleries. This implementation is zero-dependency CSS-only using `perspective`, `preserve-3d`, and `backface-visibility`. It respects `prefers-reduced-motion` and works responsively, making it fully accessible and ready for production use.
