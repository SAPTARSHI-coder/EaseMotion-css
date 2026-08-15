# Gradient Flow Shift Color (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Gradient Flow Shift Color**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-anim-gradient-flow-shift-color` is a DSL motion preset designed for premium hero backgrounds, animated borders, and dynamic UI elements. It creates a continuous, flowing color shift.

### Included CSS

1. **Configurable Variables:** Customize the duration, timing curve, and the gradient colors (`--ease-duration-gradient`, `--ease-timing-gradient`, `--ease-grad-color-1`, `--ease-grad-color-2`, etc.).
2. **Keyframes:** Hardware-accelerated `@keyframes` manipulating `rotate()`.
3. **Utility Classes:** `.ease-anim-gradient-flow-shift-color` (infinite) and `.ease-anim-gradient-flow-shift-color-hover` DSL classes for instant application.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)`. Continuous full-screen color rotation can trigger vestibular disorders. The fallback pauses the animation entirely, leaving a static, accessible gradient.

## Why it belongs in Core

Creating a flowing animated gradient in CSS is historically a performance nightmare. When developers attempt to create animated gradients, they almost universally animate the `background-position` property. **Animating `background-position` triggers continuous Paint operations on every frame**, devastating mobile framerates and draining battery life.

This preset implements a critical CSS performance pattern: it generates a massive, absolutely positioned `::before` pseudo-element with a `conic-gradient` that acts as the background layer. It sets `z-index: -1` and animates only the `rotate()` transform property. Because the element is oversized (`300%`), the corners never become visible during rotation. This creates the exact illusion of a flowing gradient while keeping the entire animation 100% offloaded to the GPU compositor (`will-change: transform`). 

By providing this natively, EaseMotion enforces this crucial performance best practice for gradient animations.

## Implementation Specs

- **Properties Animated:** `transform` (`rotate`)
- **Performance:** Hardware Accelerated (`will-change: transform`, no layout/paint thrashing)
- **Accessibility:** `prefers-reduced-motion` compliant (pauses animation)
- **Default Duration:** `6s`
- **Default Easing:** `linear`
