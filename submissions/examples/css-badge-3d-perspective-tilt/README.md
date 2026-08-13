# CSS Badge: 3D Perspective Tilt Variation

A smooth, accessible, and performant pure CSS badge & chip component featuring interactive 3D perspective tilt transforms, hardware-accelerated rendering, and frosted glassmorphism card styling for the EaseMotion library, fully addressing issue `#73450`.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `perspective`, `rotateX/Y` transforms, and hardware-accelerated transition properties.
- **Interactive 3D Tilt:** Dynamic `transform-style: preserve-3d` implementation creating a tactile, immersive 3D tilting effect on hover.
- **Dark Mode Compatible & Accessible:** Built with proper semantic landmark regions (`role="region"`), keyboard focus states, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<header class="em-badge-card" role="region" aria-label="3D Perspective Tilt Badge Showcase" tabindex="0">
    <div class="em-badge-header-bar">
        <span class="em-card-badge">BADGES & CHIPS</span>
        <span class="em-brand-logo">TiltMotion</span>
    </div>
    <h2 class="em-card-title">3D Tilt Badge</h2>
    <p class="em-card-desc">A smooth pure CSS badge featuring interactive 3D perspective tilt effects.</p>
    <div class="em-badge-wrapper">
        <div class="em-tilt-badge" aria-label="Interactive status element">
            <span class="em-badge-text">3D PERSPECTIVE</span>
        </div>
    </div>
</header>
