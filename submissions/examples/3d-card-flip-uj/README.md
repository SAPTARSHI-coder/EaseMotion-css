# 3D Card Flip (Horizontal & Vertical)

## What does this do?

It rotates a card 180 degrees in 3D perspective space along either the horizontal or vertical axis on hover to reveal back-side content.

## How is it used?

### Horizontal Flip (Default)

Use the `card-flip-3d-uj` wrapper class, with `flip-inner-uj`, `flip-front-uj`, and `flip-back-uj` child classes:

```html
<div class="card-flip-3d-uj" style="width: 300px; height: 200px;">
  <div class="flip-inner-uj">
    <!-- Front Face -->
    <div class="flip-front-uj">
      Front content
    </div>

    <!-- Back Face -->
    <div class="flip-back-uj">
      Back content
    </div>
  </div>
</div>
```

### Vertical Flip

Change the outermost wrapper class to `card-flip-3d-vertical-uj`:

```html
<div class="card-flip-3d-vertical-uj" style="width: 300px; height: 200px;">
  <div class="flip-inner-uj">
    <!-- Front Face -->
    <div class="flip-front-uj">
      Front content
    </div>

    <!-- Back Face -->
    <div class="flip-back-uj">
      Back content
    </div>
  </div>
</div>
```

Be sure to define absolute width and height boundaries on the card dimensions to preserve correct perspective layouts.

## Why is this useful?

This utility provides a lightweight, GPU-optimized 3D flip card interaction suitable for pricing plans, profile contacts, or settings details. It leverages standard CSS transforms (`rotateX` and `rotateY`) and handles `prefers-reduced-motion` contexts by disabling the flip animation and only rendering the static front face.
