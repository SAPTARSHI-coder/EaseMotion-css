# Fluid Typography Mixin System

This guide covers SCSS typography mixin configurations used to build fluidly scaling font sizes.

---

## Technical Overview: The Fluid Clamp Mixin

Defining rigid font sizing breaks heading elements on smaller layouts. Utilizing CSS `clamp()` bounds via SCSS mixins enables font assets to scale smoothly matching container viewport widths:

```scss
// SCSS Fluid Typography clamp mixin
@mixin fluid-type($min-size, $max-size, $min-vw: 320px, $max-vw: 1200px) {
  // Convert px bounds to relative rem sizes
  $min-rem: $min-size / 16px * 1rem;
  $max-rem: $max-size / 16px * 1rem;
  
  // Calculate slope rate
  $slope: ($max-size - $min-size) / ($max-vw - $min-vw);
  $y-intercept: $min-size - $slope * $min-vw;
  
  // Resolve clamp parameters
  font-size: clamp(#{$min-rem}, #{$y-intercept / 16px * 1rem} + #{$slope * 100vw}, #{$max-rem});
}

// Utility Classes
h1 { @include fluid-type(24px, 48px); }
p { @include fluid-type(14px, 18px); }
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Drag the **Container Width** slider — verify the header and body text size transition smoothly according to container boundaries.
