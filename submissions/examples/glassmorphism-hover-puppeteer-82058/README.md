# Glassmorphism Hover Effects Puppeteer FPS Benchmark

A responsive Glassmorphism hover-effect rendering benchmark created for
issue #82058.

## Overview

This example provides a repeatable browser workload for measuring the
rendering performance of Glassmorphism hover effects.

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

The benchmark passes only when all three thresholds are satisfied.

## Files

- `demo.html` — Interactive Glassmorphism benchmark.
- `style.css` — Responsive Glassmorphism hover-effect styles.
- `README.md` — Benchmark documentation.

## Usage

Open `demo.html` in a modern browser.

Hover over the cards to preview the Glassmorphism effect.

Click **Run Benchmark** to execute the rendering workload.

The benchmark displays:

1. Measured FPS
2. CSS bundle size
3. Execution time
4. PASS or FAIL status

A metrics table is also printed to the browser console.

## Headless Chrome / Puppeteer

The page is designed to be loaded by a Headless Chrome Puppeteer runner.

Example:

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