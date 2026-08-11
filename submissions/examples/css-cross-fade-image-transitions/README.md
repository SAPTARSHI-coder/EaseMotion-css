# CSS `cross-fade()` — Image Blend Transitions

A showcase of the native CSS `cross-fade()` function for blending
two or more images (and gradients) in a single `background-image`
declaration. No canvas, no CSS masks, no JavaScript for the
blending itself — just declarative percentage-weighted image
mixing.

## What `cross-fade()` does

`cross-fade()` accepts a list of images with optional percentage
weights and blends them together pixel-by-pixel:

```css
background-image: cross-fade(
  url('image-a.jpg') 70%,   /* image-a at 70% opacity */
  url('image-b.jpg')         /* image-b fills the rest (30%) */
);
```

When combined with a registered `@property` and `transition`, the
blend percentage can be animated smoothly — a pure-CSS dissolve
effect that previously required JavaScript or hard CSS masks.

## Demo sections

| Section | What it shows |
|---------|--------------|
| **Interactive Blend Slider** | Drag a range input to adjust blend between two images in real time |
| **50/50 Cross-Fades** | Static equal-weight blends — both images visible equally |
| **Weighted Blends** | 90/10, 75/25, 25/75, 10/90 ratios — image dominance control |
| **Image × Color Overlays** | Blend images with gradients for tinting without pseudo-elements |
| **Hover Transitions** | Animated dissolve between two images on hover via `@property` |
| **Three-Image Compositions** | Nested `cross-fade()` calls blending three images in one declaration |
| **Gradient Overlays** | Hero-section overlay patterns — no extra `::after` needed |

## Browser support

`cross-fade()` ships in:

- Chrome 121+
- Firefox 113+
- Safari 17+
- Edge 121+

A `@supports not (cross-fade(...))` block serves plain `url()`
fallbacks so the gallery works in every browser.

## How the interactive slider works

The slider's `<input type="range">` writes a CSS custom property
(`--xf-slider`) via JavaScript, which the `cross-fade()` declaration
reads. The blending math is entirely in CSS:

```css
background-image: cross-fade(
  url('a.jpg') var(--xf-slider),
  url('b.jpg')
);
```

With `@property` declaring the syntax, the browser can interpolate
the percentage smoothly.

## Why it fits EaseMotion CSS

- **Pure CSS** — the image blending uses zero JavaScript; the
  slider script is only a demo control.
- **Modern CSS** — `cross-fade()` is a CSS Images Level 4 function
  with growing browser support.
- **Progressive enhancement** — `@supports` fallback ensures
  everyone gets an image.
- **Production-ready** — semantic HTML, accessible markup, full
  theme and contrast support.

## Accessibility

- `role="img"` and `aria-label` on every background-image element.
- Range slider has proper `<label>` and live `<output>`.
- `@media (prefers-color-scheme: dark)` full dark theme.
- `@media (prefers-contrast: high)` strengthened borders.
- `@media (forced-colors: active)` system color overrides.
- `@media print` stripped decorative styles with break-inside protection.

## Files

- `demo.html` — six demo sections + interactive slider.
- `style.css` — all cross-fade() declarations, themes, accessibility.
- `README.md` — this file.
