# Liquid Wave Progress Bar

## Description

A pure CSS progress bar that fills with an animated liquid wave surface. The wave undulates continuously using rotating `border-radius` animation, creating a realistic water-fill effect. Configurable via CSS custom properties — no JavaScript required.

## Features

* Animated wave surface using `border-radius` morphing with `rotate()`
* Dual wave layers with phase-shifted animations for depth
* Floating bubble particles via `::before` and `::after` pseudo-elements
* CSS custom properties (`--fill`, `--wave-color`, `--bg-color`) for easy theming
* Inner glow radial gradient for liquid depth
* Responsive grid layout
* `prefers-reduced-motion` accessibility support
* ARIA `role="progressbar"` with `aria-valuenow`

## Usage

```html
<div class="wave-progress"
     role="progressbar"
     aria-valuenow="72"
     aria-valuemin="0"
     aria-valuemax="100"
     style="--fill: 72; --wave-color: #06b6d4; --bg-color: #0e1726;">
  <div class="wave-fill">
    <div class="wave surface"></div>
    <div class="wave surface-alt"></div>
  </div>
  <span class="progress-value">72%</span>
</div>
```

## CSS Techniques Used

* **`border-radius` rotation**: The wave effect is achieved by applying `border-radius: 40%` to a wide element and rotating it 360 degrees, causing the corners to undulate like a water surface.
* **Dual wave layers**: Two pseudo-element waves with different animation speeds and directions create a parallax depth effect.
* **`color-mix()`**: Used for semi-transparent color variations without hardcoding alpha values.
* **CSS custom properties**: All visual parameters are configurable via inline styles or CSS variables.
* **`backdrop-filter`**: Glassmorphism card effect on the container.
* **`@keyframes`**: Two animations — `wave-drift` for the wave rotation and `bubble-rise` for floating particles.

## Browser Compatibility

Works in all modern browsers supporting:
* CSS Custom Properties
* CSS Animations
* `color-mix()` (Chrome 111+, Firefox 113+, Safari 16.2+)
* `backdrop-filter` (with `-webkit-` prefix for older Safari)
