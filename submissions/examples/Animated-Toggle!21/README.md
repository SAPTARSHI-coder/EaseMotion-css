# Animated Toggle Switch (`ease-toggle-xyz`)

A zero-dependency, CSS-only animated toggle switch component designed for the **EaseMotion CSS** framework. Perfect for settings, preferences, and on/off states.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using checkbox input and pseudo-elements.
- **Animation-First**: Smooth knob sliding and track color transitions using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-ease`, and color tokens for seamless theming.
- **Multiple Variants**: Includes default, success, warning, and error color states.
- **Accessible**: Built on native checkbox input with full keyboard support and focus indicators.
- **Interactive States**: Includes hover, focus, active/pressed, and disabled states.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

1. Wrap a checkbox input in a `<label>` with the `ease-toggle-xyz` class.
2. Add a `<span>` with the `ease-toggle-xyz-slider` class.

```html
<label class="ease-toggle-xyz">
  <input type="checkbox">
  <span class="ease-toggle-xyz-slider"></span>
</label>

<!-- Checked by default -->
<label class="ease-toggle-xyz">
  <input type="checkbox" checked>
  <span class="ease-toggle-xyz-slider"></span>
</label>

<!-- Success variant -->
<label class="ease-toggle-xyz ease-toggle-xyz-success">
  <input type="checkbox" checked>
  <span class="ease-toggle-xyz-slider"></span>
</label>

<!-- Disabled state -->
<label class="ease-toggle-xyz">
  <input type="checkbox" disabled>
  <span class="ease-toggle-xyz-slider"></span>
</label>