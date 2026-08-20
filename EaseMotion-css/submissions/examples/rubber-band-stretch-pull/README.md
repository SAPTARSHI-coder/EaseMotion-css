# Rubber Band Stretch Pull (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Rubber Band Stretch Pull**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-rubber-band-stretch-pull` is a highly expressive DSL motion preset designed for playful interactive elements (like gamified buttons, avatars, or drag-to-refresh indicators). It simulates physical elasticity by squishing and stretching the element iteratively until it settles.

### Included CSS

1. **Configurable Variables:** Allows downstream users to customize the duration and easing curve (`--ease-duration-rubber-band`, `--ease-timing-rubber-band`).
2. **Keyframes:** Hardware-accelerated `@keyframes ease-rubber-band-stretch-pull` utilizing `scale3d(x, y, z)` to simulate volume-preserving deformation.
3. **Utility Class:** `.ease-anim-rubber-band-stretch-pull` DSL class for instant application.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)` to completely disable the bouncy scaling for users with vestibular disorders, preventing nausea.

## Why it belongs in Core

EaseMotion currently lacks highly expressive, physics-mimicking micro-interactions. "Rubber band" effects are extremely popular in modern mobile-first web applications to provide tactile feedback on tap or drag. Providing a highly optimized version natively in the engine ensures developers don't write slow, non-hardware-accelerated versions that animate `width`/`height` instead of `transform`.

## Implementation Specs

- **Properties Animated:** `transform`
- **Performance:** Hardware Accelerated (`scale3d`, `will-change`)
- **Accessibility:** `prefers-reduced-motion` compliant (disables animation entirely)
- **Default Duration:** `1s`
- **Default Easing:** `cubic-bezier(0.25, 1, 0.5, 1)`
