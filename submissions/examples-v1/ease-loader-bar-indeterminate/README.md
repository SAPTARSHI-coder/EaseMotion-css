# Indeterminate Progress Bar (`ease-loader-bar-indeterminate`)

A smooth, Material Design-inspired infinite progress bar designed for scenarios where the exact loading time or progress percentage is unknown.

## 🚀 Features & EaseMotion Showcase

This component adds a sophisticated loading pattern to the EaseMotion library using only pure CSS and pseudo-elements:

- **No HTML Clutter**: The entire animation is powered by a single `<div>` tag with the class `.ease-loader-bar-indeterminate`. The dual-bar effect is achieved entirely through `::before` and `::after` pseudo-elements.
- **Hardware Acceleration**: Relies entirely on `transform: translateX()` and `transform: scaleX()` rather than animating `left`/`right` properties. This ensures 60fps rendering by pushing the animation to the GPU.
- **Material Timing**: Uses complex `cubic-bezier()` timing functions to mimic the physics-based stretching and snapping of native mobile loading bars.

## 🛠️ Usage

To use this component, simply apply the class to an empty `div`. It will automatically stretch to fill 100% of the width of its parent container.

```html
<div class="ease-loader-bar-indeterminate"></div>
```
