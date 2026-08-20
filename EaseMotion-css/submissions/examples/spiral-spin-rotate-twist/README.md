# Spiral Spin Rotate Twist (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Spiral Spin Rotate Twist**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-anim-spiral-spin-rotate-twist` is a highly dynamic DSL motion preset designed for dramatic entrances and engaging active loading states. It combines aggressive scaling with multi-rotational spinning to create a "corkscrew" or spiral effect.

### Included CSS

1. **Configurable Variables:** Customize the duration, starting rotations, and scaling properties (`--ease-duration-twist`, `--ease-twist-angle-start`, `--ease-twist-scale-start`, etc.).
2. **Keyframes:** Hardware-accelerated `@keyframes` manipulating `rotate()` and `scale()` simultaneously.
3. **Utility Classes:** `.ease-anim-spiral-spin-rotate-twist` (entrance trigger) and `.ease-anim-spiral-spin-rotate-twist-infinite` (continuous loading/breathing state) DSL classes for instant application.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)`. Aggressive rotation combined with scaling is one of the strongest triggers for vestibular motion sickness. The fallback completely strips both the rotational and scaling transforms entirely, safely replacing the entrance with a gentle opacity fade-in, and the infinite loop with an accessible slow opacity pulse.

## Why it belongs in Core

EaseMotion aims to provide complex, premium interactions out of the box. Building a spiral twist requires synchronizing `scale` and `rotate` transforms, which can easily cause layout thrashing if not handled correctly.

By providing this natively as a pure CSS `@keyframes` preset, developers can add a highly polished, dramatic spiral entry to any element simply by adding a class name. Furthermore, it enforces hardware acceleration (`will-change: transform, opacity`) and strictly adheres to WCAG reduced-motion guidelines (which is absolutely critical for rotational animations).

## Implementation Specs

- **Properties Animated:** `transform` (`rotate`, `scale`), `opacity`
- **Performance:** Hardware Accelerated (`will-change: transform, opacity`, no layout thrashing)
- **Accessibility:** `prefers-reduced-motion` compliant (strips rotation and scaling, falls back to fade)
- **Default Duration:** `0.8s` (entrance) / `2s` (infinite)
- **Default Easing:** `cubic-bezier(0.175, 0.885, 0.32, 1.275)` (slight overshoot)
