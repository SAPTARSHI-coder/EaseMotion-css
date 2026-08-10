# Animated Floating Label Input (`ease-input-xyz`)

A zero-dependency, CSS-only animated floating label input component designed for the **EaseMotion CSS** framework. Perfect for modern forms with smooth label animations and focus effects.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using `:focus` and `:not(:placeholder-shown)` pseudo-classes.
- **Animation-First**: Smooth floating label animation, underline expansion, and icon transitions using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Variants**: Default underline style, outlined style, with/without icons.
- **Validation States**: Success, error, and warning states with helper text animations.
- **Textarea Support**: Works with multi-line text inputs.
- **Accessible**: Proper label associations and focus states.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Floating Label Input
```html
<div class="ease-input-xyz">
  <input type="text" id="name" class="ease-input-xyz-field" required>
  <label for="name" class="ease-input-xyz-label">Full Name</label>
  <div class="ease-input-xyz-underline"></div>
</div>