# Card Hover Lift & Perspective Tilt Utility

## What does this do?
This SCSS mixin creates a reusable 3D hover interaction for cards that combines elevation (lift), perspective tilt, scaling, and shadow depth.

---

## How is it used?

### SCSS Usage

```scss
.card {
  @include card-hover-lift-tilt(
    $lift: -12px,
    $rotate-x: 8deg,
    $rotate-y: 6deg,
    $scale: 1.03
  );
}