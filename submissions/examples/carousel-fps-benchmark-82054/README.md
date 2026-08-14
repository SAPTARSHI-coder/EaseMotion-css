# Headless Chrome Puppeteer FPS Rendering Benchmark for Carousels

A responsive carousel rendering benchmark created for issue #82054.

## Overview

This example provides a controlled carousel animation workload for
measuring rendering performance in Headless Chrome.

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

- `demo.html` — Interactive carousel and FPS benchmark.
- `style.css` — Responsive carousel styling.
- `README.md` — Benchmark and CI documentation.

## Rendering Workload

The carousel uses multiple slides and GPU-friendly CSS transforms.

During the benchmark, `requestAnimationFrame()` updates the carousel
position for a fixed one-second interval while frame callbacks are
counted.

## Usage

Open `demo.html` in a modern browser.

Click **Run Benchmark**.

The benchmark:

1. Starts a one-second rendering workload.
2. Animates the carousel using `translate3d()`.
3. Counts animation frames.
4. Measures execution time.
5. Measures the CSS bundle size.
6. Compares the results against the performance budget.
7. Reports PASS or FAIL.

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