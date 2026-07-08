# [SCSS] Gradient Border Animation Mixin

## What does this do?
A reusable SCSS mixin that applies an animated rotating gradient border around container card components, with interactive brightness glow shifts on hover.

## How is it used?
Import the mixin and include it inside your card class selector:

```scss
@use 'gradient-border' as *;

.my-custom-card {
  @include gradient-border-card(3px, 4s);
}
```

### Parameters
- `$border-width` (Length): The thickness of the animated border outline (default: `2px`)
- `$duration` (Duration): The rotation animation loop speed (default: `4s`)
- `$gradient` (Gradient): The linear-gradient color mix (default: `linear-gradient(90deg, var(--ease-color-primary), var(--ease-color-secondary), var(--ease-color-primary))`)

## Why is it useful?
centralizing advanced gradient borders inside a mixin hides the complex pseudo-element layers and positions, and leverages standard `@keyframes` from the EaseMotion CSS core library.
