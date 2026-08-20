# Heartbeat Pulsate Beat (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Heartbeat Pulsate Beat**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-anim-heartbeat-pulsate-beat` is a highly engaging DSL motion preset designed for primary Call-to-Action (CTA) buttons, notification indicators, and active states. It explicitly maps a human double-beat rhythm (systole and diastole) to attract attention organically without feeling artificial or mechanical.

### Included CSS

1. **Configurable Variables:** Customize the duration and the scale intensity of both the primary and secondary beats (`--ease-duration-heartbeat`, `--ease-heartbeat-scale-1`, `--ease-heartbeat-scale-2`).
2. **Keyframes:** Hardware-accelerated `@keyframes` manipulating `scale()` using precise percentage intervals to mimic a resting period between double-beats.
3. **Utility Classes:** `.ease-anim-heartbeat-pulsate-beat` (infinite pulse) and `.ease-anim-heartbeat-pulsate-beat-hover` (single trigger on hover) DSL classes for instant application.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)`. Continuous scaling triggers vestibular motion sickness and visual distraction. The fallback completely strips the scaling transforms entirely, safely replacing it with a slow, accessible opacity pulse or a static hover state.

## Why it belongs in Core

EaseMotion aims to provide premium, physically-accurate interactions out of the box. Building a realistic heartbeat requires precise keyframe mapping (e.g., 14%, 28%, 42%, 70%) to create the correct cadence. A simple `ease-in-out` scale loop looks like breathing, not a heartbeat.

By providing this natively as a pure CSS `@keyframes` preset, developers can add a highly polished, organic heartbeat to any element simply by adding a class name. Furthermore, it enforces hardware acceleration (`will-change: transform`) and strictly adheres to WCAG reduced-motion guidelines.

## Implementation Specs

- **Properties Animated:** `transform` (`scale`)
- **Performance:** Hardware Accelerated (`will-change: transform`, no layout thrashing)
- **Accessibility:** `prefers-reduced-motion` compliant (strips scaling, falls back to slow opacity pulse)
- **Default Duration:** `1.2s`
- **Default Easing:** `ease-in-out`
