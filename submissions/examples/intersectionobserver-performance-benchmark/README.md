# DOM IntersectionObserver Performance Benchmark

## Overview

This submission provides a browser-based benchmark for evaluating the
performance of reveal animations powered by the IntersectionObserver API.

## Features

- Generates 300 reveal elements
- Uses IntersectionObserver for animation triggering
- Measures:
  - Approximate FPS
  - Execution time
  - Bundle size
- Includes configurable performance budget thresholds

## Files

- benchmark.html
- benchmark.js
- perf-budget.json

## Usage

Open `benchmark.html` in any modern browser.

Click **Run Benchmark** to generate the performance report.

## Metrics

- FPS
- Execution Time (ms)
- Bundle Size (bytes)
- Number of Observed Elements

## Performance Budget

| Metric | Target |
|---------|---------|
| FPS | ≥55 |
| Execution Time | ≤3500 ms |
| Bundle Size | ≤25 KB |

This benchmark is packaged under `submissions/examples/` to comply with the repository contribution policy while demonstrating a reusable performance benchmarking approach.