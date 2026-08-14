# CSS Blur-Entrance Modal for Marketing Landing Page Layouts

A pure CSS modal component featuring a dramatic "blur-entrance" interaction, designed specifically to match the vibrant, high-conversion aesthetics of **Marketing Landing Pages**.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` hack for pure CSS state management, Marketing aesthetics (vibrant gradients, soft generous shadows, pill-shaped elements), and the `filter: blur()` entrance animation logic.
- `demo.html` – A standalone HTML file demonstrating the modal functionality using an anchor link trigger, styled as a premium CTA.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This modal relies on the CSS `:target` pseudo-class. By setting an anchor's `href` to the ID of the modal (`#mktg-modal`), the browser updates the URL hash, which CSS intercepts to display the modal overlay.

```html
<!-- Trigger -->
<a href="#mktg-modal" class="demo-trigger-btn">Unlock Premium Access</a>

<!-- Modal Structure -->
<div id="mktg-modal" class="ease-mktg-modal-overlay">
  
  <!-- Clicking this invisible backdrop closes the modal by navigating to # -->
  <a href="#" class="ease-mktg-modal-backdrop-close" tabindex="-1"></a>

  <div class="ease-mktg-modal-window" role="dialog" aria-labelledby="modal-title" aria-modal="true">
    <a href="#" class="ease-mktg-modal-close" aria-label="Close modal dialog">&times;</a>
    
    <span class="ease-mktg-modal-badge">Limited Time Offer</span>
    <h2 id="modal-title" class="ease-mktg-modal-title">Level Up Your Workflow</h2>
    <p class="ease-mktg-modal-text">Modal content goes here...</p>
    
    <a href="#" class="ease-mktg-modal-btn">Get Started for Free</a>
  </div>

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-modal-timing` | `0.6s` | The duration of the blur and scale entrance animation (slightly slower for impact). |
| `--ease-modal-blur` | `blur(20px)` | The initial amount of blur applied before tapering to 0. |
| `--ease-mktg-gradient` | `linear-gradient(...)` | The vibrant gradient used for the primary call-to-action button. |

## Why it fits EaseMotion CSS
This component perfectly aligns with EaseMotion's philosophy by bringing premium, complex animations to pure CSS. The core interaction is the **Blur-Entrance**: utilizing the CSS `:target` pseudo-class, it simultaneously interpolates `opacity`, `transform: scale()`, and `filter: blur()` to bring the modal into view natively. When paired with the soft, vibrant aesthetics typical of high-converting marketing sites, this creates a cinematic, "focus-pulling" effect that commands attention without relying on JavaScript libraries.

---

> **Note:** PR modifies only files inside `submissions/examples/css-blur-entrance-modal-for-marketing-landing-page-layouts-realtushartyagi-33969/`.
