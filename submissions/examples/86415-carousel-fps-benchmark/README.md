# Carousel FPS Benchmark

A lightweight example demonstrating a **Headless Chrome Puppeteer FPS Benchmark for Carousels**. This submission showcases a continuously animated carousel along with a sample benchmark script and configurable performance budget.

## Features

- 🎠 Infinite CSS carousel animation
- ⚡ Performance benchmark simulation
- 📊 FPS metrics reporting
- ⏱ Execution time measurement
- 📦 Bundle size budget configuration
- ♿ Responsive and accessible design
- 🚫 No external dependencies required for the demo

---

## Files

```
submissions/examples/86415-carousel-fps-benchmark/
├── demo.html
├── style.css
├── benchmark.js
├── performance-budget.json
└── README.md
```

---

## Performance Budget

| Metric | Target | Maximum / Minimum |
|--------|--------|-------------------|
| FPS | 60 FPS | ≥ 55 FPS |
| Execution Time | 50 ms | ≤ 100 ms |
| Bundle Size | 100 KB | ≤ 150 KB |

---

## Running the Demo

1. Open `demo.html` in a modern web browser.
2. Open the browser's **Developer Console**.
3. Refresh the page.
4. View the simulated benchmark report printed to the console.

---

## Benchmark Output

The benchmark reports:

- Average FPS
- Execution Time (ms)
- Bundle Size (bytes)
- Pass/Fail result based on configured performance budgets

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

## Browser Support

- ✅ Google Chrome
- ✅ Microsoft Edge
- ✅ Mozilla Firefox
- ✅ Safari (latest)

---

## Notes

This is a demonstration example intended for the `submissions/examples/` directory. It simulates the output of a Puppeteer-based FPS benchmark while remaining completely self-contained and easy to preview without additional tooling.