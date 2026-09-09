# CSS Elastic Bounce Modal for Dashboard Analytics Layouts

A pure CSS modal component featuring a snappy, tactile "elastic bounce" entrance animation, designed specifically to match the dense, data-heavy aesthetics of **Dashboard Analytics** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` hack for pure CSS state management, Dashboard Analytics aesthetics (dark slate themes, data-card grid layouts, red/green trend indicators), and the precise `cubic-bezier` timing function logic that creates the elastic bounce effect.
- `demo.html` – A standalone HTML file demonstrating the modal functionality using an anchor link trigger, styled as a real-time metrics quick-view modal.

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
<a href="#dash-modal" class="demo-trigger-btn">View Detailed Analytics</a>

<!-- Modal Structure -->
<div id="dash-modal" class="ease-bounce-dash-overlay">
  
  <!-- Clicking this invisible backdrop closes the modal by navigating to # -->
  <a href="#" class="ease-bounce-dash-backdrop-close" tabindex="-1"></a>

  <div class="ease-bounce-dash-window" role="dialog" aria-labelledby="modal-title" aria-modal="true">
    
    <div class="ease-bounce-dash-header">
      <h2 id="modal-title" class="ease-bounce-dash-title">Real-Time Metrics Overview</h2>
      <a href="#" class="ease-bounce-dash-close" aria-label="Close modal dialog">&times;</a>
    </div>
    
    <div class="ease-bounce-dash-body">
      <!-- Data grid goes here -->
    </div>
    
    <div class="ease-bounce-dash-footer">
      <a href="#" class="ease-bounce-dash-btn">Export Data</a>
      <a href="#" class="ease-bounce-dash-btn ease-bounce-dash-btn-primary">View Full Report</a>
    </div>
    
  </div>

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-modal-timing` | `0.55s` | The duration of the elastic bounce entrance animation. |
| `--ease-modal-easing-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | The precise bezier curve that dictates the "spring" physics of the bounce. |
| `--ease-dash-success` | `#10b981` | The green color used for positive data trends. |

## Why it fits EaseMotion CSS
This component perfectly aligns with EaseMotion's philosophy by bringing premium, complex animations to pure CSS. The core interaction is the **Elastic Bounce Entrance**: utilizing the CSS `:target` pseudo-class combined with a highly tailored `cubic-bezier` transition curve, the modal quickly springs into view, overshoots its target scale slightly, and settles back perfectly. This delivers an incredibly tactile, native-feeling app interaction typical of high-performance analytics dashboards, entirely without requiring any JavaScript libraries.

---

> **Note:** PR modifies only files inside `submissions/examples/css-elastic-bounce-modal-for-dashboard-analytics-layouts-realtushartyagi-33996/`.
