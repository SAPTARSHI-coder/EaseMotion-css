# Interactive Progress Bar Component (Neumorphism Styling)

A fully responsive, accessible, and high-performance pure CSS progress bar component featuring soft neumorphic box shadows, recessed track styling, and smooth hover elevation for the EaseMotion library.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS transitions, flex layouts, and multi-layered box shadows.
- **Neumorphic Aesthetic:** Smooth dual-shadow extrusion and inset recessed track styling optimized for dark mode interfaces.
- **Fully Accessible:** Includes proper ARIA progressbar attributes (`role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`), semantic container landmarks, and keyboard focus states.

## 🛠️ Usage Example

```html
<header class="em-progress-card" role="region" aria-label="Interactive Progress Bar Showcase" tabindex="0">
    <div class="em-progress-header-bar">
        <span class="em-card-badge">COMPONENT CONTRIBUTION</span>
        <span class="em-brand-logo">NeuMotion</span>
    </div>
    <h2 class="em-card-title">Interactive Progress Bar</h2>
    <p class="em-card-desc">A fully responsive neumorphic progress bar component.</p>
    <div class="em-progress-wrapper" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
        <div class="em-progress-track">
            <div class="em-progress-fill"></div>
        </div>
    </div>
</header>
