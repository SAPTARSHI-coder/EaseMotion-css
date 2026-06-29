# 3D Perspective Photo Stack with Fan-Out

## What does this do?

This component creates an interactive, CSS-only stacked photo gallery that fans out in a 3D arc on stack hover, and lifts/aligns individual cards to face the viewer on item hover or keyboard focus.

## How is it used?

Apply the `.perspective-container`, `.photo-stack`, and `.photo-card` classes to your gallery markup structure:

```html
<div class="perspective-container">
  <div class="photo-stack">
    <div class="photo-card" tabindex="0">
      <div class="image-wrapper">
        <img src="your-image.jpg" alt="Description" />
      </div>
      <div class="caption">
        <span class="title">Photo Title</span>
        <span class="meta">Location • Iso/Specs</span>
      </div>
    </div>
    <!-- Additional photo cards -->
  </div>
</div>
```

## Why is it useful?

It provides a physical-deck sensation to image collections, making galleries feel tangible and responsive. It uses pure hardware-accelerated CSS 3D transforms (`preserve-3d`, `perspective`, `translate3d`, `rotate3d`) to ensure highly optimized rendering, zero JavaScript execution overhead, and native accessibility via keyboard tab-navigation and focus-visible state handlers.

## Tech Stack

- HTML5
- CSS3 (no external frameworks, no JavaScript)

## Preview

Open `demo.html` directly in any modern web browser to view and interact with the component.

## Contribution Notes

- Class naming was handled by the contributor (`pp`).
- Maintainer will rename classes to the standard `ease-*` convention (e.g. `.ease-perspective-stack`, `.ease-photo-card`) and substitute hardcoded colors or transition metrics with project-wide design tokens upon integration.
