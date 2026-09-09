# Drop Bounce Shadow Floor (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Drop Bounce Shadow Floor**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-drop-bounce-shadow-floor` is a physics-based DSL motion preset designed for entry animations (like modals, alert cards, or gamified tokens). It simulates a physical object dropping from above, bouncing, and casting a dynamic shadow on the "floor" below it.

### Included CSS

1. **Configurable Variables:** Customize the duration, timing curve, drop height, and shadow color (`--ease-duration-drop-bounce`, `--ease-timing-drop-bounce`, `--ease-drop-height`, `--ease-shadow-color`).
2. **Keyframes:** Hardware-accelerated `@keyframes` utilizing an advanced inverse-transform technique to keep the shadow locked to the floor while the parent element bounces.
3. **Utility Class:** `.ease-anim-drop-bounce-shadow-floor` DSL class for instant application.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)` to completely disable the vertical bouncing to prevent vestibular discomfort.

## Why it belongs in Core

EaseMotion lacks a complete entry animation that includes environmental context (a floor shadow). Developers attempting to build this usually animate `box-shadow` or `filter: drop-shadow()`, which are incredibly expensive operations that cause layout thrashing and dropped frames during entry transitions.

This preset solves this by using a pure CSS "inverse transform" trick. An absolutely positioned `::after` pseudo-element serves as the shadow. While the parent object translates down (`translateY`), the shadow translates *up* by the exact inverse amount. This locks the shadow perfectly to the floor coordinate, allowing us to safely scale and fade it using only `transform` and `opacity`, guaranteeing a perfect 60 FPS.

## Implementation Specs

- **Properties Animated:** `transform`, `opacity`
- **Performance:** Hardware Accelerated (`translateY`, `scale`, `will-change`)
- **Accessibility:** `prefers-reduced-motion` compliant (disables animation entirely)
- **Default Duration:** `1.2s`
- **Default Drop Height:** `-150px`
