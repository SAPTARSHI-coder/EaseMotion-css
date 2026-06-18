# CSS dynamic-range HDR

## Overview
This example demonstrates the CSS @media (dynamic-range: high) media query for detecting and styling content on High Dynamic Range (HDR) displays. It also covers color-gamut queries for wider color spaces like Display P3.

## Features
- **dynamic-range** — detects if the output device supports high dynamic range (combined high contrast, deep black, and wide color gamut)
- **color-gamut** — detects the approximate range of colors supported (srgb, p3, rec2020)
- **oklch() / oklab()** — perceptually uniform color spaces that shine on HDR displays
- **Progressive enhancement** — SDR fallback with HDR-enhanced colors for capable displays

## How to Use
1. Use @media (dynamic-range: high) to serve enhanced colors to HDR displays
2. Pair with @media (color-gamut: p3) for even wider color coverage
3. Use oklch() colors which map better to HDR luminance ranges than sRGB

## Browser Support
- Chrome 98+
- Edge 98+
- Safari 15.4+
- Firefox 100+
