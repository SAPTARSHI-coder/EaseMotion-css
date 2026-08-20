# Background Grid Drift

## What does this do?

It slowly pans a subtle radial-gradient grid pattern across the page background to create modern ambient motion.

## How is it used?

Insert the `grid-drift-bg-uj` div container at the top of your background body or hero segment:

```html
<body>
  <div class="grid-drift-bg-uj"></div>
  
  <!-- Main content goes here -->
</body>
```

Configure parameters using custom CSS variables or inline styles:
- `--grid-dot-color`: Color of the grid dot intersections (defaults to `rgba(108, 99, 255, 0.15)`).
- `--grid-dot-size`: Radius of the dots (defaults to `1px`).
- `--grid-cell-size`: Cell separation spacing (defaults to `20px`).
- `--grid-drift-duration`: Loop speed duration of the drift (defaults to `20s`).

## Why is this useful?

This utility adds micro-motion depth to e-commerce, portfolios, and SaaS dashboards without relying on Canvas rendering loops or external libraries. Running entirely on GPU compositor-friendly background-position offsets, it maintains high-frame-rate scrolling on all devices, and respects reduced motion parameters by pausing the drift loop.
