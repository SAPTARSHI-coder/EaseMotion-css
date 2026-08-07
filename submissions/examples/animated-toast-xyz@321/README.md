# Animated Toast Notification (`ease-toast-xyz`)

A zero-dependency, CSS-only animated toast notification component designed for the **EaseMotion CSS** framework. Perfect for temporary messages, feedback, and alerts with smooth slide-in animations and auto-dismiss functionality.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using CSS animations and transitions (minimal JS for dynamic creation).
- **Animation-First**: Smooth slide-in animations from all four corners, stacking effects, and progress bar countdown using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Positions**: Top-right (default), top-left, bottom-right, and bottom-left positioning.
- **Color Variants**: Success, error, warning, and info with distinct visual indicators.
- **Auto-Dismiss**: Built-in progress bar showing time remaining before auto-dismiss.
- **Stacking**: Multiple toasts stack vertically with smooth spacing.
- **Close Button**: Manual dismiss with hover effects.
- **Icon Support**: Circular icons with color-coded backgrounds.
- **Responsive**: Adapts to mobile screens with full-width toasts.
- **Accessible**: Proper semantic HTML structure and focus states.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Toast Container
```html
<div class="ease-toast-xyz-container ease-toast-xyz-top-right">
  <!-- Toasts go here -->
</div>