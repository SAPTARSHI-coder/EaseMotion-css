# Performance CI Benchmark: Headless Chrome Puppeteer FPS for Modals (#86413)

Comprehensive CI validation benchmark suite for evaluating modal animation smoothness (FPS), bundle asset sizing, and execution speed.

## 🚀 Overview & Metrics

- **FPS Target:** $\ge 55$ FPS during modal open/close animation.
- **Bundle Size Limit:** $\le 500,000$ bytes (500 KB).
- **Execution Budget:** $\le 3,000$ ms.

## 🛠️ Usage & CI Execution

Run the benchmark script locally:
```bash
node benchmark.js
