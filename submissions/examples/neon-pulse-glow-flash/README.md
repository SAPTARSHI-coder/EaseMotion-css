# Neon Pulse Glow Flash (Core DSL Proposal)

This submission is a formal proposal for a new motion preset to be added to the EaseMotion `core/animations.css` engine: **Neon Pulse Glow Flash**.

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this core feature request has been submitted as a fully functional example in `submissions/examples/`. Maintainers can effortlessly migrate this code into `core/animations.css` after review.

## Feature Overview

The `ease-anim-neon-pulse-glow-flash` is a high-visibility DSL motion preset designed for cyberpunk aesthetics, critical system warnings, and active live indicators. It generates a cinematic, multi-layered neon bloom that physically pulsates and randomly flickers like a high-voltage light tube.

### Included CSS

1. **Configurable Variables:** Customize the neon color, duration of the pulse cycle, maximum/minimum opacity limits, and physical scaling limits (`--ease-duration-neon`, `--ease-neon-color`, `--ease-neon-opacity-max`, `--ease-neon-scale-max`).
2. **Keyframes:** Hardware-accelerated `@keyframes` mapping out a complex flicker sequence (mimicking voltage drops) using *only* `transform: scale()` and `opacity`.
3. **Utility Classes:** `.ease-anim-neon-pulse-glow-flash` DSL class for instant application to any button, card, or badge.
4. **Accessibility Override:** Deep integration with `@media (prefers-reduced-motion: reduce)`. Rapid flashing lights pose a severe risk for photosensitive epilepsy and vestibular disorders. The fallback completely strips the flickering and scaling keyframes entirely, safely locking the pseudo-element to a static, continuous glow. This preserves the neon aesthetic safely.

## Why it belongs in Core

EaseMotion aims to provide complex, premium interactions out of the box using pure CSS with strict adherence to 60FPS performance. 

**The Performance Problem:**
A common mistake developers make when building "neon glows" is animating the `box-shadow` property directly. Animating `box-shadow` forces the browser to repaint the complex blurry shadow on every single frame, causing severe CPU spikes and frame drops, especially on mobile devices.

**The EaseMotion Solution:**
By providing this natively as a parametric `@keyframes` preset, developers get a guaranteed 60FPS glow. We create a `::before` pseudo-element behind the container, apply a massive, static `box-shadow` to it *once*, and then animate ONLY its `opacity` and `transform: scale()`. This optical illusion perfectly mimics a pulsing/flashing light source while running entirely on the GPU compositor (`will-change: transform, opacity`).

## Implementation Specs

- **Properties Animated:** `transform` (`scale`) and `opacity`. **Never `box-shadow`**.
- **Performance:** Hardware Accelerated (`will-change: transform, opacity`, absolutely no paint/layout thrashing).
- **Architecture:** Leverages a `::before` pseudo-element pinned behind the container (`z-index: -1`).
- **Accessibility:** `prefers-reduced-motion` compliant (strips the flashing, falls back to a static glow).
- **Default Duration:** `2s`.
- **Default Easing:** Baked directly into the complex keyframe percentages.
