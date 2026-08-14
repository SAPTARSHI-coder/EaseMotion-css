# Minified vs Unminified CSS File Compression Ratio Audit

A responsive CSS performance audit created for issue #82086.

## Overview

This example compares an original CSS stylesheet with an estimated
minified representation.

The audit measures:

- Original CSS size in bytes
- Estimated minified CSS size in bytes
- Compression reduction percentage
- Audit execution time
- Performance budget status

## Performance Budget

| Metric | Threshold |
| --- | ---: |
| Minimum compression reduction | 20% |
| Maximum audit execution time | 2000 ms |

The audit passes only when the configured thresholds are satisfied.

## Files

- `demo.html` — Interactive compression-ratio audit.
- `style.css` — Original stylesheet used by the audit.
- `README.md` — Benchmark and CI documentation.

## How It Works

The demo loads `style.css` and calculates its original byte size.

It then estimates a minified representation by removing:

- CSS comments
- Unnecessary whitespace
- Whitespace around CSS delimiters
- Redundant semicolons before closing braces

The resulting sizes are compared to calculate the reduction:

```text
Reduction =
((Original Bytes - Minified Bytes) / Original Bytes) × 100