# CSS Input: 3D Variation

A smooth, accessible, and performant pure CSS 3D input field component featuring multi-layered extrusion shadow depth, dynamic focus-state translation, and frosted glassmorphism card styling for the EaseMotion library, fully addressing issue `#78510`.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS box-shadow offsets and hardware-accelerated `translateY` transforms.
- **Tactile 3D Depth:** Physical extrusion effect that shifts dynamically upon hover and focus states.
- **Dark Mode Compatible & Accessible:** Built with proper semantic landmark regions (`role="region"` / `<label>` / `<input>`), keyboard focus states, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<header class="em-input-card" role="region" aria-label="3D Input Field Showcase" tabindex="0">
    <div class="em-input-header-bar">
        <span class="em-card-badge">INPUT COMPONENTS</span>
        <span class="em-brand-logo">InputMotion</span>
    </div>
    <h2 class="em-card-title">3D Input Field</h2>
    <p class="em-card-desc">A smooth pure CSS 3D input field featuring extruded shadow depth.</p>
    <div class="em-input-wrapper">
        <div class="em-3d-input-group">
            <label for="em-3d-text-input" class="em-input-label">ENTER DETAILS</label>
            <input type="text" id="em-3d-text-input" class="em-3d-input" placeholder="Type something in 3D...">
        </div>
    </div>
</header>
