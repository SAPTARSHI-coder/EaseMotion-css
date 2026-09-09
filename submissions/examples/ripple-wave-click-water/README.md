# Ripple Wave Click Water (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Ripple Wave Click Water**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-anim-ripple-wave-click-water` is an essential, highly-requested interaction DSL preset designed for buttons, clickable cards, and interactive list items. It triggers a hardware-accelerated water ripple effect expanding outward from the center when the user clicks or taps the element (`:active` state).

### Included CSS

1. **Configurable Variables:** Customize the duration, ripple color, peak opacity, and maximum scale (`--ease-duration-ripple`, `--ease-ripple-color`, `--ease-ripple-opacity`, `--ease-ripple-scale`).
2. **Keyframes:** Hardware-accelerated `@keyframes` manipulating `scale()` and `opacity`.
3. **Utility Classes:** `.ease-anim-ripple-wave-click-water` DSL class for instant application.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)`. Massive expansive scaling can cause vestibular discomfort. The fallback completely strips the expansive scaling animation, safely replacing it with a static, subtle opacity flash that confirms the user's interaction without disruption.

## Why it belongs in Core

EaseMotion aims to provide complex, premium interactions out of the box using pure CSS. A common mistake developers make when building CSS ripples is defining fixed pixel sizes, meaning the ripple often doesn't reach the corners of wide buttons or cards.

By providing this natively as a pure CSS `@keyframes` preset, developers get a mathematically perfect ripple. This implementation uses a `padding-bottom` hack to guarantee a perfectly circular pseudo-element that is `250%` the width of the parent container, ensuring it flawlessly covers any rectangular aspect ratio. Everything is 100% offloaded to the GPU compositor (`will-change: transform`).

## Implementation Specs

- **Properties Animated:** `transform` (`scale`) and `opacity`.
- **Performance:** Hardware Accelerated (`will-change: transform, opacity`, absolutely no layout thrashing).
- **Architecture:** Pure CSS `:active` state. Uses relative container sizing (`250%`) to eliminate hard-coded pixel widths.
- **Accessibility:** `prefers-reduced-motion` compliant (strips scaling wave, falls back to a subtle opacity flash).
- **Default Duration:** `0.6s`.
- **Default Easing:** `cubic-bezier(0.2, 0.8, 0.2, 1)`.
