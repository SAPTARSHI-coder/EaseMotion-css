# Dynamic Loader Component (Retro Styling)

A fully responsive, accessible, and high-performance pure CSS dynamic loader component featuring 80s arcade amber glow effects, synchronized bar bouncing keyframes, and frosted glassmorphism card styling for the EaseMotion library.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes` animations, staggered animation delays, and hardware-accelerated transforms.
- **Retro Arcade Aesthetic:** Amber-orange glowing bar pulses reminiscent of classic arcade UI terminals.
- **Dark Mode Compatible & Accessible:** Built with proper landmark regions (`role="region"`), keyboard focus states, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<header class="em-loader-card" role="region" aria-label="Dynamic Loader Showcase" tabindex="0">
    <div class="em-loader-header-bar">
        <span class="em-card-badge">COMPONENT CONTRIBUTION</span>
        <span class="em-brand-logo">RetroMotion</span>
    </div>
    <h2 class="em-card-title">Retro Loader</h2>
    <p class="em-card-desc">A fully responsive dynamic loader with retro styling.</p>
    <div class="em-loader-wrapper">
        <div class="em-retro-loader" aria-label="Loading animation">
            <div class="em-retro-bar"></div>
            <div class="em-retro-bar"></div>
            <div class="em-retro-bar"></div>
        </div>
    </div>
</header>
