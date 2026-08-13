# CSS Will-Change GPU Memory Overhead Benchmark

A responsive performance benchmark created for issue #82097.

## Overview

This example provides a controlled rendering workload for evaluating
the performance impact of CSS `will-change` during animated transforms.

The demo compares:

- Normal transform rendering
- Rendering with `will-change: transform`

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

- `demo.html` — Interactive rendering benchmark.
- `style.css` — Original responsive benchmark styling.
- `README.md` — Benchmark documentation.

## Usage

Open `demo.html` in a modern browser.

The page contains two rendering workloads:

1. Normal rendering without explicit `will-change`.
2. Rendering using `will-change: transform`.

Click **Run GPU Benchmark** to execute the animation workload.

The benchmark displays:

- Measured FPS
- CSS bundle size
- Execution time
- PASS or FAIL status

A detailed metrics table is also written to the browser console.

## Will-Change Consideration

`will-change` can allow the browser to prepare an element for changes,
but excessive use may result in unnecessary layer promotion and increased
resource usage.

For this reason, `will-change` should be applied selectively to elements
that are expected to change.

## Headless Chrome / Puppeteer

The page can be loaded by a Headless Chrome Puppeteer runner:

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