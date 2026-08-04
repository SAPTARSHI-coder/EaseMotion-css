# Animated Stats Counter Component (`ease-stats-xyz`)

A zero-dependency, CSS-only animated stats counter component designed for the **EaseMotion CSS** framework. Perfect for landing pages, dashboards, and showcasing metrics with smooth counting animations.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using CSS animations and custom properties.
- **Animation-First**: Smooth fade-in, scale, bounce, and progress animations using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Variants**: Basic stats, skill bars, circular progress, and gradient backgrounds.
- **Staggered Reveals**: Items animate in sequence for a polished feel.
- **Icon Animations**: Bouncing icons for visual appeal.
- **Number Animations**: Scale-in effects for numbers.
- **Progress Bars**: Animated horizontal progress with gradient fills.
- **Circular Progress**: SVG-based circular progress indicators.
- **Gradient Accents**: Beautiful gradient text and backgrounds.
- **Accessible**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Stats Grid
```html
<div class="ease-stats-xyz">
  <div class="ease-stats-xyz-item">
    <div class="ease-stats-xyz-icon">👥</div>
    <div class="ease-stats-xyz-number">10,000</div>
    <div class="ease-stats-xyz-label">Happy Customers</div>
  </div>
  
  <div class="ease-stats-xyz-item">
    <div class="ease-stats-xyz-icon">🌍</div>
    <div class="ease-stats-xyz-number">50+</div>
    <div class="ease-stats-xyz-label">Countries</div>
  </div>
</div>

