# Animated Badge Component (`ease-badge-xyz`)

A zero-dependency, CSS-only animated badge component designed for the **EaseMotion CSS** framework. Perfect for showing counts, statuses, and notifications with smooth scale animations and pulse effects.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using CSS animations and transitions.
- **Animation-First**: Smooth scale-in animations, pulse effects, and hover transitions using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-fast`, `--ease-out`, and color tokens for seamless theming.
- **Color Variants**: Primary, success, warning, error, and info colors.
- **Size Variants**: Extra small, small, default, and large sizes.
- **Shape Variants**: Pill, rounded, and square shapes.
- **Outline Variants**: Outlined badges with border styling.
- **Notification Badges**: Dot and count badges for icon buttons.
- **Pulse Animation**: Optional pulse effect for attention-grabbing badges.
- **Status Badges**: Online, away, busy, and offline status indicators.
- **Icon Badges**: Badges with icons and text.
- **Accessible**: Proper semantic HTML and reduced motion support.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Badge
```html
<span class="ease-badge-xyz ease-badge-xyz-primary">Primary</span>
<span class="ease-badge-xyz ease-badge-xyz-success">Success</span>
<span class="ease-badge-xyz ease-badge-xyz-warning">Warning</span>
<span class="ease-badge-xyz ease-badge-xyz-error">Error</span>
<span class="ease-badge-xyz ease-badge-xyz-info">Info</span>