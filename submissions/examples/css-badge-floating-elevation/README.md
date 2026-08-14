# CSS Badge: Floating Elevation Variation

A smooth, accessible, and performant pure CSS badge & chip component featuring floating elevation depth, smooth shadow transitions, and frosted glassmorphism card styling for the EaseMotion library, fully addressing issue `#73455`.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS box-shadow elevation offsets and hardware-accelerated transforms (`translateY`).
- **Floating Elevation Aesthetic:** Layered drop shadows and glowing cyan borders providing tactile depth separation.
- **Dark Mode Compatible & Accessible:** Built with proper semantic landmark regions (`role="region"`), keyboard focus states, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<header class="em-badge-card" role="region" aria-label="Floating Elevation Badge Showcase" tabindex="0">
    <div class="em-badge-header-bar">
        <span class="em-card-badge">BADGES & CHIPS</span>
        <span class="em-brand-logo">ElevationMotion</span>
    </div>
    <h2 class="em-card-title">Floating Elevation Badge</h2>
    <p class="em-card-desc">A smooth pure CSS badge featuring floating elevation depth.</p>
    <div class="em-badge-wrapper">
        <div class="em-floating-badge" aria-label="Featured item status">
            <span class="em-badge-text">FEATURED CHIP</span>
        </div>
    </div>
</header>
