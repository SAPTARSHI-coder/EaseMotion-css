# SCSS Utility: Micro-Interaction Button Ripple Effect Mixins

A performance-optimized SCSS utility partial providing modular parametric mixins and standalone classes to implement clean button ripple expand animations upon interactive pointer/keyboard event states.

## ⚠️ Architectural Specification Note
> **Sass Engine Constraint:** This utility structures a **CSS-only center-origin ripple animation layer**. It does not track cursor click coordinates (which natively requires a JavaScript telemetry payload). Instead, it deploys a wide scaling matrix (`scale(5)`) from the parent component node's true center to maintain lightweight, 60fps execution metrics.

## API & Parameter Reference

### `ease-button-ripple()`
Injects a centered pseudo-element canvas tracking transitions via pure CSS `@keyframes` logic.

- `$color` (Default: `rgba(255, 255, 255, 0.35)`): Color value of the expanding concentric circle.
- `$duration` (Default: `tokens.$ease-duration-lg`): The lifecycle runtime pace of the pulse wave.
- `$easing` (Default: `tokens.$ease-ease-standard`): Acceleration profile layout mapping.
- `$trigger` (Default: `'active'`): Controls the interaction hook interface selection (`'active'` or `'focus-visible'`).

---

## Technical Integration Guide

### Sass Dependency Integration
```scss
@use "../../scss/mixins" as ease;
@use "../../scss/tokens" as tokens;

.custom-action-trigger {
  @include ease.ease-button-ripple(
    $color: rgba(tokens.$ease-color-primary, 0.4),
    $trigger: 'active'
  );
}

```
---
Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**