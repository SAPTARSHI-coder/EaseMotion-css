# Blob Morphing Loader

## What does this do?

It creates a fluid loading indicator that continuously morphs between organic, rounded shapes while rotating.

## How is it used?

Apply the `blob-loader-uj` class to your loader elements:

```html
<div class="blob-loader-uj" style="--blob-size: 64px; --blob-duration: 4s;"></div>
```

Configure parameters with custom CSS variables:
- `--blob-size`: Height and width of the loader (defaults to `60px`).
- `--blob-duration`: Speed of the morphing loop (defaults to `4s`).
- `--blob-bg`: Color or gradient of the loader body (defaults to `#6c63ff`).

## Why is this useful?

This loader offers a modern, high-fidelity alternative to standard spinning icons commonly used in SaaS products and dashboards. Bound entirely to compositor-friendly transformations (`rotate`) and border-radius keyframes, it avoids layout-thrashing DOM updates, runs efficiently on mobile web browsers, and degrades to a clean static circle when users request reduced motion.
