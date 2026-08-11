# Animated Image Comparison Slider (`ease-comparison-slider-xyz`)

A zero-dependency, CSS-only animated image comparison slider component designed for the **EaseMotion CSS** framework. Perfect for showcasing before/after transformations, edits, and comparisons with smooth drag interactions.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using range input and CSS selectors.
- **Animation-First**: Smooth handle movement, image reveal transitions, and label fade-ins using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-fast`, `--ease-out`, and shadow tokens for seamless theming.
- **Horizontal Slider**: Default left-to-right comparison (perfect for photo edits).
- **Vertical Slider**: Top-to-bottom comparison variant (perfect for design comparisons).
- **Draggable Handle**: Interactive handle with scale animation on hover/active.
- **Labels**: Built-in before/after labels with backdrop blur.
- **Custom Labels**: Optional custom label positioning at the bottom.
- **Responsive**: Adapts to different screen sizes.
- **Accessible**: Proper range input for keyboard navigation.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Horizontal Comparison
```html
<div class="ease-comparison-xyz">
  <input type="range" min="0" max="100" value="50" class="ease-comparison-xyz-input">
  
  <div class="ease-comparison-xyz-images">
    <div class="ease-comparison-xyz-before">
      <img src="before.jpg" alt="Before">
      <div class="ease-comparison-xyz-label ease-comparison-xyz-label-before">Before</div>
    </div>
    
    <div class="ease-comparison-xyz-after">
      <img src="after.jpg" alt="After">
      <div class="ease-comparison-xyz-label ease-comparison-xyz-label-after">After</div>
    </div>
  </div>
  
  <div class="ease-comparison-xyz-handle">
    <div class="ease-comparison-xyz-handle-line"></div>
    <div class="ease-comparison-xyz-handle-circle">
      <span class="ease-comparison-xyz-handle-arrows">⇔</span>
    </div>
  </div>
</div>