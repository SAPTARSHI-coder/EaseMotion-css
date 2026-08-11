# CSS Size Benchmark Fix

## 1. What does this do?
Fixes a label-swap bug in the CSS size benchmark output where `EaseMotion CSS (min)` and `EaseMotion CSS (full)` were reporting each other's file sizes, making the minified build appear larger than the full source.

## 2. How is it used?

Run the corrected benchmark script from the project root:

```bash
node submissions/docs/css-size-benchmark-fix-ksg/benchmark.mjs
```

It outputs a JSON report like:

```json
{
  "timestamp": "...",
  "nodeVersion": "...",
  "results": [
    {
      "library": "EaseMotion CSS (min)",
      "rawBytes": 72908,
      "gzipBytes": 14200,
      "rawFmt": "71.2 KB",
      "gzipFmt": "13.9 KB",
      "source": "local"
    },
    {
      "library": "EaseMotion CSS (full)",
      "rawBytes": 1972,
      "gzipBytes": 612,
      "rawFmt": "1.9 KB",
      "gzipFmt": "612 B",
      "source": "local"
    }
  ]
}
```

The `demo.html` visualises the report in the browser.

## 3. Why is it useful?

The original benchmark had `easemotion.min.css` mapped to the `"EaseMotion CSS (min)"` label
but was actually reading `easemotion.css` (the entry file with `@import` statements, only ~2 KB)
for that slot, and vice-versa. This caused the minified version to appear **174 KB** while the
"full" version showed only **2.8 KB** — the exact opposite of reality.

The fix simply swaps the file paths back to their correct labels:

| Label | File read |
|---|---|
| `EaseMotion CSS (min)` | `easemotion.min.css` (bundled + minified) |
| `EaseMotion CSS (full)` | `easemotion.css` (source entry with @imports) |

This fits EaseMotion CSS's philosophy of clarity and correctness: tooling output should be
as human-readable and accurate as the CSS classes themselves.
