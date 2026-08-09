# Fluid Typography & Clamp Mixin System

This guide details configuration specs for generating SCSS fluid typography mixins.

---

## Technical Overview: The Fluid Clamp Mixin

Writing rigid responsive media queries for different screen breakpoints repeatedly results in stepped font sizes. Utilizing an SCSS viewport mixin generates a smooth scaling curve:

```scss
// SCSS Fluid Typography Mixin
@mixin fluid-type($min-size, $max-size, $min-vw: 320px, $max-vw: 1200px) {
  // Convert units to unitless rems
  $min-rem: $min-size / 16px * 1rem;
  $max-rem: $max-size / 16px * 1rem;
  
  // Calculate slope
  $slope: ($max-size - $min-size) / ($max-vw - $min-vw);
  $y-intercept: $min-size - ($slope * $min-vw);
  
  font-size: clamp(
    #{$min-rem},
    calc(#{$y-intercept / 16px * 1rem} + #{$slope * 100vw}),
    #{$max-rem}
  );
}

// Utility class mapping
.fluid-header {
  @include fluid-type(24px, 40px);
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Watch the **Fluid Header Title** text.
3. Slide the simulated width slider — verify that header and body font sizes scale smoothly.
