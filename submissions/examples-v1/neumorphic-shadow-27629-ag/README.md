# Neumorphic Soft Shadow Elevation Mixin

This guide details configuration specs for generating SCSS neumorphic shadow mixins.

---

## Technical Overview: The Neumorphic Mixin

Hardcoding static double shadow boundaries repeatedly leads to styling discrepancies across layouts. Packaging these attributes inside an SCSS mixin scales parameters uniformly:

```scss
// SCSS Neumorphic Shadow Mixin
@mixin neumorphic-shadow($type: flat, $base-bg: #e0e0e0, $offset: 9px, $blur: 16px) {
  background-color: $base-bg;
  
  // Calculate relative highlights and lowlights
  $darker-shadow: darken($base-bg, 13%);
  $lighter-shadow: lighten($base-bg, 13%);
  
  @if $type == flat {
    box-shadow: 
      $offset $offset $blur $darker-shadow,
      (-$offset) (-$offset) $blur $lighter-shadow;
  } @else if $type == pressed {
    box-shadow: 
      inset $offset $offset $blur $darker-shadow,
      inset (-$offset) (-$offset) $blur $lighter-shadow;
  }
}

// Class mapping
.neu-flat { @include neumorphic-shadow(flat); }
.neu-pressed { @include neumorphic-shadow(pressed); }
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Review the flat and pressed panels.
3. Verify that cards render double-offset shadows (light highlights on top-left, dark shadows on bottom-right) simulating surface extrusions.
