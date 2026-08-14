# CSS-only Spinner Component (Neumorphism Styling)

A fully responsive, accessible, and high-performance pure CSS loading spinner component featuring soft dual-shadow neumorphic depth, continuous rotation keyframes, and frosted glassmorphism card styling for the EaseMotion library.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes` animations, multi-layered box-shadows, and hardware-accelerated transforms.
- **Neumorphic Soft Depth Aesthetic:** Dual light and dark shadow offsets creating a tactile extruded surface look optimized for dark mode UIs.
- **Dark Mode Compatible & Accessible:** Built with proper landmark regions (`role="region"`), keyboard focus states, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<header class="em-spinner-card" role="region" aria-label="CSS-only Spinner Showcase" tabindex="0">
    <div class="em-spinner-header-bar">
        <span class="em-card-badge">COMPONENT CONTRIBUTION</span>
        <span class="em-brand-logo">NeumoMotion</span>
    </div>
    <h2 class="em-card-title">Neumorphic Spinner</h2>
    <p class="em-card-desc">A fully responsive spinner component with neumorphism styling.</p>
    <div class="em-spinner-wrapper">
        <div class="em-neumo-spinner" aria-label="Loading animation"></div>
    </div>
</header>
