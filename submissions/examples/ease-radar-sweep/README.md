# ease-radar-sweep

Closes #13758 — rotating radar sweep animation using conic-gradient
with fading trail, blip targets, and range rings for dashboard UIs.

## Features

| Feature | Detail |
|---------|--------|
| conic-gradient sweep | Smooth 90-degree fade trail behind leading edge |
| Rotating beam line | Glowing leading edge line via transform-origin |
| Concentric rings | Range distance indicators |
| Blip targets | Pulsing dot targets at radar positions |
| 3 colour variants | Green (air), Blue (network), Red (threat) |
| 3 speed variants | 2s fast, 3s normal, 4s slow sweep |
| Size variants | Large 280px and small 160px |
| Dashboard panel | Live target count and RPM readout |

## Files
- demo.html - live radar demo with dashboard stats
- style.css  - all sweep, trail, ring and blip styles
- README.md  - this file

## Technique
- conic-gradient with multi-stop fade for trail effect
- Single @keyframes radar-rotate drives both sweep and beam
- transform-origin: left center on beam line for pivot from centre
- IntersectionObserver not needed - pure CSS animation
- prefers-reduced-motion respected