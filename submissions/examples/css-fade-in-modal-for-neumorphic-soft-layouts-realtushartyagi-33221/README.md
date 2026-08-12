# CSS Fade-In Modal for Neumorphic Soft Layouts

A pure CSS modal component featuring a smooth, scalable "fade-in" interaction, designed specifically for soft, tactile **Neumorphic (Soft UI)** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` hack for pure CSS state management, Neumorphic aesthetics (soft shadows, embossed/debossed effects, rounded corners), and the fade-in animation logic.
- `demo.html` – A standalone HTML file demonstrating the modal functionality using an anchor link trigger.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This modal relies on the CSS `:target` pseudo-class. By setting an anchor's `href` to the ID of the modal (`#neu-modal`), the browser updates the URL hash, which CSS intercepts to display the modal overlay.

```html
<!-- Trigger -->
<a href="#neu-modal" class="demo-trigger-btn">Open Settings</a>

<!-- Modal Structure -->
<div id="neu-modal" class="ease-neu-modal-overlay">
  
  <!-- Clicking this invisible backdrop closes the modal by navigating to # -->
  <a href="#" class="ease-neu-modal-backdrop-close" tabindex="-1"></a>

  <div class="ease-neu-modal-window">
    <!-- Close button inside the modal -->
    <a href="#" class="ease-neu-modal-close" aria-label="Close modal">&times;</a>
    
    <h2 class="ease-neu-modal-title">Preferences</h2>
    <p class="ease-neu-modal-text">Modal content goes here...</p>
    
    <a href="#" class="ease-neu-modal-btn">Save Changes</a>
  </div>

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and neumorphic aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-modal-timing` | `0.4s` | The duration of the fade and scale entrance animation. |
| `--ease-neu-bg` | `#e0e5ec` | The primary background color essential for the Neumorphic shadow blend. |
| `--ease-neu-shadow-outer` | `...` | The double box-shadow (light and dark) used for embossed elements. |

## Why it fits EaseMotion CSS
This component exemplifies the EaseMotion philosophy by leveraging advanced CSS techniques to replace JavaScript-driven UI states. The core interaction is the **Fade-In Modal**: utilizing the CSS `:target` pseudo-class, it seamlessly interpolates `opacity` and `transform: scale()` to bring the modal into view smoothly. Combined with the highly tactile styling of Neumorphism—relying on layered, subtle `box-shadow` values to simulate physical extrusion—it delivers a highly performant, visually cohesive UI element natively in the browser.

---

> **Note:** PR modifies only files inside `submissions/examples/css-fade-in-modal-for-neumorphic-soft-layouts-realtushartyagi-33221/`.
