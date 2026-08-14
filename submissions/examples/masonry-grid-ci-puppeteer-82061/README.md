# Masonry Grid CI Puppeteer FPS Benchmark

A responsive Masonry Grid performance benchmark created for issue #82061.

## Purpose

This example demonstrates a reproducible performance validation workflow
for a Masonry Grid rendering workload.

The benchmark reports:

- FPS
- CSS bundle size in bytes
- Execution time in milliseconds
- Performance budget status

## Performance Budgets

| Metric | Threshold |
|---|---:|
| Minimum FPS | 50 FPS |
| Maximum CSS bundle size | 50 KB |
| Maximum execution time | 2000 ms |

A benchmark run passes only when all three thresholds are satisfied.

## Files

- `demo.html` — Interactive benchmark and Masonry Grid workload.
- `style.css` — Original responsive Masonry Grid styles.
- `README.md` — Benchmark documentation and CI validation details.

## Usage

Open `demo.html` in a modern browser.

Click:

**Run CI Benchmark**

The benchmark performs a one-second rendering workload and measures
the number of rendered animation frames.

It also measures the size of `style.css` and total benchmark execution time.

## Reported Metrics

The browser console receives a report containing:

```text
FPS
bundleSizeBytes
executionMs
minFps
maxBundleBytes
maxExecutionMs
passed