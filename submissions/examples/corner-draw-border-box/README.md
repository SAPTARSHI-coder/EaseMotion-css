# Corner Draw Border Box (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Corner Draw Border Box**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-corner-draw-border-box` is an interactive DSL motion preset designed for highlighting cards, inputs, and interactive panels. It simulates a border being rapidly drawn from the center of each edge outward toward the corners, completing a full box outline.

### Included CSS

1. **Configurable Variables:** Customize the duration, timing curve, border width, and border color (`--ease-duration-draw`, `--ease-timing-draw`, `--ease-border-width`, `--ease-border-color`).
2. **Keyframes:** Hardware-accelerated `@keyframes` combining `scaleX()` and `scaleY()`.
3. **Utility Classes:** `.ease-anim-corner-draw-border-box` (triggers on hover) and `.ease-anim-corner-draw-border-box-infinite` DSL classes for instant application.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)`. Rapidly scaling geometric shapes can be visually abrasive. The fallback strips all spatial transforms and replaces the drawing effect with a clean, accessible opacity crossfade for the borders.

## Why it belongs in Core

EaseMotion aims to provide complex, premium animations without sacrificing performance. When developers attempt to create animated "drawing" borders, they almost universally animate properties like `border-width`, `width`, or `height`. **Animating dimensions triggers continuous layout recalculations (Reflows) and Paint operations**, devastating mobile performance.

This preset implements a critical CSS performance pattern: it generates absolutely positioned `::before` and `::after` pseudo-elements that act as the border lines. It then animates only their `scaleX` and `scaleY` properties from the `center` origin. This creates the illusion of borders drawing themselves while keeping the entire animation 100% offloaded to the GPU compositor (`will-change: transform`). 

By providing this natively, EaseMotion enforces this crucial performance best practice for drawing borders.

## Implementation Specs

- **Properties Animated:** `transform` (`scaleX`, `scaleY`)
- **Performance:** Hardware Accelerated (`will-change: transform`, no layout thrashing)
- **Accessibility:** `prefers-reduced-motion` compliant (falls back to a soft opacity fade)
- **Default Duration:** `0.6s`
- **Default Easing:** `cubic-bezier(0.16, 1, 0.3, 1)`
