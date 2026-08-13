# Subgrid & Container Query Browser Layout Repaint Benchmark

A responsive browser layout performance benchmark created for issue
#82092.

## Overview

This example provides a controlled workload using modern CSS layout
features:

- CSS Subgrid
- CSS Container Queries
- Responsive Grid
- Animated layout workload

The benchmark reports:

- FPS
- CSS bundle size in bytes
- Execution time in milliseconds
- Performance budget status

## Performance Budget

| Metric | Threshold |
| --- | ---: |
| Minimum FPS | 50 FPS |
| Maximum CSS bundle size | 50 KB |
| Maximum execution time | 2000 ms |

The benchmark passes only when all configured thresholds are satisfied.

## Files

- `demo.html` — Interactive layout repaint benchmark.
- `style.css` — Subgrid, Container Query, and responsive styling.
- `README.md` — Benchmark documentation.

## Subgrid Workload

The cards use CSS Subgrid:

```css
.product-card {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 2;
}