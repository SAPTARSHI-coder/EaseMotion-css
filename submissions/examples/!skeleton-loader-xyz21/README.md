# Animated Skeleton Loader (`ease-skeleton-xyz`)

A zero-dependency, CSS-only animated skeleton loader (shimmer effect) designed for the **EaseMotion CSS** framework.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using `@keyframes` and pseudo-elements.
- **Animation-First**: Uses a smooth, hardware-accelerated `translateX` shimmer effect matching EaseMotion's duration tokens (`--ease-duration-slow`).
- **Design Token Compatible**: Leverages `--ease-color-surface-variant` and `--ease-radius-sm` for seamless light/dark mode theming.
- **Accessible**: Includes a `prefers-reduced-motion` media query that disables the shimmer animation for users who request it.
- **Flexible**: Works on any block or inline-block element (text, avatars, buttons, images).

## 🚀 Usage

1. Add the `ease-skeleton-xyz` class to any `div` or `span`.
2. Define the `width` and `height` via inline styles or utility classes.

```html
<!-- Standard Text Line -->
<div class="ease-skeleton-xyz" style="width: 100%; height: 16px;"></div>

<!-- Circular Avatar -->
<div class="ease-skeleton-xyz ease-skeleton-xyz-circle" style="width: 48px; height: 48px;"></div>