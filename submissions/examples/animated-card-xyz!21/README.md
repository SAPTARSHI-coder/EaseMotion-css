# Animated Card Component (`ease-card-xyz`)

A zero-dependency, CSS-only animated card component designed for the **EaseMotion CSS** framework. Perfect for displaying content with smooth hover lift, image zoom, and overlay reveal animations.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using hover states and transitions.
- **Animation-First**: Smooth lift effect, image zoom, and overlay reveal using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and shadow tokens for seamless theming.
- **Multiple Variants**: Includes basic cards, overlay cards, and horizontal cards.
- **Flexible Content**: Supports images, badges, metadata, and action links.
- **Accessible**: Proper image alt text and semantic HTML structure.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Card
```html
<div class="ease-card-xyz">
  <div class="ease-card-xyz-image">
    <img src="image.jpg" alt="Description">
  </div>
  <div class="ease-card-xyz-content">
    <h3 class="ease-card-xyz-title">Card Title</h3>
    <p class="ease-card-xyz-description">Card description goes here.</p>
    <a href="#" class="ease-card-xyz-link">Learn More →</a>
  </div>
</div>