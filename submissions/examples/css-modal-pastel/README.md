# CSS Modal: Pastel Styling Variation

A smooth, fully responsive, and performant pure CSS modal component featuring gentle pastel lavender and mint color palettes, soft depth shadows, and frosted glassmorphism card styling for the EaseMotion library, fully addressing issue `#78405`.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS flexbox layouts, gradient backdrops, and hardware-accelerated transforms.
- **Responsive Pastel Aesthetic:** Soft, harmonious color gradients engineered for clean and modern user interfaces.
- **Dark Mode Compatible & Accessible:** Built with proper semantic landmark regions (`role="dialog"`), keyboard focus states, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<header class="em-modal-card" role="region" aria-label="Pastel Modal Showcase" tabindex="0">
    <div class="em-modal-header-bar">
        <span class="em-card-badge">MODAL COMPONENTS</span>
        <span class="em-brand-logo">PastelMotion</span>
    </div>
    <h2 class="em-card-title">Responsive Modal - Pastel</h2>
    <p class="em-card-desc">A smooth, fully responsive pure CSS modal component featuring gentle pastel color schemes.</p>
    <div class="em-modal-wrapper">
        <div class="em-pastel-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div class="em-modal-content">
                <span class="em-modal-tag">PASTEL EDITION</span>
                <h3 id="modal-title" class="em-modal-heading">Gentle Design System</h3>
                <p class="em-modal-text">Soft lavender and mint tones engineered for clean, accessible user experiences.</p>
            </div>
        </div>
    </div>
</header>
