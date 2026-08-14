# SCSS Utility: Developer Custom Style Mixins

Provides abstract, reusable SCSS mixins (`@include`) allowing developers to compile core framework motion metrics directly within custom styles.

## API Reference & Parameters

### 1. `animate()`
Maps custom keyframe targets with idiomatic shorthand execution orders and hardware optimization layers.
- **Parameters:** `$name`, `$duration`, `$timing`, `$delay`, `$iteration`, `$direction`, `$fill`.

### 2. `hover-effect()`
A composable mixin supporting combinations of scale transformations, spatial translations, and box-shadow modifications on cursor interaction states.
- **Parameters:** `$scale`, `$lift`, `$glow`, `$glow-color`, `$hover-color`.

### 3. `scroll-reveal()`
Handles initial viewport target entry offsets configured to integrate with standard intersection observer tracking nodes.
- **Parameters:** `$distance`, `$axis`, `$duration`, `$delay`, `$easing`, `$reveal-class`.

---

## Technical Implementation Examples

```scss
@use "../../scss/mixins" as ease;
@use "../../scss/tokens" as tokens;

// Feature Card Example
.feature-card {
  @include ease.scroll-reveal(
    $distance: 40px,
    $axis: y,
    $duration: tokens.$ease-duration-lg,
    $delay: 0.15s
  );

  @include ease.hover-effect(
    $scale: 1.03,
    $lift: -8px,
    $glow: true,
    $glow-color: tokens.$ease-color-primary
  );
}

// Button Loop Example
.action-button {
  @include ease.animate(
    $name: 'ease-pop-pulse',
    $duration: tokens.$ease-duration-sm,
    $iteration: infinite,
    $direction: alternate
  );
}

```
---

Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**
