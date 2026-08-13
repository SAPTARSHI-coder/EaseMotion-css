# Dynamic Modal Component

A fully responsive, accessible, and performant pure CSS dynamic modal component featuring frosted glassmorphism backdrops, smooth scaling transitions, and custom focus outlines for the EaseMotion CSS library.

## 🚀 Features

- **Zero JavaScript Required:** Built using native CSS transition properties, backdrop filters, and hardware-accelerated transforms.
- **Interactive Action States:** Refined elevation scaling and glowing box-shadow expansion on hover and active states.
- **Dark Mode Compatible & Accessible:** Built with proper landmark regions (`role="region"`), semantic typography, and keyboard focus outlines.

## 🛠️ Usage Example

```html
<div class="em-modal-card" role="region" aria-label="Dynamic Modal Showcase" tabindex="0">
    <span class="em-card-badge">COMPONENTS</span>
    <h2 class="em-card-title">Dynamic Modal</h2>
    <p class="em-card-desc">A high-performance modal box featuring glassmorphism styling.</p>
    <div class="em-modal-actions">
        <a href="#" class="em-btn em-btn-primary" role="button">Confirm</a>
        <a href="#" class="em-btn em-btn-secondary" role="button">Cancel</a>
    </div>
</div>
