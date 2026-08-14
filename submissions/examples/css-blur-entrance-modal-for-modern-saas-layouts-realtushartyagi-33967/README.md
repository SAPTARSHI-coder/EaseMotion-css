# CSS Blur-Entrance Modal for Modern SaaS Layouts

A pure CSS modal component featuring a sophisticated "blur-entrance" interaction, designed specifically to match the clean, minimalist aesthetics of **Modern SaaS (Software as a Service)** dashboard interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` hack for pure CSS state management, SaaS aesthetics (clean whites, soft shadows, crisp borders), and the `filter: blur()` entrance animation logic.
- `demo.html` – A standalone HTML file demonstrating the modal functionality using an anchor link trigger.

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
<a href="#saas-modal" class="demo-trigger-btn">Create New Project</a>

<!-- Modal Structure -->
<div id="saas-modal" class="ease-saas-modal-overlay">
  
  <!-- Clicking this invisible backdrop closes the modal by navigating to # -->
  <a href="#" class="ease-saas-modal-backdrop-close" tabindex="-1"></a>

  <div class="ease-saas-modal-window" role="dialog" aria-labelledby="modal-title" aria-modal="true">
    <!-- Close button inside the modal -->
    <a href="#" class="ease-saas-modal-close" aria-label="Close modal dialog">&times;</a>
    
    <h2 id="modal-title" class="ease-saas-modal-title">Create New Project</h2>
    <p class="ease-saas-modal-text">Modal content goes here...</p>
    
    <div class="ease-saas-modal-actions">
      <a href="#" class="ease-saas-modal-btn ease-saas-modal-btn-secondary">Cancel</a>
      <a href="#" class="ease-saas-modal-btn">Continue</a>
    </div>
  </div>

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-modal-timing` | `0.5s` | The duration of the blur and scale entrance animation. |
| `--ease-modal-blur` | `blur(12px)` | The initial amount of blur applied before tapering to 0. |
| `--ease-saas-primary` | `#3b82f6` | The primary brand color for primary action buttons (defaults to a modern blue). |

## Why it fits EaseMotion CSS
This component perfectly aligns with EaseMotion's philosophy by bringing premium, complex animations to pure CSS. The core interaction is the **Blur-Entrance**: utilizing the CSS `:target` pseudo-class, it simultaneously interpolates `opacity`, `transform: scale()`, and `filter: blur()` to bring the modal into view natively. This creates a cinematic, "focus-pulling" effect that is highly sought after in modern web applications (like macOS or modern SaaS dashboards) without requiring a single line of JavaScript.

---

> **Note:** PR modifies only files inside `submissions/examples/css-blur-entrance-modal-for-modern-saas-layouts-realtushartyagi-33967/`.
