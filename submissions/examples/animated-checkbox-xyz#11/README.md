# Animated Checkbox Component (`ease-checkbox-xyz`)

A zero-dependency, CSS-only animated checkbox component designed for the **EaseMotion CSS** framework. Perfect for forms, settings, and selectable options with smooth state transitions.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using native checkbox input.
- **Animation-First**: Smooth check animation, pop effect on check, and hover transitions using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-fast`, `--ease-out`, and color tokens for seamless theming.
- **Color Variants**: Primary, success, error, and warning colors.
- **Size Variants**: Small, default, and large sizes.
- **Style Options**: Default square and rounded variants.
- **Card Style**: Selectable card variant for pricing plans and options.
- **Disabled State**: Proper disabled styling and behavior.
- **Accessible**: Proper label associations and focus states.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Checkbox
```html
<label class="ease-checkbox-xyz">
  <input type="checkbox">
  <span class="ease-checkbox-xyz-custom"></span>
  <span class="ease-checkbox-xyz-label">Accept terms</span>
</label>