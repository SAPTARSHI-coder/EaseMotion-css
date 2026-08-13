# Font Display Swap Render Blocking Audit

A responsive font-loading performance benchmark created for issue #82098.

## Overview

This example demonstrates a controlled audit for font rendering using
`font-display: swap`.

The benchmark reports:

- FPS
- CSS bundle size in bytes
- Execution time in milliseconds
- DOM-ready timing
- Font-ready timing
- Font swap timing
- Performance budget status

## Performance Budget

| Metric | Threshold |
| --- | ---: |
| Minimum FPS | 50 FPS |
| Maximum CSS bundle size | 50 KB |
| Maximum execution time | 2000 ms |
| Maximum font swap timing | 1500 ms |

## Files

- `demo.html` — Interactive font-rendering audit.
- `style.css` — Responsive styles and font-display configuration.
- `README.md` — Benchmark documentation.

## Font Display Swap

The example uses:

```css
@font-face {
  font-family: "Audit Sans";
  src: local("Arial");
  font-display: swap;
}