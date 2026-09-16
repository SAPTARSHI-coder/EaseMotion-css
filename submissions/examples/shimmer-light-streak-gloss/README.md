# Shimmer Light Streak Gloss (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Shimmer Light Streak Gloss**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-shimmer-light-streak-gloss` is a premium DSL motion preset designed for "skeleton" loading states or adding a glossy, high-end "shine" effect to premium buttons. It creates a semi-transparent gradient streak that rapidly traverses across the element.

### Included CSS

1. **Configurable Variables:** Customize the duration, timing curve, shimmer color, and shimmer width (`--ease-duration-shimmer`, `--ease-timing-shimmer`, `--ease-shimmer-color`, `--ease-shimmer-width`).
2. **Keyframes:** Hardware-accelerated `@keyframes ease-shimmer-light-streak-gloss` utilizing `translate3d(x, y, z)` and `skewX()`.
3. **Utility Class:** `.ease-anim-shimmer-light-streak-gloss` DSL class for instant application.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)` to completely disable the high-velocity spatial streak for users with vestibular disorders.

## Why it belongs in Core

EaseMotion currently lacks a dedicated skeleton loading/shimmer preset. Developers often attempt to build this by animating `background-position`. **Animating background properties triggers expensive paint operations and causes severe layout thrashing**, drastically reducing framerates on lower-end devices.

By providing a core preset that achieves this effect using a hardware-accelerated pseudo-element translated via `translate3d`, EaseMotion enforces performance best practices at the framework level.

## Implementation Specs

- **Properties Animated:** `transform` (on an `::after` pseudo-element)
- **Performance:** Hardware Accelerated (`translate3d`, `will-change`)
- **Accessibility:** `prefers-reduced-motion` compliant (disables animation entirely)
- **Default Duration:** `1.5s`
- **Default Easing:** `cubic-bezier(0.4, 0, 0.2, 1)`
