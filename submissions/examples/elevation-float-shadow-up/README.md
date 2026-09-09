# Elevation Float Shadow Up (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Elevation Float Shadow Up**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-elevation-float-shadow-up` is an ambient DSL motion preset designed for continuous floating elements (like gamified tokens, 3D product cards, or premium avatars). It simulates an object hovering smoothly in mid-air while casting a dynamic shadow on the "floor" below.

### Included CSS

1. **Configurable Variables:** Customize the duration, timing curve, float distance, and shadow properties (`--ease-duration-float`, `--ease-timing-float`, `--ease-float-distance`, `--ease-shadow-color`, `--ease-shadow-opacity-max`, `--ease-shadow-opacity-min`).
2. **Keyframes:** Hardware-accelerated `@keyframes` utilizing an advanced inverse-transform technique to keep the shadow locked to the floor while the parent element floats up and down.
3. **Utility Classes:** `.ease-anim-elevation-float-shadow-up` (triggers on hover) and `.ease-anim-elevation-float-shadow-up-infinite` (ambient looping) DSL classes for instant application.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)` to completely disable the continuous vertical floating to prevent vestibular discomfort.

## Why it belongs in Core

EaseMotion aims to provide complex, premium animations without sacrificing performance. When developers build floating objects, they frequently animate `box-shadow` or `filter: drop-shadow()` to simulate the object's distance from the ground. **Animating these shadow properties triggers expensive layout thrashing and continuous repaints**, severely reducing framerates.

This preset implements a pure CSS "inverse transform" architectural pattern. An absolutely positioned `::after` pseudo-element serves as the shadow. While the parent object translates up (`translateY(-20px)`), the shadow translates *down* by the exact inverse amount (`translateY(20px)`). This completely cancels out the parent's movement, locking the shadow perfectly to the floor. We then safely animate the `scale()` and `opacity` of the shadow texture.

This approach guarantees a flawless 60 FPS floating animation entirely offloaded to the GPU. Providing this pattern natively in the engine enforces this crucial performance best practice.

## Implementation Specs

- **Properties Animated:** `transform`, `opacity`
- **Performance:** Hardware Accelerated (`translateY`, `scale`, `will-change`)
- **Accessibility:** `prefers-reduced-motion` compliant (disables continuous vertical animation)
- **Default Duration:** `3s`
- **Default Float Distance:** `-20px`
