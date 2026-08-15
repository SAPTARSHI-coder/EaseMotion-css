# Image Sheen Move (#87556)

A showcase media component featuring a diagonal light reflection (sheen) that sweeps across an image frame on a looping interval and accelerates on user interaction.

## Features
- **Periodic Sheen Sweep:** Pure CSS linear gradient sweep using `transform: translateX()` and `rotate(25deg)`.
- **GPU-Accelerated:** Transitions utilize `transform: translate3d()` to ensure 60fps rendering without layout reflows.
- **Interactive Controls:** Includes hover accelerations and pause/resume playback state controls.
- **Accessibility:** Fully supports `@media (prefers-reduced-motion: reduce)` by disabling periodic sweeps.

## Usage
Include `style.css` in your project and wrap the image element inside `.sheen-frame`.