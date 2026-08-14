# Interactive Toggle Component

A fully responsive, accessible, and performant pure CSS interactive toggle switch component featuring smooth sliding states, glowing accent highlights, and frosted glassmorphism styling for the EaseMotion CSS library.

## 🚀 Features

- **Zero JavaScript Required:** Built using native CSS checkbox states (`input:checked`), smooth transition curves, and backdrop blur filters.
- **Dynamic Interaction:** Fluid thumb slide and glowing accent background shift when activated.
- **Dark Mode Compatible & Accessible:** Built with proper landmark regions (`role="region"`), semantic form controls (`<input type="checkbox">`), and keyboard focus outlines.

## 🛠️ Usage Example

```html
<div class="em-toggle-card" role="region" aria-label="Interactive Toggle Showcase" tabindex="0">
    <span class="em-card-badge">COMPONENTS</span>
    <h2 class="em-card-title">Interactive Toggle</h2>
    <p class="em-card-desc">A high-performance pure CSS toggle switch component.</p>
    <div class="em-toggle-wrapper">
        <label class="em-toggle-switch">
            <input type="checkbox" aria-label="Toggle Switch">
            <span class="em-toggle-slider"></span>
        </label>
    </div>
</div>
