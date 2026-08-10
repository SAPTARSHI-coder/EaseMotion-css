# Animated Carousel Component (`ease-carousel-xyz`)

A zero-dependency, CSS-only animated carousel/slider component designed for the **EaseMotion CSS** framework. Perfect for showcasing images, content cards, and testimonials with smooth transitions.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using radio buttons and CSS transitions.
- **Animation-First**: Smooth slide transitions, fade effects, caption animations, and navigation controls using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-slow`, `--ease-out`, and shadow tokens for seamless theming.
- **Image Carousel**: Full-width image slides with captions.
- **Content Card Carousel**: Card-based slides for features or testimonials.
- **Auto-play**: Optional auto-advancing slides with progress indicator.
- **Fade Transition**: Alternative fade transition instead of slide.
- **Navigation Arrows**: Previous/next buttons with hover effects.
- **Navigation Dots**: Clickable dots showing current slide.
- **Captions**: Animated captions with gradient overlay.
- **Responsive**: Adapts to different screen sizes.
- **Accessible**: Proper label associations and reduced motion support.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Image Carousel
```html
<div class="ease-carousel-xyz">
  <input type="radio" name="carousel" id="slide-1" class="ease-carousel-xyz-radio" checked>
  <input type="radio" name="carousel" id="slide-2" class="ease-carousel-xyz-radio">
  <input type="radio" name="carousel" id="slide-3" class="ease-carousel-xyz-radio">

  <div class="ease-carousel-xyz-slides">
    <div class="ease-carousel-xyz-slide">
      <img src="image1.jpg" alt="Description">
      <div class="ease-carousel-xyz-caption">
        <h3>Title</h3>
        <p>Description</p>
      </div>
    </div>
    <!-- More slides -->
  </div>

  <label for="slide-3" class="ease-carousel-xyz-arrow ease-carousel-xyz-prev">‹</label>
  <label for="slide-2" class="ease-carousel-xyz-arrow ease-carousel-xyz-next">›</label>

  <div class="ease-carousel-xyz-dots">
    <label for="slide-1" class="ease-carousel-xyz-dot"></label>
    <label for="slide-2" class="ease-carousel-xyz-dot"></label>
    <label for="slide-3" class="ease-carousel-xyz-dot"></label>
  </div>
</div>