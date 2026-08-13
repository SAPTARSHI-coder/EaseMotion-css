# DOM IntersectionObserver Performance Benchmark

## Purpose

Measures the baseline performance of reveal animations using the IntersectionObserver API.

## Metrics

- FPS
- Execution Time (ms)
- Bundle Size (bytes)

## Performance Budget

| Metric | Threshold |
|---------|-----------|
| FPS | ≥ 55 |
| Execution Time | ≤ 16 ms |
| Bundle Size | ≤ 50 KB |

## Run

```bash
node benchmarks/intersectionobserver-benchmark.js
```

If any threshold is exceeded, the script exits with an error so CI fails automatically.