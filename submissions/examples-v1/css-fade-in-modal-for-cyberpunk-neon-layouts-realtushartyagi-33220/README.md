# CSS Fade-In Modal for Cyberpunk Neon Layouts

A pure CSS modal component featuring a smooth, scalable "fade-in" interaction, designed specifically for dark-mode, high-contrast **Cyberpunk Neon** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` hack for pure CSS state management, cyberpunk aesthetics (dark mode, neon cyan/magenta glows, clipped corners), and the fade-in animation logic.
- `demo.html` – A standalone HTML file demonstrating the modal functionality using an anchor link trigger.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This modal relies on the CSS `:target` pseudo-class. By setting an anchor's `href` to the ID of the modal (`#cyber-modal`), the browser updates the URL hash, which CSS intercepts to display the modal overlay.

```html
<!-- Trigger -->
<a href="#cyber-modal" class="demo-trigger-btn">Initialize Override</a>

<!-- Modal Structure -->
<div id="cyber-modal" class="ease-neon-modal-overlay">
  
  <!-- Clicking this invisible backdrop closes the modal by navigating to # -->
  <a href="#" class="ease-neon-modal-backdrop-close" tabindex="-1"></a>

  <div class="ease-neon-modal-window">
    <!-- Close button inside the modal -->
    <a href="#" class="ease-neon-modal-close" aria-label="Close modal">&times;</a>
    
    <h2 class="ease-neon-modal-title">System Breach</h2>
    <p class="ease-neon-modal-text">Modal content goes here...</p>
    
    <a href="#" class="ease-neon-modal-btn">Acknowledge</a>
  </div>

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and neon aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-modal-timing` | `0.4s` | The duration of the fade and scale entrance animation. |
| `--ease-neon-border` | `#00ffcc` | The primary neon cyan accent color used for borders and glows. |
| `--ease-neon-accent` | `#ff00ff` | The secondary neon magenta accent color used for titles and text glow. |

## Why it fits EaseMotion CSS
This component exemplifies the EaseMotion philosophy by leveraging advanced CSS techniques to replace JavaScript-driven UI states. The core interaction is the **Fade-In Modal**: utilizing the CSS `:target` pseudo-class, it seamlessly interpolates `opacity` and `transform: scale()` to bring the modal into view smoothly. Combined with cyberpunk elements like `clip-path` for angled geometry and multiple `box-shadow` layers for intense neon blooming, it delivers a highly performant, visually striking UI element natively in the browser.

---

> **Note:** PR modifies only files inside `submissions/examples/css-fade-in-modal-for-cyberpunk-neon-layouts-realtushartyagi-33220/`.
