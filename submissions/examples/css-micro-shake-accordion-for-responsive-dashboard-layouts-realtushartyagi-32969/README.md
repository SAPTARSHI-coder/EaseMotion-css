# CSS Micro Shake Accordion for Responsive Dashboard Layouts

A pure CSS accordion component featuring a subtle "micro shake" interaction on hover, designed specifically for clean, card-based **Responsive Dashboard** layouts.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, hidden radio button mechanics for state management, dashboard-specific aesthetics (soft shadows, light backgrounds, blue accents), and the `@keyframes ease-micro-shake` logic applied on hover.
- `demo.html` – A standalone HTML file demonstrating the accordion functionality in a typical "System Settings" dashboard context.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This accordion relies on hidden `<input type="radio">` tags paired with `<label>` tags to trigger CSS state changes natively, avoiding the need for JavaScript.

```html
<div class="ease-shake-dash-accordion">
  
  <div class="ease-shake-dash-item">
    <!-- State controller -->
    <input type="radio" name="dash-shake-acc" id="shake1" class="ease-shake-dash-input" checked />
    
    <!-- Clickable Header that triggers the Micro Shake animation on the icon when hovered -->
    <label for="shake1" class="ease-shake-dash-label">
      Profile Information
      <span class="ease-shake-dash-icon"></span>
    </label>
    
    <!-- Expanding Wrapper -->
    <div class="ease-shake-dash-wrapper">
      <div class="ease-shake-dash-content">
        <!-- Inner content -->
        <div class="ease-shake-dash-inner">
          <p>Accordion content goes here...</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Additional items... -->

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and dashboard aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-expand-timing` | `0.35s` | The speed of the accordion expansion (using CSS grid transitions). |
| `--ease-dash-accent` | `#3b82f6` | The primary blue accent color used for active states and hover effects. |

## Why it fits EaseMotion CSS
This component entirely replaces JavaScript-based UI states by leveraging the CSS radio button hack. It focuses on functional micro-interactions through a **Micro Shake** mechanic: when a user hovers over a collapsed accordion panel, the chevron indicator triggers a brief, tiny X-axis `@keyframes` shake. This highly tactile, immediate feedback signifies interactivity without being visually overwhelming. Coupled with modern `:has()` selector enhancements to highlight active panels and CSS Grid for smooth height expansion, it delivers a highly polished native component perfect for data-dense dashboards.

---

> **Note:** PR modifies only files inside `submissions/examples/css-micro-shake-accordion-for-responsive-dashboard-layouts-realtushartyagi-32969/`.
