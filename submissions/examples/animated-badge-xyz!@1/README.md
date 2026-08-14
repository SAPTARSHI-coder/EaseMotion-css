# Animated Badge Component (`ease-badge-xyz`)

A zero-dependency, CSS-only animated badge/tag component designed for the **EaseMotion CSS** framework. Perfect for status indicators, notification counts, and category labels with smooth pulse, bounce, and fade animations.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation with optional minimal JS for tag removal.
- **Animation-First**: Pulse, bounce, fade, and slide animations using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Types**: Status badges, count badges, dot badges, pulse badges, and removable tags.
- **Color Variants**: Success, warning, error, info, and neutral with solid and outline styles.
- **Size Variants**: Small, default, and large sizes.
- **Accessible**: Proper ARIA labels and focus states.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Status Badge
```html
<span class="ease-badge-xyz ease-badge-xyz-success">Active</span>
<span class="ease-badge-xyz ease-badge-xyz-warning">Pending</span>
<span class="ease-badge-xyz ease-badge-xyz-error">Inactive</span>