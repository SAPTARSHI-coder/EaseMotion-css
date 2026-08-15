# Text Kinetic Wave Motion (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Text Kinetic Wave Motion**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-anim-text-kinetic-wave-motion` is a DSL motion pattern designed for engaging typographic displays, loading screens, or dynamic hover states on text. It simulates a wave flowing through individual letters by applying staggered vertical bouncing animations.

### Included CSS

1. **Configurable Variables:** Customize the duration, timing curve, bounce height, and stagger delay (`--ease-duration-wave`, `--ease-timing-wave`, `--ease-wave-height`, `--ease-wave-delay-stagger`).
2. **Keyframes:** Hardware-accelerated `@keyframes` manipulating `translate3d()`.
3. **Container Pattern Class:** The `.ease-anim-text-kinetic-wave-container` class automatically applies the wave animation and the calculated staggered delays to all immediate `<span>` children.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)`. Bouncing text can severely disrupt readability and trigger vestibular disorders. The fallback strips all spatial transforms and completely pauses the bouncing motion.

## Why it belongs in Core

Creating a kinetic wave effect in pure CSS requires a deep understanding of animation delays, `nth-child` targeting, and hardware acceleration hints. If not implemented carefully, animating dozens of individual letters can quickly cause frame drops. 

By providing this natively as a container pattern, EaseMotion abstracts away the tedious `nth-child` delay calculations. Developers only need to wrap their letters in `<span>` tags and apply a single container class. The entire animation is 100% offloaded to the GPU compositor (`will-change: transform`).

## Implementation Specs

- **Properties Animated:** `transform` (`translate3d`)
- **Performance:** Hardware Accelerated (`will-change: transform`, no layout thrashing)
- **Accessibility:** `prefers-reduced-motion` compliant (strips motion completely for readability)
- **Default Duration:** `1.2s`
- **Default Easing:** `ease-in-out`
