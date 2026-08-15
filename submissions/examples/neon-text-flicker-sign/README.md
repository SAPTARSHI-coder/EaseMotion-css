# Neon Text Flicker Sign (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Neon Text Flicker Sign**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-neon-text-flicker-sign` is an advanced DSL motion preset designed for Cyberpunk/Synthwave aesthetics, retro signage, and high-impact headings. It mimics a faulty neon tube struggling to stay lit.

### Included CSS

1. **Configurable Variables:** Customize the duration, timing curve, off-state color, on-state color, and glow color (`--ease-duration-neon`, `--ease-timing-neon`, `--ease-neon-color-off`, `--ease-neon-color-on`, `--ease-neon-glow-color`).
2. **Keyframes:** Hardware-accelerated `@keyframes` utilizing an advanced duplicate-text technique to completely avoid animating `text-shadow`.
3. **Utility Class:** `.ease-anim-neon-text-flicker-sign` DSL class for instant application.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)` to completely disable the rapid flickering to prevent photosensitive reactions.

## Why it belongs in Core

EaseMotion aims to provide complex, premium animations without sacrificing performance. Creating a neon flicker effect typically requires developers to write keyframes that animate the `text-shadow` or `color` properties. **Animating text-shadow triggers catastrophic layout thrashing and paint operations**, devastating framerates on mobile devices.

This preset introduces a brilliant CSS architectural hack: 
It renders the base text in its "off" state. It then generates an absolutely positioned `::after` pseudo-element that perfectly duplicates the text (via `content: attr(data-neon-text)`). The expensive, heavy `text-shadow` glow is applied statically to this pseudo-element. The keyframes then rapidly animate **only the opacity** of the pseudo-element overlay. 

This means the expensive glow is painted exactly once, and the flicker effect is 100% GPU accelerated (`will-change: opacity`), guaranteeing a flawless 60 FPS. Providing this pattern natively in the engine enforces this crucial performance best practice.

## Implementation Specs

- **Properties Animated:** `opacity` (on an `::after` pseudo-element)
- **Performance:** Hardware Accelerated (`will-change: opacity`)
- **Accessibility:** `prefers-reduced-motion` compliant (forces the neon sign to permanently stay "on")
- **Default Duration:** `4s`
- **Default Easing:** `linear`
