# Dynamic Color Palette Shading & Tinting Mixins

This guide details configuration specs for generating SCSS color palette shade functions.

---

## Technical Overview: The SCSS Shade Functions

Manually updating hex color codes for border details, backgrounds, and shadows leads to inconsistent brand colors. Utilizing SCSS `mix` or `scale-color` functions streamlines palette generation:

```scss
// SCSS Shading Mixins
@function color-tint($color, $percentage) {
  @return mix(#fff, $color, $percentage);
}

@function color-shade($color, $percentage) {
  @return mix(#000, $color, $percentage);
}

// Class generation
.purple-tint-2 { background-color: color-tint(#7c3aed, 20%); }
.purple-base   { background-color: #7c3aed; }
.purple-shade-2 { background-color: color-shade(#7c3aed, 20%); }
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Review the color scales (Purple and Emerald).
3. Observe how each block transitions in density from 20% light highlights down to -20% darkened shades.
