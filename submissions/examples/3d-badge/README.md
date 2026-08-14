# 3D Badge Component (Gradient Styling)

A fully responsive, accessible, and high-performance pure CSS 3D badge component featuring multi-stop vibrant gradients, inset depth highlights, and frosted glassmorphism card styling for the EaseMotion library.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS linear gradients, inset depth shadows, and hardware-accelerated transforms.
- **3D Depth Aesthetic:** Multi-layered box-shadows providing realistic 3D tactile elevation and surface lighting.
- **Dark Mode Compatible & Accessible:** Built with proper landmark regions (`role="region"`), keyboard focus states, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<header class="em-badge-card" role="region" aria-label="3D Badge Showcase" tabindex="0">
    <div class="em-badge-header-bar">
        <span class="em-card-badge">COMPONENT CONTRIBUTION</span>
        <span class="em-brand-logo">GradientMotion</span>
    </div>
    <h2 class="em-card-title">3D Gradient Badge</h2>
    <p class="em-card-desc">A fully responsive 3D badge component with gradient styling.</p>
    <div class="em-badge-wrapper">
        <div class="em-3d-badge">
            <span class="em-badge-text">PRO EDITION</span>
        </div>
    </div>
</header>
