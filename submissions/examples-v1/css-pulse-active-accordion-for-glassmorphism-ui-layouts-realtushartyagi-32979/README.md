# CSS Pulse-Active Accordion for Glassmorphism UI Layouts

A pure CSS accordion component featuring a subtle, continuous "pulse-active" glow, styled perfectly to integrate with translucent, frosted **Glassmorphism UI** aesthetics.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, hidden radio button mechanics for state management, glassmorphism aesthetics (backdrop-filters, semi-transparent backgrounds), and the `@keyframes ease-glass-pulse` continuous glow animation applied to the active parent panel.
- `demo.html` – A standalone HTML file demonstrating the accordion functionality over a vibrant, animated gradient background with floating shapes to highlight the frosted glass effect.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This accordion relies on hidden `<input type="radio">` tags paired with `<label>` tags to trigger CSS state changes without JavaScript. 

```html
<div class="ease-pulse-glass-accordion">
  
  <div class="ease-pulse-glass-item">
    <!-- State controller -->
    <input type="radio" name="glass-pulse-acc" id="pulse1" class="ease-pulse-glass-input" checked />
    
    <!-- Clickable Header -->
    <label for="pulse1" class="ease-pulse-glass-label">
      Pulse-Active Interaction
      <span class="ease-pulse-glass-icon"></span>
    </label>
    
    <!-- Expanding Wrapper -->
    <div class="ease-pulse-glass-wrapper">
      <div class="ease-pulse-glass-content">
        <!-- Inner content -->
        <div class="ease-pulse-glass-inner">
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
| `--ease-expand-timing` | `0.5s` | The speed of the accordion expansion (using CSS grid transitions). |
| `--ease-glass-blur` | `blur(16px)` | The intensity of the frosted glass background filter. |

## Why it fits EaseMotion CSS
This component entirely replaces JavaScript-based accordion states and interval-based pulsing animations by utilizing native CSS features. The core interaction is the **Pulse-Active** effect: utilizing the modern CSS `:has()` selector, we detect when a nested radio button is checked (`.ease-pulse-glass-item:has(.ease-pulse-glass-input:checked)`) and dynamically apply an infinite `@keyframes` pulsing animation to the parent glass panel. This causes the active panel to softly throb (via background opacity and box-shadow), drawing focus naturally while perfectly maintaining the translucent, layered look of Glassmorphism.

---

> **Note:** PR modifies only files inside `submissions/examples/css-pulse-active-accordion-for-glassmorphism-ui-layouts-realtushartyagi-32979/`.
