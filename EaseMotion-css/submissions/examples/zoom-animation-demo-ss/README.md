# Zoom Animation Demo

A beginner-friendly and responsive UI demonstration showcasing various zoom-style interactions using CSS transforms.

## What does this do?
Provides a practical, responsive grid of cards that implement different zoom behaviors (entire card zoom-in, inner image zoom, and entire card zoom-out) on hover.

## How is it used?
```html
<!-- Example of a card that scales up on hover -->
<div class="ease-zoom-card ease-zoom-in">
  <div class="ease-zoom-content">
    <h3>Zoom In</h3>
  </div>
</div>

<!-- Example of a card whose inner image scales up on hover -->
<div class="ease-zoom-card ease-zoom-image-only">
  <div class="ease-zoom-image-wrapper">
    <div class="ease-zoom-image"></div>
  </div>
  <div class="ease-zoom-content">
    <h3>Inner Zoom</h3>
  </div>
</div>
```

## Why is it useful?
- **Beginner-friendly**: The code uses straightforward CSS transforms (`scale()`) and transitions.
- **Real-world application**: Demonstrates common modern UI interactions used for cards and image galleries.
- **Responsive**: Built on a flexible CSS grid layout that works seamlessly across desktop and mobile.
