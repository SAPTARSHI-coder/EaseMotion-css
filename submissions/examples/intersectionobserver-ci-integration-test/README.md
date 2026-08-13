# DOM IntersectionObserver CI Integration Test

## Overview

This submission demonstrates a browser-based CI-style performance validation for reveal animations powered by the IntersectionObserver API.

## Metrics Collected

- Frames Per Second (FPS)
- Execution Time
- Bundle Size
- Number of Observed Elements

## Performance Budget

| Metric | Target |
|---------|--------|
| FPS | ≥ 55 |
| Execution Time | ≤ 3500 ms |
| Bundle Size | ≤ 25 KB |

A PASS is reported when every threshold is satisfied.

## Files

- demo.html
- style.css
- ci-test.js
- perf-budget.json

## Usage

Open `demo.html` in a browser.

Click **Run CI Benchmark** to execute the benchmark and display the generated performance report.

This submission is packaged under `submissions/examples/` to comply with the repository contribution policy while demonstrating a reusable CI-style benchmark concept.