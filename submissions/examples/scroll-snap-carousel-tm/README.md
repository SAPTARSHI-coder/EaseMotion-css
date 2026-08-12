# Scroll Snap Carousel Utilities

CSS-only horizontal scrolling carousels with snap points. Add the `.snap-carousel` wrapper and `.snap-item` children to create scroll-snapping layouts without JavaScript.

## Features

- **Snap modes**: mandatory (strict), proximity (soft), center, end
- **Coverflow effect**: 3D perspective with scale + rotate on inactive items
- **Fade mask**: edge fade for infinite-scroll feel
- **Pagination dots**: `.snap-dot` and `.snap-dot--active`
- **Navigation arrows**: `.snap-arrow` for click-based navigation
- **Scrollbar variants**: hidden (default), visible
- **Size modifiers**: `--sm`, `--lg`
- **Dark mode and reduced motion** support

## Usage

```html
<div class="snap-carousel" role="list">
  <div class="snap-item">Card 1</div>
  <div class="snap-item">Card 2</div>
  <div class="snap-item">Card 3</div>
</div>
```

With coverflow effect:

```html
<div class="snap-carousel snap-carousel--coverflow">
  <div class="snap-item">...</div>
</div>
```

## Files

- `style.css` — snap carousel utilities
- `demo.html` — interactive showcase
- `README.md` — this documentation
