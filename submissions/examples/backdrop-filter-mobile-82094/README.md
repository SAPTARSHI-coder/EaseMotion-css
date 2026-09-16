# Backdrop-Filter Render Cost Benchmark on Low-End Mobile Devices

A responsive rendering benchmark created for issue #82094.

## Overview

This example provides a controlled workload for evaluating the rendering
cost of CSS `backdrop-filter` effects on mobile-oriented viewports.

The demo contains a glass surface positioned above moving visual content.
The benchmark measures:

- FPS
- CSS bundle size in bytes
- Execution time in milliseconds
- Performance budget status

## Performance Budget

| Metric | Threshold |
| --- | ---: |
| Minimum FPS | 45 FPS |
| Maximum CSS bundle size | 50 KB |
| Maximum execution time | 2000 ms |

The lower FPS threshold is intended for a mobile-oriented rendering
workload.

## Files

- `demo.html` — Interactive backdrop-filter benchmark.
- `style.css` — Responsive glassmorphism workload and styling.
- `README.md` — Benchmark documentation.

## Backdrop Filter

The primary workload uses:

```css
.glass-card {
  backdrop-filter:
    blur(18px)
    saturate(135%);

  -webkit-backdrop-filter:
    blur(18px)
    saturate(135%);
}