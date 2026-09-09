# Skew Slide Reveal Angle (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Skew Slide Reveal Angle**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-skew-slide-reveal-angle` is a highly dynamic DSL motion preset designed for fast-paced, modern UIs (e.g., sports sites, gaming interfaces, or aggressive marketing banners). It translates elements diagonally while simultaneously un-skewing them, creating a snappy "snatch" effect.

### Included CSS

1. **Configurable Variables:** Customize the duration, timing curve, skew angle, and translation offsets (`--ease-duration-skew`, `--ease-timing-skew`, `--ease-skew-angle`, `--ease-slide-offset-x`, `--ease-slide-offset-y`).
2. **Keyframes:** Hardware-accelerated `@keyframes` combining `translate3d` and `skewX`.
3. **Utility Classes:** `.ease-anim-skew-slide-reveal-angle` and `.ease-anim-skew-slide-reveal-angle-infinite` DSL classes for instant application.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)`. Aggressive skewing and spatial translation are major triggers for motion sickness, so this fallback strips all spatial transforms and replaces them with a gentle opacity crossfade.

## Why it belongs in Core

EaseMotion aims to provide complex, premium animations out of the box. While basic slides and fades are common, combining skews with translations requires precise bezier curves to feel snappy without being jarring. 

By providing this natively, EaseMotion allows developers to add highly aggressive, modern entrance animations to their components while strictly adhering to WCAG reduced-motion guidelines (a critical step often forgotten by developers building custom skew animations).

## Implementation Specs

- **Properties Animated:** `transform`, `opacity`
- **Performance:** Hardware Accelerated (`translate3d`, `skewX`, `will-change`)
- **Accessibility:** `prefers-reduced-motion` compliant (falls back to opacity fade)
- **Default Duration:** `0.8s`
- **Default Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (snappy deceleration)
