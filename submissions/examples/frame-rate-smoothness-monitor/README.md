# Animation Frame Rate (60 FPS vs 120 FPS) Smoothness Monitor

## Overview

This submission demonstrates a browser-based animation performance monitor that evaluates frame-rate smoothness using `requestAnimationFrame`.

## Metrics

- Average FPS
- Execution Time
- Bundle Size
- 60 FPS target validation
- 120 FPS target validation

## Files

- demo.html
- style.css
- benchmark.js
- perf-budget.json

## Usage

1. Open `demo.html`.
2. Click **Run Benchmark**.
3. View the generated performance report.

## Performance Budget

| Metric | Target |
|--------|--------|
| 60 FPS | ≥58 FPS |
| 120 FPS | ≥115 FPS |
| Execution Time | ≤5000 ms |
| Bundle Size | ≤25 KB |

This benchmark is packaged inside `submissions/examples/` to comply with the repository contribution guidelines while providing a reusable benchmark proposal for future CI integration.