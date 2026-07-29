# CSS Scale-Hover Accordion for Responsive Dashboard Layouts

A pure CSS accordion component featuring a tactile "scale-hover" interaction, designed specifically to fit into modern, card-based **Responsive Dashboard** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, hidden radio button mechanics for state management, clean dashboard aesthetics (subtle borders, soft shadows, blue accents), and the `transform: scale()` logic applied on hover.
- `demo.html` – A standalone HTML file demonstrating the accordion functionality in a typical dashboard settings or modules context.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This accordion relies on hidden `<input type="radio">` tags paired with `<label>` tags to trigger CSS state changes without JavaScript.

```html
<div class="ease-scale-dash-accordion">
  
  <div class="ease-scale-dash-item">
    <!-- State controller -->
    <input type="radio" name="scale-dash-acc" id="mod1" class="ease-scale-dash-input" checked />
    
    <!-- Clickable Header -->
    <label for="mod1" class="ease-scale-dash-label">
      Analytics & Reporting
      <span class="ease-scale-dash-icon">
        <svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
      </span>
    </label>
    
    <!-- Expanding Wrapper -->
    <div class="ease-scale-dash-wrapper">
      <div class="ease-scale-dash-content">
        <!-- Inner content -->
        <div class="ease-scale-dash-inner">
          <p>Accordion content goes here...</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Additional dashboard modules... -->

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and dashboard aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-scale-factor` | `1.02` | The multiplier by which the card grows when hovered. |
| `--ease-hover-timing` | `0.3s` | The duration of the scale and shadow hover transition. |
| `--ease-dash-accent` | `#3b82f6` | The primary modern blue accent color used for active states. |

## Why it fits EaseMotion CSS
This component entirely replaces JavaScript-based UI states by leveraging the CSS radio button hack. It focuses on functional micro-interactions through a **Scale-Hover** mechanic: when a user hovers over an accordion card, the entire container slightly scales up while elevating its box-shadow. This highly tactile, immediate physical feedback is a staple of modern web applications. Coupled with modern `:has()` selector enhancements to dynamically highlight active parent panels and CSS Grid for smooth height expansion, it delivers a highly polished native component perfect for data-dense dashboards.

---

> **Note:** PR modifies only files inside `submissions/examples/css-scale-hover-accordion-for-responsive-dashboard-layouts-realtushartyagi-32894/`.
