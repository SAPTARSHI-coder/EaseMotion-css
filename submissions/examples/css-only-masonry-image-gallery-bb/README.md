# CSS-Only Masonry Image Gallery

A responsive masonry-style image grid using CSS columns. Items flow naturally across columns without JavaScript layout libraries.

## What does this do?

Creates a Pinterest-style masonry layout where images of varying heights fill columns naturally. The grid is responsive: 3 columns on desktop, 2 on tablet, 1 on mobile.

## How is it used?

```html
<div class="masonry-gallery">
  <div class="masonry-gallery__item" tabindex="0">
    <img src="photo.jpg" alt="Description" />
    <div class="masonry-gallery__caption">Caption text</div>
  </div>
  <!-- more items -->
</div>
```

### With placeholder images (for demos)

```html
<div class="masonry-gallery__item" tabindex="0">
  <div class="masonry-placeholder masonry-placeholder--1"></div>
  <div class="masonry-gallery__caption">Image Title</div>
</div>
```

### Caption variants

Captures appear on hover with a gradient overlay. The `tabindex="0"` attribute makes items focusable for keyboard navigation.

## Why is it useful?

- **Zero JavaScript** — uses CSS `column-count` for natural masonry flow
- **Responsive** — automatically adjusts columns at breakpoints
- **Hover effects** — subtle lift and scale on hover with caption fade-in
- **Accessible** — items are focusable via `tabindex`, reduced motion respected
- **Lightweight** — pure CSS with no layout library dependencies
- **Production-ready** — suitable for image galleries, portfolios, and photo grids
