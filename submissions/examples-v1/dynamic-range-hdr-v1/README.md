# CSS Dynamic Range HDR Demo

## Overview

Demonstrates using `@media (dynamic-range: high)` to detect HDR-capable displays and serve enhanced wide-gamut colors via `oklch()` and `color(display-p3)`, with graceful SDR fallbacks.

## Features

- **`@media (dynamic-range: high)`** — detects HDR displays for enhanced color output
- **`color-gamut: p3`** — detects P3 color space support alongside HDR
- **`oklch()` colors** — perceptually uniform wide-gamut color space
- **`color(display-p3)`** — Display P3 for in-gamut HDR colors
- **Graceful degradation** — SDR displays receive sRGB-safe fallback colors outside the media query

## How to Use

1. Define base colors in `oklch()` targeting all displays
2. Wrap enhanced versions inside `@media (dynamic-range: high)` for HDR
3. Use `@supports (color: color(display-p3 1 0 0))` for P3 support detection
4. Add subtle glow effects inside the HDR query for added luminance depth
