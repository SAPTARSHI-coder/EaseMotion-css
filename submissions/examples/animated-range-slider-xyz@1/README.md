# Animated Range Slider Component (`ease-range-xyz`)

A zero-dependency, CSS-only animated range slider component designed for the **EaseMotion CSS** framework. Perfect for volume controls, price ranges, settings, and any numeric input with smooth thumb animations.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using native range input with custom styling.
- **Animation-First**: Smooth thumb scale animations on hover/active, track fill transitions, and value bubble fade using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-fast`, `--ease-out`, and color tokens for seamless theming.
- **Color Variants**: Primary, success, error, and warning colors.
- **Size Variants**: Small, default, and large sizes.
- **Value Bubble**: Optional tooltip showing current value on hover/focus.
- **Step Marks**: Support for displaying step indicators below the slider.
- **Disabled State**: Proper disabled styling and behavior.
- **Accessible**: Proper focus states and keyboard navigation support.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Range Slider
```html
<input type="range" class="ease-range-xyz" min="0" max="100" value="50">