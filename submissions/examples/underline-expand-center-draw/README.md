# Underline Expand Center Draw (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Underline Expand Center Draw**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-anim-underline-expand-center-draw` is a highly requested DSL motion preset designed specifically for navigation links, dynamic headings, and inline text hover states. It simulates a clean, modern underline line appearing from the exact center of the text and expanding outward to the edges.

### Included CSS

1. **Configurable Variables:** Customize the duration, timing curve, line height, offset distance, and color (`--ease-duration-underline`, `--ease-timing-underline`, `--ease-underline-height`, `--ease-underline-offset`, `--ease-underline-color`).
2. **Keyframes:** Hardware-accelerated `@keyframes` manipulating `scaleX()`.
3. **Utility Classes:** `.ease-anim-underline-expand-center-draw` (triggers on hover) and `.ease-anim-underline-expand-center-draw-infinite` DSL classes for instant application.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)`. Rapid horizontal scaling can sometimes trigger minor discomfort. The fallback strips the scaling transform and replaces the drawing effect with a clean, accessible opacity crossfade for the underline.

## Why it belongs in Core

EaseMotion aims to provide complex, premium animations without sacrificing performance. When developers attempt to create animated underlines, they almost universally animate the `width` property. **Animating `width` triggers continuous layout recalculations (Reflows) and Paint operations**, severely hurting performance, especially on pages with dozens of links.

This preset implements a critical CSS performance pattern: it generates an absolutely positioned `::after` pseudo-element that acts as the line. It sets `transform-origin: center` and animates only the `scaleX` property. This creates the exact illusion of a line drawing itself while keeping the entire animation 100% offloaded to the GPU compositor (`will-change: transform`). 

By providing this natively, EaseMotion enforces this crucial performance best practice for interactive text elements.

## Implementation Specs

- **Properties Animated:** `transform` (`scaleX`)
- **Performance:** Hardware Accelerated (`will-change: transform`, no layout thrashing)
- **Accessibility:** `prefers-reduced-motion` compliant (falls back to a soft opacity fade)
- **Default Duration:** `0.3s`
- **Default Easing:** `ease-out`
