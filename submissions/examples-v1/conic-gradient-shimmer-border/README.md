# Conic Gradient Shimmer Border

## What does this do?

An animated border utility utilizing a conic gradient that revolves smoothly around the boundaries of cards, buttons, or containers. By registering a custom CSS angle property via CSS Houdini (`@property`), the rotation of the gradient runs fully hardware-accelerated on the GPU compositor thread, avoiding CPU repaint cycles and layout recalculations.

## How is it used?

Add the classes to your HTML markup:

```html
<div class="ease-shimmer-card">
  <div class="ease-shimmer-content">
    <h3>Neon Border Shimmer</h3>
    <p>Pure CSS Houdini gradient border animation.</p>
  </div>
</div>
```

You can customize the animation speed or behavior using modifiers:

- `.spin-slow` to slow the rotation down to 6s.
- `.spin-fast` to accelerate the rotation to 1.5s.
- Hover acceleration is enabled by default, which speeds up the rotation rate and applies a gentle elevation scale effect.

## Why is it useful?

Standard CSS gradients are static and cannot be animated natively. To circumvent this, developers have traditionally used heavy JavaScript computations or complex DOM overlays that hurt performance. This feature implements native, GPU-accelerated gradient border animation, keeping layouts clean and lightweight while delivering a premium visual treatment that aligns perfectly with EaseMotion's performance-oriented philosophy.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript, utilizing modern CSS Houdini `@property` API)

## Preview

Open `demo.html` directly in your browser to see the animation in action.

## Contribution Notes

- Class naming was handled by the contributor
- Maintainer will rename to ease-\* convention before merging
