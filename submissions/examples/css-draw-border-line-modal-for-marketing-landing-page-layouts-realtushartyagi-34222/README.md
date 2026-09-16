# CSS Draw-Border Line Modal for Marketing Landing Page Layouts

A pure CSS modal component featuring a vibrant, thick draw-border line animation, designed specifically to capture attention in **Marketing Landing Page** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` trigger mechanics, and the pseudo-element width/height transitions that create the bold draw-border effect.
- `demo.html` – A standalone HTML file demonstrating the modal functionality in a marketing hero section layout.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This modal uses the CSS `:target` pseudo-class to open and close. Your trigger button should be an `<a>` tag that links to the modal's `id`.

```html
<!-- Trigger -->
<a href="#marketing-modal" class="ease-draw-mktg-trigger-btn">Get Early Access</a>

<!-- Modal Overlay & Animated Container -->
<div id="marketing-modal" class="ease-draw-mktg-modal-overlay">
  <div class="ease-draw-mktg-modal-container">
    
    <!-- Inner Content -->
    <div class="ease-draw-mktg-modal-content">
      <a href="#" class="ease-draw-mktg-modal-close">&times;</a>
      <h2>Unlock Premium Features</h2>
      <p>Modal content goes here...</p>
    </div>

  </div>
</div>
```

## CSS Custom Properties
Adjust the animation timing, layout, and marketing colors via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-modal-transition` | `0.4s` | The speed of the modal overlay fade and content entrance (uses a bouncy cubic-bezier). |
| `--ease-draw-duration` | `0.8s` | The total time it takes to draw the thick border around the modal. |
| `--ease-mktg-accent` | `#ff4757` | The vibrant primary accent color for buttons and the drawn border. |

## Why it fits EaseMotion CSS
This component removes the need for JavaScript state management by utilizing the CSS `:target` pseudo-class for interactivity. The draw-border animation relies entirely on CSS `transition` delays on the `width` and `height` of the `::before` and `::after` pseudo-elements. The combination of a bouncy entrance cubic-bezier and the sequential drawing effect results in a highly engaging, 60fps micro-interaction perfectly suited for modern marketing pages.

---

> **Note:** PR modifies only files inside `submissions/examples/css-draw-border-line-modal-for-marketing-landing-page-layouts-realtushartyagi-34222/`.
