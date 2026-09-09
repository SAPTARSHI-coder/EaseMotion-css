# CSS Blur-Entrance Modal for Dashboard Analytics Layouts

A pure CSS modal component featuring a sophisticated "blur-entrance" interaction, designed specifically to match the dense, data-heavy, dark-mode aesthetics of **Dashboard Analytics** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` hack for pure CSS state management, Analytics dashboard aesthetics (dark themes, monospaced data blocks, tight borders), and the `filter: blur()` entrance animation logic.
- `demo.html` – A standalone HTML file demonstrating the modal functionality using an anchor link trigger, complete with an example data-warning layout.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This modal relies on the CSS `:target` pseudo-class. By setting an anchor's `href` to the ID of the modal (`#dash-modal`), the browser updates the URL hash, which CSS intercepts to display the modal overlay.

```html
<!-- Trigger -->
<a href="#dash-modal" class="demo-trigger-btn">Purge Analytics Data</a>

<!-- Modal Structure -->
<div id="dash-modal" class="ease-dash-modal-overlay">
  
  <!-- Clicking this invisible backdrop closes the modal by navigating to # -->
  <a href="#" class="ease-dash-modal-backdrop-close" tabindex="-1"></a>

  <div class="ease-dash-modal-window" role="dialog" aria-labelledby="modal-title" aria-modal="true">
    <div class="ease-dash-modal-header">
      <h2 id="modal-title" class="ease-dash-modal-title">Confirm Data Purge</h2>
      <a href="#" class="ease-dash-modal-close" aria-label="Close modal dialog">&times;</a>
    </div>

    <div class="ease-dash-modal-content">Modal content goes here...</div>
    
    <div class="ease-dash-modal-actions">
      <a href="#" class="ease-dash-modal-btn ease-dash-modal-btn-secondary">Cancel</a>
      <a href="#" class="ease-dash-modal-btn ease-dash-modal-btn-danger">Purge Data</a>
    </div>
  </div>

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-modal-timing` | `0.4s` | The duration of the blur and scale entrance animation. |
| `--ease-modal-blur` | `blur(16px)` | The initial amount of blur applied before tapering to 0. |
| `--ease-dash-bg` | `#1f2937` | The dark background color of the modal window. |

## Why it fits EaseMotion CSS
This component perfectly aligns with EaseMotion's philosophy by bringing premium, complex animations to pure CSS. The core interaction is the **Blur-Entrance**: utilizing the CSS `:target` pseudo-class, it simultaneously interpolates `opacity`, `transform: scale()`, and `filter: blur()` to bring the modal into view natively. This creates a cinematic, "focus-pulling" effect that commands attention—ideal for critical alerts or deep-dives in dense analytics dashboards, all without requiring JavaScript overhead.

---

> **Note:** PR modifies only files inside `submissions/examples/css-blur-entrance-modal-for-dashboard-analytics-layouts-realtushartyagi-33968/`.
