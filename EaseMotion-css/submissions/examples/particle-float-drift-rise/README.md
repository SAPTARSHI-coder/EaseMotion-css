# Particle Float Drift Rise (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Particle Float Drift Rise**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-anim-particle-float-drift-rise` is a highly versatile ambient motion preset designed for background environments, loading states, and premium visual flair. It applies a physical "S-curve" drifting motion to any element, simulating fire embers, magic dust, or underwater bubbles rising organically.

### Included CSS

1. **Configurable Variables:** Customize the duration, horizontal drift amount, vertical rise distance, starting/ending scale, and rotation (`--ease-particle-drift-x`, `--ease-particle-rise-end`, `--ease-particle-scale-end`, `--ease-particle-rotate-end`).
2. **Keyframes:** Hardware-accelerated `@keyframes` using `translate3d()` combined with `rotate()`, `scale()`, and `opacity` to create an organic, non-linear rising path.
3. **Utility Classes:** `.ease-anim-particle-float-drift-rise` DSL class for instant application to any particle node.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)`. Continuous drifting and rising backgrounds can severely trigger vestibular motion sickness. The fallback completely strips the physical movement, safely replacing it with a slow, stationary opacity "twinkle" to preserve the atmosphere without the motion.

## Why it belongs in Core

EaseMotion aims to provide complex, premium interactions out of the box using pure CSS. A common mistake developers make when building particle systems is using JavaScript (e.g., `requestAnimationFrame`) to update the DOM directly, which causes severe CPU thrashing.

By providing this natively as a pure CSS `@keyframes` preset, developers can spawn dozens of lightweight HTML nodes (particles) and animate them using the GPU compositor (`will-change: transform`). Using CSS variables, each particle can easily be randomized without creating hundreds of duplicate `@keyframes`.

## Implementation Specs

- **Properties Animated:** `transform` (`translate3d`, `rotate`, `scale`) and `opacity`.
- **Performance:** Hardware Accelerated (`will-change: transform, opacity`, absolutely no layout thrashing).
- **Architecture:** Parametric keyframe design allows complete customization of the particle's path per-node via inline CSS variables.
- **Accessibility:** `prefers-reduced-motion` compliant (strips physical movement, falls back to a stationary twinkle).
- **Default Duration:** `3s`.
- **Default Easing:** `linear` (the organic feel is baked directly into the keyframe percentages).
