# CSS Grid vs Flexbox Layout Benchmark for Cards

A responsive layout performance benchmark created for issue #82103.

## Overview

This example compares two card-layout implementations:

- CSS Grid
- Flexbox with wrapping

Both layouts contain the same number of cards and are subjected to the
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
- `style.css` — Responsive card layouts and benchmark styling.
- `README.md` — Benchmark and CI documentation.

## Usage

Open `demo.html` in a modern browser.

The page displays two equivalent card collections:

1. CSS Grid
2. Flexbox

Click **Run Layout Benchmark** to run the rendering workload.

The benchmark measures animation frames while both layouts are rendered.

Detailed metrics are printed to the browser console.

## Grid Implementation

The Grid layout uses:

```css
.grid-layout {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}