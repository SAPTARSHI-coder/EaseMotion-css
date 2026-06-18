# CSS dynamic-range HDR Media Query

## What does this do?

Demonstrates the `@media (dynamic-range: high)` feature, which detects displays capable of High Dynamic Range (HDR). When HDR is available, the demo uses `oklch()` colors in the wide-gamut P3 color space for vibrant, glowing UI cards. Graceful fallbacks using `srgb` ensure SDR displays still look good.

## Key Features

- `@media (dynamic-range: high)` targets HDR-capable screens
- `color-gamut: p3` combined with `dynamic-range: high` for wide color
- `oklch()` color function for perceptually-uniform, wide-gamut colors
- `@supports (color: oklch())` for progressive enhancement
- Smooth SDR fallbacks via `background-color` before `oklch()` declarations

## Preview

Open `demo.html` in a browser on an HDR-capable display to see the full effect.
