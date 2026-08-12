# CSS Zoom-Out Accordion for Cyberpunk Neon Layouts

A pure CSS accordion component featuring an impactful "zoom-out" expansion animation, styled specifically for high-tech, futuristic **Cyberpunk Neon** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the hidden radio button mechanics for state management, cyberpunk-specific aesthetics (neon glows, clip-path cut corners), and the scaling transitions that create the zoom-out effect.
- `demo.html` – A standalone HTML file demonstrating the accordion functionality within a styled dark grid "system logs" layout.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This accordion relies on hidden `<input type="radio">` tags (or checkboxes for multi-expand behavior) paired with `<label>` tags to trigger the CSS state changes without JavaScript.

```html
<div class="ease-zoom-cyber-accordion">
  
  <div class="ease-zoom-cyber-item">
    <!-- State controller -->
    <input type="radio" name="cyber-acc" id="acc1" class="ease-zoom-cyber-input" checked />
    
    <!-- Clickable Header -->
    <label for="acc1" class="ease-zoom-cyber-label">Neuromancer Protocols</label>
    
    <!-- Expanding Wrapper -->
    <div class="ease-zoom-cyber-content-wrapper">
      <div class="ease-zoom-cyber-content">
        <!-- Inner content that receives the zoom-out transform -->
        <div class="ease-zoom-cyber-inner">
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
| `--ease-zoom-timing` | `0.4s` | The speed of the accordion expansion and zoom effect. |
| `--ease-zoom-start-scale`| `1.15` | The initial scale of the content before it zooms out to `1`. |
| `--ease-cyber-accent-cyan`| `#00f0ff` | The primary neon cyan border and text color. |
| `--ease-cyber-accent-magenta`| `#ff003c` | The secondary active state neon color. |

## Why it fits EaseMotion CSS
This component completely replaces the need for JavaScript state management by utilizing the CSS hidden radio button trick. The "zoom-out" effect is achieved by animating `transform: scale()` on the inner content simultaneously as the parent grid container transitions its `grid-template-rows` from `0fr` to `1fr`. Coupled with modern `:has()` selector usage to dynamically illuminate the parent container on activation, this approach delivers a seamless, highly performant, and deeply immersive interaction.

---

> **Note:** PR modifies only files inside `submissions/examples/css-zoom-out-accordion-for-cyberpunk-neon-layouts-realtushartyagi-33085/`.
