# Multi-Layer Box Shadow Elevation Scale

This guide details configuration specs for generating SCSS multi-layer elevation mixins.

---

## Technical Overview: The Elevation Mixin

Using single offset shadows looks flat and artificial. Layering multiple translucent shadows with varying offsets simulates real-world diffuse ambient lighting:

```scss
// SCSS Multi-Layer Box Shadow Mixin
@mixin box-shadow-elevation($level: 1) {
  @if $level == 1 {
    box-shadow: 
      0 1px 3px rgba(0, 0, 0, 0.12), 
      0 1px 2px rgba(0, 0, 0, 0.24);
  } @else if $level == 2 {
    box-shadow: 
      0 3px 6px rgba(0, 0, 0, 0.16), 
      0 3px 6px rgba(0, 0, 0, 0.23);
  } @else if $level == 3 {
    box-shadow: 
      0 10px 20px rgba(0, 0, 0, 0.19), 
      0 6px 6px rgba(0, 0, 0, 0.23);
  }
}

// Utility class mapping
.shadow-z1 {
  @include box-shadow-elevation(1);
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Observe the different shadows under Z1, Z2, and Z3.
3. Hover over the cards — verify that each card translates upward and elevates to the next shadow level.
