# Swing Pendulum Wobble Sway (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Swing Pendulum Wobble Sway**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-anim-swing-pendulum-wobble-sway` is a physically-inspired DSL motion preset designed for hanging notifications, playful UI elements, and engaging hover states. It simulates a swinging pendulum that pivots from an anchor point and gradually decays in momentum (wobbling to a stop).

### Included CSS

1. **Configurable Variables:** Customize the duration, timing curve, initial swing angle, and the physical anchor origin (`--ease-duration-swing`, `--ease-timing-swing`, `--ease-swing-angle`, `--ease-swing-origin`).
2. **Keyframes:** Hardware-accelerated `@keyframes` manipulating `rotate()`, featuring calculated decay points (20%, 40%, 60%, 80%) for a realistic wobble.
3. **Utility Classes:** `.ease-anim-swing-pendulum-wobble-sway` (hover trigger with decay) and `.ease-anim-swing-pendulum-sway-infinite` (continuous gentle swaying state) DSL classes for instant application.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)`. Rotational swaying can trigger vestibular motion sickness. The fallback completely strips the rotational `transform` entirely, replacing it with a subtle, accessible vertical `translateY` bob.

## Why it belongs in Core

EaseMotion aims to provide premium, physically-accurate interactions out of the box. Building realistic decay wobbles requires complex keyframe mathematics that are tedious to write manually. 

By providing this natively as a pure CSS `@keyframes` preset, developers can add a highly polished, physical pendulum swing to any element simply by adding a class name. Furthermore, it enforces hardware acceleration (`will-change: transform`) and strictly adheres to WCAG reduced-motion guidelines.

## Implementation Specs

- **Properties Animated:** `transform` (`rotate`)
- **Performance:** Hardware Accelerated (`will-change: transform`, no layout thrashing)
- **Accessibility:** `prefers-reduced-motion` compliant (strips rotation, falls back to vertical bob)
- **Default Duration:** `1s` (decay wobble) / `2.5s` (infinite sway)
- **Default Easing:** `ease-in-out`
