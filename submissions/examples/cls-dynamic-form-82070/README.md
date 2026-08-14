# Layout Shift (CLS) Audit for Dynamic Form Components

A responsive Core Web Vitals benchmark created for issue #82070.

## Overview

This example provides a controlled dynamic-form workload for measuring
Cumulative Layout Shift (CLS).

The demo includes:

- Dynamic form fields
- Layout Shift API measurement
- FPS measurement
- CSS bundle-size measurement
- Execution-time measurement
- Performance budget validation

## Performance Budget

| Metric | Threshold |
| --- | ---: |
| Maximum CLS | 0.10 |
| Minimum FPS | 50 FPS |
| Maximum CSS bundle size | 50 KB |
| Maximum execution time | 2000 ms |

The audit passes only when all configured thresholds are satisfied.

## Files

- `demo.html` — Interactive dynamic form and CLS audit.
- `style.css` — Responsive form and layout styling.
- `README.md` — Benchmark and CI documentation.

## CLS Measurement

The benchmark uses the browser PerformanceObserver API:

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (!entry.hadRecentInput) {
      clsValue += entry.value;
    }
  }
});

observer.observe({
  type: "layout-shift",
  buffered: true
});