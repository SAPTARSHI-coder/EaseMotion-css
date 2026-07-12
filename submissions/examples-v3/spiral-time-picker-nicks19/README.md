# Pure CSS Spiral Time Picker

A beautifully animated, pure CSS time picker inspired by Android/Material and Startup design patterns. It features two concentric rings (a spiral) representing the 24-hour clock format, enabling fluid time selection with exactly zero JavaScript.

## Features

- **Zero JavaScript**: Entirely powered by HTML radio buttons and advanced CSS sibling selectors.
- **Spiral Layout**: Uses CSS polar-like coordinate translations to position the 24-hour markers in inner and outer rings.
- **Dynamic Pointer Animation**: The central pointer line dynamically stretches and rotates to connect with the selected time using EaseMotion's fluid spring curve.
- **Keyboard Accessible**: Focus states are preserved by keeping the inputs structurally accessible rather than using `display: none`.
- **Customizable Variables**: Driven by CSS custom properties for easy theme integration.

## Installation

Copy `style.css` and the HTML structure from `demo.html` into your project.

## Usage Example

```html
<div class="ease-spiral-picker">
  <div class="ease-spiral-center"></div>
  
  <!-- Outer spiral item (1-12) -->
  <input type="radio" name="hour" id="h-1" class="ease-spiral-input" />
  <label for="h-1" class="ease-spiral-item ease-outer-spiral" style="--angle: 30deg;">1</label>
  
  <!-- Inner spiral item (13-00) -->
  <input type="radio" name="hour" id="h-13" class="ease-spiral-input" />
  <label for="h-13" class="ease-spiral-item ease-inner-spiral" style="--angle: 30deg;">13</label>

  <!-- Connective pointer -->
  <div class="ease-spiral-pointer"></div>
</div>
```

## Why it fits EaseMotion CSS

- **Simultaneous Animations**: It gracefully interpolates both the `transform: rotate` and `height` properties simultaneously, allowing the pointer to effortlessly snap between the inner and outer spirals with realistic physics.
- **Physics-based Feel**: The expansion uses the `cubic-bezier(0.34, 1.56, 0.64, 1)` spring curve. Because both the rotation and height use the same curve, the motion feels deeply integrated.
- **Zero JS Overhead**: Showcases the power of pure CSS for complex state visualization and component geometry.
