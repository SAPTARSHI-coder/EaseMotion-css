# Bounce Elastic In Entrance (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Bounce Elastic In Entrance**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-anim-bounce-elastic-in-entrance` is a highly playful, physics-inspired DSL motion preset designed for modal entrances, toast notifications, and staggered grid reveals. It simulates an object dropping into place with an elastic, spring-like overshoot and settling bounce.

### Included CSS

1. **Configurable Variables:** Customize the duration and the distance it travels (`--ease-duration-bounce`, `--ease-bounce-distance`).
2. **Keyframes:** Hardware-accelerated `@keyframes` manipulating `translateY()` and `scale()`, explicitly mapping an elastic decay curve (0%, 30%, 50%, 70%, 85%, 100%).
3. **Utility Classes:** `.ease-anim-bounce-elastic-in-entrance` DSL class for instant application.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)`. Aggressive bouncing and scaling triggers vestibular motion sickness. The fallback completely strips the bouncing physics and the transform properties, safely replacing the entrance with a gentle, standard opacity fade-in.

## Why it belongs in Core

EaseMotion aims to provide premium, physically-accurate interactions out of the box. Building a truly satisfying elastic bounce in CSS without relying on heavy JavaScript physics libraries (like Framer Motion or GSAP) requires complex keyframe authoring to simulate overshoot, squash, and stretch.

By providing this natively as a pure CSS `@keyframes` preset, developers can add a highly polished, physical spring entry to any element simply by adding a class name. Furthermore, it enforces hardware acceleration (`will-change: transform, opacity`) and strictly adheres to WCAG reduced-motion guidelines.

## Implementation Specs

- **Properties Animated:** `transform` (`translateY`, `scale`), `opacity`
- **Performance:** Hardware Accelerated (`will-change: transform, opacity`, no layout thrashing)
- **Accessibility:** `prefers-reduced-motion` compliant (strips bounce, falls back to fade)
- **Default Duration:** `1s`
- **Default Easing:** `ease-out` (with explicit keyframe decay)
