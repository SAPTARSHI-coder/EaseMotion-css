# Animated Image Gallery (`ease-gallery-xyz`)

A zero-dependency, CSS-only animated image gallery component designed for the **EaseMotion CSS** framework. Perfect for portfolios, product showcases, and photo galleries with lightbox, zoom effects, and smooth transitions.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using radio buttons and CSS selectors.
- **Animation-First**: Smooth hover effects, image zoom, overlay fade, and lightbox transitions using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and shadow tokens for seamless theming.
- **Grid Gallery**: Responsive grid layout with auto-fit columns.
- **Lightbox Modal**: Full-screen image viewer with smooth zoom animation.
- **Navigation Controls**: Previous/next arrows for lightbox navigation.
- **Hover Effects**: Image scale, overlay fade, and caption slide-in on hover.
- **Masonry Layout**: Pinterest-style variable height gallery.
- **Horizontal Scroll**: Swipeable horizontal gallery for mobile.
- **Overlay Content**: Icons and captions with smooth animations.
- **Responsive**: Adapts to different screen sizes with mobile optimizations.
- **Accessible**: Proper label associations and keyboard navigation support.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Grid Gallery
```html
<div class="ease-gallery-xyz">
  <input type="radio" name="gallery" id="img-1" class="ease-gallery-xyz-trigger">
  <label for="img-1" class="ease-gallery-xyz-item">
    <img src="image1.jpg" alt="Description">
    <div class="ease-gallery-xyz-overlay">
      <span class="ease-gallery-xyz-icon">🔍</span>
      <span class="ease-gallery-xyz-caption">Caption</span>
    </div>
  </label>
  <!-- More items... -->
</div>