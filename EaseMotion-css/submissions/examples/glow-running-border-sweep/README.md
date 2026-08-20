# Glow Running Border Sweep (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Glow Running Border Sweep**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-anim-glow-running-border-sweep` is a highly requested premium DSL motion preset designed for feature cards, highlight boxes, and call-to-action containers. It creates the illusion of a glowing light "running" around the perimeter of the element's border.

### Included CSS

1. **Configurable Variables:** Customize the duration, glow color, border width, and masking background color (`--ease-duration-sweep`, `--ease-glow-color`, `--ease-glow-border-width`, `--ease-glow-bg-color`, `--ease-border-radius`).
2. **Keyframes:** Hardware-accelerated `@keyframes` manipulating `rotate()`.
3. **Utility Classes:** `.ease-anim-glow-running-border-sweep` (infinite loop) and `.ease-anim-glow-running-border-sweep-hover` DSL classes for instant application.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)`. Continuous full-perimeter rotation can trigger vestibular disorders. The fallback pauses the sweep entirely and replaces the rotating tail with a static, soft, full-perimeter glow.

## Why it belongs in Core

Creating a "running border" effect in CSS is notoriously difficult to optimize. When developers attempt to create this effect, they typically animate `border-image` or `background-position`, both of which trigger **continuous Paint operations on every single frame**, devastating mobile battery life and dropping framerates.

This preset implements a cutting-edge CSS performance pattern: 
1. It generates a massive, absolutely positioned `::before` pseudo-element with a `conic-gradient` that acts as the "glow".
2. It generates an `::after` pseudo-element that acts as an "inner mask", sitting exactly `--ease-glow-border-width` inwards from the edges to hide the center of the gradient.
3. It animates **only the `rotate()` transform property** of the deepest `::before` layer.

Because the massive gradient layer is simply rotating beneath the mask, the entire animation is 100% offloaded to the GPU compositor (`will-change: transform`). 

By providing this natively, EaseMotion enforces this crucial performance best practice for glowing border animations, guaranteeing 60 FPS without layout or paint thrashing.

## Implementation Specs

- **Properties Animated:** `transform` (`rotate`)
- **Performance:** Hardware Accelerated (`will-change: transform`, zero Paint thrashing)
- **Accessibility:** `prefers-reduced-motion` compliant (pauses rotation, falls back to static glow)
- **Default Duration:** `3s`
- **Default Easing:** `linear`
