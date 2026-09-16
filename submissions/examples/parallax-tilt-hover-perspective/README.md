# Parallax Tilt Hover Perspective (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Parallax Tilt Hover Perspective**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-anim-parallax-tilt-hover-perspective` is a premium, hardware-accelerated motion preset designed for high-impact cards, feature grids, and showcase elements. It combines a 3D spatial tilt on the parent container with a synchronized Z-depth pop on nested child elements, creating a realistic, layered parallax effect.

### Included CSS

1. **Configurable Variables:** Customize the tilt angles (X and Y), the perspective distance, the animation duration, and the Z-axis depth of child elements (`--ease-parallax-perspective`, `--ease-parallax-x`, `--ease-parallax-y`, `--ease-parallax-z`).
2. **Keyframes:** Hardware-accelerated `@keyframes` manipulating `perspective()`, `rotateX()`, `rotateY()`, and `translateZ()`.
3. **Utility Classes:** `.ease-anim-parallax-tilt-hover-perspective` (applied to the parent) and `.ease-anim-parallax-child` (applied to children that should pop out in 3D space).
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)`. 3D spatial tilting strongly triggers vestibular motion sickness. The fallback completely strips the rotation and Z-depth popping, safely replacing them with a simple, subtle 2D `scale` adjustment.

## Why it belongs in Core

EaseMotion aims to provide complex, premium interactions out of the box. Building a true parallax tilt requires meticulous configuration of `transform-style: preserve-3d` and perspective rendering contexts. Without this, child elements cannot break out of the flat 2D plane.

By providing this natively as a pure CSS `@keyframes` preset, developers can build stunning, multi-layered 3D cards simply by adding a class to the parent and a class to the children. Everything is 100% offloaded to the GPU compositor (`will-change: transform`).

## Implementation Specs

- **Properties Animated:** `transform` (`perspective`, `rotateX`, `rotateY`, `translateZ`).
- **Performance:** Hardware Accelerated (`will-change: transform`, absolutely no layout thrashing).
- **Architecture:** Enforces `transform-style: preserve-3d` for genuine Z-axis rendering.
- **Accessibility:** `prefers-reduced-motion` compliant (strips 3D tilt, falls back to 2D scale).
- **Default Duration:** `0.5s` (hover) / `0.4s` (return).
- **Default Easing:** `ease-out` (ideal for physical perspective shifts).
