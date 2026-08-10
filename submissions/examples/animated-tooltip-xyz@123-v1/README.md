# Animated Tooltip Component (`ease-tooltip-xyz`)

A zero-dependency, CSS-only animated tooltip component designed for the **EaseMotion CSS** framework. Perfect for providing contextual information with smooth fade/scale animations and smart positioning.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using hover states and CSS transitions.
- **Animation-First**: Smooth fade and slide animations using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-fast`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Positions**: Top, bottom, left, and right positioning with proper arrow placement.
- **Color Variants**: Default (dark), success, error, warning, and info colors.
- **Size Variants**: Small, default, and large sizes.
- **Delay Options**: Configurable show delays (0ms, 200ms, 500ms).
- **Icon Support**: Optional icons in tooltip content.
- **Arrow Indicator**: Rotated arrow pointing to trigger element.
- **Accessible**: Proper semantic HTML structure.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Tooltip
```html
<div class="ease-tooltip-xyz-wrapper">
  <button>Hover me</button>
  <div class="ease-tooltip-xyz ease-tooltip-xyz-top">
    <div class="ease-tooltip-xyz-arrow"></div>
    <div class="ease-tooltip-xyz-content">Tooltip text here</div>
  </div>
</div>