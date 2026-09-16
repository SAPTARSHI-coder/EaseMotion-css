# CSS Neon Glow Modal for SaaS Showcase Layouts

A pure CSS modal component featuring a vibrant "neon glow" interaction, designed specifically to match the premium, modern aesthetics of dark-mode **SaaS Showcase** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` hack for pure CSS state management, SaaS aesthetics (deep indigo backgrounds, gradient text, pill badges), Neon Glow aesthetics (layered purple/blue box-shadows), and the scale/glow entrance animation logic.
- `demo.html` – A standalone HTML file demonstrating the modal functionality using an anchor link trigger, styled as a SaaS feature highlight modal.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This modal relies on the CSS `:target` pseudo-class. By setting an anchor's `href` to the ID of the modal (`#saas-modal`), the browser updates the URL hash, which CSS intercepts to display the modal overlay.

```html
<!-- Trigger -->
<a href="#saas-modal" class="demo-trigger-btn">Discover New Features</a>

<!-- Modal Structure -->
<div id="saas-modal" class="ease-glow-modal-overlay">
  
  <!-- Clicking this invisible backdrop closes the modal by navigating to # -->
  <a href="#" class="ease-glow-modal-backdrop-close" tabindex="-1"></a>

  <div class="ease-glow-modal-window" role="dialog" aria-labelledby="modal-title" aria-modal="true">
    <a href="#" class="ease-glow-modal-close" aria-label="Close modal dialog">&times;</a>
    
    <div class="ease-glow-modal-body">
      <div class="ease-glow-modal-content">
        <span class="ease-glow-modal-badge">New Release</span>
        
        <h2 id="modal-title" class="ease-glow-modal-title">
          Experience the <span class="ease-glow-text-gradient">Future</span>
        </h2>
        
        <p class="ease-glow-modal-text">Modal content goes here...</p>
        
        <div class="ease-glow-modal-actions">
          <a href="#" class="ease-glow-modal-btn ease-glow-modal-btn-secondary">View Docs</a>
          <a href="#" class="ease-glow-modal-btn">Start Building</a>
        </div>
      </div>
    </div>

  </div>

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-modal-timing` | `0.5s` | The duration of the glow and scale entrance animation. |
| `--ease-glow-shadow-active` | `0 0 20px...` | The layered box-shadow creating the neon glow effect on the modal window. |
| `--ease-glow-neon-primary` | `#8b5cf6` | The vibrant purple neon color used for glows and primary actions. |

## Why it fits EaseMotion CSS
This component perfectly aligns with EaseMotion's philosophy by bringing premium, complex animations to pure CSS. The core interaction is the **Neon Glow Entrance**: utilizing the CSS `:target` pseudo-class, it simultaneously interpolates `opacity`, `transform: scale()`, and `box-shadow` to bring the modal into view natively. For SaaS Showcases, using vibrant, glowing gradients and deep shadows conveys a sense of high-end polish and modernity, all without requiring any JavaScript libraries.

---

> **Note:** PR modifies only files inside `submissions/examples/css-neon-glow-modal-for-saas-showcase-layouts-realtushartyagi-33986/`.
