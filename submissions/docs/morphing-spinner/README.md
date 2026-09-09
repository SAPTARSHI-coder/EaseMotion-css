# Morphing Spinner Component

A fully responsive, accessible, and performant pure CSS loading spinner component featuring smooth keyframe rotations, glowing amber accents, and frosted glassmorphism card styling for the EaseMotion CSS library.

## 🚀 Features

- **Zero JavaScript Required:** Built using native CSS `@keyframes` animations, hardware-accelerated properties, and backdrop blur filters.
- **Dynamic Rotation Effect:** Continuous smooth rotation with multi-layer drop shadows and glowing borders.
- **Dark Mode Compatible & Accessible:** Built with proper landmark regions (`role="region"`), semantic ARIA status roles (`role="status"`), and keyboard focus outlines.

## 🛠️ Usage Example

```html
<div class="em-spinner-card" role="region" aria-label="Morphing Spinner Showcase" tabindex="0">
    <span class="em-card-badge">COMPONENTS</span>
    <h2 class="em-card-title">Morphing Spinner</h2>
    <p class="em-card-desc">A high-performance loading spinner.</p>
    <div class="em-spinner-wrapper">
        <div class="em-spinner" role="status" aria-label="Loading"></div>
    </div>
</div>
