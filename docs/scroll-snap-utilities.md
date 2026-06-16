# Scroll Snap Utilities

EaseMotion CSS scroll snap utilities provide native, CSS-only snapping behavior for horizontal and vertical content panes.

## Utility Classes

- `ease-snap-x` — enable horizontal scroll snapping
- `ease-snap-y` — enable vertical scroll snapping
- `ease-snap-start` — align snap targets to the start edge
- `ease-snap-center` — align snap targets to the center
- `ease-snap-end` — align snap targets to the end edge
- `ease-snap-mandatory` — use mandatory snap behavior for stronger snapping

## How it works

Use these utilities on scroll containers and snap targets together:

- apply `ease-snap-x` or `ease-snap-y` to a scroll container
- apply `ease-snap-start`, `ease-snap-center`, or `ease-snap-end` to child items
- add `ease-snap-mandatory` when you want forced snap stopping

## Basic usage

```html
<div class="ease-snap-x ease-snap-mandatory ease-overflow-x-auto ease-flex ease-gap-4">
  <article class="ease-snap-start ease-card" style="min-width:320px;">Item 1</article>
  <article class="ease-snap-center ease-card" style="min-width:320px;">Item 2</article>
  <article class="ease-snap-end ease-card" style="min-width:320px;">Item 3</article>
</div>
```

## Example use cases

### Product carousel

A horizontal track with product cards that snap to each pane as the user scrolls.

### Testimonial slider

A centered carousel with testimonials that lock into place and feel tactile on touch devices.

### Horizontal gallery

A row of media previews that snap to the nearest frame for intuitive browsing.

### Onboarding screens

A vertical, full-height stack of onboarding or welcome slides.

### Documentation section navigation

A horizontally scrolling nav strip with consistently aligned snap positions.

## Best practices

- Combine `ease-snap-x` or `ease-snap-y` with `ease-overflow-x-auto` or `ease-overflow-y-auto`
- Use `ease-snap-mandatory` for a stronger snapping experience in carousels and sliders
- Use `ease-snap-center` for better readability in preview-style galleries
- Use `ease-snap-start` for edge-aligned scenes and pagination

## Browser support

Modern browsers support CSS Scroll Snap and native snapping behavior.

- Chrome 69+
- Firefox 68+
- Safari 11+
- Edge 79+

For best mobile support, include `ease-overflow-x-auto` or `ease-overflow-y-auto` and use `-webkit-overflow-scrolling: touch` where needed.
