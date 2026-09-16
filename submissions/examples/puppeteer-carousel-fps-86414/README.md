# Headless Chrome Puppeteer FPS Benchmark for Carousels

A performance benchmark example demonstrating **Headless Chrome Puppeteer FPS Benchmarks for Carousels**. This submission showcases a continuously animated carousel along with a benchmark script and configurable performance budget thresholds.

## Features

- 🎠 Infinite CSS keyframe carousel animation
- ⚡ Performance benchmark metrics generation
- 📊 Frame Rate (FPS) monitoring
- ⏱ Execution time tracking (ms)
- 📦 Bundle size threshold verification
- ♿ Responsive and accessible design
- 🚫 Zero external runtime dependencies

---

## Files

```
submissions/examples/puppeteer-carousel-fps-86414/
├── demo.html
├── style.css
├── benchmark.js
├── performance-budget.json
└── README.md
```

---

## Performance Budget

| Metric         | Target | Maximum / Minimum |
| -------------- | ------ | ----------------- |
| FPS            | 60 FPS | ≥ 55 FPS          |
| Execution Time | 50 ms  | ≤ 100 ms          |
| Bundle Size    | 100 KB | ≤ 150 KB          |

---

## Running the Demo

1. Open `demo.html` in a modern web browser.
2. Open Developer Tools / Console.
3. Observe the benchmark report metrics printed to the console.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
