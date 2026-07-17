# Zoom and Pan Image Reveal

## What does this do?

It produces a smooth zoom-in and slight translation camera pan across images when hovered, creating an interactive showcase.

## How is it used?

Apply the `card-zoom-uj` class to your image wrapper and `zoom-pan-img-uj` class to the image itself:

```html
<div class="card-zoom-uj">
  <img src="product.jpg" class="zoom-pan-img-uj" alt="Product Title">
</div>
```

Configure parameters using custom CSS variables or inline styles:
- `--zoom-scale`: Target scale dimension multiplier (defaults to `1.1`).
- `--pan-x`: Horizontal translation shift distance (defaults to `-2%`).
- `--pan-y`: Vertical translation shift distance (defaults to `-1%`).
- `--zoom-duration`: Duration of the transition (defaults to `0.5s`).

## Why is this useful?

This effect is popular in modern e-commerce sites, portfolio catalogs, and feature panels to showcase finer item details on hover. Running entirely via compositor-optimized transitions (`transform: scale` and `translate`), it performs smoothly on low-power devices, avoids layout recalculations, and falls back to a clean static display if users request a reduced motion environment.
