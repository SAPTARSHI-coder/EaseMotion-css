# Animated Toast Notifications (`ease-toast-xyz`)

A zero-dependency, CSS-only animated toast notification component designed for the **EaseMotion CSS** framework. Perfect for user feedback, alerts, and system notifications.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation with smooth entry animations.
- **Animation-First**: Slide-in entry animation and auto-dismiss progress bar using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Variants**: Includes success, error, warning, and info color states with distinct left borders and icons.
- **Accessible**: Includes close button with focus states and proper ARIA labels.
- **Auto-dismiss Progress**: Visual progress bar showing remaining time before auto-dismiss.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

1. Create a container with the `ease-toast-xyz` class.
2. Add the variant class (e.g., `ease-toast-xyz-success`).
3. Include an icon, content area, and close button.

```html
<div class="ease-toast-xyz ease-toast-xyz-success">
  <span class="ease-toast-xyz-icon">✓</span>
  <div class="ease-toast-xyz-content">
    <strong class="ease-toast-xyz-title">Success!</strong>
    <p class="ease-toast-xyz-message">Your changes have been saved.</p>
  </div>
  <button class="ease-toast-xyz-close" aria-label="Close">×</button>
  <div class="ease-toast-xyz-progress"></div>
</div>