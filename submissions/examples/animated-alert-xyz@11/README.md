# Animated Alert Component (`ease-alert-xyz`)

A zero-dependency, CSS-only animated alert/callout component designed for the **EaseMotion CSS** framework. Perfect for system messages, warnings, success notifications, and informational content.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation with optional minimal JS for dismiss functionality.
- **Animation-First**: Smooth slide-in entrance, icon pop animation, and dismiss transitions using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Variants**: Success, error, warning, and info with distinct visual indicators.
- **Style Options**: Solid (default) and outlined variants.
- **Size Options**: Default and compact sizes.
- **Action Buttons**: Optional action buttons for user interactions.
- **Auto-dismiss Progress**: Visual progress bar showing remaining time before auto-dismiss.
- **Accessible**: Proper ARIA labels and focus states.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Alert
```html
<div class="ease-alert-xyz ease-alert-xyz-success">
  <span class="ease-alert-xyz-icon">✓</span>
  <div class="ease-alert-xyz-content">
    <strong class="ease-alert-xyz-title">Success!</strong>
    <p class="ease-alert-xyz-message">Your changes have been saved.</p>
  </div>
  <button class="ease-alert-xyz-close" aria-label="Close">×</button>
</div>