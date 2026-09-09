# Curtain Slide Reveal Door (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Curtain Slide Reveal Door**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-anim-curtain-slide-reveal-door` is a highly cinematic DSL motion preset designed for image lazy-loading, content reveals, and dramatic section entrances. It overlays two solid-colored "doors" or "curtains" over the element, which dynamically slide open when triggered.

### Included CSS

1. **Configurable Variables:** Customize the duration, the color of the doors, and the center border/seam (`--ease-duration-curtain`, `--ease-curtain-color`, `--ease-curtain-border`).
2. **Keyframes:** Hardware-accelerated `@keyframes` using `scaleX(0)` to slide the pseudo-element curtains apart without causing layout thrashing or overflow scrollbars.
3. **Utility Classes:** `.ease-anim-curtain-slide-reveal-door` DSL class to setup the container, and an `.is-revealed` state class to trigger the animation.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)`. Rapid horizontal sweeping motions strongly trigger vestibular motion sickness. The fallback completely strips the sliding door physics entirely, safely replacing it with a simple, stationary opacity fade-out to reveal the content smoothly.

## Why it belongs in Core

EaseMotion aims to provide complex, premium interactions out of the box using pure CSS. A common mistake developers make when building sliding door reveals is animating the `width` or `left`/`right` properties, which forces the browser to recalculate the entire page layout on every frame, killing performance.

By providing this natively as a pure CSS `@keyframes` preset, developers get a guaranteed 60FPS, layout-safe reveal. This implementation leverages `transform: scaleX(0)` combined with left and right `transform-origin` to create the splitting door effect, meaning it is 100% offloaded to the GPU compositor (`will-change: transform`).

## Implementation Specs

- **Properties Animated:** `transform` (`scaleX`) and `opacity` (in fallback).
- **Performance:** Hardware Accelerated (`will-change: transform`, absolutely no layout thrashing).
- **Architecture:** Leverages `::before` and `::after` pseudo-elements. Requires the `.is-revealed` class to trigger.
- **Accessibility:** `prefers-reduced-motion` compliant (strips the scale/slide, falls back to a linear fade out).
- **Default Duration:** `0.8s`.
- **Default Easing:** `cubic-bezier(0.77, 0, 0.175, 1)`.
