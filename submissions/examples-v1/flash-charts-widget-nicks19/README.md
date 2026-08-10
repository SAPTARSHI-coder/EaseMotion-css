# Flash Charts Widget (Medical Dashboard)

A pure CSS animated charts widget inspired by clean, clinical Medical Dashboard design patterns. Features a continuously animated "flash" ECG heartbeat line and smoothly animating status bars.

## Features

- **Pure CSS Animations**: Zero JavaScript used. The line drawing and bar fills are entirely handled by CSS keyframes.
- **SVG Stroke Animation**: Utilizes `stroke-dasharray` and `stroke-dashoffset` for the continuous flash drawing effect on the ECG line.
- **Medical UI Theme**: A pristine `#ffffff` surface with slate borders and standard medical status colors (danger red, info blue, success green).
- **Responsive & Accessible**: The SVG uses `preserveAspectRatio="none"` to stretch fluidly, and stats are text-based for screen readers.

## Installation

1. Copy the CSS from `style.css` into your project.
2. Structure your HTML identically to `demo.html`, ensuring the SVGs and `.ease-bar-fill` elements retain their inline style properties (like `--target-width`) for the CSS animations to hook onto.

## Usage Example

```html
<div class="ease-flash-widget">
  
  <!-- Continuously animating ECG Line -->
  <div class="ease-ecg-container">
    <svg class="ease-ecg-svg" viewBox="0 0 500 100" preserveAspectRatio="none">
      <polyline class="ease-ecg-line" points="..."></polyline>
    </svg>
  </div>

  <!-- Flash animating bar chart -->
  <div class="ease-stat-item">
    <div class="ease-stat-label">Oxygen</div>
    <div class="ease-bar-wrapper">
      <div class="ease-bar-fill ease-flash-bar-1" style="--target-width: 98%;"></div>
    </div>
    <div class="ease-stat-val">98%</div>
  </div>

</div>
```

## Why it fits EaseMotion CSS

- **Dynamic Data Visualization**: Bringing charts to life without JS overhead is a core ethos of a robust CSS animation library.
- **Physics-based Feel**: The bar fill animations use the `cubic-bezier(0.34, 1.56, 0.64, 1)` spring curve to snap satisfyingly into place, contrasting with the smooth linear loop of the heartbeat line.
- **Reusability**: By relying on CSS Custom Properties (`--target-width`), developers can easily integrate real data from backend systems while letting CSS handle the motion.
