# Animated Progress Bar (`ease-progress-xyz`)

A zero-dependency, CSS-only animated progress bar component designed for the **EaseMotion CSS** framework.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using CSS custom properties and `@keyframes`.
- **Animation-First**: Smooth bar growth animation and optional striped loading animation using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-slow`, `--ease-ease`, and color tokens for seamless theming.
- **Multiple States**: Includes default, success, warning, error, and animated striped (loading) variants.
- **Accessible**: Respects `prefers-reduced-motion` OS settings.
- **Dynamic Values**: Uses CSS custom property `--progress-value` to set progress percentage.

## 🚀 Usage

1. Add the `ease-progress-xyz` class to a container `div`.
2. Add a child `div` with class `ease-progress-xyz-bar`.
3. Set the progress value using the `--progress-value` CSS custom property (0-100).

```html
<!-- Default Progress Bar (60%) -->
<div class="ease-progress-xyz" style="--progress-value: 60;">
  <div class="ease-progress-xyz-bar"></div>
</div>

<!-- Success State (100%) -->
<div class="ease-progress-xyz ease-progress-xyz-success" style="--progress-value: 100;">
  <div class="ease-progress-xyz-bar"></div>
</div>

<!-- Loading State (Animated Stripes) -->
<div class="ease-progress-xyz ease-progress-xyz-striped" style="--progress-value: 75;">
  <div class="ease-progress-xyz-bar"></div>
</div>