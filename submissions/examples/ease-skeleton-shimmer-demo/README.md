# Skeleton Loader Component (`ease-skeleton-shimmer-demo`)

A pure CSS skeleton loader (shimmer effect) to display while content is loading asynchronously, drastically improving perceived performance.

## 🚀 Features & EaseMotion Showcase

- **Smooth Shimmer**: Uses an infinitely looping, hardware-accelerated `background-position` animation over a linear gradient to create the "shine" effect.
- **Dark Mode Ready**: Automatically detects `@media (prefers-color-scheme: dark)` and swaps the base/shine CSS variables to fit dark UI without flashing bright white blocks at the user.
- **Variants**: Includes modifiers for common shapes: `.ease-skeleton--text`, `.ease-skeleton--avatar` (circles), and `.ease-skeleton--card` (rectangles).

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

To create a skeleton profile block:
```html
<div style="display: flex; gap: 16px;">
  <!-- Circular Avatar -->
  <div class="ease-skeleton ease-skeleton--avatar"></div>
  
  <div style="flex: 1;">
    <!-- Text Lines -->
    <div class="ease-skeleton ease-skeleton--text" style="width: 60%; margin-bottom: 8px;"></div>
    <div class="ease-skeleton ease-skeleton--text" style="width: 40%;"></div>
  </div>
</div>
