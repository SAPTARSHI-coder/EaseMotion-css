# Animated Timeline Component (`ease-timeline-xyz`)

A zero-dependency, CSS-only animated timeline component designed for the **EaseMotion CSS** framework. Perfect for displaying chronological events, activity feeds, project histories, and roadmaps with smooth scroll-triggered animations.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation with staggered reveal animations.
- **Animation-First**: Smooth reveal animations, marker pulse effects, and hover interactions using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Layouts**: Vertical (left-aligned), alternating (center line), and horizontal variants.
- **State Markers**: Default, success, and active (with pulse) marker states.
- **Staggered Animations**: Items reveal sequentially with natural delays.
- **Interactive**: Hover effects on markers and content cards.
- **Responsive**: Automatically adapts alternating and horizontal layouts for mobile.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Vertical Timeline (Left Aligned)
```html
<div class="ease-timeline-xyz">
  <div class="ease-timeline-xyz-item">
    <div class="ease-timeline-xyz-marker"></div>
    <div class="ease-timeline-xyz-content">
      <div class="ease-timeline-xyz-date">January 2024</div>
      <h3 class="ease-timeline-xyz-title">Event Title</h3>
      <p class="ease-timeline-xyz-description">Event description goes here.</p>
    </div>
  </div>
  <!-- More items... -->
</div>