# CSS Hover: Origami Paper Fold Variation

A smooth, accessible, and performant pure CSS hover effect featuring 3D perspective folding faces (`transform-style: preserve-3d`), realistic depth shading, and frosted glassmorphism card styling for the EaseMotion library, fully addressing issue `#73390`.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS 3D perspective transforms (`rotateX`), dual-face backface visibility toggles, and hardware-accelerated transitions.
- **Origami Paper Fold Aesthetic:** Multi-layered surface folding effect simulating physical paper creases and professional UI depth.
- **Dark Mode Compatible & Accessible:** Built with proper semantic landmark regions (`role="region"`), keyboard focus states, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<header class="em-hover-card" role="region" aria-label="Origami Paper Fold Hover Showcase" tabindex="0">
    <div class="em-hover-header-bar">
        <span class="em-card-badge">HOVER EFFECTS</span>
        <span class="em-brand-logo">OrigamiMotion</span>
    </div>
    <h2 class="em-card-title">Origami Fold Hover</h2>
    <p class="em-card-desc">A smooth pure CSS hover effect featuring 3D perspective paper folding.</p>
    <div class="em-hover-wrapper">
        <button class="em-origami-btn" aria-label="Origami Fold Button">
            <span class="em-btn-face em-face-front">PAPER FOLD</span>
            <span class="em-btn-face em-face-back">UNFOLDED</span>
        </button>
    </div>
</header>
