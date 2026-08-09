# SCSS YIQ Auto-Contrast Generator (ease-contrast-viidhii19)

This SCSS mixin automates WCAG contrast compliance by taking any background color, calculating its perceived luminance via the YIQ color space formula, and automatically returning either pure white or deep black text.

## Mathematics Behind YIQ

The YIQ formula converts RGB values into perceived lightness based on human eye sensitivity (we are more sensitive to green, less sensitive to blue). The standard formula extracts the red, green, and blue channels of a color, multiplies them by their respective optical weights, and divides by 1000:

`YIQ = (R * 299 + G * 587 + B * 114) / 1000`

If the resulting value is `>= 128`, the background is considered light, so the function outputs black text (`#000000`). Otherwise, it's a dark background, and white text (`#ffffff`) is applied.

## Usage

```scss
@import "ease-contrast-viidhii19";

/* Applying the auto-text mixin to dynamic background classes */
.btn-primary {
  @include ease-auto-text(#3498db); // outputs light text
  padding: 10px 20px;
  border-radius: 4px;
}

.btn-warning {
  @include ease-auto-text(#f1c40f); // outputs dark text
}
```
