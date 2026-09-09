# Origami Paper Fold Unfold (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Origami Paper Fold Unfold**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-anim-origami-paper-fold-unfold` is a premium, physical motion preset designed for dropdown menus, pop-up cards, and interactive 3D hovers. It explicitly mimics the physics of thick cardstock or origami paper unfolding—swinging past the flat plane before settling.

### Included CSS

1. **Configurable Variables:** Customize the duration, origin hinge, start angle, and physics constraints (overshoot/undershoot) (`--ease-duration-origami`, `--ease-origami-origin`, `--ease-origami-start-angle`, `--ease-origami-overshoot`, `--ease-origami-undershoot`).
2. **Keyframes:** Hardware-accelerated `@keyframes` using `perspective()` and `rotateX()` to simulate a decaying 3D pendulum swing.
3. **Utility Classes:** `.ease-anim-origami-paper-fold-unfold` (for entrance animations like dropdowns) and `.ease-anim-origami-paper-fold-unfold-hover` (for interactive 3D lifting states).
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)`. 3D spatial rotation and swinging physics strongly trigger vestibular motion sickness. The fallback completely strips the rotational physics entirely, safely replacing it with a simple, linear opacity fade-in or a 2D static scale.

## Why it belongs in Core

EaseMotion aims to provide complex, physical interactions out of the box using pure CSS. True 3D folding physics are notoriously difficult to hand-code because they require precise combinations of `perspective`, `transform-origin`, and decaying rotation angles.

By providing this natively as a parametric `@keyframes` preset, developers can apply a highly polished, physically accurate paper fold to any element simply by adding a class name. It is 100% offloaded to the GPU compositor (`will-change: transform, opacity`), ensuring a locked 60FPS even during complex 3D rendering.

## Implementation Specs

- **Properties Animated:** `transform` (`perspective`, `rotateX`) and `opacity`.
- **Performance:** Hardware Accelerated (`will-change: transform, opacity`, absolutely no layout thrashing).
- **Physics Simulation:** Pure CSS multi-stage keyframes mimicking an underdamped rotational spring.
- **Accessibility:** `prefers-reduced-motion` compliant (strips 3D rotation, falls back to a linear fade).
- **Default Duration:** `0.8s`.
- **Default Easing:** `ease-in-out` / `cubic-bezier(0.4, 0, 0.2, 1)`.
