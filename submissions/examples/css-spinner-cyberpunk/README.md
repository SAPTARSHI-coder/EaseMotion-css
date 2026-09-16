# CSS Spinner: Cyberpunk Styling Variation

A smooth, accessible, and performant pure CSS spinner component featuring futuristic neon dual-ring counter-rotations, cyberpunk pink-cyan gradients, and frosted glassmorphism card styling for the EaseMotion library, fully addressing issue `#78353`.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS keyframe animations (`@keyframes`), dual spinning rings, and hardware-accelerated transforms.
- **Cyberpunk Neon Aesthetic:** Glowing pink and cyan laser borders with sci-fi typography and deep shadow lighting.
- **Dark Mode Compatible & Accessible:** Built with proper semantic landmark regions (`role="region"`), keyboard focus states, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<header class="em-spinner-card" role="region" aria-label="Cyberpunk Spinner Showcase" tabindex="0">
    <div class="em-spinner-header-bar">
        <span class="em-card-badge">SPINNER EFFECTS</span>
        <span class="em-brand-logo">CyberMotion</span>
    </div>
    <h2 class="em-card-title">Cyberpunk Spinner</h2>
    <p class="em-card-desc">A smooth pure CSS spinner featuring futuristic cyberpunk neon gradients.</p>
    <div class="em-spinner-wrapper">
        <div class="em-cyberpunk-spinner" aria-label="Cyberpunk loading indicator">
            <div class="em-ring em-ring-outer"></div>
            <div class="em-ring em-ring-inner"></div>
            <span class="em-spinner-text">SYSTEM LOADING</span>
        </div>
    </div>
</header>
