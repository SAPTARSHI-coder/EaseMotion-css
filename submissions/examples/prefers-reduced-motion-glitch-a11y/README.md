# Prefers-Reduced-Motion Audit for Glitch Animations (#81939)

An accessibility validation test submission delivering a complete `prefers-reduced-motion: reduce` audit and implementation for high-intensity glitch text animations, preventing motion sickness and vestibular disruption while maintaining full screen reader accessibility and zero axe-core errors.

## Performance & Accessibility Budgets
- **Maximum Bundle Size:** <= 50.0 KB (51,200 bytes)
- **Axe-Core Violations:** 0
- **WCAG Level:** 2.1 AA Compliant (WCAG 2.3.1 Three Flashes & 2.3.3 Animation from Interactions)
- **High Contrast Support:** System `forced-colors: active` mapped to `CanvasText`, `Canvas`, `Highlight`, and `HighlightText`

## File Structure
- `demo.html` - Visual accessibility audit dashboard demonstrating glitch animation behaviors and screen reader safe text structure.
- `style.css` - Cascade layer stylesheet isolating keyframe animation inside `@media (prefers-reduced-motion: no-preference)` and completely suppressing RGB split layers under `prefers-reduced-motion: reduce`.
- `README.md` - Technical spec and accessibility guidelines.
