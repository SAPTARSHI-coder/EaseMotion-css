# CSS Blur-Entrance Modal for Cyberpunk Neon Layouts

A pure CSS modal component featuring an aggressive "blur-entrance" interaction, designed specifically to match the high-contrast, glowing aesthetics of **Cyberpunk Neon** or Sci-Fi interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` hack for pure CSS state management, Cyberpunk aesthetics (neon glows, sharp corners, monospaced fonts, pseudo-element cutouts), and the `filter: blur()` entrance animation logic.
- `demo.html` – A standalone HTML file demonstrating the modal functionality using an anchor link trigger, styled as a system override warning.

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
<a href="#cyber-modal" class="demo-trigger-btn">INIT_SYSTEM_OVERRIDE</a>

<!-- Modal Structure -->
<div id="cyber-modal" class="ease-cyber-modal-overlay">
  
  <!-- Clicking this invisible backdrop closes the modal by navigating to # -->
  <a href="#" class="ease-cyber-modal-backdrop-close" tabindex="-1"></a>

  <div class="ease-cyber-modal-window" role="dialog" aria-labelledby="modal-title" aria-modal="true">
    <a href="#" class="ease-cyber-modal-close" aria-label="Close modal dialog">[X]</a>
    
    <div class="ease-cyber-modal-header">
      <h2 id="modal-title" class="ease-cyber-modal-title">WARNING: OVERRIDE</h2>
    </div>
    
    <p class="ease-cyber-modal-text">Modal content goes here...</p>
    
    <div class="ease-cyber-modal-actions">
      <a href="#" class="ease-cyber-modal-btn ease-cyber-modal-btn-alt">ABORT</a>
      <a href="#" class="ease-cyber-modal-btn">EXECUTE</a>
    </div>
  </div>

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-modal-timing` | `0.35s` | The duration of the blur and scale entrance animation. |
| `--ease-modal-blur` | `blur(18px)` | The initial amount of blur applied before tapering to 0. |
| `--ease-cyber-neon-cyan` | `#00ffff` | The primary neon color used for borders and glows. |

## Why it fits EaseMotion CSS
This component perfectly aligns with EaseMotion's philosophy by bringing premium, complex animations to pure CSS. The core interaction is the **Blur-Entrance**: utilizing the CSS `:target` pseudo-class, it simultaneously interpolates `opacity`, `transform: scale()`, and `filter: blur()` to bring the modal into view natively. For Cyberpunk interfaces, this creates a dramatic, glitch-adjacent "focus-pulling" effect that elegantly draws the user's eye directly to critical system warnings or data inputs, all without requiring any JavaScript overhead.

---

> **Note:** PR modifies only files inside `submissions/examples/css-blur-entrance-modal-for-cyberpunk-neon-layouts-realtushartyagi-33975/`.
