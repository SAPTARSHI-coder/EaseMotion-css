# CSS Neon Glow Accordion for Cyberpunk Neon Layouts

A pure CSS accordion component featuring an intense, flickering "neon glow" transition, styled specifically to enhance high-contrast, futuristic **Cyberpunk Neon** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, hidden radio button mechanics for state management, cyberpunk aesthetics (cut corners via `clip-path`, monospace fonts), and the `@keyframes ease-neon-flicker` logic applied dynamically to the active panel.
- `demo.html` – A standalone HTML file demonstrating the accordion functionality within a styled dark grid layout context.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This accordion relies on hidden `<input type="radio">` tags paired with `<label>` tags to trigger CSS state changes without JavaScript.

```html
<div class="ease-neon-cyber-accordion">
  
  <div class="ease-neon-cyber-item">
    <!-- State controller -->
    <input type="radio" name="cyber-neon-acc" id="neon1" class="ease-neon-cyber-input" checked />
    
    <!-- Clickable Header -->
    <label for="neon1" class="ease-neon-cyber-label">
      Neural Interface Logs
      <span class="ease-neon-cyber-icon"></span>
    </label>
    
    <!-- Expanding Wrapper -->
    <div class="ease-neon-cyber-wrapper">
      <div class="ease-neon-cyber-content">
        <!-- Inner content -->
        <div class="ease-neon-cyber-inner">
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
| `--ease-expand-timing` | `0.4s` | The speed of the accordion expansion (using CSS grid transitions). |
| `--ease-cyber-cyan` | `#00f0ff` | The primary neon cyan border and text color used in the default state. |
| `--ease-cyber-magenta`| `#ff003c` | The secondary intense neon color activated when a panel opens. |

## Why it fits EaseMotion CSS
This component entirely replaces JavaScript-based UI states by utilizing the CSS radio button hack. It focuses on visceral, high-energy visuals through a **Neon Glow** mechanic: when a panel expands, the native CSS `:has()` selector triggers a dynamic `@keyframes` flickering animation on the parent container, aggressively transitioning the `box-shadow` and border color from cyan to intense magenta. Paired with CSS Grid (`grid-template-rows: 0fr` to `1fr`) for perfectly smooth height animations, it provides an immersive, performant UI element natively in CSS.

---

> **Note:** PR modifies only files inside `submissions/examples/css-neon-glow-accordion-for-cyberpunk-neon-layouts-realtushartyagi-32934/`.
