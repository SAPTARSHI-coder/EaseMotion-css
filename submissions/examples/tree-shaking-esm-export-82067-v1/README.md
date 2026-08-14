# Tree-Shaking ESM Module Export Verification Test

A responsive ESM export verification benchmark created for issue #82067.

## Overview

This example demonstrates a controlled ESM-style module containing both
used and unused exports.

The audit verifies:

- Expected used exports
- Unused export candidates
- Module size in bytes
- Execution time
- Performance budget status

## Performance Budget

| Metric | Threshold |
| --- | ---: |
| Expected used exports | 2 |
| Maximum module size | 50 KB |
| Maximum execution time | 2000 ms |

## Files

- `demo.html` — Interactive ESM export verification test.
- `style.css` — Responsive audit interface.
- `README.md` — Benchmark and CI documentation.

## Tree-Shaking Workload

The module contains four exports:

```js
export function formatValue(value) {
  return "$" + Number(value).toFixed(2);
}

export function calculateTotal(values) {
  return values.reduce(
    (total, value) => total + Number(value),
    0
  );
}

export function debugReport(data) {
  return JSON.stringify(data, null, 2);
}

export function legacyHelper(value) {
  return String(value).trim().toUpperCase();
}