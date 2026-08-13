# Morphing Card Component

A fully responsive, accessible, and performant pure CSS morphing container component featuring dynamic border radius transformations, elevation shifts, and frosted glassmorphism styling for the EaseMotion CSS library.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS transition properties (`border-radius`, `transform`, `box-shadow`) and cubic-bezier easing curves.
- **Dynamic Morph State:** Smooth structural shape morphing and glowing orange aura on hover.
- **Dark Mode Compatible & Accessible:** Built with proper landmark regions (`role="region"`), keyboard focus states, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<div class="em-morphing-card" role="region" aria-label="Morphing Card Showcase" tabindex="0">
    <span class="em-card-badge">COMPONENTS</span>
    <h2 class="em-card-title">Morphing Card</h2>
    <p class="em-card-desc">A high-performance pure CSS morphing container component.</p>
    <div class="em-morph-content">
        <span class="em-morph-status">MORPH STATE: ACTIVE</span>
    </div>
</div>
