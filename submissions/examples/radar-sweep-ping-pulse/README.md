# Radar Sweep Ping Pulse (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Radar Sweep Ping Pulse**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-anim-radar-sweep-ping-pulse` is an advanced DSL motion preset designed for map markers, active scanning indicators, and high-alert notifications. It combines a spinning gradient sweep with an expanding circular ping ring, flawlessly executed using hardware-accelerated pseudo-elements.

### Included CSS

1. **Configurable Variables:** Customize the duration, ping scale limits, ring thickness, and colors for both the sweep and the ping independently (`--ease-duration-radar-sweep`, `--ease-duration-radar-ping`, `--ease-radar-sweep-color`, `--ease-radar-ping-color`, etc.).
2. **Keyframes:** Hardware-accelerated `@keyframes` manipulating `rotate()` for the sweep and `scale()` + `opacity` for the ping.
3. **Utility Classes:** `.ease-anim-radar-sweep-ping-pulse` DSL class for instant application.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)`. Infinite spinning and scaling heavily triggers vestibular motion sickness. The fallback completely strips both the rotational sweep and the scaling ping, safely replacing it with a gentle, accessible opacity pulse on the outer ring.

## Why it belongs in Core

EaseMotion aims to provide complex, premium interactions out of the box. A common mistake developers make when building radar sweeps is animating the `conic-gradient` directly. This causes severe layout thrashing because gradient animation is not hardware accelerated.

By providing this natively as a pure CSS `@keyframes` preset, developers can add a highly polished, advanced radar scanner to any element simply by adding a class name. This implementation uses two absolutely positioned pseudo-elements (`::before` for the spinning sweep, `::after` for the scaling ping) and only animates the `transform` and `opacity` properties, ensuring 100% offloading to the GPU compositor (`will-change: transform`).

## Implementation Specs

- **Properties Animated:** `transform` (`rotate`, `scale`) and `opacity` via pseudo-elements.
- **Performance:** Hardware Accelerated (`will-change: transform, opacity`, absolutely no layout thrashing).
- **Accessibility:** `prefers-reduced-motion` compliant (strips infinite spin and scaling, falls back to static fade pulse).
- **Default Duration:** `2s` (sweep) / `2s` (ping).
- **Default Easing:** `linear` (sweep) / `cubic-bezier(0.215, 0.61, 0.355, 1)` (ping).
