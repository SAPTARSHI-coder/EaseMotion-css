# Outline Pulse Ring Expand (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Outline Pulse Ring Expand**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-anim-outline-pulse-ring-expand` is a highly requested DSL motion preset designed for interactive buttons, active avatars, and "live" indicators. It simulates an outline or ring expanding outwards from the element and fading away.

### Included CSS

1. **Configurable Variables:** Customize the duration, timing curve, ring width, ring color, and max scale expansion (`--ease-duration-pulse`, `--ease-timing-pulse`, `--ease-pulse-ring-width`, `--ease-pulse-ring-color`, `--ease-pulse-scale-max`, etc.).
2. **Keyframes:** Hardware-accelerated `@keyframes` manipulating `scale()` and `opacity`.
3. **Utility Classes:** `.ease-anim-outline-pulse-ring-expand` (triggers on hover) and `.ease-anim-outline-pulse-ring-expand-infinite` DSL classes for instant application.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)`. Continuous scaling expansions can trigger vestibular disorders. The fallback strips the scaling expansion entirely and replaces the effect with a gentle, accessible opacity fade.

## Why it belongs in Core

Creating an animated pulsating ring is historically a performance trap. When developers attempt to create this effect, they almost universally animate the `box-shadow` spread radius or `outline-width` properties. **Animating `box-shadow` or `outline` triggers continuous Paint operations on every frame**, causing devastating performance drops on mobile devices.

This preset implements a critical CSS performance pattern: it generates an absolutely positioned `::after` pseudo-element that acts as the ring. It uses a static, non-animated `box-shadow` to draw the ring's line, and then animates only the `scale()` transform property of that pseudo-element. 

Crucially, it uses `border-radius: inherit`, meaning the ring will perfectly match the shape of whatever element it is attached to (whether it's a pill button, a square card, or a perfectly circular avatar).

By providing this natively, EaseMotion enforces this crucial performance best practice for pulsating ring animations, guaranteeing 60 FPS by keeping the entire animation 100% offloaded to the GPU compositor (`will-change: transform, opacity`).

## Implementation Specs

- **Properties Animated:** `transform` (`scale`), `opacity`
- **Performance:** Hardware Accelerated (`will-change: transform, opacity`, no Paint thrashing)
- **Accessibility:** `prefers-reduced-motion` compliant (strips scaling entirely)
- **Default Duration:** `1.5s`
- **Default Easing:** `cubic-bezier(0.2, 0, 0, 1)` (Rapid start, long fading tail)
