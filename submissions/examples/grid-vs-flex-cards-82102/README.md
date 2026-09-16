# CSS Grid vs Flexbox Layout Benchmark for Cards

A responsive layout performance benchmark created for issue #82102.

## Overview

This example provides a controlled comparison between CSS Grid and
Flexbox for a repeated card layout.

Both implementations contain the same number of cards and receive the
same animation workload.

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

- `demo.html` — Interactive Grid vs Flexbox benchmark.
- `style.css` — Responsive layout and benchmark styling.
- `README.md` — Benchmark documentation.

## Grid Layout

The Grid implementation uses:

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}