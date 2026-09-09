# Animated Badge Component

A fully responsive, accessible, and performant pure CSS animated badge component featuring smooth pulse animations, glowing neon shadows, and frosted glassmorphism card styling for the EaseMotion CSS library.

## 🚀 Features

- **Zero JavaScript Required:** Built using native CSS `@keyframes` pulse animations, hardware-accelerated transforms, and backdrop blur filters.
- **Dynamic Pulse Effect:** Continuous smooth scaling and glowing box-shadow pulsations to draw user attention.
- **Dark Mode Compatible & Accessible:** Built with proper landmark regions (`role="region"`), semantic status roles (`role="status"`), and keyboard focus outlines.

## 🛠️ Usage Example

```html
<div class="em-badge-card" role="region" aria-label="Animated Badge Showcase" tabindex="0">
    <span class="em-card-badge">COMPONENTS</span>
    <h2 class="em-card-title">Animated Badge</h2>
    <p class="em-card-desc">A high-performance pulsating badge component.</p>
    <div class="em-badge-wrapper">
        <span class="em-animated-badge" role="status" aria-label="New Feature Notification">NEW FEATURE</span>
    </div>
</div>
