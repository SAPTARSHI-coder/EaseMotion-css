# Bubble Pop Expand Burst (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Bubble Pop Expand Burst**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-anim-bubble-pop-expand-burst` is a playful, jelly-like DSL motion preset designed for satisfying micro-interactions, modal entrances, and exit animations. It simulates a bubble expanding past its surface tension before snapping into place (entrance) or bursting entirely (exit).

### Included CSS

1. **Configurable Variables:** Customize the duration, starting scale, overshoot peak, squash valley, and final burst scales (`--ease-duration-bubble`, `--ease-bubble-overshoot-scale`, `--ease-bubble-burst-scale`, etc.).
2. **Keyframes:** Hardware-accelerated `@keyframes` manipulating `scale()` and `opacity`.
3. **Utility Classes:** `.ease-anim-bubble-pop-expand-burst` (entrance pop trigger) and `.ease-anim-bubble-pop-expand-burst-exit` (burst disappear trigger) DSL classes for instant application.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)`. Aggressive scaling strongly triggers vestibular motion sickness. The fallback completely strips the scaling transforms entirely, safely replacing the pop entrance with a gentle opacity fade-in, and the burst exit with an opacity fade-out.

## Why it belongs in Core

EaseMotion aims to provide premium, physically-accurate interactions out of the box. Building a realistic jelly pop requires precise keyframe mapping (overshoot and squash) to feel physical rather than linear.

By providing this natively as a pure CSS `@keyframes` preset, developers can add a highly polished, dramatic bubble pop entry/exit to any element simply by adding a class name. Furthermore, it enforces hardware acceleration (`will-change: transform, opacity`) and strictly adheres to WCAG reduced-motion guidelines.

## Implementation Specs

- **Properties Animated:** `transform` (`scale`), `opacity`
- **Performance:** Hardware Accelerated (`will-change: transform, opacity`, no layout thrashing)
- **Accessibility:** `prefers-reduced-motion` compliant (strips scaling, falls back to fade)
- **Default Duration:** `0.6s`
- **Default Easing:** `ease-out` (with explicit keyframe decay)
