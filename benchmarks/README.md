# Benchmarks

Performance benchmarks for EaseMotion CSS, measured against comparable animation libraries.

## Running Locally

```bash
# Bundle size (no extra deps)
node benchmarks/bundle-size.mjs

# FPS benchmark (requires Puppeteer)
npm install --save-dev puppeteer
node benchmarks/fps-test.mjs
```

## CI

Benchmarks run automatically on every release tag (`v*`) via `.github/workflows/benchmarks.yml`.
Results are committed back to `benchmarks/results/latest.json`.

## Methodology

### Bundle Size
- Measured as **gzip level 9** compressed size of the minified distribution file.
- EaseMotion CSS is compared against Animate.css and Framer Motion's JS bundle.
- Lower is better.

### FPS
- A Puppeteer headless Chrome session renders **100 simultaneously animated elements**.
- FPS is sampled every 100ms for 3 seconds using the Chrome DevTools Protocol.
- Higher is better.

## Latest Results

See [results/latest.json](./results/latest.json) for the most recent benchmark run.

## Libraries Compared

| Library | Version tested | Notes |
|---------|---------------|-------|
| **EaseMotion CSS** | 1.2.0 | Pure CSS, zero JS |
| Animate.css | 4.1.1 | Pure CSS |
| motion (Framer) | latest | JS-based |
