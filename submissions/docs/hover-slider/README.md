# Hover Slider Component

A fully responsive, accessible, and high-performance pure CSS hover slider component featuring native scroll-snapping, interactive card elevation lifts, and frosted glassmorphism card styling for the EaseMotion CSS library.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS scroll-snapping (`scroll-snap-type`), flexbox layouts, and custom scrollbar styling.
- **Interactive Card Lift:** Smooth vertical translation and glowing cyan neon highlights on hover.
- **Dark Mode Compatible & Accessible:** Built with proper landmark regions (`role="region"`), keyboard-navigable scroll containers, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<div class="em-slider-card" role="region" aria-label="Hover Slider Showcase" tabindex="0">
    <span class="em-card-badge">COMPONENTS</span>
    <h2 class="em-card-title">Hover Slider</h2>
    <p class="em-card-desc">A high-performance pure CSS hover slider component.</p>
    <div class="em-slider-wrapper">
        <div class="em-slider-container">
            <div class="em-slider-item">
                <span class="em-item-tag">SLIDE 01</span>
                <h3 class="em-item-title">Motion Track</h3>
            </div>
        </div>
    </div>
</div>
