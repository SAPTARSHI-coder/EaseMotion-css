# CSS Neon Glow Modal for Minimalist Tech Layouts

A pure CSS modal component featuring a sharp, electric "neon glow" interaction, designed specifically to match the stark, high-contrast aesthetics of **Minimalist Tech** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` hack for pure CSS state management, Minimalist Tech aesthetics (pure black backgrounds, ultra-thin borders), Neon Glow aesthetics (sharp electric blue drop shadow), and the scale/glow entrance animation logic.
- `demo.html` – A standalone HTML file demonstrating the modal functionality using an anchor link trigger, styled as a minimalist deployment configuration modal.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This modal relies on the CSS `:target` pseudo-class. By setting an anchor's `href` to the ID of the modal (`#min-modal`), the browser updates the URL hash, which CSS intercepts to display the modal overlay.

```html
<!-- Trigger -->
<a href="#min-modal" class="demo-trigger-btn">Deploy Configuration</a>

<!-- Modal Structure -->
<div id="min-modal" class="ease-min-modal-overlay">
  
  <!-- Clicking this invisible backdrop closes the modal by navigating to # -->
  <a href="#" class="ease-min-modal-backdrop-close" tabindex="-1"></a>

  <div class="ease-min-modal-window" role="dialog" aria-labelledby="modal-title" aria-modal="true">
    <a href="#" class="ease-min-modal-close" aria-label="Close modal dialog">&times;</a>
    
    <h2 id="modal-title" class="ease-min-modal-title">Confirm Deployment</h2>
    
    <p class="ease-min-modal-text">Modal content goes here...</p>
    
    <div class="ease-min-modal-actions">
      <a href="#" class="ease-min-modal-btn">Cancel</a>
      <a href="#" class="ease-min-modal-btn ease-min-modal-btn-primary">Deploy Now</a>
    </div>
    
  </div>

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-modal-timing` | `0.4s` | The duration of the glow and scale entrance animation. |
| `--ease-glow-neon-electric` | `#0070f3` | The stark electric blue color used for primary actions. |
| `--ease-glow-shadow-active` | `0 0 30px...` | The sharp, glowing box-shadow creating the neon effect on the modal window. |

## Why it fits EaseMotion CSS
This component perfectly aligns with EaseMotion's philosophy by bringing premium, complex animations to pure CSS. The core interaction is the **Neon Glow Entrance**: utilizing the CSS `:target` pseudo-class, it simultaneously interpolates `opacity`, `transform: scale()`, and a stark electric blue `box-shadow` to bring the modal into view natively. For Minimalist Tech layouts, this intense, singular glow provides a perfect high-contrast focus pull against stark black backgrounds, highlighting critical actions entirely without JavaScript.

---

> **Note:** PR modifies only files inside `submissions/examples/css-neon-glow-modal-for-minimalist-tech-layouts-realtushartyagi-33988/`.
