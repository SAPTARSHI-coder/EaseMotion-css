# CSS Blur-Entrance Accordion for Creative Portfolio Layouts

A pure CSS accordion component featuring a highly cinematic "blur-entrance" animation, designed specifically for elegant, high-contrast **Creative Portfolio** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, hidden radio button mechanics for state management, creative portfolio aesthetics (stark minimalist lines, contrasting typography), and the `filter: blur()` logic applied to the expanding content.
- `demo.html` – A standalone HTML file demonstrating the accordion functionality in a typical "Selected Works / Case Studies" layout context.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This accordion relies on hidden `<input type="radio">` tags paired with `<label>` tags to trigger CSS state changes, completely avoiding the need for JavaScript.

```html
<div class="ease-blur-port-accordion">
  
  <div class="ease-blur-port-item">
    <!-- State controller -->
    <input type="radio" name="blur-port-acc" id="proj1" class="ease-blur-port-input" checked />
    
    <!-- Clickable Header -->
    <label for="proj1" class="ease-blur-port-label">
      01 / LUMINA BRANDING
      <span class="ease-blur-port-icon"></span>
    </label>
    
    <!-- Expanding Wrapper -->
    <div class="ease-blur-port-wrapper">
      <div class="ease-blur-port-content">
        <!-- Inner content featuring the Blur-Entrance -->
        <div class="ease-blur-port-inner">
          <p>Project details go here...</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Additional portfolio items... -->

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and portfolio aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-expand-timing` | `0.6s` | The duration of the accordion height expansion (using CSS grid transitions). |
| `--ease-blur-timing` | `0.8s` | The duration of the blur and opacity reveal on the inner text content. |
| `--ease-expand-easing` | `cubic-bezier(0.2, 0, 0, 1)` | An ultra-smooth ease-out function ensuring elegant deceleration. |

## Why it fits EaseMotion CSS
This component perfectly exemplifies how complex, premium visual effects can be achieved entirely in CSS. The core interaction is the **Blur-Entrance**: as the CSS Grid (`grid-template-rows: 0fr` to `1fr`) seamlessly expands the panel's height, the inner content (`.ease-blur-port-inner`) transitions from `filter: blur(12px)` and `opacity: 0` into sharp focus. Additionally, it leverages the modern CSS `:has()` pseudo-class on the parent accordion container to subtly dim inactive projects when one is opened, directing user focus mimicking a bespoke Javascript-driven experience—but with zero JS overhead.

---

> **Note:** PR modifies only files inside `submissions/examples/css-blur-entrance-accordion-for-creative-portfolio-layouts-realtushartyagi-32924/`.
