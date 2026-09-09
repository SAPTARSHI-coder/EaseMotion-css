# Elastic Spring Pop Bounce (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Elastic Spring Pop Bounce**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-anim-elastic-spring-pop-bounce` is a premium, highly tactile DSL motion preset designed for energetic entrances, modals, and hover states. It mimics physical spring mechanics—scaling up, overshooting slightly, undershooting, and settling—entirely in pure CSS.

### Included CSS

1. **Configurable Variables:** Customize the duration, starting scale, peak overshoot, undershoot dip, and rebound scale (`--ease-duration-elastic`, `--ease-elastic-start`, `--ease-elastic-peak`, `--ease-elastic-dip`, `--ease-elastic-rebound`).
2. **Keyframes:** Hardware-accelerated `@keyframes` manipulating `scale()` and `opacity` at precise intervals to mimic decaying spring physics.
3. **Utility Classes:** `.ease-anim-elastic-spring-pop-bounce` (for load/entrance animations) and `.ease-anim-elastic-spring-pop-bounce-hover` (for tactile interactions) DSL classes.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)`. Rapid scaling oscillations strongly trigger vestibular motion sickness. The fallback completely strips the elastic scaling physics entirely, safely replacing it with a simple, linear opacity fade-in or a static hover state.

## Why it belongs in Core

EaseMotion aims to provide physical, premium interactions out of the box. True spring physics normally require heavy JavaScript libraries (like Framer Motion or React Spring). 

By providing this natively as a pure CSS `@keyframes` preset, developers can achieve that highly sought-after "bouncy" spring feel with zero JavaScript overhead. It is 100% offloaded to the GPU compositor (`will-change: transform, opacity`), ensuring a locked 60FPS even on low-end devices.

## Implementation Specs

- **Properties Animated:** `transform` (`scale`) and `opacity`.
- **Performance:** Hardware Accelerated (`will-change: transform, opacity`, no layout thrashing).
- **Physics Simulation:** Pure CSS multi-stage keyframes mimicking an underdamped spring.
- **Accessibility:** `prefers-reduced-motion` compliant (strips scaling spring, falls back to static fade/scale).
- **Default Duration:** `0.8s`.
- **Default Easing:** `cubic-bezier(0.25, 0.1, 0.25, 1)`.
