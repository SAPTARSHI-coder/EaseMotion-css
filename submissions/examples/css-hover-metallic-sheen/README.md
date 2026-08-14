# CSS Hover: Metallic Sheen Variation

A smooth, accessible, and performant pure CSS hover effect featuring a sweeping reflective metallic gradient sheen, pseudo-element light reflections, and frosted glassmorphism card styling for the EaseMotion library, fully addressing issue `#73387`.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS linear gradients, pseudo-element sheen sweeps (`::after`), and hardware-accelerated transforms.
- **Reflective Metallic Sheen:** Dynamic background-position sliding and gleaming light sweeps on hover simulating polished precious metal.
- **Dark Mode Compatible & Accessible:** Built with proper semantic landmark regions (`role="region"`), keyboard focus states, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<header class="em-hover-card" role="region" aria-label="Metallic Sheen Hover Showcase" tabindex="0">
    <div class="em-hover-header-bar">
        <span class="em-card-badge">HOVER EFFECTS</span>
        <span class="em-brand-logo">SheenMotion</span>
    </div>
    <h2 class="em-card-title">Metallic Sheen Hover</h2>
    <p class="em-card-desc">A smooth pure CSS hover effect featuring a sweeping reflective metallic gradient sheen.</p>
    <div class="em-hover-wrapper">
        <button class="em-metallic-btn" aria-label="Metallic Sheen Button">
            <span class="em-btn-text">METALLIC SHEEN</span>
        </button>
    </div>
</header>
