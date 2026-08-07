# Animated Select Dropdown (`ease-select-xyz`)

A zero-dependency, CSS-only animated select dropdown component designed for the **EaseMotion CSS** framework. Perfect for form selections with smooth dropdown animations, search filtering, and multiple selection support.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using checkbox hack for toggle functionality.
- **Animation-First**: Smooth dropdown slide-in, arrow rotation, and option hover effects using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Search Filter**: Optional search input for filtering options.
- **Grouped Options**: Support for option groups with visual separators.
- **Multiple Selection**: Checkbox-style multiple selection with visual indicators.
- **Icon Support**: Options can include icons or emojis.
- **Size Variants**: Small, default, and large sizes.
- **Disabled State**: Proper disabled styling and behavior.
- **Accessible**: Proper label associations and focus states.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Select
```html
<div class="ease-select-xyz">
  <input type="checkbox" id="select-1" class="ease-select-xyz-toggle">
  <label for="select-1" class="ease-select-xyz-trigger">
    <span class="ease-select-xyz-value">Select an option</span>
    <span class="ease-select-xyz-arrow"></span>
  </label>
  <div class="ease-select-xyz-dropdown">
    <div class="ease-select-xyz-option">Option 1</div>
    <div class="ease-select-xyz-option">Option 2</div>
    <div class="ease-select-xyz-option">Option 3</div>
  </div>
</div>