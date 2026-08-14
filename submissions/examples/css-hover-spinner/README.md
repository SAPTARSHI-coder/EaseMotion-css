# CSS Hover: Spinner Variation

A smooth, accessible, and performant pure CSS hover effect featuring interactive spin triggers on hover, hardware-accelerated rotation keyframes, and frosted glassmorphism card styling for the EaseMotion library.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes` and `animation-play-state: paused` toggling on hover states.
- **Interactive Spinner Effect:** Sleek loader ring that smoothly spins at 60fps when hovered or focused.
- **Dark Mode Compatible & Accessible:** Built with proper semantic landmark regions (`role="region"`), keyboard focus states, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<header class="em-hover-card" role="region" aria-label="Hover Spinner Showcase" tabindex="0">
    <div class="em-hover-header-bar">
        <span class="em-card-badge">HOVER EFFECTS</span>
        <span class="em-brand-logo">SpinnerMotion</span>
    </div>
    <h2 class="em-card-title">Hover Spinner Component</h2>
    <p class="em-card-desc">A smooth pure CSS hover spinner featuring interactive rotation triggers.</p>
    <div class="em-hover-wrapper">
        <div class="em-hover-spinner" aria-label="Loading animation">
            <div class="em-spinner-circle"></div>
            <span class="em-spinner-text">HOVER SPINNER</span>
        </div>
    </div>
</header>
