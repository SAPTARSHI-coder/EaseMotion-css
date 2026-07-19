# CSS Skeleton Shimmer Loaders (`ease-skeleton-shimmer`)

A robust, purely CSS-driven layout placeholder system designed to mimic asynchronous data loading UI cards.

## 🚀 Features & EaseMotion Showcase

- **Pure CSS Shimmer**: Uses an animated `linear-gradient` over a solid background to create a smooth, native "shine" effect without heavy SVG or JS overhead.
- **Composable Elements**: Includes modular modifiers (`--avatar`, `--title`, `--text`, `--block`) that can be stacked to recreate virtually any loading layout.
- **Accessibility Friendly**: Includes `prefers-reduced-motion` queries by default to stop the animation for users with vestibular disorders.
- **Fluid & Responsive**: Designed to flex natively inside CSS flexbox or grid layouts.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

```html
<div class="skeleton-card">
  <!-- Avatar -->
  <div class="ease-skeleton ease-skeleton--avatar"></div>
  
  <!-- Text Lines -->
  <div class="ease-skeleton ease-skeleton--title"></div>
  <div class="ease-skeleton ease-skeleton--text"></div>
</div>
