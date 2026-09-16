# Masonry Grid Puppeteer FPS Rendering Benchmark

A responsive Masonry Grid example created for issue #82060.

## Purpose

This example provides a repeatable visual workload for measuring Masonry Grid rendering performance.

The demo measures:

- Frames per second (FPS)
- Benchmark execution time
- Number of rendered cards

## Performance Budget

The target budget is:

| Metric | Target |
|---|---:|
| Minimum FPS | 50 |
| Maximum execution time | 2000 ms |
| Grid items | 40 |

A result below 50 FPS is considered a performance-budget failure.

## Files

- `demo.html` — Responsive Masonry Grid and browser benchmark.
- `style.css` — Original responsive Masonry Grid styling.
- `README.md` — Usage and benchmark documentation.

## Usage

Open `demo.html` in a modern browser.

Click **Run FPS Benchmark** to start the rendering test.

The result displays:

- Measured FPS
- Execution time
- Budget status

## Headless Chrome / Puppeteer

The page can also be loaded by a Puppeteer-based benchmark runner.

The benchmark workload should use a fixed viewport and repeatedly render the Masonry Grid so that results can be compared consistently between runs.

Example Puppeteer setup:

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