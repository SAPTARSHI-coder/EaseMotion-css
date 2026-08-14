# Card Hover Lift & Perspective Tilt Utility

This guide details configuration specs for generating SCSS 3D perspective tilt mixins.

---

## Technical Overview: The 3D Tilt Mixin

Hover animations usually rely on simple translation offsets (`translateY`), missing out on realistic 3D space depth. Packaging perspective parameters inside SCSS mixins ensures smooth transformations:

```scss
// SCSS Perspective Tilt Mixin
@mixin perspective-tilt($axis: Y, $angle: 12deg, $lift: -4px) {
  transform-style: preserve-3d;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
  
  &:hover {
    @if $axis == Y {
      transform: rotateY($angle) translateY($lift);
    } @else if $axis == X {
      transform: rotateX($angle) translateY($lift);
    }
  }
}

// Utility class mapping
.tilt-left {
  @include perspective-tilt(Y, -12deg);
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Hover over the **Tilt Left** card — verify Y-axis 3D tilt coordinates.
3. Hover over the **Tilt Right** and **Tilt Upwards** cards — verify corresponding angular tilt displacements.
