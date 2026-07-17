# Dynamic Color Palette Shading & Tinting Mixins

This guide details configuration specs for generating SCSS dynamic color palette tinting mixins.

---

## Technical Overview: The Shading Mixin

Declaring static HEX code variants repeatedly makes stylesheets verbose and hard to refactor. Utilizing SCSS light/dark filters generates harmonious color variations:

```scss
// SCSS Color Tinting & Shading Mixin
@mixin color-shade-palette($base-color) {
  // Generate tint swatches
  .tint-2 { background-color: lighten($base-color, 20%); }
  .tint-1 { background-color: lighten($base-color, 10%); }
  
  // Base Swatch
  .base { background-color: $base-color; }
  
  // Generate shade swatches
  .shade-1 { background-color: darken($base-color, 10%); }
  .shade-2 { background-color: darken($base-color, 20%); }
}

// Class mapping
.palette-block {
  @include color-shade-palette(#7c3aed);
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Review the swatch columns.
3. Verify that base violet and emerald cores generate lightened tints (left) and darkened shades (right) dynamically.
