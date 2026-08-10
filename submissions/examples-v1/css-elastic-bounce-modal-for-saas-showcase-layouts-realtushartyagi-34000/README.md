# CSS Elastic Bounce Modal for SaaS Showcase Layouts

A pure CSS modal component featuring a snappy, tactile "elastic bounce" entrance animation combined with a subtle 3D rotation, designed specifically to match the striking, high-contrast aesthetics of premium **SaaS Showcases** and landing pages.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` hack for pure CSS state management, SaaS Showcase aesthetics (dark glassmorphism, vibrant purple gradients, high-contrast typography), and the precise `cubic-bezier` timing function logic that creates the 3D elastic bounce effect.
- `demo.html` – A standalone HTML file demonstrating the modal functionality using an anchor link trigger, styled as a premium platform demo/video modal.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This modal relies on the CSS `:target` pseudo-class. By setting an anchor's `href` to the ID of the modal (`#showcase-modal`), the browser updates the URL hash, which CSS intercepts to display the modal overlay.

```html
<!-- Trigger -->
<a href="#showcase-modal" class="demo-trigger-btn">Watch Platform Demo</a>

<!-- Modal Structure -->
<div id="showcase-modal" class="ease-bounce-showcase-overlay">
  
  <!-- Clicking this invisible backdrop closes the modal by navigating to # -->
  <a href="#" class="ease-bounce-showcase-backdrop-close" tabindex="-1"></a>

  <div class="ease-bounce-showcase-window" role="dialog" aria-labelledby="modal-title" aria-modal="true">
    
    <div class="ease-bounce-showcase-header">
      <h2 id="modal-title" class="ease-bounce-showcase-title">Platform Overview</h2>
      <a href="#" class="ease-bounce-showcase-close" aria-label="Close modal dialog">&times;</a>
    </div>
    
    <div class="ease-bounce-showcase-body">
      <!-- Video placeholder or content goes here -->
    </div>
    
    <div class="ease-bounce-showcase-footer">
      <a href="#" class="ease-bounce-showcase-btn">Get Started for Free</a>
      <a href="#" class="ease-bounce-showcase-btn-secondary">Maybe later</a>
    </div>
    
  </div>

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-modal-timing` | `0.6s` | The duration of the elastic bounce entrance animation. |
| `--ease-modal-easing-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | The precise bezier curve that dictates the "spring" physics of the bounce. |
| `--ease-showcase-gradient` | `linear-gradient(...)` | The vibrant purple/pink gradient used for primary accents and buttons. |

## Why it fits EaseMotion CSS
This component perfectly aligns with EaseMotion's philosophy by bringing premium, complex animations to pure CSS. The core interaction is the **Elastic Bounce Entrance**: utilizing the CSS `:target` pseudo-class combined with a highly tailored `cubic-bezier` transition curve, the modal quickly springs into view (from a slightly rotated 3D perspective), overshoots its target scale, and settles perfectly. This delivers an incredibly tactile, native-feeling app interaction that provides users with a premium, "wow" factor suitable for SaaS landing pages, entirely without requiring any JavaScript libraries.

---

> **Note:** PR modifies only files inside `submissions/examples/css-elastic-bounce-modal-for-saas-showcase-layouts-realtushartyagi-34000/`.
