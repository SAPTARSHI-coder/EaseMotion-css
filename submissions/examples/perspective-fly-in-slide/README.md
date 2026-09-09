# Perspective Fly In Slide (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Perspective Fly In Slide**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-perspective-fly-in-slide` is a highly cinematic DSL motion preset designed for premium hero sections, product showcases, or modal entries. It simulates an object flying into the viewport from a deep Z-axis position while simultaneously dropping and leveling out its pitch angle.

### Included CSS

1. **Configurable Variables:** Customize the duration, timing curve, 3D perspective depth, vertical drop distance, Z-axis flight distance, and starting pitch angle (`--ease-duration-fly`, `--ease-timing-fly`, `--ease-perspective`, `--ease-fly-offset-y`, `--ease-fly-offset-z`, `--ease-fly-rotate-x`).
2. **Keyframes:** Hardware-accelerated `@keyframes` combining `perspective()`, `translate3d()`, and `rotateX()`.
3. **Utility Classes:** `.ease-anim-perspective-fly-in-slide` and `.ease-anim-perspective-fly-in-slide-infinite` DSL classes for instant application.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)`. Complex 3D spatial flying is a massive trigger for motion sickness. The fallback strips all 3D transforms entirely, replacing the cinematic flight with a gentle, accessible opacity crossfade.

## Why it belongs in Core

EaseMotion aims to provide complex, premium animations out of the box. While basic 2D translations are common, building cinematic 3D entrances requires a deep understanding of combining `perspective()` with `translate3d` and `rotate` functions, alongside critical performance hints like `backface-visibility: hidden` to prevent rendering artifacts during flight.

By providing this natively, EaseMotion allows developers to add highly aggressive, modern 3D entrance animations to their components while strictly adhering to WCAG reduced-motion guidelines (a critical step almost universally forgotten by developers building custom 3D animations).

## Implementation Specs

- **Properties Animated:** `transform`, `opacity`
- **Performance:** Hardware Accelerated (`translate3d`, `perspective`, `rotateX`, `will-change`, `backface-visibility`)
- **Accessibility:** `prefers-reduced-motion` compliant (falls back to opacity fade)
- **Default Duration:** `0.8s`
- **Default Easing:** `cubic-bezier(0.2, 0.8, 0.2, 1)` (dramatic decelerated entry)
