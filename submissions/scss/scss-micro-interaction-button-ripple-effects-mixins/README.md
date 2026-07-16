# SCSS Utility: Micro-Interaction Button Ripple Effect Mixins

A performance-optimized SCSS utility partial providing reusable parametric mixins and self-contained classes to implement modern, GPU-accelerated button ripple expand waves upon element clicks.

## API & Parameter Maps Reference

### `ease-button-ripple()`
Employs native absolute layout centering coupled with hardware-accelerated scaling transforms (`scale()`) to execute clean micro-interactions without causing continuous layout repaints.

- `$color` (Default: `rgba(255, 255, 255, 0.35)`): Sets the background color profile for the transient ripple ring.
- `$duration` (Default: `tokens.$ease-duration-lg`): The lifecycle duration parameter of the wave cycle.
- `$easing` (Default: `tokens.$ease-ease-standard`): Symmetrical easing velocity profile array mapping.

---

## Technical Integration Guide

### Sass Framework Compilation
```scss
@use "../../scss/mixins" as ease;
@use "../../scss/tokens" as tokens;

.custom-action-btn {
  @include ease.ease-button-ripple(
    $color: rgba(56, 189, 248, 0.4),
    $duration: tokens.$ease-duration-md
  );
}

```
---
Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**