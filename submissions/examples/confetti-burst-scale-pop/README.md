# Confetti Burst Scale Pop (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Confetti Burst Scale Pop**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-anim-confetti-burst-scale-pop` is a highly rewarding DSL motion preset designed for success buttons, notification badges, and completion states. It simulates an element popping up with a bouncy spring curve, while simultaneously firing off colorful confetti particles.

### Included CSS

1. **Configurable Variables:** Customize the duration, spring curve, and particle physics (`--ease-duration-pop`, `--ease-timing-pop`, `--ease-duration-burst`, `--ease-particle-color`, etc.).
2. **Keyframes:** Hardware-accelerated `@keyframes` manipulating `scale()` and `translate3d()`.
3. **Utility Classes:** `.ease-anim-confetti-burst-scale-pop` and `.ease-anim-confetti-burst-scale-pop-infinite` DSL classes for instant application.
4. **Native Particles:** The confetti particles are generated purely via `::before` and `::after` pseudo-elements built directly into the utility class. This means developers don't need to add messy empty `<span>` tags to their HTML to get a particle burst.
5. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)`. Aggressive scaling and flying objects trigger vestibular motion sickness. The fallback completely strips the bouncing scale and disables the flying particles entirely, replacing the animation with a gentle opacity fade.

## Why it belongs in Core

EaseMotion aims to provide complex, premium micro-interactions. Building a confetti burst traditionally requires JavaScript libraries or messy HTML spanning. 

By utilizing CSS pseudo-elements natively within the class, EaseMotion allows developers to add a highly rewarding, physical pop animation to any element simply by adding a class name. Furthermore, it enforces hardware acceleration (`will-change: transform, opacity`) and strictly adheres to WCAG reduced-motion guidelines (a critical step almost universally forgotten by developers building custom particles).

## Implementation Specs

- **Properties Animated:** `transform` (`scale`, `translate3d`), `opacity`
- **Performance:** Hardware Accelerated (`will-change: transform, opacity`, no layout thrashing)
- **Accessibility:** `prefers-reduced-motion` compliant (strips motion and hides particles)
- **Default Pop Duration:** `0.5s`
- **Default Pop Easing:** `cubic-bezier(0.34, 1.56, 0.64, 1)` (Bouncy spring)
