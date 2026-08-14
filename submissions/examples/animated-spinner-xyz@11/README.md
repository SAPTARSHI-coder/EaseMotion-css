# Animated Loading Spinner (`ease-spinner-xyz`)

A zero-dependency, CSS-only animated loading spinner component designed for the **EaseMotion CSS** framework. Perfect for indicating loading states, processing operations, and async actions.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using CSS animations and keyframes.
- **Animation-First**: Smooth rotation, bouncing, fading, and pulsing animations using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-ease`, and color tokens for seamless theming.
- **Multiple Types**: Ring spinner, bouncing dots, fading dots, pulsing dots, audio bars, and wave bars.
- **Color Variants**: Primary, success, error, and warning colors.
- **Size Variants**: Small, default, large, and extra large sizes.
- **With Text**: Optional loading text with fade animation.
- **Overlay Mode**: Full-area overlay with backdrop blur for modal/card loading states.
- **Accessible**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Ring Spinner (Default)
```html
<div class="ease-spinner-xyz ease-spinner-xyz-ring"></div>