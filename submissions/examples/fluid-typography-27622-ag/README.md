# Fluid Typography & Clamp Mixin System

This guide details configuration specs for generating SCSS fluid typography clamp mixins.

---

## Technical Overview: The Fluid Typography Mixin

Setting rigid typography values using static pixels results in uneven viewport jumps. Utilizing CSS clamp scaling provides smooth font-size scaling:

```scss
// SCSS Fluid Typography Mixin
@mixin fluid-type($min-size, $max-size, $min-vw: 320px, $max-vw: 1200px) {
  // Convert boundaries to unitless factors
  $u1: unit($min-size);
  $u2: unit($max-size);
  
  @if $u1 == $u2 {
    font-size: clamp(
      $min-size,
      calc(#{$min-size} + (#{$max-size} - #{$min-size}) * ((100vw - #{$min-vw}) / (#{$max-vw} - #{$min-vw}))),
      $max-size
    );
  }
}

// Utility Class mapping
.fluid-title {
  @include fluid-type(1.4rem, 2.5rem);
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Observe the headers inside the dashed simulated viewport.
3. Slide the **Simulated Container Width** range — verify that title font-sizes shrink and grow dynamically in a smooth curve.
