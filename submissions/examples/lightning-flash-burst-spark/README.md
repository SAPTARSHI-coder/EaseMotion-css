# Lightning Flash Burst Spark (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Lightning Flash Burst Spark**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-lightning-flash-burst-spark` is a high-intensity DSL motion preset designed for extreme attention-grabbing events (like a critical system alert, a gamified level-up, or a massive discount reveal). It mimics the erratic strobe and scale of an electrical spark.

### Included CSS

1. **Configurable Variables:** Customize the duration and timing curve (`--ease-duration-lightning`, `--ease-timing-lightning`).
2. **Keyframes:** Hardware-accelerated `@keyframes ease-lightning-flash-burst-spark` utilizing rapid opacity shifts and `scale3d()` scaling on a pseudo-element.
3. **Utility Class:** `.ease-anim-lightning-flash-burst-spark` DSL class for instant application.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)` to completely disable the rapid flashing. Strobe effects are the primary trigger for photosensitive epilepsy, making this override mandatory.

## Why it belongs in Core

EaseMotion currently lacks a "high intensity" or "erratic" preset. Developers who need an explosive visual effect often resort to animating `box-shadow` with chaotic keyframes, completely destroying framerates. By providing a hardware-accelerated spark effect using `opacity` and `transform: scale3d()` on an absolutely positioned pseudo-element, EaseMotion provides high-impact visuals without the performance penalty.

## Implementation Specs

- **Properties Animated:** `opacity`, `transform` (on an `::after` pseudo-element)
- **Performance:** Hardware Accelerated (`scale3d`, `will-change`)
- **Accessibility:** `prefers-reduced-motion` compliant (disables animation entirely to prevent seizures)
- **Default Duration:** `2s`
- **Default Easing:** `linear`
