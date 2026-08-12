# CSS-only Latency Distribution Bars

## What does this do?

This example visualizes API response-time percentiles with animated horizontal bars.

## How is it used?

Set a `--value` custom property on each row to control the bar width:

```html
<div class="latency-row" style="--value: 72%">
  <span class="bucket">p95</span>
  <div class="latency-track"><span class="latency-fill"></span></div>
  <strong>184ms</strong>
</div>
```

## Why is it useful?

Latency percentiles are common in API dashboards and monitoring tools. This pattern makes dense performance numbers easier to scan with restrained, meaningful motion.

## Features

- p50, p75, p95, and p99 rows
- Threshold color states
- Staggered bar animation
- Responsive mobile layout
- `prefers-reduced-motion` support

## Tech Stack

- HTML
- CSS

## Preview

Open `demo.html` directly in a browser to view the example.

## Contribution Notes

- Proposed for issue #11124
- All files are scoped to this submission folder
- No framework source files are modified
