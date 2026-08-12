# CSS Slide-Right Accordion for Glassmorphism UI Layouts

A pure CSS accordion component featuring a sleek "slide-right" transition, styled specifically to complement translucent, frosted **Glassmorphism UI** aesthetics.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, hidden radio button mechanics for state management, glassmorphism-specific aesthetics (backdrop-filters, semi-transparent backgrounds), and the slide-right translation animation logic.
- `demo.html` – A standalone HTML file demonstrating the accordion functionality over a vibrant, animated gradient background to emphasize the glass effect.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This accordion relies on hidden `<input type="radio">` tags paired with `<label>` tags to trigger CSS state changes without JavaScript.

```html
<div class="ease-glass-accordion">
  
  <div class="ease-glass-item">
    <!-- State controller -->
    <input type="radio" name="glass-acc" id="glass1" class="ease-glass-input" checked />
    
    <!-- Clickable Header -->
    <label for="glass1" class="ease-glass-label">
      Visual Hierarchy
      <div class="ease-glass-icon"></div>
    </label>
    
    <!-- Expanding Wrapper -->
    <div class="ease-glass-content-wrapper">
      <div class="ease-glass-content">
        <!-- Inner content that slides to the right -->
        <div class="ease-glass-inner">
          <p>Accordion content goes here...</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Additional items... -->

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and glass aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-slide-timing` | `0.5s` | The speed of the accordion expansion and slide-in effect. |
| `--ease-slide-distance` | `-30px` | The starting horizontal position of the inner content before it slides into `0`. |
| `--ease-glass-blur` | `blur(12px)` | The intensity of the frosted glass background filter. |

## Why it fits EaseMotion CSS
This component entirely replaces JavaScript-based sliding menus by utilizing the CSS radio button hack. It emphasizes fluid, organic motion through a **Slide-Right** interaction: as the accordion expands (utilizing CSS grid `0fr` to `1fr` transitions for flawless height animation), the inner text content dynamically shifts from `translateX(-30px)` to `translateX(0)` while fading in. This provides a soft, directional entrance that perfectly suits the airy, layered aesthetic of modern Glassmorphism interfaces.

---

> **Note:** PR modifies only files inside `submissions/examples/css-slide-right-accordion-for-glassmorphism-ui-layouts-realtushartyagi-33055/`.
