# Blur Prism Fade Light (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Blur Prism Fade Light**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-blur-prism-fade-light` is an advanced ambient DSL motion preset designed for premium background auras, glowing avatars, or highlighting critical UI sections. It simulates a shifting, multi-colored, out-of-focus light source (like a chromatic prism).

### Included CSS

1. **Configurable Variables:** Customize the duration, timing curve, blur radius, and spread (`--ease-duration-prism`, `--ease-timing-prism`, `--ease-prism-blur-radius`, `--ease-prism-spread`).
2. **Keyframes:** Hardware-accelerated `@keyframes` utilizing an advanced static-blur technique to completely avoid dynamically animating `filter: blur()`.
3. **Utility Class:** `.ease-anim-blur-prism-fade-light` DSL class for instant application.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)` to completely disable the pulsating scale, leaving only a very slow ambient opacity fade to prevent vestibular discomfort.

## Why it belongs in Core

EaseMotion aims to provide complex, premium animations without sacrificing performance. Developers attempting to build glowing, breathing auras almost universally write keyframes that dynamically animate `filter: blur()` or `box-shadow`. **Dynamically animating blur filters forces the browser to recalculate the blur matrix on every single frame**, utterly destroying performance and causing massive battery drain on mobile devices.

This preset introduces a crucial CSS performance pattern: 
It generates two absolutely positioned pseudo-elements (`::before` and `::after`) with beautiful linear gradients. It applies a **static** `filter: blur()` to them. Because the blur is static, the browser compositor caches the blurred layers as GPU textures. The keyframes then only animate the `opacity` and `transform: scale()` of those textures. 

This results in a beautiful, dynamic blurry light effect that is 100% GPU accelerated, guaranteeing a flawless 60 FPS. Providing this pattern natively in the engine enforces this crucial performance best practice.

## Implementation Specs

- **Properties Animated:** `transform`, `opacity` (on `::before` and `::after` pseudo-elements)
- **Performance:** Hardware Accelerated (`will-change: transform, opacity`)
- **Accessibility:** `prefers-reduced-motion` compliant (disables scale pulsing)
- **Default Duration:** `3s`
- **Default Easing:** `ease-in-out`
