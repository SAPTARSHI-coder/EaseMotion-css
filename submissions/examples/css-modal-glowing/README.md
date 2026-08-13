# CSS Modal: Glowing Variation

A smooth, accessible, and performant pure CSS glowing modal dialog component featuring vibrant neon border gradients, immersive ambient box-shadow lighting, and frosted glassmorphism card styling for the EaseMotion library, fully addressing documentation issue `#78364`.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS linear-gradient borders, box-shadow light blooms, and hardware-accelerated transforms.
- **Glowing Neon Aesthetic:** High-impact purple and cyan glowing gradient rims creating an eye-catching modal container.
- **Dark Mode Compatible & Accessible:** Built with proper semantic landmark regions (`role="dialog"`), keyboard focus states, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<header class="em-modal-card" role="region" aria-label="Glowing Modal Showcase" tabindex="0">
    <div class="em-modal-header-bar">
        <span class="em-card-badge">MODAL COMPONENTS</span>
        <span class="em-brand-logo">ModalMotion</span>
    </div>
    <h2 class="em-card-title">Glowing Modal Component</h2>
    <p class="em-card-desc">A smooth pure CSS glowing modal dialog featuring vibrant neon glow borders.</p>
    <div class="em-modal-wrapper">
        <div class="em-glowing-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div class="em-modal-content">
                <span class="em-modal-tag">NOTIFICATION</span>
                <h3 id="modal-title" class="em-modal-heading">Glowing Action Alert</h3>
                <p class="em-modal-text">Experience immersive neon lighting effects with pure CSS.</p>
            </div>
        </div>
    </div>
</header>
