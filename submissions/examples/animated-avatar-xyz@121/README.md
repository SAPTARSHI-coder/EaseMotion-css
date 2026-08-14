# Animated Avatar Component (`ease-avatar-xyz`)

A zero-dependency, CSS-only animated avatar component designed for the **EaseMotion CSS** framework. Perfect for user profiles, team members, and comment sections with status indicators and group stacking.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using CSS animations and transitions.
- **Animation-First**: Smooth hover effects, status indicator pulses, group stacking animations, and overlay transitions using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-fast`, `--ease-out`, and color tokens for seamless theming.
- **Image Avatars**: Profile images with smooth zoom on hover.
- **Initials Avatars**: Fallback initials with gradient backgrounds.
- **Size Variants**: Extra small, small, default, large, and extra large sizes.
- **Shape Variants**: Circle, square, and rounded shapes.
- **Status Indicators**: Online, away, busy, and offline status with animated pulses.
- **Avatar Groups**: Stacked avatars with hover spread animation.
- **Interactive Overlays**: Hover overlays with smooth fade and slide effects.
- **Accessible**: Proper image alt text and semantic HTML.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Image Avatar
```html
<div class="ease-avatar-xyz">
  <img src="avatar.jpg" alt="User Name">
</div>