# Animated Image Carousel (`ease-carousel-xyz`)

A zero-dependency, CSS-only animated image carousel/slider component designed for the **EaseMotion CSS** framework. Perfect for showcasing images, products, or testimonials with smooth transitions.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using radio inputs and CSS animations.
- **Animation-First**: Smooth slide transitions, fade effects, and auto-play using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-slow`, `--ease-out`, and shadow tokens for seamless theming.
- **Multiple Transition Types**: Slide (horizontal), fade, and auto-play variants.
- **Navigation Options**: Dot indicators and arrow navigation with hover effects.
- **Captions**: Animated text overlays that slide in with each slide.
- **Auto-play**: Optional auto-advancing carousel with progress bar.
- **Responsive**: Fully responsive with mobile-optimized layouts.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Slide Transition Carousel (Manual)
```html
<div class="ease-carousel-xyz">
  <input type="radio" name="carousel-example" id="example-1" checked>
  <input type="radio" name="carousel-example" id="example-2">
  <input type="radio" name="carousel-example" id="example-3">

  <div class="ease-carousel-xyz-slides">
    <div class="ease-carousel-xyz-slide">
      <img src="image1.jpg" alt="Description">
      <div class="ease-carousel-xyz-caption">
        <h3>Slide 1</h3>
        <p>Description</p>
      </div>
    </div>
    <!-- More slides... -->
  </div>

  <div class="ease-carousel-xyz-controls">
    <label for="example-1" class="ease-carousel-xyz-dot"></label>
    <label for="example-2" class="ease-carousel-xyz-dot"></label>
    <label for="example-3" class="ease-carousel-xyz-dot"></label>
  </div>

  <label for="example-1" class="ease-carousel-xyz-arrow ease-carousel-xyz-prev">‹</label>
  <label for="example-2" class="ease-carousel-xyz-arrow ease-carousel-xyz-next">›</label>
</div>