# CSS Bundle Size Threshold Benchmark

A responsive CSS bundle-size benchmark created for issue #82062.

## Purpose

This example demonstrates a repeatable CSS bundle-size validation workflow.

The benchmark measures:

- CSS bundle size in bytes
- Benchmark execution time in milliseconds
- Whether the stylesheet remains within the configured budget

## Performance Budget

The default threshold is:

| Metric | Target |
|---|---:|
| Maximum CSS bundle size | 50 KB |
| Execution time | Reported |
| FPS | Reported by compatible benchmark runners |

A bundle larger than 50 KB fails the configured bundle-size budget.

## Files

- `demo.html` — Interactive benchmark and sample interface.
- `style.css` — Original responsive CSS implementation.
- `README.md` — Benchmark documentation and performance budget.

## Usage

Open `demo.html` in a browser and select:

**Run Bundle Check**

The benchmark fetches `style.css`, calculates its byte size, and compares it against the 50 KB threshold.

The result is displayed as:

- Bundle size
- Configured budget
- PASS or FAIL status

## CI Validation

A CI benchmark runner can use the same threshold:

```js
const BUNDLE_LIMIT = 50 * 1024;

if (bundleSizeBytes > BUNDLE_LIMIT) {
  process.exit(1);
}