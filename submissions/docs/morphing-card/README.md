# Morphing Card Component

A fully responsive, accessible, and performant pure CSS morphing card component featuring organic border-radius shifts, elevation shadows, and custom focus states for the EaseMotion CSS library.

## 🚀 Features

- **Zero JavaScript Required:** Built using native CSS border-radius transitions, hardware-accelerated transforms, and backdrop blur filters.
- **Organic Morphing Effect:** Smooth non-uniform border-radius shifts on hover and focus states.
- **Dark Mode Compatible & Accessible:** Built with proper landmark regions (`role="region"`), semantic typography, and keyboard focus outlines.

## 🛠️ Usage Example

```html
<article class="em-morph-card" role="region" aria-label="Morphing Card">
    <span class="em-card-badge">COMPONENTS</span>
    <h2 class="em-card-title">Morphing Card</h2>
    <p class="em-card-desc">An organic card featuring fluid border transitions.</p>
    <a href="#" class="em-card-btn" role="button">Action</a>
</article>
