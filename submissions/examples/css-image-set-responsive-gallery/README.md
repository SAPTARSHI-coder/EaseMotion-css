# CSS `image-set()` — Responsive Image Gallery

A responsive image gallery built entirely with the native CSS
`image-set()` function. No `<picture>`, no `<img srcset>`, no
JavaScript — just CSS making resolution-aware and format-aware
decisions for background images.

## What `image-set()` does

`image-set()` lets you provide multiple candidate URLs in a single
CSS `background-image` declaration. The browser picks the best
match based on:

- **Device pixel ratio (DPR)** — `1x`, `2x`, `3x`, `4x` resolution
  hints ensure sharp images on high-DPI screens without wasting
  bandwidth on standard displays.

- **Image format** — the `type()` function tells the browser about
  available formats (AVIF, WebP, JPEG, etc.). Browsers that understand
  modern formats get smaller files; everyone else falls back
  gracefully.

## Demo sections

| Section | What it shows |
|---------|--------------|
| **Progressive Resolution Hero** | A banner image with `1x` through `4x` resolution candidates |
| **Resolution Switching** | Four cards, each with `1x`/`2x`/`3x` variants |
| **Format Switching** | Four cards demonstrating format-aware image delivery |
| **Combined Resolution + Format** | Two "hero" cards that negotiate both resolution and format simultaneously |

## Browser support

`image-set()` is supported in all modern browsers:

- Chrome 113+
- Firefox 113+
- Safari 17+
- Edge 113+

A `@supports` fallback serves a regular `url()` for any browser
that hasn't adopted it yet, so the gallery works everywhere.

## How it works

```css
/* Resolution switching */
.my-image {
  background-image: image-set(
    url('photo-1x.jpg') 1x,
    url('photo-2x.jpg') 2x,
    url('photo-3x.jpg') 3x
  );
}

/* Format switching */
.my-image {
  background-image: image-set(
    url('photo.avif') type('image/avif') 1x,
    url('photo.webp') type('image/webp') 1x,
    url('photo.jpg')   1x  /* implicit JPEG fallback */
  );
}
```

## Why it fits EaseMotion CSS

- **Pure CSS** — zero JavaScript, zero dependencies, no build step.
- **Modern CSS API** — demonstrates a genuinely new CSS function
  (shipped 2023–2024 across major browsers) that many developers
  haven't adopted yet.
- **Performance-oriented** — saves bandwidth on both resolution
  (no 3x images on 1x screens) and format (WebP/AVIF where supported).
- **Progressive enhancement** — `@supports` fallback ensures every
  browser gets an image; modern ones just get a better one.
- **Production-ready** — semantic HTML, keyboard accessible,
  responsive grid layout, and all EaseMotion accessibility standards.

## Accessibility

- `role="img"` and `aria-label` on each background-image element
  for assistive technology.
- `:focus-within` on cards mirrors the hover lift for keyboard
  navigation.
- `@media (prefers-reduced-motion: reduce)` disables card animations.
- `@media (prefers-color-scheme: dark)` provides a full dark theme
  with appropriate contrast ratios.
- `@media (prefers-contrast: high)` strengthens borders and
  removes shadows.
- `@media (forced-colors: active)` respects system color overrides.
- `@media print` strips decorative styles and adds page-break
  protection.

## Files

- `demo.html` — gallery page with all four demo sections.
- `style.css` — all image-set() declarations, card layout, themes,
  and accessibility overrides.
- `README.md` — this file.
