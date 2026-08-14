# SCSS Utility: Text Highlight Underline Draw Utilities

A high-performance SCSS utility partial providing reusable mixins and standalone classes to implement elegant, hardware-accelerated text underline draws on hover and active states.

## API & Parametric Configurations

### `ease-underline-draw()`
Leverages pseudo-elements (`::after`) and GPU-accelerated `scaleX()` transitions to avoid continuous repaint operations during text micro-interactions.

- `$color` (Default: `tokens.$ease-color-primary`): Sets color profiles for the line stroke.
- `$height` (Default: `2px`): Controls text line weight depths.
- `$offset` (Default: `4px`): Gap allocation shifting the element away from the baseline.
- `$duration` (Default: `tokens.$ease-duration-md`): Scale transaction velocity parameter.
- `$easing` (Default: `tokens.$ease-ease-standard`): Standard easing curve vector mapping.
- `$origin` (Default: `left`): Structural starting locus point (`left`, `right`, `center`).

---

## Technical Implementation Guide

### Sass Framework Integration
```scss
@use "../../scss/mixins" as ease;
@use "../../scss/tokens" as tokens;

.custom-nav-link {
  @include ease.ease-underline-draw(
    $color: tokens.$ease-color-secondary,
    $height: 3px,
    $origin: center
  );
}

```
---
Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**