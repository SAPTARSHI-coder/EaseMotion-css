# CSS Draw-Border Line Modal for Responsive Dashboard Layouts

A pure CSS modal component featuring an elegant, animated border-drawing effect, styled specifically for clean, functional **Responsive Dashboard** aesthetics.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` trigger mechanics, and the pseudo-element width/height transitions that create the draw-border effect.
- `demo.html` – A standalone HTML file demonstrating the modal functionality in a dashboard widget layout without JavaScript.

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
<a href="#dashboard-modal" class="ease-draw-trigger-btn">Edit Settings</a>

<!-- Modal Overlay & Animated Container -->
<div id="dashboard-modal" class="ease-draw-modal-overlay">
  <div class="ease-draw-modal-container">
    
    <!-- Inner Content -->
    <div class="ease-draw-modal-content">
      <a href="#" class="ease-draw-modal-close">&times;</a>
      <h2>Settings</h2>
      <p>Modal content goes here...</p>
    </div>

  </div>
</div>
```

## CSS Custom Properties
Adjust the animation timing and dashboard colors via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-modal-transition` | `0.3s` | The speed of the modal overlay fade and content entrance. |
| `--ease-draw-duration` | `0.6s` | The total time it takes to draw the border. |
| `--ease-dash-accent` | `#3b82f6` | The primary accent color for buttons and the drawn border. |

## Why it fits EaseMotion CSS
This component completely replaces the need for JavaScript state management by relying natively on CSS and the URL hash (`:target`). The draw-border effect uses `transition` delays on the pseudo-elements' `width` and `height` properties to sequence the drawing animation perfectly. This aligns seamlessly with the EaseMotion philosophy of creating complex, premium micro-interactions purely through standard CSS mechanics.

---

> **Note:** PR modifies only files inside `submissions/examples/css-draw-border-line-modal-for-responsive-dashboard-layouts-realtushartyagi-34230/`.
