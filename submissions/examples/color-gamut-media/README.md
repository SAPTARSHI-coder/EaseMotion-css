# @media (color-gamut) — Wide Gamut Display Detection

## Overview

Demonstrates CSS `@media (color-gamut: srgb / p3 / rec2020)` media queries for serving wide-gamut colors. Features a grid of sRGB and Display P3 color swatches, a live gamut detector that shows your display's color capability, and a CSS code example for progressive enhancement. Uses `color(display-p3 …)` and `color(rec2020 …)` with sRGB fallbacks.

## Usage

Open `demo.html` on different displays to compare. The header badge detects your gamut automatically using `matchMedia`. P3 swatches will appear distinctly more vibrant on wide-gamut displays. On sRGB-only displays, they may look identical or clipped. The code block shows the recommended progressive enhancement pattern.

## Browser Support

`@media (color-gamut)` is supported in Chrome 89+, Safari 14.1+, and Firefox 89+. The `color()` function for P3 colors is supported in Safari 15.4+ and Chrome 111+. Firefox supports `color-gamut` media query but displays P3 colors correctly only in nightly builds. Browsers without `color()` support gracefully fall back to sRGB hex fallbacks when `@supports` is used.
