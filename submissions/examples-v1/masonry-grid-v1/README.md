# Masonry Grid Component

A CSS-only masonry (waterfall / Pinterest-style) layout using the `column-count` approach for maximum browser compatibility. Items flow vertically within each column before wrapping to the next. Includes staggered fade-in entrance animation, hover lift effect, and responsive column counts.

## Classes

| Class | Description |
|---|---|
| `ease-masonry-grid` | Grid container (default 3 columns) |
| `ease-masonry-grid--cols-2` | 2 columns |
| `ease-masonry-grid--cols-3` | 3 columns |
| `ease-masonry-grid--cols-4` | 4 columns |
| `ease-masonry-item` | Individual grid item |
| `ease-masonry-item-body` | Text content area inside an item |
| `ease-masonry-item--wide` | Visual hint for spanning 2 columns (CSS Grid only) |
| `ease-masonry-item--tall` | Visual hint for spanning 2 rows (CSS Grid only) |

## Usage

```html
<div class="ease-masonry-grid ease-masonry-grid--cols-3">
  <div class="ease-masonry-item">
    <img src="photo.jpg" alt="" loading="lazy" />
    <div class="ease-masonry-item-body">
      <h3>Title</h3>
      <p>Description text.</p>
    </div>
  </div>
  <!-- more items -->
</div>
```

## Why it fits EaseMotion CSS

Pure CSS masonry layout with no JavaScript required. Staggered fade-in animation (`ease-kf-masonry-fade-in`), hover lift effect, responsive breakpoints for mobile/tablet/desktop, and uses `var(--ease-gap)` / `var(--ease-radius)` design tokens. Respects `prefers-reduced-motion`.
