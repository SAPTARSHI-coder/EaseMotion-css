# Glassmorphism Hover Effects CI Benchmark

A responsive Glassmorphism hover-effect benchmark created for issue #82059.

## Overview

This example provides a repeatable browser rendering workload that can be
used to evaluate Glassmorphism hover effects in a Headless Chrome/Puppeteer
environment.

The benchmark reports:

- Frames per second (FPS)
- CSS bundle size in bytes
- Execution time in milliseconds
- Performance budget status

## Performance Budgets

| Metric | Budget |
| --- | ---: |
| Minimum FPS | 50 FPS |
| Maximum CSS bundle size | 50 KB |
| Maximum execution time | 2000 ms |

The benchmark passes only when all configured budgets are satisfied.

## Files

- `demo.html` — Interactive Glassmorphism benchmark and rendering workload.
- `style.css` — Responsive Glassmorphism styling and hover effects.
- `README.md` — Usage and benchmark documentation.

## Usage

Open `demo.html` in a modern browser.

Hover over the cards to preview the Glassmorphism interaction.

Click **Run Benchmark** to execute the rendering test.

The result displays:

1. Measured FPS
2. CSS bundle size
3. Execution time
4. PASS or FAIL status

The browser console also receives a structured metrics report.

## Headless Chrome / Puppeteer

The same page can be loaded by a Headless Chrome Puppeteer test.

Example setup:

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