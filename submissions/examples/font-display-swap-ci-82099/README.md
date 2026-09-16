# Font Display Swap Render Blocking CI Audit

A responsive CI performance benchmark created for issue #82099.

## Overview

This example provides a controlled browser workload for auditing
`font-display: swap`.

The benchmark reports:

- Frames per second (FPS)
- CSS bundle size in bytes
- Execution time in milliseconds
- DOM-ready timing
- Font-ready timing
- Font delay
- Performance budget status

## Performance Budget

| Metric | Threshold |
| --- | ---: |
| Minimum FPS | 50 FPS |
| Maximum CSS bundle size | 50 KB |
| Maximum execution time | 2000 ms |
| Maximum font delay | 1500 ms |

The benchmark passes only when all configured thresholds are satisfied.

## Files

- `demo.html` — Interactive font rendering audit.
- `style.css` — Responsive benchmark styling and font-display configuration.
- `README.md` — CI benchmark documentation.

## Font Display Swap

The example includes:

```css
@font-face {
  font-family: "Audit Fallback";
  src: local("Arial");
  font-display: swap;
}