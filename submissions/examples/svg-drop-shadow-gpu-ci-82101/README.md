# SVG Drop-Shadow Filter GPU Compute CI Benchmark

A responsive CI performance benchmark created for issue #82101.

## Overview

This example provides a controlled SVG rendering workload using the
`feDropShadow` filter.

The benchmark measures:

- Frames per second (FPS)
- CSS bundle size in bytes
- Execution time in milliseconds
- Performance budget status

The same workload can be opened in a browser or loaded by Headless Chrome
through Puppeteer.

## Performance Budget

| Metric | Threshold |
| --- | ---: |
| Minimum FPS | 50 FPS |
| Maximum CSS bundle size | 50 KB |
| Maximum execution time | 2000 ms |

The benchmark passes only when all configured thresholds are satisfied.

## Files

- `demo.html` — Interactive SVG filter benchmark.
- `style.css` — Responsive benchmark styling.
- `README.md` — CI benchmark documentation.

## SVG Workload

The demo uses multiple SVG elements with:

```html
<feDropShadow
  dx="0"
  dy="12"
  stdDeviation="12"
  flood-opacity="0.55"
/>