# CSS Badge: Morphing Shape Variation

A smooth, accessible, and performant pure CSS badge & chip component featuring continuous, organic border-radius morphing keyframes and frosted glassmorphism card styling for the EaseMotion library, fully addressing issue `#73454`.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes` `border-radius` morphing and hardware-accelerated transforms.
- **Organic Shape Aesthetic:** Fluid, ever-changing blob-like shape variations creating a dynamic and premium visual identity.
- **Dark Mode Compatible & Accessible:** Built with proper semantic landmark regions (`role="region"`), keyboard focus states, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<header class="em-badge-card" role="region" aria-label="Morphing Shape Badge Showcase" tabindex="0">
    <div class="em-badge-header-bar">
        <span class="em-card-badge">BADGES & CHIPS</span>
        <span class="em-brand-logo">MorphMotion</span>
    </div>
    <h2 class="em-card-title">Morphing Shape Badge</h2>
    <p class="em-card-desc">A smooth pure CSS badge featuring continuous border-radius morphing.</p>
    <div class="em-badge-wrapper">
        <div class="em-morphing-badge" aria-label="Status indicator">
            <span class="em-badge-text">STATUS: ACTIVE</span>
        </div>
    </div>
</header>
