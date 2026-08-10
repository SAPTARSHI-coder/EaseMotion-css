# CSS Neon Glow Modal for Glassmorphism UI Layouts

A pure CSS modal component featuring a vibrant "neon glow" interaction, designed specifically to match the trendy, translucent aesthetics of **Glassmorphism UI** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` hack for pure CSS state management, Glassmorphism aesthetics (`backdrop-filter`, translucent backgrounds, inner glass glares), Neon Glow aesthetics (vibrant cyan and magenta outer glows), and the scale/glow entrance animation logic.
- `demo.html` – A standalone HTML file demonstrating the modal functionality using an anchor link trigger, styled against an abstract, colorful animated background to properly showcase the frosted glass effect.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This modal relies on the CSS `:target` pseudo-class. By setting an anchor's `href` to the ID of the modal (`#glass-modal`), the browser updates the URL hash, which CSS intercepts to display the modal overlay.

```html
<!-- Trigger -->
<a href="#glass-modal" class="demo-trigger-btn">Open Glass Panel</a>

<!-- Modal Structure -->
<div id="glass-modal" class="ease-glass-modal-overlay">
  
  <!-- Clicking this invisible backdrop closes the modal by navigating to # -->
  <a href="#" class="ease-glass-modal-backdrop-close" tabindex="-1"></a>

  <div class="ease-glass-modal-window" role="dialog" aria-labelledby="modal-title" aria-modal="true">
    <a href="#" class="ease-glass-modal-close" aria-label="Close modal dialog">&times;</a>
    
    <h2 id="modal-title" class="ease-glass-modal-title">Glassmorphism Meets Neon</h2>
    
    <p class="ease-glass-modal-text">Modal content goes here...</p>
    
    <div class="ease-glass-modal-actions">
      <a href="#" class="ease-glass-modal-btn">Cancel</a>
      <a href="#" class="ease-glass-modal-btn ease-glass-modal-btn-primary">Confirm</a>
    </div>
    
  </div>

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-modal-timing` | `0.5s` | The duration of the glow and scale entrance animation. |
| `--ease-glass-blur` | `blur(16px)` | The strength of the frosted glass backdrop filter. |
| `--ease-glow-shadow-active` | `-10px -10px 30px...` | The layered box-shadow creating the dual-color neon glow effect outside the glass pane. |

## Why it fits EaseMotion CSS
This component perfectly aligns with EaseMotion's philosophy by bringing premium, complex animations to pure CSS. The core interaction is the **Neon Glow Entrance**: utilizing the CSS `:target` pseudo-class, it simultaneously interpolates `opacity`, `transform: scale()`, and a dual-tone `box-shadow` to bring the modal into view natively. When paired with Glassmorphism's frosted glass backdrop, the intense neon glow from behind the panel creates a visually stunning, futuristic aesthetic that requires absolutely zero JavaScript to function.

---

> **Note:** PR modifies only files inside `submissions/examples/css-neon-glow-modal-for-glassmorphism-ui-layouts-realtushartyagi-33987/`.
