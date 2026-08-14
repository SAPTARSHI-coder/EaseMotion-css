# CSS Snow Fall Effect

A pure CSS seasonal animation using multiple layered backgrounds and CSS animations to create a continuous, randomized parallax snowfall effect across a winter landscape, built without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript, Zero Canvas, Zero SVG for the snow).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a moody, high-contrast dark mode variant.
- **Component Architecture (Documented in Code)**: 
  - **CSS Radial Gradients for Snow**: Instead of rendering hundreds of individual `<div>` or SVG elements for snowflakes (which ruins DOM performance), we utilize repeating `radial-gradient` patterns on three stacked `<div>` layers (`.snow-bg`, `.snow-mid`, `.snow-fg`).
  - **Parallax Depth**: The three layers animate vertically at different speeds (`25s`, `15s`, `10s`). The foreground layer uses a larger `background-size`, a faster fall rate, a slight horizontal `margin-left` sway animation, and a CSS `filter: blur(1px)` to simulate realistic depth of field.
  - **Infinite Looping**: The `.snow-layer` divs are set to `300%` height and start at `top: -200%`. Animating the `transform: translateY()` allows the repeating gradients to loop perfectly seamlessly without any visual breaks.
  - **CSS Clip-Path Scenery**: The mountains are drawn entirely using CSS `clip-path: polygon()`.
- Honors the `prefers-reduced-motion` accessibility standard by freezing the snow animation and statically placing the layers to resemble a calm, starry winter night for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Watch the continuous, multi-layered parallax snowfall effect. 

## Files
- `demo.html`: The minimal HTML structure containing the scenery and the three snow layers.
- `style.css`: The styling, CSS Custom Property theming blocks, and the heavily commented `radial-gradient` and `@keyframes` animation techniques.
