# Animated Button Component (`ease-btn-xyz`)

A zero-dependency, CSS-only animated button component designed for the **EaseMotion CSS** framework. Perfect for all interactive elements with ripple effects, loading states, and smooth transitions.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation with ripple effect on click.
- **Animation-First**: Smooth hover lift, active press, ripple effect, and loading spinner using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-fast`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Variants**: Primary, secondary, success, error, and warning colors.
- **Style Options**: Solid (default), outline, and ghost variants.
- **Size Variants**: Small, default, and large sizes.
- **Icon Support**: Works with icons before or after text, or icon-only buttons.
- **Loading State**: Built-in spinner animation for async operations.
- **Disabled State**: Proper disabled styling and behavior.
- **Accessible**: Proper focus states and ARIA support.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Button
```html
<button class="ease-btn-xyz ease-btn-xyz-primary">Click Me</button>