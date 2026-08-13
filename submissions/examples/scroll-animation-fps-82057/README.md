# Headless Chrome Puppeteer FPS Rendering Benchmark for Scroll Animations

A responsive scroll-animation rendering benchmark created for issue #82057.

## Overview

This example provides a controlled scrolling workload for measuring
rendering performance in Headless Chrome.

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

- `demo.html` — Interactive scroll-animation FPS benchmark.
- `style.css` — Responsive scroll-animation styling.
- `README.md` — Benchmark and CI documentation.

## Rendering Workload

The demo contains a scrollable collection of cards.

During the benchmark:

1. The scroll container is moved through its complete scroll range.
2. `requestAnimationFrame()` drives the workload.
3. Frame callbacks are counted.
4. Card transforms and opacity are updated.
5. Execution time is measured.
6. CSS bundle size is measured.
7. Results are compared against the performance budget.

## Usage

Open `demo.html` in a modern browser.

Click **Run Scroll Benchmark**.

Detailed metrics are also printed to the browser console.

## Headless Chrome / Puppeteer

The fixture can be loaded using Puppeteer:

```js
const browser = await puppeteer.launch({
  headless: true
});

const page = await browser.newPage();

await page.setViewport({
  width: 1280,
  height: 900,
  deviceScaleFactor: 1
});

await page.goto("file:///path/to/demo.html", {
  waitUntil: "load"
});