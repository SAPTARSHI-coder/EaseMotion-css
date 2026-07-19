# Interactive 3D Book Cover Flip Showcase

This feature creates a realistic 3D book model showcase component, resolving Issue #11757. When hovered, the front cover swings open on its hinge, revealing inner page layers and casting a dynamic shadow behind it.

## What does this do?

It provides 3D styling for book showcases where hovering triggers a realistic opening effect:

- **Hinge swing**: The front cover rotates outward by `rotateY(-140deg)` from the left edge.
- **Inner pages**: Pages fan out slightly with progressive offsets along the Z-axis, creating the appearance of book thickness.
- **Dynamic shadow**: The shadow cast behind the book shifts angle, skew, and blur to match the movement of the cover.

## How is it used?

Structure of a 3D book component:

```html
<div class="book-container">
  <div class="book">
    <!-- Cover Front -->
    <div class="book-cover front">
      <div class="cover-design">...</div>
    </div>

    <!-- Page Layers -->
    <div class="book-page page-1"></div>
    <div class="book-page page-2"></div>
    <div class="book-page page-3"></div>

    <!-- Cover Back -->
    <div class="book-cover back"></div>

    <!-- Shadow -->
    <div class="book-shadow"></div>
  </div>
</div>
```

## Styling Options & Hinge Coordinates

- **Hinge origin**: Set to `transform-origin: left center` on the `.front` cover.
- **Opening angle**: Customisable opening swing set to `rotateY(-140deg)` on hover.
- **3D Depth**: `.book` holds the 3D context with `transform-style: preserve-3d; perspective: 1000px;`.
- **Accessibility**: Smoothly resets to a clean static layout under `prefers-reduced-motion: reduce`.
