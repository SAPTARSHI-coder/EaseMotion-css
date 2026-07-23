# Responsive Aspect Ratio Utility Classes

This guide details configuration specs for generating SCSS aspect ratio scaling mixins.

---

## Technical Overview: The SCSS Aspect Ratio Mixin

Using padding-top calculations (e.g. `padding-top: 56.25%` for 16:9) to preserve container proportions is a legacy approach. Modern CSS aspect-ratio properties resolve this boundary:

```scss
// SCSS Aspect Ratio Mixin
@mixin aspect-ratio($width: 16, $height: 9) {
  aspect-ratio: $width / $height;
  
  // Legacy fallback support for older browsers
  @supports not (aspect-ratio: 16 / 9) {
    position: relative;
    padding-top: ($height / $width) * 100%;
    
    > * {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}

// Utility Classes
.ratio-16-9 { @include aspect-ratio(16, 9); }
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Review the widescreen, standard, square, and ultrawide cards.
3. Resize the window — verify that card heights scale proportionally with width.
