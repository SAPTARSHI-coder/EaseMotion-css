# Scroll-Driven Hero Background Zoom (`shz-hero`)

## What does this do?

A full-viewport hero section where the background image smoothly zooms in as the user scrolls down the page. Uses `@property` (syntax: `<percentage>`) driving `background-size` via `animation-timeline: scroll(root)` — zero JavaScript.

## How is it used?

```html
<section class="shz-hero" aria-label="Hero section">
  <div class="shz-hero__content">
    <h1 class="shz-hero__title">Your Headline</h1>
    <p class="shz-hero__subtitle">Your subtitle text.</p>
    <a href="#content" class="shz-hero__cta">Call to Action</a>
  </div>
</section>
<section id="content" class="shz-content">
  <!-- Your page content -->
</section>
```

Change the background image by editing `background-image` on `.shz-hero::before` in `style.css`.

## Browser support

- **Chrome 115+ / Edge 115+**: Full `@property` + `scroll(root)` animation of `background-size`.
- **Firefox / Safari**: Falls back to static hero with `background-size: 120%`.

## Accessibility

- `prefers-reduced-motion`: Background stays at 110%, content fully visible immediately.
- `prefers-color-scheme`: Light mode with adjusted overlay opacity.
- `prefers-contrast: high`: High-contrast overlay, white CTA on black.
- `forced-colors: active`: Static background, system-colored CTA button.
- `:focus-visible`: Outline on CTA button.
- Print styles: Static hero, `cover` background, full content visibility.
