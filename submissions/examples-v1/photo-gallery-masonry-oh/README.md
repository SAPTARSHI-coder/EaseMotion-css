# Component: Photo Gallery Masonry

This submission implements the Photo Gallery Masonry for issue **#46928**.

## Description

Responsive masonry layout gallery with hover effects and overlay animations.

## Features

- **Masonry Layout**: CSS column-based masonry
- **Hover Zoom**: Image scales on hover
- **Overlay Animation**: Fade in with icon pop
- **Tall Variant**: Taller images with object-fit cover
- **Responsive**: Adapts to 3, 2, or 1 column

## Usage

```html
<div class="masonry-grid">
  <div class="gallery-item">
    <img src="photo.jpg" alt="Photo">
    <div class="overlay">
      <span class="icon">🔍</span>
    </div>
  </div>
</div>
```

## CSS

```css
.masonry-grid {
  column-count: 3;
  column-gap: 1rem;
}

.gallery-item {
  break-inside: avoid;
  margin-bottom: 1rem;
}
```

## Tall Variant

```html
<div class="gallery-item tall">
  <img src="tall-photo.jpg" alt="Photo">
</div>
```

## Animations

| Animation | Element | Effect |
|-----------|---------|--------|
| Scale | Image | 1.1x on hover |
| Fade | Overlay | Opacity 0→1 |
| Pop | Icon | Scale 0→1 with bounce |

## Acceptance Criteria

- ✅ Masonry layout with CSS columns
- ✅ Hover zoom effect
- ✅ Overlay with icon animation
- ✅ Responsive columns
- ✅ README.md included
