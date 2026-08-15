# CSS Button: 3D Variation

A smooth, accessible, and performant pure CSS 3D tactile button component featuring multi-layered extrusion box-shadows, press-down click simulation (`:active`), and frosted glassmorphism card styling for the EaseMotion library, fully addressing documentation issue `#78399`.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS box-shadow offsets and hardware-accelerated `translateY` transforms.
- **Realistic 3D Tactile Press:** Physical depth extrusion that depresses dynamically on active click states.
- **Dark Mode Compatible & Accessible:** Built with proper semantic landmark regions (`role="region"` / `<button>`), keyboard focus states, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<header class="em-button-card" role="region" aria-label="3D Button Showcase" tabindex="0">
    <div class="em-button-header-bar">
        <span class="em-card-badge">BUTTON COMPONENTS</span>
        <span class="em-brand-logo">ButtonMotion</span>
    </div>
    <h2 class="em-card-title">3D Button Component</h2>
    <p class="em-card-desc">A smooth pure CSS 3D tactile button featuring deep extrusion shadow layers.</p>
    <div class="em-button-wrapper">
        <button class="em-3d-button" aria-label="Interactive 3D Button">
            <span class="em-btn-face">PRESS ME 3D</span>
        </button>
    </div>
</header>
