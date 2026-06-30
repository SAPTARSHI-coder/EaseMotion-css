# Animation Performance Benchmark Script

A Node.js script that uses Puppeteer (headless Chrome) to measure the frame rate and jank of EaseMotion CSS animation classes. Useful for detecting performance regressions.

## Files

- `benchmark.js` – the Puppeteer benchmark script
- `demo.html` – explains how to run the benchmark
- `style.css` – demo page styling
- `README.md` – this file

## How it works

1. Launches headless Chrome via Puppeteer.
2. Opens the EaseMotion demo page (or any page using the framework).
3. For each animation class, creates a small element, applies the class, and records frame timing for 3 seconds.
4. Calculates average FPS and jank (frames taking longer than 33ms).
5. Prints a table with results.

## Usage

```bash
npm install puppeteer
node benchmark.js
```
