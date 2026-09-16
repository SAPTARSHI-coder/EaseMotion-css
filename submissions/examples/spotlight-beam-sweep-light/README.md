# Spotlight Beam Sweep Light (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Spotlight Beam Sweep Light**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-anim-spotlight-beam-sweep-light` is a premium, hardware-accelerated motion preset designed for highlighting active pricing tiers, creating premium button hovers, and building modern skeleton loading screens. It sweeps a stylized beam of light across the element.

### Included CSS

1. **Configurable Variables:** Customize the duration, skew angle, width, and gradient color of the light beam (`--ease-duration-spotlight`, `--ease-spotlight-skew`, `--ease-spotlight-color`, etc.).
2. **Keyframes:** Hardware-accelerated `@keyframes` manipulating `translateX()`.
3. **Utility Classes:** `.ease-anim-spotlight-beam-sweep-light` (hover trigger) and `.ease-anim-spotlight-beam-sweep-light-infinite` (continuous skeleton/highlight state) DSL classes for instant application.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)`. Continuous sweeping lights can trigger vestibular motion sickness and be visually distracting. The fallback completely strips the sweeping motion entirely, safely replacing it with a static, subtle opacity highlight.

## Why it belongs in Core

EaseMotion aims to provide premium, performant interactions out of the box. A common mistake developers make when building sweeping light effects is animating `background-position`. This causes severe layout thrashing and forces the CPU to constantly repaint the element, destroying the 60FPS target.

By providing this natively as a pure CSS `@keyframes` preset, developers can add a highly polished, premium light sweep to any element simply by adding a class name. This implementation strictly uses an absolutely positioned pseudo-element and only animates the `transform` property, ensuring 100% offloading to the GPU compositor (`will-change: transform`).

## Implementation Specs

- **Properties Animated:** `transform` (`translateX`) via `::after` pseudo-element
- **Performance:** Hardware Accelerated (`will-change: transform`, absolutely no layout thrashing)
- **Accessibility:** `prefers-reduced-motion` compliant (strips sweeping motion, falls back to static fade)
- **Default Duration:** `1.2s` (hover) / `2s` (infinite)
- **Default Easing:** `ease-in-out`
