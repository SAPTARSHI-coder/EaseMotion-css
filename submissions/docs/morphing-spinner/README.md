# Morphing Spinner Component

A fully responsive, accessible, and high-performance pure CSS morphing loading spinner component featuring continuous keyframe rotation, smooth scale-morphing border-radius transformations, and frosted glassmorphism card styling for the EaseMotion CSS library.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes` animations, hardware-accelerated transforms, and glowing box-shadows.
- **Morphing Geometric State:** Dynamic shape shifting between circles and rounded squares during rotation cycles.
- **Dark Mode Compatible & Accessible:** Built with proper landmark regions (`role="region"`), keyboard focus states, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<div class="em-spinner-card" role="region" aria-label="Morphing Spinner Showcase" tabindex="0">
    <span class="em-card-badge">COMPONENTS</span>
    <h2 class="em-card-title">Morphing Spinner</h2>
    <p class="em-card-desc">A high-performance pure CSS morphing spinner component.</p>
    <div class="em-spinner-wrapper" aria-label="Loading Spinner">
        <div class="em-morphing-spinner"></div>
    </div>
</div>
