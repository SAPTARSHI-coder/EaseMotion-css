# Floating Ghost Drift Float (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Floating Ghost Drift Float**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-floating-ghost-drift-float` is an ambient DSL motion preset designed for background elements, ethereal objects, or "spooky" themed components. It simulates a ghostly entity slowly bobbing up and down, drifting side-to-side, and shifting its opacity back and forth.

### Included CSS

1. **Configurable Variables:** Customize the duration, timing curve, drift paths, and opacity ranges (`--ease-duration-ghost`, `--ease-drift-x-max`, `--ease-drift-y-max`, `--ease-ghost-opacity-high`, etc.).
2. **Keyframes:** Hardware-accelerated `@keyframes` combining `translate3d()` and `opacity`.
3. **Utility Classes:** `.ease-anim-floating-ghost-drift-float` and `.ease-anim-floating-ghost-drift-float-infinite` DSL classes for instant application.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)`. Unpredictable spatial drifting can cause nausea for some users. The fallback completely strips the translation drifting and replaces it with a very slow, ambient opacity pulse.

## Why it belongs in Core

EaseMotion provides fantastic micro-interactions for clicks and hovers, but developers often need long-running, ambient background animations to give interfaces a "living" feel. Building an organic, non-linear floating path requires complex multi-step keyframes mixing X/Y translation and opacity. 

By providing this natively, EaseMotion allows developers to add ethereal, ambient motion to their applications instantly, while keeping the heavy lifting offloaded to the GPU compositor (`will-change: transform, opacity`) and strictly adhering to WCAG reduced-motion guidelines.

## Implementation Specs

- **Properties Animated:** `transform` (`translate3d`), `opacity`
- **Performance:** Hardware Accelerated (`will-change: transform, opacity`, no layout thrashing)
- **Accessibility:** `prefers-reduced-motion` compliant (falls back to a soft opacity pulse)
- **Default Duration:** `8s` (very slow ambient loop)
- **Default Easing:** `ease-in-out`
