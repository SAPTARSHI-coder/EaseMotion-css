# CSS Elastic Bouncing Toggle

A playful toggle switch with elastic bounce physics animation using pure CSS.

## What does this do?

Creates an interactive toggle switch with satisfying elastic bounce animations when toggled. The thumb bounces with spring physics using cubic-bezier curves.

## How is it used?

```html
<!-- Basic Toggle -->
<label class="elastic-toggle">
  <input type="checkbox" class="toggle-input">
  <span class="toggle-track">
    <span class="toggle-thumb"></span>
  </span>
</label>

<!-- Toggle with Icons -->
<label class="elastic-toggle elastic-toggle--icon">
  <input type="checkbox" class="toggle-input">
  <span class="toggle-track">
    <span class="toggle-thumb">
      <span class="toggle-icon toggle-icon--off">✕</span>
      <span class="toggle-icon toggle-icon--on">✓</span>
    </span>
  </span>
</label>

<!-- Toggle Sizes -->
<label class="elastic-toggle elastic-toggle--sm">...</label>
<label class="elastic-toggle elastic-toggle--lg">...</label>
```

## Why is it useful?

- Pure CSS animation, no JavaScript required
- Satisfying tactile feedback through bounce physics
- Multiple variants: basic, icon, sizes
- Accessible with proper focus states
- Smooth animations with GPU acceleration
- Customizable via CSS variables
