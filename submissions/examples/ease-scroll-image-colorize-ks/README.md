# Scroll-Driven Image Colorize (`sic-grid`)

## What does this do?

A pure CSS image gallery where each card's photo transitions from grayscale to full color as it scrolls into view. Uses `@property` (syntax: `<number>`) with `view-timeline-name` and `animation-timeline: view()` to smoothly interpolate `filter: grayscale()` from 1 (b&w) to 0 (color) — zero JavaScript.

## How is it used?

```html
<section class="sic-grid" aria-label="Image gallery">
  <article class="sic-card">
    <img class="sic-card__image" src="photo.jpg" alt="Description">
    <div class="sic-card__body">
      <h3 class="sic-card__title">Card Title</h3>
      <p class="sic-card__desc">Card description.</p>
    </div>
  </article>
  <!-- Repeat .sic-card blocks -->
</section>
```

Add `style.css` and you're done. Each `.sic-card` gets its own `view-timeline-name` scope so cards animate independently. Responsive: single column on mobile, 2-column grid at 640px+.

## Browser support

- **Chrome 115+ / Edge 115+**: Full `@property` + `filter: grayscale()` interpolation driven by scroll.
- **Firefox / Safari**: Falls back to full-color static cards via `@supports not (animation-timeline: view())`.

## Accessibility

- `prefers-reduced-motion`: All animations disabled, images render in full color immediately.
- `prefers-color-scheme`: Full light mode support.
- `prefers-contrast: high`: White borders, no filter, full opacity text.
- `forced-colors: active`: Filter removed, border-based visibility.
- `:focus-visible`: Blue outline ring on each card.
- Print styles: Full-color images, no animations, card borders for separation.
