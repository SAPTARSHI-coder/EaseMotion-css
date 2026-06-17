# ease-scroll-gallery

## What does this do?

Provides a CSS-only horizontal card scroll snap gallery component using CSS `scroll-snap-type`. Cards snap into place as the user scrolls or swipes — no JavaScript required.

## How is it used?

Wrap your cards in a container with the `ease-scroll-gallery` class. Each child automatically becomes a snap target.

```html
<div class="ease-scroll-gallery">
  <div class="gallery-card">
    <div class="gallery-card-image">…</div>
    <div class="gallery-card-body">
      <h3>Card Title</h3>
      <p>Card description text.</p>
    </div>
  </div>
  <div class="gallery-card">…</div>
  <div class="gallery-card">…</div>
</div>
```

For gradient edge fade indicators, wrap in a `.ease-scroll-gallery-wrapper`:

```html
<div class="ease-scroll-gallery-wrapper">
  <div class="ease-scroll-gallery">…</div>
</div>
```

### Custom card width

The default card width is 280px. Override via CSS:

```css
.ease-scroll-gallery > * {
  flex: 0 0 320px;
}
```

### Scrollbar styling

The scrollbar is styled with the primary color (`#6c63ff`) by default. Customize via `scrollbar-color` or `::-webkit-scrollbar` overrides.

## Why is it useful?

Horizontal scrolling galleries are popular for portfolio showcases, product carousels, team member displays, and article collections. CSS scroll snap provides performant, accessible, touch-friendly scrolling with zero JavaScript overhead.

## Features

- Horizontal scroll with `scroll-snap-type: x mandatory`
- Card snap alignment with `scroll-snap-align: start`
- Custom thin scrollbar with primary color
- Touch-swipe support via `-webkit-overflow-scrolling: touch`
- Optional gradient edge fade wrapper
- Card hover lift effect
- Respects `prefers-reduced-motion`
- Pure CSS, no JavaScript
