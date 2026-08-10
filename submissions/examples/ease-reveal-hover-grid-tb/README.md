# CSS Reveal on Hover Grid

This component provides a responsive image grid where info overlays dynamically reveal with smooth animations upon hover or keyboard focus.

## How is it used?

```html
<div class="ease-reveal-hover-grid-tb" role="list">
  <div class="ease-reveal-item-tb" role="listitem" tabindex="0" aria-labelledby="title-id" aria-describedby="desc-id">
    <img src="image.jpg" alt="Description" class="ease-reveal-image-tb">
    <div class="ease-reveal-overlay-tb">
      <h3 id="title-id" class="ease-reveal-title-tb">Title</h3>
      <p id="desc-id" class="ease-reveal-desc-tb">Description text here.</p>
    </div>
  </div>
</div>
```

## Why is this useful for EaseMotion CSS?

This component expands the library's collection of ready-to-use CSS animations and layouts, helping developers implement interactive grid patterns without relying on JavaScript libraries. It ensures accessibility with proper ARIA attributes, supports light and dark modes via custom properties, and utilizes performance-friendly CSS transforms.
