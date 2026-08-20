# Dynamic Liquid Mesh Gradient Glassmorphism Card

A modern glassmorphism card component with animated liquid radial mesh blobs and interactive 3D perspective tilt effects.

## 1. What does this do?
This component renders organic, constantly morphing color mesh gradients behind heavy backdrop blur filters (`backdrop-filter: blur(24px)`). The liquid mesh blobs continuously orbit and scale, providing a vibrant backdrop beneath structured card content.

## 2. How is it used?
Link `style.css` in your HTML document and structure your markup using `.mesh-card`, `.liquid-mesh`, and `.glass-content`:

```html
<div class="mesh-card">
  <div class="liquid-mesh">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>
  </div>
  <div class="glass-content">
    <h2>Fluid Motion Design</h2>
  </div>
</div>
```

## 3. Why is it useful?
- **Organic Fluid Motion**: Uses pure CSS keyframe translations and scale transforms to simulate liquid fluid dynamics.
- **Modern Aesthetic**: Combines glassmorphism, vibrant radial gradients, and subtle 3D perspective tilt hover effects.
- **GPU Accelerated**: Optimized for performance with `will-change: transform` and `mix-blend-mode: screen`.
