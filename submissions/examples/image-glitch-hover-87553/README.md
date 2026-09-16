# Image Glitch Hover (#87553)

A cyberpunk-themed image hover micro-interaction displaying chromatic aberration, RGB channel shifts, and horizontal slice displacements.

## Features
- **Chromatic Glitch Slices:** Utilizes pseudo-elements with dynamic CSS `clip-path: polygon()` keyframe slicing.
- **Color Channel Separation:** Layered cyan (`#00f0ff`) and red/pink (`#ff0055`) blend offsets.
- **Hardware-Accelerated:** Transforms leverage GPU-accelerated `translate3d` positioning.
- **Accessibility:** Fully honors `@media (prefers-reduced-motion: reduce)` by disabling slice jitter.

## Usage
Include `style.css` in your project and structure the markup using `.glitch-frame` containing the target image.