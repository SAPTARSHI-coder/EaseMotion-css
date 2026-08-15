# Liquid Morph Blob Shape (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Liquid Morph Blob Shape**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-anim-liquid-morph-blob-shape` is a highly organic ambient background motion preset. It creates a continuously morphing liquid blob effect, perfect for modern hero sections, avatar masks, and background accents.

### Included CSS

1. **Configurable Variables:** Customize the duration, colors of the overlapping blob layers, opacity, and the breathing scale (`--ease-duration-blob`, `--ease-blob-color-1`, `--ease-blob-color-2`, `--ease-blob-opacity`, `--ease-blob-scale-max`, `--ease-blob-scale-min`).
2. **Keyframes:** Hardware-accelerated `@keyframes` using *only* `rotate()` and `scale()`.
3. **Utility Classes:** `.ease-anim-liquid-morph-blob-shape` DSL class for instant application to any container.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)`. Continuous rotation can strongly trigger vestibular motion sickness. The fallback completely strips the rotation and scaling physics entirely, safely replacing the asymmetrical shapes with a static, perfect circle to preserve the aesthetic background colors without the motion.

## Why it belongs in Core

EaseMotion aims to provide complex, premium interactions out of the box using pure CSS with strict adherence to 60FPS performance. 

**The Performance Problem:**
A common mistake developers make when building "liquid blobs" is animating the `border-radius` property directly. Animating `border-radius` forces the browser into layout recalculation on every single frame, completely killing performance and battery life.

**The EaseMotion Solution:**
By providing this natively as a parametric `@keyframes` preset, developers get a guaranteed 60FPS optical illusion. We set a fixed, asymmetrical `border-radius` on two overlapping pseudo-elements, and then smoothly rotate them in opposite directions. The intersection of these rotating weird shapes creates the exact optical illusion of a morphing liquid blob, but it is 100% offloaded to the GPU compositor (`will-change: transform`).

## Implementation Specs

- **Properties Animated:** `transform` (`rotate` and `scale`). **Never `border-radius`**.
- **Performance:** Hardware Accelerated (`will-change: transform`, absolutely no layout thrashing).
- **Architecture:** Leverages `::before` and `::after` pseudo-elements rotating in opposite directions.
- **Accessibility:** `prefers-reduced-motion` compliant (strips the rotation, falls back to a static perfect circle).
- **Default Duration:** `8s` (layer 2 is offset to `9.6s` to prevent looping sync).
- **Default Easing:** `linear` (for continuous seamless looping).
