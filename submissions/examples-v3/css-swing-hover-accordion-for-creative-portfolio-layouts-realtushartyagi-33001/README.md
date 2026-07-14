# CSS Swing-Hover Accordion for Creative Portfolio Layouts

A pure CSS accordion component featuring a playful, organic "swing-hover" interaction, styled specifically for minimalist, typography-driven **Creative Portfolio** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, hidden radio button mechanics for state management, portfolio-specific aesthetics (Bodoni Moda/Manrope pairing, generous whitespace), and the `@keyframes ease-swing` logic applied on hover.
- `demo.html` – A standalone HTML file demonstrating the accordion functionality in a high-end, editorial "Services & Capabilities" layout context.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This accordion relies on hidden `<input type="radio">` tags paired with `<label>` tags to trigger CSS state changes without JavaScript.

```html
<div class="ease-swing-port-accordion">
  
  <div class="ease-swing-port-item">
    <!-- State controller -->
    <input type="radio" name="port-swing-acc" id="swing1" class="ease-swing-port-input" checked />
    
    <!-- Clickable Header that receives the Swing animation on hover -->
    <label for="swing1" class="ease-swing-port-label">
      <div>
        <span class="ease-swing-port-number">01</span>
        <span class="ease-swing-port-title">Art Direction</span>
      </div>
      <span class="ease-swing-port-icon">+</span>
    </label>
    
    <!-- Expanding Wrapper -->
    <div class="ease-swing-port-content-wrapper">
      <div class="ease-swing-port-content">
        <!-- Inner content -->
        <div class="ease-swing-port-inner">
          <p>Accordion content goes here...</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Additional items... -->

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and portfolio aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-expand-timing` | `0.6s` | The speed of the accordion expansion (using CSS grid transitions). |
| `--ease-port-accent` | `#c0392b` | The accent color applied to the swinging icon on hover and active states. |

## Why it fits EaseMotion CSS
This component entirely replaces JavaScript-based accordion states by utilizing the CSS radio button hack. It emphasizes organic, delightful micro-interactions through a **Swing-Hover** mechanic: when a user hovers over a collapsed accordion header, the `+` icon triggers a custom `@keyframes` animation, swinging gently back and forth like a pendulum. Coupled with smooth, hardware-accelerated CSS Grid height transitions (`0fr` to `1fr`) and typography that elegantly shifts upon activation, it provides a highly refined user experience natively in CSS.

---

> **Note:** PR modifies only files inside `submissions/examples/css-swing-hover-accordion-for-creative-portfolio-layouts-realtushartyagi-33001/`.
