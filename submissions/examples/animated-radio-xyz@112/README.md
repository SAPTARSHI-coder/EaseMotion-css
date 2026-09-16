# Animated Radio Button Component (`ease-radio-xyz`)

A zero-dependency, CSS-only animated radio button component designed for the **EaseMotion CSS** framework. Perfect for single-selection options in forms, settings, and selectable groups.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using native radio input.
- **Animation-First**: Smooth selection animation, pop effect on select, and hover transitions using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-fast`, `--ease-out`, and color tokens for seamless theming.
- **Color Variants**: Primary, success, error, and warning colors.
- **Size Variants**: Small, default, and large sizes.
- **Card Style**: Selectable card variant for pricing plans and options.
- **Button Group Style**: Segmented control variant for view toggles and filters.
- **Disabled State**: Proper disabled styling and behavior.
- **Accessible**: Proper label associations and focus states.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Radio Button
```html
<label class="ease-radio-xyz">
  <input type="radio" name="group-name" value="option1">
  <span class="ease-radio-xyz-custom"></span>
  <span class="ease-radio-xyz-label">Option 1</span>
</label>