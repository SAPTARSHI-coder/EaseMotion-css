# CSS Badge: Pulsating Wave Variation

A smooth, accessible, and performant pure CSS badge & chip component featuring a continuous pulsating wave radar effect and frosted glassmorphism card styling for the EaseMotion library, fully addressing issue `#73452`.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `@keyframes` box-shadow scaling animations and hardware-accelerated transforms.
- **Pulsating Radar Effect:** Continuous green wave rings simulating active broadcast or live streaming indicators.
- **Dark Mode Compatible & Accessible:** Built with proper semantic landmark regions (`role="region"`), keyboard focus states, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<header class="em-badge-card" role="region" aria-label="Pulsating Wave Badge Showcase" tabindex="0">
    <div class="em-badge-header-bar">
        <span class="em-card-badge">BADGES & CHIPS</span>
        <span class="em-brand-logo">WaveMotion</span>
    </div>
    <h2 class="em-card-title">Pulsating Wave Badge</h2>
    <p class="em-card-desc">A smooth pure CSS badge featuring a pulsating wave radar effect.</p>
    <div class="em-badge-wrapper">
        <div class="em-pulsing-badge" aria-label="Live broadcast status">
            <span class="em-pulse-dot"></span>
            <span class="em-badge-text">LIVE STREAM</span>
        </div>
    </div>
</header>
