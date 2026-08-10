# Animated Skeleton Loader (`ease-skeleton-xyz`)

A zero-dependency, CSS-only animated skeleton loader component designed for the **EaseMotion CSS** framework. Perfect for loading states with smooth shimmer, pulse, and wave animations.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using CSS animations and gradients.
- **Animation-First**: Smooth shimmer, pulse, and wave animations using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-ease`, and color tokens for seamless theming.
- **Multiple Layouts**: Text, card, profile, list, and grid skeletons.
- **Animation Variants**: Shimmer (default), pulse, and wave effects.
- **Width Utilities**: Pre-defined width classes (40% to 100%) for flexible layouts.
- **Shape Variants**: Lines, circles (avatars), and rectangles (images).
- **Responsive**: Adapts to different screen sizes.
- **Accessible**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Text Skeleton
```html
<div class="ease-skeleton-xyz">
  <div class="ease-skeleton-xyz-line ease-skeleton-xyz-w-75"></div>
  <div class="ease-skeleton-xyz-line ease-skeleton-xyz-w-100"></div>
  <div class="ease-skeleton-xyz-line ease-skeleton-xyz-w-90"></div>
  <div class="ease-skeleton-xyz-line ease-skeleton-xyz-w-60"></div>
</div>