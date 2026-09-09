# Skeleton Loading Utilities Proposal (`ease-skeleton-loading-utilities`)

A proposal for `core/animations.css` providing standard `.em-skeleton` and `.em-skeleton-pulse` utilities for building loading placeholders.

## 🚀 Features

- **`.em-skeleton`**: Applies a smooth, hardware-accelerated shimmering gradient that moves from left to right.
- **`.em-skeleton-pulse`**: Applies a simple opacity fading animation (useful for large blocks or buttons where a shimmer might be too distracting).
- **Dark Mode Native**: Powered by CSS variables (`--skeleton-base` and `--skeleton-highlight`) so it automatically adapts to dark mode interfaces.
- **Accessible & Motion Safe**: Fully respects `prefers-reduced-motion: reduce` by stripping the animation to prevent motion-induced discomfort.

## 🛠️ Usage

Open `demo.html` in your browser. All code is contained within `style.css`. 

You can apply the proposed classes to empty `div` elements to create loading states:

```html
<!-- Shimmering Line -->
<div class="em-skeleton" style="width: 100%; height: 12px;"></div>

<!-- Pulsing Button -->
<div class="em-skeleton-pulse" style="width: 120px; height: 36px; border-radius: 18px;"></div>
```

*Note: This is submitted via the `submissions/examples/` directory to adhere to the strict CI/CD guidelines preventing external modification of `core/` files. The maintainer can easily merge these rules into `core/animations.css`.*

## 🔗 Related Issue
Resolves Issue #16984
