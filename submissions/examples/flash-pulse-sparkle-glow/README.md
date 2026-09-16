# Flash Pulse Sparkle Glow (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Flash Pulse Sparkle Glow**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-flash-pulse-sparkle-glow` is a premium DSL motion preset designed for attention-grabbing elements (like notification badges, premium feature unlocks, or success states). It simulates a "glowing flash" effect strictly using hardware-accelerated properties, avoiding the catastrophic performance hit of animating `box-shadow` or CSS `filter`.

### Included CSS

1. **Configurable Variables:** Allows downstream users to customize the duration, easing curve, opacity dip, and scale magnitude without rewriting the `@keyframes`.
2. **Keyframes:** Hardware-accelerated `@keyframes ease-flash-pulse-sparkle-glow` utilizing `scale3d` and `opacity`.
3. **Utility Class:** `.ease-anim-flash-pulse-sparkle-glow` DSL class for instant application.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)` to gracefully degrade the rapid flashing and scaling into a slow, subtle opacity fade for users with vestibular disorders or photosensitivity.

## Why it belongs in Core

EaseMotion lacks a dedicated "attention grabber" preset. Developers often resort to writing custom `box-shadow` animations, which drop framerates significantly on mobile devices. By providing a core preset that achieves a similar visual impact using only `transform` and `opacity`, EaseMotion enforces performance best practices at the framework level.

## Implementation Specs

- **Properties Animated:** `transform`, `opacity`
- **Performance:** Hardware Accelerated (`scale3d`, `will-change`)
- **Accessibility:** `prefers-reduced-motion` compliant (prevents rapid flashing)
- **Default Duration:** `1.5s`
- **Default Easing:** `ease-in-out`
