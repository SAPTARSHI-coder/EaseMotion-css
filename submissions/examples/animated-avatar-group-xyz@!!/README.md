# Animated Avatar Group (`ease-avatar-group-xyz`)

A zero-dependency, CSS-only animated avatar group component designed for the **EaseMotion CSS** framework. Perfect for showing team members, collaborators, or followers with smooth unstack animations.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using flexbox and hover states.
- **Animation-First**: Smooth unstack animation on group hover using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Sizes**: Includes default, small, and large size variants.
- **Flexible Content**: Supports initials, images, and count indicators.
- **Optional Features**: Online status indicator and tooltip on hover.
- **Accessible**: Proper alt text for images and semantic HTML structure.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

1. Create a container with the `ease-avatar-group-xyz` class.
2. Add avatar elements with the `ease-avatar-xyz` class.

```html
<div class="ease-avatar-group-xyz">
  <div class="ease-avatar-xyz" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
    <span>JD</span>
  </div>
  <div class="ease-avatar-xyz">
    <img src="avatar.jpg" alt="User Name">
  </div>
  <div class="ease-avatar-xyz ease-avatar-xyz-count">
    <span>+5</span>
  </div>
</div>