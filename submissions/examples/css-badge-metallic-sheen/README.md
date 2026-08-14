# CSS Badge: Metallic Sheen Variation

A smooth, accessible, and performant pure CSS badge & chip component featuring a reflective metallic gradient sheen sweep and frosted glassmorphism card styling for the EaseMotion library, fully addressing issue `#73464`.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS linear gradients, pseudo-element sheen sweeps (`::after`), and hardware-accelerated transforms.
- **Reflective Sheen Sweep:** Continuous shimmering light reflection across the badge surface to simulate premium gold/metallic texturing.
- **Dark Mode Compatible & Accessible:** Built with proper semantic landmark regions (`role="region"`), keyboard focus states, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<header class="em-badge-card" role="region" aria-label="Metallic Sheen Badge Showcase" tabindex="0">
    <div class="em-badge-header-bar">
        <span class="em-card-badge">BADGES & CHIPS</span>
        <span class="em-brand-logo">SheenMotion</span>
    </div>
    <h2 class="em-card-title">Metallic Sheen Badge</h2>
    <p class="em-card-desc">A smooth pure CSS badge featuring a reflective metallic gradient sheen sweep.</p>
    <div class="em-badge-wrapper">
        <div class="em-metallic-badge" aria-label="Premium Tier Status">
            <span class="em-badge-text">PRO EDITION</span>
        </div>
    </div>
</header>
