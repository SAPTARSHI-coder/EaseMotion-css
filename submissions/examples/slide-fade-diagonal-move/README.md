# Slide Fade Diagonal Move (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Slide Fade Diagonal Move**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-slide-fade-diagonal-move` is a sophisticated DSL motion preset designed for premium entrance animations (like popovers, floating action buttons, or grid stagger reveals). It simultaneously animates `opacity` and a 2D diagonal `translate3d`, resulting in a buttery smooth, 60fps hardware-accelerated entrance.

### Included CSS

1. **Configurable Variables:** Allows downstream users to easily customize the duration, easing curve, and X/Y traversal distances without rewriting the `@keyframes`.
2. **Keyframes:** Hardware-accelerated `@keyframes ease-slide-fade-diagonal-move` utilizing `translate3d(x, y, z)`.
3. **Utility Class:** `.ease-anim-slide-fade-diagonal-move` DSL class for instant application.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)` to gracefully degrade the spatial animation into a simple, rapid opacity fade for users with vestibular disorders.

## Why it belongs in Core

EaseMotion currently provides standard vertical (`slide-up`/`slide-down`) and horizontal (`slide-left`/`slide-right`) fades. A diagonal trajectory is a highly requested standard in modern premium UIs (e.g., toast notifications sliding in from a corner, or staggered grid items sliding in diagonally towards the center).

## Implementation Specs

- **Properties Animated:** `transform`, `opacity`
- **Performance:** Hardware Accelerated (`translate3d`, `will-change`)
- **Accessibility:** `prefers-reduced-motion` compliant
- **Default Duration:** `0.6s`
- **Default Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (Smooth deceleration)
