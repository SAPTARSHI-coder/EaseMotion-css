# Gzip vs Brotli Compression Efficiency Benchmark

CI integration benchmark test for EaseMotion CSS minified bundle, fully addressing performance issue `#82121`.

## 🚀 Overview
- **Runner Script:** `submissions/examples/gzip-brotli-compression-benchmark/benchmark.js`
- **Performance Budget:** Defined in `config.json`
- **Metrics Tracked:** Execution milliseconds, bundle size bytes, and frame rate FPS.

## 🛠️ Execution
```bash
node submissions/examples/gzip-brotli-compression-benchmark/benchmark.js
