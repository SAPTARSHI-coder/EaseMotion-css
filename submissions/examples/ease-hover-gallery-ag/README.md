# CSS Hover-Reveal Image Gallery

An interactive image gallery where hovering expands focused images seamlessly with smooth animations.

## What does this do?

Creates a dynamic image grid where hovered images expand and reveal additional content with smooth CSS transitions. Uses pure CSS hover states with no JavaScript.

## How is it used?

```html
<!-- Basic Gallery -->
<div class="hover-gallery">
  <div class="gallery-item">
    <img src="image1.jpg" alt="Image 1">
    <div class="gallery-overlay">
      <h3>Image Title</h3>
      <p>Description text</p>
    </div>
  </div>
  <div class="gallery-item">...</div>
  <div class="gallery-item">...</div>
</div>

<!-- Square Grid -->
<div class="hover-gallery hover-gallery--square">...</div>

<!-- Masonry Layout -->
<div class="hover-gallery hover-gallery--masonry">...</div>
```

## Why is it useful?

- Pure CSS hover interactions
- Smooth expansion animations
- Overlay with additional content
- Multiple layout options
- Accessible focus states
- Great for portfolios and showcases
