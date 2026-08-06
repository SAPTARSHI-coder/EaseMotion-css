# View Transitions Gallery

A polished demo of the **CSS View Transitions API** — smooth animated transitions between page states using `::view-transition-old`, `::view-transition-new`, `view-transition-name`, and custom `@keyframes`.

## Features Demonstrated

| Feature | Usage | Browser Support |
|---------|-------|----------------|
| `document.startViewTransition()` | Trigger view transitions in SPAs | Chrome 111+, Edge 111+, Safari 18+, Opera 97+ |
| `::view-transition-old(root)` | Animate the outgoing page state | same |
| `::view-transition-new(root)` | Animate the incoming page state | same |
| `view-transition-name` | Morph specific elements between states | same |
| `::view-transition-group()` | Per-element animation control | Chrome 125+ |
| `light-dark()` | Automatic color scheme adaptation | Chrome 123+, Safari 17.5+, Firefox 120+ |
| `oklch()` | Perceptually-uniform modern color space | Chrome 111+, Safari 15.4+, Firefox 113+ |

## Five Transition Styles

Choose from five CSS-only transition animations:

1. **Default** — Smooth cross-fade between gallery and detail views
2. **Slide Right** — Old state slides right, new slides in from left
3. **Slide Left** — Old state slides left, new slides in from right
4. **Zoom** — Old state zooms out while new zooms in
5. **Morph** — Per-element staggered animation with scale and opacity

## How It Works

The demo uses the SPA (Single-Page Application) API:

```js
document.startViewTransition(() => {
  // Update the DOM here
  galleryGrid.style.display = 'none';
  detailView.style.display = 'block';
});
```

The browser:
1. Captures a screenshot of the current page
2. Runs the DOM update callback
3. Cross-fades between the old and new states using `::view-transition-old` and `::view-transition-new` pseudo-elements

Per-element morphing uses `view-transition-name`:

```css
.gallery-card {
  view-transition-name: active-card;
}
```

The browser automatically tracks elements with the same `view-transition-name` and smoothly moves/sizes them between old and new positions.

## Accessibility

- Semantic HTML with `aria-label` on all interactive elements
- Keyboard navigation: Enter/Space to select, Escape to go back
- `:focus-visible` outlines for keyboard users
- `prefers-reduced-motion` — disables all view transition animations
- `prefers-contrast: high` — increased border contrast
- `forced-colors: active` — Windows High Contrast Mode support
- ARIA `aria-hidden` toggling between gallery and detail views

## Zero Dependencies

Pure CSS and semantic HTML. Minimal JavaScript (only `document.startViewTransition()`) — the API requires JS for SPA mode. For cross-document (MPA) transitions, only a meta tag is needed: `<meta name="view-transition" content="same-origin">`.
