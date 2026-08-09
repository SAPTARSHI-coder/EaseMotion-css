# Color Shading & Tinting Mixins

This guide covers SCSS color mixin guidelines used to build tint and shade palette steps.

---

## Technical Overview: The SCSS Tint & Shade Mixin

Hardcoding individual color hex codes for hover, focus, active, and borders clutter files. Utilizing SCSS's built-in `mix()` function makes palette adjustments dynamic:

```scss
// SCSS Tint Mixin (Mixes base color with white)
@function tint($color, $percentage) {
  @return mix(#fff, $color, $percentage);
}

// SCSS Shade Mixin (Mixes base color with black)
@function shade($color, $percentage) {
  @return mix(#000, $color, $percentage);
}

// Swatch Outputs mapping
.bg-purple-tint-20 {
  background-color: tint(#7c3aed, 20%);
}
.bg-purple-shade-20 {
  background-color: shade(#7c3aed, 20%);
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Review the color scales for Purple, Emerald, and Cyan.
3. Verify the swatch steps render perfectly from light tints (left) to default base (middle) to dark shades (right).
