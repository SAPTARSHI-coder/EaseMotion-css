# Card Hover Lift & Perspective Tilt Utility

## What does this do?

This SCSS mixin creates a reusable 3D hover interaction for cards that combines elevation (lift), perspective tilt on both axes, scaling, and shadow depth. Every value is a parameter with a sensible default, so one mixin covers subtle and dramatic variations.

It ships two mixins:

- `card-hover-lift-tilt(...)` — the full effect: lift, tilt, scale, and shadow on hover.
- `card-hover-lift(...)` — a lift-only variant with no tilt, for when a 3D rotation is too much.

Both include a `prefers-reduced-motion` block that disables the transition and hover transform for users who ask for reduced motion.

### Parameters

| Parameter | Default | Description |
|---|---|---|
| `$lift` | `-8px` | Vertical shift on hover (negative lifts the card up) |
| `$rotate-x` | `6deg` | Perspective tilt around the X axis |
| `$rotate-y` | `6deg` | Perspective tilt around the Y axis |
| `$scale` | `1.02` | Scale factor on hover |
| `$perspective` | `800px` | Perspective distance for the 3D tilt |
| `$duration` | `0.3s` | Transition duration |
| `$easing` | `ease` | Transition timing function |
| `$shadow` | `rgba(0, 0, 0, 0.18)` | Hover shadow color, or `false` to skip the shadow |

## How is it used?

Import the partial and include the mixin on a card selector:

```scss
@use "card-hover-lift-perspective-tilt" as *;

.card {
  @include card-hover-lift-tilt;
}

.card--strong {
  @include card-hover-lift-tilt(
    $lift: -12px,
    $rotate-x: 8deg,
    $rotate-y: 6deg,
    $scale: 1.03
  );
}

.card--flat {
  @include card-hover-lift($lift: -6px);
}
```

The default include compiles to roughly:

```css
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  will-change: transform;
}

.card:hover {
  transform: perspective(800px) rotateX(6deg) rotateY(6deg) translateY(-8px) scale(1.02);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18);
}

@media (prefers-reduced-motion: reduce) {
  .card {
    transition: none;
  }
  .card:hover {
    transform: none;
  }
}
```

## Why is it useful?

Card hover effects are usually copy-pasted and tweaked by hand, which drifts out of sync across a project. This mixin keeps the effect in one place, exposes clear parameters for tuning, and builds in reduced-motion support so accessibility is handled by default. That fits EaseMotion's aim of readable, reusable motion utilities.
