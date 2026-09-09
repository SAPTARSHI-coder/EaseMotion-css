# Morphing Progress Bar Component

A fully responsive, accessible, and performant pure CSS progress bar component featuring smooth loading transitions, glowing neon tracks, and frosted glassmorphism styling for the EaseMotion CSS library.

## 🚀 Features

- **Zero JavaScript Required:** Built using native CSS transitions, hardware-accelerated properties, and backdrop blur filters.
- **Dynamic Glow Effect:** Neon accent fill with multi-layer drop shadows and responsive width scaling.
- **Dark Mode Compatible & Accessible:** Built with proper landmark regions (`role="region"`), semantic ARIA attributes (`role="progressbar"`), and keyboard focus outlines.

## 🛠️ Usage Example

```html
<div class="em-progress-card" role="region" aria-label="Morphing Progress Bar Showcase" tabindex="0">
    <span class="em-card-badge">COMPONENTS</span>
    <h2 class="em-card-title">Morphing Progress Bar</h2>
    <p class="em-card-desc">A high-performance progress indicator.</p>
    <div class="em-progress-track">
        <div class="em-progress-fill" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
</div>
