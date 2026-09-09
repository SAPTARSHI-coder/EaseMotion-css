# Fold Out Drop Down (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Fold Out Drop Down**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-fold-out-drop-down` is a highly requested DSL motion preset designed specifically for dropdown menus, popovers, and accordions. It simulates a 3D hinge mechanism where the menu swings down from the top edge.

### Included CSS

1. **Configurable Variables:** Customize the duration, timing curve, fold angle, and 3D perspective depth (`--ease-duration-fold`, `--ease-timing-fold`, `--ease-fold-angle`, `--ease-perspective`).
2. **Keyframes:** Hardware-accelerated `@keyframes` combining `perspective()` and `rotateX()`.
3. **Utility Class:** `.ease-anim-fold-out-drop-down` DSL class for instant application. Crucially includes `transform-origin: top center` to define the hinge.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)`. 3D spatial transforms trigger vestibular motion sickness. The fallback completely strips the 3D rotation and replaces it with a simple, rapid opacity fade.

## Why it belongs in Core

EaseMotion currently lacks specialized 3D entrance animations for attached components (like dropdown menus hanging off a navbar). Developers attempting to build this usually forget to include `perspective` or `backface-visibility: hidden`, leading to flickering during the animation. 

By providing this natively, EaseMotion encapsulates the complex 3D CSS boilerplate required for a smooth hinge animation, allowing developers to create highly tactile, physical interfaces out-of-the-box while maintaining strict WCAG reduced-motion compliance.

## Implementation Specs

- **Properties Animated:** `transform`, `opacity`
- **Performance:** Hardware Accelerated (`perspective`, `rotateX`, `will-change`, `backface-visibility`)
- **Accessibility:** `prefers-reduced-motion` compliant (falls back to a rapid opacity fade)
- **Default Duration:** `0.4s`
- **Default Easing:** `cubic-bezier(0.175, 0.885, 0.32, 1.275)` (creates a subtle, physical "spring" or bounce at the end of the fold)
