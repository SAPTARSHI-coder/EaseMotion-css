# Puppeteer Scroll Animation FPS Benchmark

Automated performance benchmarking tool using Headless Chrome via Puppeteer to evaluate frame rates (FPS), bundle sizes, and scroll execution time against defined performance budgets.

## Features

- **FPS Tracking:** Captures layout frames during smooth scroll via `requestAnimationFrame`.
- **Resource Profiling:** Calculates page transfer/bundle size in bytes.
- **Budget Threshold Checks:** Automatically exits with code `1` in CI if limits are breached.

## Performance Budgets

| Metric | Threshold Limit |
| :--- | :--- |
| **Minimum FPS** | $\ge 50.0$ FPS |
| **Bundle Size** | $\le 500$ KB ($512,000$ bytes) |
| **Scroll Execution Time** | $\le 5000$ ms |

## Usage

### 1. Install Dependencies
```bash
npm install puppeteer
