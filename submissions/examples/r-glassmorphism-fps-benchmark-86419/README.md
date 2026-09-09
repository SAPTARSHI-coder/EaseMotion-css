# Glassmorphism FPS Benchmark

A lightweight Headless Chrome Puppeteer benchmark for measuring the rendering performance of animated Glassmorphism effects.

## Features

* Headless Chrome FPS measurement
* Puppeteer-based benchmark
* `requestAnimationFrame()` frame-rate measurement
* Execution-time measurement
* Bundle-size measurement
* Configurable performance budgets
* CI-compatible exit status
* Pure HTML and CSS benchmark workload
* No changes outside the `submissions/` directory

## Files

```text
r-glassmorphism-fps-benchmark-86419/
├── demo.html
├── style.css
├── test.js
└── README.md
```

## Benchmark Workload

The demo contains multiple animated Glassmorphism cards using:

* `backdrop-filter: blur()`
* `-webkit-backdrop-filter`
* Semi-transparent surfaces
* Animated CSS transforms
* Gradient background orbs
* Multiple simultaneous animations

This creates a consistent rendering workload for FPS measurement.

## Running the Benchmark

The test uses Puppeteer.

Install Puppeteer in the submission directory:

```bash
npm install puppeteer
```

Run the benchmark:

```bash
node test.js
```

The benchmark launches Headless Chrome, opens `demo.html`, measures rendering performance, and validates the configured budgets.

## Default Performance Budgets

| Metric                 |    Threshold |
| ---------------------- | -----------: |
| Minimum FPS            |           45 |
| Maximum execution time |    10,000 ms |
| Maximum bundle size    | 50,000 bytes |

The test exits with status code `1` when a performance budget is exceeded.

This makes the test suitable for CI integration without requiring a workflow file inside the contribution.

## Custom Budgets

Performance thresholds can be customized with environment variables.

Example:

```bash
MIN_FPS=50 MAX_EXECUTION_MS=12000 MAX_BUNDLE_BYTES=60000 node test.js
```

The benchmark duration can also be changed:

```bash
TEST_DURATION_MS=10000 node test.js
```

## FPS Calculation

The benchmark records consecutive `requestAnimationFrame()` timestamps.

Average FPS is calculated using:

```text
FPS = 1000 / average frame time in milliseconds
```

A lower average frame time results in a higher FPS.

## CI Integration

The benchmark is designed to be executed by CI systems using:

```bash
cd submissions/examples/r-glassmorphism-fps-benchmark-86419
npm install puppeteer
node test.js
```

The process exits successfully when all budgets pass.

If a threshold is breached, the process exits with status code `1`, allowing CI to mark the performance check as failed.

## Accessibility

The demo includes `prefers-reduced-motion` support so animations can be disabled for users who prefer reduced motion.

## Related Issue

EaseMotion CSS issue #86419 — Headless Chrome Puppeteer FPS Benchmark for Glassmorphism Effects.
