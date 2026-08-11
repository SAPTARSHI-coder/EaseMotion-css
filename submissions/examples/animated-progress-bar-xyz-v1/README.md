# Animated Progress Bar Component (`ease-progress-bar-xyz`)

A zero-dependency, CSS-only animated progress bar component designed for the **EaseMotion CSS** framework. Perfect for showing loading states, completion status, and progress tracking with smooth fill animations.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using CSS custom properties and animations.
- **Animation-First**: Smooth fill animations, stripe effects, pulse animations, and circular progress using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-slow`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Types**: Linear progress, circular progress, and step progress.
- **Color Variants**: Primary, success, warning, and error colors.
- **Size Variants**: Small, default, and large sizes.
- **Striped Variant**: Diagonal stripe pattern with optional animation.
- **Indeterminate Progress**: Loading animation for unknown progress.
- **Circular Progress**: SVG-based circular indicator with percentage text.
- **Step Progress**: Multi-step wizard/checkout progress indicator.
- **Accessible**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Progress Bar
```html
<div class="ease-progress-xyz">
  <div class="ease-progress-xyz-bar" style="--progress: 65;"></div>
</div>