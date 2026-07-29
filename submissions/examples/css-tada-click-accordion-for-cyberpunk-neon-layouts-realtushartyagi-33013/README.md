# CSS Tada-Click Accordion for Cyberpunk Neon Layouts

A pure CSS accordion component featuring an impactful "tada-click" keyframe animation on the header, styled specifically for high-tech, futuristic **Cyberpunk Neon** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, hidden radio button mechanics for state management, cyberpunk-specific aesthetics (neon glows, clip-path cut corners), and the `@keyframes ease-tada` animation logic applied to the active label.
- `demo.html` – A standalone HTML file demonstrating the accordion functionality within a styled dark grid layout.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This accordion relies on hidden `<input type="radio">` tags paired with `<label>` tags to trigger CSS state changes without JavaScript.

```html
<div class="ease-tada-cyber-accordion">
  
  <div class="ease-tada-cyber-item">
    <!-- State controller -->
    <input type="radio" name="cyber-tada-acc" id="tada1" class="ease-tada-cyber-input" />
    
    <!-- Clickable Header that receives the Tada animation on click -->
    <label for="tada1" class="ease-tada-cyber-label">
      System Logs
      <span class="ease-tada-cyber-icon"></span>
    </label>
    
    <!-- Expanding Wrapper -->
    <div class="ease-tada-cyber-content-wrapper">
      <div class="ease-tada-cyber-content">
        <!-- Inner content -->
        <div class="ease-tada-cyber-inner">
          <p>Accordion content goes here...</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Additional items... -->

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and cyberpunk aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-expand-timing` | `0.4s` | The speed of the accordion expansion. |
| `--ease-cyber-accent-cyan`| `#00f0ff` | The primary neon cyan border and text color. |
| `--ease-cyber-accent-magenta`| `#ff003c` | The secondary active state neon color used when the tada animation triggers. |

## Why it fits EaseMotion CSS
This component perfectly aligns with EaseMotion's JavaScript-free philosophy by utilizing the CSS radio button hack for state management. The standout feature is the **Tada-Click** interaction: by binding an intricate `@keyframes` animation (involving rapid scaling and rotation) to the `:checked + label` selector, the component delivers immediate, kinetic feedback exactly when the user interacts with it. Combined with robust CSS Grid height transitions (`0fr` to `1fr`) and complex drop-shadows, it provides a highly immersive UI experience natively in CSS.

---

> **Note:** PR modifies only files inside `submissions/examples/css-tada-click-accordion-for-cyberpunk-neon-layouts-realtushartyagi-33013/`.
