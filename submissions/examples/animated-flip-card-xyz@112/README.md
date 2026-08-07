# Animated Flip Card Component (`ease-flip-card-xyz`)

A zero-dependency, CSS-only animated flip card component designed for the **EaseMotion CSS** framework. Perfect for team members, product features, and testimonials with smooth 3D flip animations.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using 3D transforms and hover/click states.
- **Animation-First**: Smooth 3D flip animations with natural easing using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Variants**: Horizontal flip (default), vertical flip, and click-to-flip for mobile.
- **Team Cards**: Avatar, name, role, and social links on the back.
- **Feature Cards**: Icon, title, description with CTA button.
- **Floating Icon Animation**: Subtle floating effect on icons.
- **Gradient Backs**: Beautiful gradient backgrounds for back faces.
- **Social Links**: Hover-animated social media icons.
- **Accessible**: Works with keyboard navigation and screen readers.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Horizontal Flip Card
```html
<div class="ease-flip-card-xyz">
  <div class="ease-flip-card-xyz-inner">
    <div class="ease-flip-card-xyz-front">
      <div class="ease-flip-card-xyz-icon">🚀</div>
      <h3 class="ease-flip-card-xyz-title">Title</h3>
      <p class="ease-flip-card-xyz-description">Description</p>
    </div>
    <div class="ease-flip-card-xyz-back">
      <p class="ease-flip-card-xyz-back-text">Back content here</p>
    </div>
  </div>
</div>