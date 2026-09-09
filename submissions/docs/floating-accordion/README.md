# Floating Accordion Component

A fully responsive, accessible, and performant pure CSS floating accordion component featuring glassmorphism elevation, smooth transitions, and custom focus states for the EaseMotion CSS library.

## 🚀 Features

- **Zero JavaScript Required:** Built using native CSS transition properties, backdrop filters, and hardware-accelerated transforms.
- **Floating Elevation Effect:** Refined vertical scaling and glowing multi-layer drop shadows on hover.
- **Dark Mode Compatible & Accessible:** Built with proper landmark regions (`role="region"`), semantic typography, and keyboard focus outlines.

## 🛠️ Usage Example

```html
<div class="em-accordion-card" role="region" aria-label="Floating Accordion Showcase" tabindex="0">
    <span class="em-card-badge">COMPONENTS</span>
    <h2 class="em-card-title">Floating Accordion</h2>
    <p class="em-card-desc">A high-performance floating container featuring glassmorphism.</p>
    <div class="em-accordion-content">
        <p>Expandable content section.</p>
    </div>
</div>
