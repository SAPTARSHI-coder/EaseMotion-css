# Benchmarks 404 Fix — Issue #48534

## Problem

The sidebar link in `docs/index.html` (line 242) points to `../benchmarks/README.md`:

```html
<li><a href="../benchmarks/README.md">Benchmarks</a></li>
```

Browsers cannot render raw `.md` files — this results in a download prompt or a 404 depending on the server configuration. The benchmarks page is effectively broken for documentation visitors.

## Fix

Replace the `.md` link with a proper HTML benchmarks page. Two changes are required in `docs/index.html`:

1. **Create** `docs/benchmarks.html` (or place it under `benchmarks/index.html`) — the rendered HTML version of the benchmark data.
2. **Update line 242** to point to the new HTML file:

```html
<li><a href="../benchmarks/">Benchmarks</a></li>
```

Or, if you prefer a single-page approach:

```html
<li><a href="benchmarks.html">Benchmarks</a></li>
```

## What This Submission Contains

| File | Purpose |
|------|---------|
| `demo.html` | Standalone benchmarks page with bar-chart comparison (bundle size + FPS) |
| `style.css` | Dark-theme styling for the benchmarks page |
| `README.md` | This file — documents the issue and the required fix |

The `demo.html` in this folder can be copied into `docs/benchmarks.html` (or `benchmarks/index.html`) and the sidebar link updated accordingly.

## How to Verify

1. Open `demo.html` in a browser — the page renders correctly with summary cards, bar charts, methodology, and footer.
2. Confirm the old link (`../benchmarks/README.md`) triggers a download or 404.
3. After applying the fix, confirm the sidebar "Benchmarks" link navigates to the working HTML page.
