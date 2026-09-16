# SVG Drop-Shadow Filter GPU Compute Benchmark

A responsive SVG rendering benchmark created for issue #82100.

## Overview

This example provides a controlled SVG workload using the
`feDropShadow` filter.

The benchmark measures:

- Frames per second (FPS)
- CSS bundle size in bytes
- Execution time in milliseconds
- Performance budget status

The SVG workload contains multiple vector objects using the same
drop-shadow filter to create a repeatable rendering scenario.

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
- `README.md` — Benchmark documentation.

## SVG Drop Shadow

The workload uses an SVG filter:

```html
<filter id="dropShadow">
  <feDropShadow
    dx="0"
    dy="12"
    stdDeviation="12"
    flood-opacity="0.5"
  />
</filter>