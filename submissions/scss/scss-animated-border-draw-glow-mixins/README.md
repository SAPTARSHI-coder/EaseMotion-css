# SCSS Utility: Animated Border Draw & Glow Keyframe Mixins

Provides a robust package of reusable SCSS mixins and standalone classes designed to output high-performance animated border pathways and pulsating drop-shadow glows within the EaseMotion CSS engine.

## API & Parameter Maps Reference

### 1. `ease-border-draw()`
Leverages clean background-clipping parameters to support smooth, layout-safe border-drawn paths without recalculating node padding steps.
- **Parameters:** `$color`, `$width`, `$duration`, `$easing`.

### 2. `ease-border-glow()`
Injects hardware-optimized box-shadow keyframe cycles (`ease-border-glow-pulse`) to manage continuous glow iterations efficiently.
- **Parameters:** `$glow-color`, `$speed`, `$infinite`.

---

## Technical Integration Guide

### Sass Framework Compilation
```scss
@use "../../scss/mixins" as ease;
@use "../../scss/tokens" as tokens;

.custom-interactive-card {
  @include ease.ease-border-draw(
    $color: tokens.$ease-color-primary,
    $width: 3px
  );

  @include ease.ease-border-glow(
    $glow-color: tokens.$ease-shadow-glow,
    $speed: 1.5s
  );
}

```
---
Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**