# CSS Blur-Entrance Modal for Minimalist Tech Layouts

A pure CSS modal component featuring a snappy "blur-entrance" interaction, designed specifically to match the stark, functional aesthetics of **Minimalist Tech** interfaces (like developer tools or utilitarian SaaS platforms).

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` hack for pure CSS state management, Minimalist Tech aesthetics (stark contrast, sharp corners, fine borders), and the `filter: blur()` entrance animation logic.
- `demo.html` – A standalone HTML file demonstrating the modal functionality using an anchor link trigger, styled as an API configuration dialog.

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
<a href="#min-modal" class="demo-trigger-btn">Configure API Key</a>

<!-- Modal Structure -->
<div id="min-modal" class="ease-min-modal-overlay">
  
  <!-- Clicking this invisible backdrop closes the modal by navigating to # -->
  <a href="#" class="ease-min-modal-backdrop-close" tabindex="-1"></a>

  <div class="ease-min-modal-window" role="dialog" aria-labelledby="modal-title" aria-modal="true">
    <a href="#" class="ease-min-modal-close" aria-label="Close modal dialog">&times;</a>
    
    <h2 id="modal-title" class="ease-min-modal-title">API Configuration</h2>
    <p class="ease-min-modal-text">Modal content goes here...</p>
    
    <div class="ease-min-modal-actions">
      <a href="#" class="ease-min-modal-btn ease-min-modal-btn-secondary">Cancel</a>
      <a href="#" class="ease-min-modal-btn">Save Changes</a>
    </div>
  </div>

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-modal-timing` | `0.3s` | The duration of the blur and scale entrance animation (fast and snappy). |
| `--ease-modal-blur` | `blur(12px)` | The initial amount of blur applied before tapering to 0. |
| `--ease-min-radius` | `0px` | Sharp corners characteristic of minimalist/brutalist tech design. |

## Why it fits EaseMotion CSS
This component perfectly aligns with EaseMotion's philosophy by bringing premium, complex animations to pure CSS. The core interaction is the **Blur-Entrance**: utilizing the CSS `:target` pseudo-class, it simultaneously interpolates `opacity`, `transform: scale()`, and `filter: blur()` to bring the modal into view natively. For Minimalist Tech interfaces, this creates a sharp, immediate "focus-pulling" effect that elegantly draws the user's eye directly to utilitarian configuration details, all without requiring any JavaScript overhead.

---

> **Note:** PR modifies only files inside `submissions/examples/css-blur-entrance-modal-for-minimalist-tech-layouts-realtushartyagi-33974/`.
