# CSS Quantum Superposition Loader

An ultra-complex, high-performance pure-CSS loader utilizing multi-axis 3D rotation, `mix-blend-mode: screen`, and multiple orbiting electron rings to simulate a quantum state.

## What it does
Three rings on different 3D axes each carry an orbiting electron around a glowing core, with the whole scene slowly rotating to create a quantum superposition illusion.

## Files
- `demo.html` — interactive demo
- `style.css` — pure CSS animation
- `README.md` — this guide

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="quantum" role="status" aria-label="Loading">
  <span class="quantum__ring quantum__ring--1"></span>
  <span class="quantum__ring quantum__ring--2"></span>
  <span class="quantum__ring quantum__ring--3"></span>
  <span class="quantum__core"></span>
  <span class="quantum__electron quantum__electron--1"></span>
  <span class="quantum__electron quantum__electron--2"></span>
  <span class="quantum__electron quantum__electron--3"></span>
</div>
```

## Techniques
- `transform-style: preserve-3d` + `perspective` for 3D depth.
- Multi-axis `rotateX`/`rotateY`/`rotateZ` orbits.
- `mix-blend-mode: screen` for additive electron glow.
- Hardware-accelerated `transform` for 60 FPS.

## Accessibility
- `role="status"` + `aria-label` for screen readers.
- `prefers-reduced-motion` disables all animations.

Closes #75226
