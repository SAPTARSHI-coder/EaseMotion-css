# Tilt 3D Hover Angle (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Tilt 3D Hover Angle**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-anim-tilt-3d-hover-angle` is a premium DSL motion preset designed for feature cards, pricing tiers, and interactive elements. It utilizes 3D spatial transforms to tilt the element into the Z-axis, creating a sophisticated sense of depth and physicality.

### Included CSS

1. **Configurable Variables:** Customize the duration, timing curve, perspective depth, rotation angles, and scale (`--ease-duration-tilt`, `--ease-tilt-perspective`, `--ease-tilt-x`, `--ease-tilt-y`, `--ease-tilt-scale`).
2. **Keyframes:** Hardware-accelerated `@keyframes` manipulating `perspective()`, `rotateX()`, and `rotateY()`.
3. **Utility Classes:** `.ease-anim-tilt-3d-hover-angle` (triggers on hover) and `.ease-anim-tilt-3d-hover-angle-infinite` (continuous floating state) DSL classes for instant application.
4. **Self-Contained Perspective:** By applying the `perspective()` function directly within the `transform` property rather than using the `perspective` CSS property on a parent element, this class can be applied to any element without needing to wrap it in a dedicated perspective container.
5. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)`. 3D spatial rotations strongly trigger vestibular motion sickness. The fallback completely strips the `rotateX` and `rotateY` transforms, falling back to a subtle, accessible 2D translation (moving up slightly).

## Why it belongs in Core

EaseMotion aims to provide premium, complex interactions out of the box. Building 3D CSS tilt effects traditionally requires JavaScript libraries to track mouse coordinates, or tedious CSS wrapper structures to establish a 3D context.

By providing this natively as a pure CSS `@keyframes` preset, developers can add a highly polished, physical 3D tilt to any element simply by adding a class name. Furthermore, it enforces hardware acceleration (`will-change: transform`) and strictly adheres to WCAG reduced-motion guidelines (a critical step almost universally forgotten by developers building custom 3D effects).

## Implementation Specs

- **Properties Animated:** `transform` (`perspective`, `rotateX`, `rotateY`, `scale3d`)
- **Performance:** Hardware Accelerated (`will-change: transform`, no layout thrashing)
- **Accessibility:** `prefers-reduced-motion` compliant (strips 3D spatial rotation entirely)
- **Default Duration:** `0.5s`
- **Default Easing:** `cubic-bezier(0.25, 1, 0.5, 1)` (Smooth physical deceleration)
