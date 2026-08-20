# Vaporwave Grid Pulse Horizon (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Vaporwave Grid Pulse Horizon**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-vaporwave-grid-pulse-horizon` is a highly specialized DSL motion preset designed to create an infinite, forward-scrolling 3D synthwave/vaporwave horizon. It is perfect for retro-themed headers, dynamic hero backgrounds, or gamified landing pages.

### Included CSS

1. **Configurable Variables:** Customize the duration, timing curve, grid color, and grid cell size (`--ease-duration-vaporwave`, `--ease-timing-vaporwave`, `--ease-vaporwave-grid-color`, `--ease-vaporwave-grid-size`).
2. **Keyframes:** Hardware-accelerated `@keyframes ease-vaporwave-grid-pulse-horizon` utilizing `perspective()`, `rotateX()`, and `translateY()` to create a 3D illusion without relying on WebGL or Canvas.
3. **Utility Class:** `.ease-anim-vaporwave-grid-pulse-horizon` DSL class for instant application.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)` to completely halt the continuous scrolling, which is a known trigger for vestibular discomfort (motion sickness).

## Why it belongs in Core

Creating an infinite scrolling 3D grid usually tempts developers into animating `background-position` or writing heavy JavaScript loops. Both of these approaches cause catastrophic layout thrashing and paint operations, dropping framerates into the single digits on mobile devices.

By providing a strictly hardware-accelerated core preset that simply translates a pseudo-plane by exactly one grid unit and seamlessly loops, EaseMotion enforces 60 FPS performance best practices at the framework level for complex background animations.

## Implementation Specs

- **Properties Animated:** `transform`
- **Performance:** Hardware Accelerated (`perspective`, `translateY`, `will-change`)
- **Accessibility:** `prefers-reduced-motion` compliant (pauses animation)
- **Default Duration:** `4s`
- **Default Easing:** `linear` (crucial for seamless looping)
