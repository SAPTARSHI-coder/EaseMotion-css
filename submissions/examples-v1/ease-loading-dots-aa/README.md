# Animated Loading Dots Component

A modular, framework-free three-dot staggered loading element built on high-performance compositor animation scales.

## Structural Parameter Matrices
- **Staggered Interpolation:** Utilizes custom offset negative delays to map fluid motion profiles across structural siblings.
- **Deformation States:** Out-of-the-box support for both `translateY` (Bounce) and `scale` (Pulse) motion fields.
- **Sizing Tokens:** Scaled components covering Small (`sm`), Standard Baseline, and Large (`lg`) footprints.
- **Accessibility Layers:** Intercepts hardware options to replace position tracking with safe, opacity-only micro-fades via `prefers-reduced-motion`.