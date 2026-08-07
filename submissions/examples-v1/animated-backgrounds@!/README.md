# Animated Gradient Mesh Backgrounds

This is a self-contained example demonstrating how to create modern, animated gradient backgrounds using pure CSS with optional mouse interaction, seamlessly integrated with **EaseMotion CSS** utility classes.

## Features
- 🎨 **Gradient Mesh:** Smooth, flowing gradient blobs with blur effect.
- 🌌 **Aurora Borealis:** Northern lights inspired layered animation.
- ✨ **Floating Particles:** Dynamic particle system with varied colors and sizes.
- 🌊 **Ocean Waves:** Smooth SVG wave animation with multiple layers.
- 🖱️ **Interactive Glow:** Mouse-following gradient glow effect (optional JS).
- ♿ **Fully Accessible:** Respects `prefers-reduced-motion` for users who prefer less animation.
- 📱 **Responsive:** Adapts to mobile screens with adjusted sizes.
- 🚫 **Minimal JavaScript:** Only for interactive mouse-follow effect (optional).

## How to Use
1. Ensure the EaseMotion CSS CDN is linked in your `<head>`.
2. Link the `style.css` file.
3. Choose a background style and copy the HTML structure.
4. Add content overlay with your text/elements.
5. For interactive glow, include the minimal JavaScript snippet.

## Available Backgrounds

### 1. Gradient Mesh
```html
<section class="background-section background-mesh">
  <div class="mesh-bg">
    <div class="mesh-blob mesh-blob--1"></div>
    <div class="mesh-blob mesh-blob--2"></div>
    <div class="mesh-blob mesh-blob--3"></div>
    <div class="mesh-blob mesh-blob--4"></div>
  </div>
  <div class="content-overlay">
    <!-- Your content here -->
  </div>
</section>