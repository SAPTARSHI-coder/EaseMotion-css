# CSS Button: Cyberpunk Styling Variation

A fully responsive, accessible, and performant pure CSS button component featuring neon cyberpunk pink-cyan gradients, glowing box-shadows, and frosted glassmorphism card styling for the EaseMotion library, fully addressing issue `#78535`.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS gradients, backdrop filters, and hardware-accelerated transforms.
- **Cyberpunk Aesthetic:** High-impact neon lighting rims and sci-fi button styling optimized for modern web interfaces.
- **Dark Mode Compatible & Accessible:** Built with proper semantic landmark regions (`role="region"` / `<button>`), keyboard focus states, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<header class="em-button-card" role="region" aria-label="Cyberpunk Button Showcase" tabindex="0">
    <div class="em-button-header-bar">
        <span class="em-card-badge">BUTTON COMPONENTS</span>
        <span class="em-brand-logo">CyberButton</span>
    </div>
    <h2 class="em-card-title">Responsive Button - Cyberpunk</h2>
    <p class="em-card-desc">A fully responsive, highly performant pure CSS button featuring neon cyberpunk gradients.</p>
    <div class="em-button-wrapper">
        <button class="em-cyberpunk-button" aria-label="Interactive Cyberpunk Button">
            <span class="em-btn-glitch-text">INITIALIZE SYSTEM</span>
        </button>
    </div>
</header>
