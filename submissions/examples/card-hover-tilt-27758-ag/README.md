# Card Hover Lift & Perspective Tilt Mixin

This guide details configuration specs for generating SCSS perspective-tilt and lift utilities.

---

## Technical Overview: The 3D Perspective Mixin

Adding flat translations on hover creates generic, simple visual styles. Declaring perspective fields on the parent selector, and rotating child cards along X/Y coordinates in 3D space, elevates card design quality:

```scss
// SCSS Perspective Card Mixin
@mixin perspective-card($depth: 1000px, $translate-z: 30px) {
  perspective: $depth;
  
  .tilt-card {
    transform-style: preserve-3d;
    transition: transform 0.15s ease, box-shadow 0.25s ease;
    
    .card-inner {
      transform: translateZ($translate-z);
    }
  }
}

// Utility class wrapper
.tilt-wrapper {
  @include perspective-card(1000px);
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Move your cursor around the boundaries of the card.
3. Verify that the card tilts dynamically in 3D space relative to your cursor position, and that a translucent shine layer follows your cursor coordinate.
4. Leave the card — verify that the card smoothly transitions back to flat.
