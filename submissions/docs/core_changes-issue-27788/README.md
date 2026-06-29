# ease-color-palette — Dynamic Color Palette Shading & Tinting Mixins

## What does this do?

SCSS functions and mixins for generating color scales — tints (mixed with white) and shades (mixed with black) from a base color.

## How is it used?

```scss
@use 'mixins' as palette;

.card { background: palette.ease-tint(#6c5ce7, 30%); }
.accent { color: palette.ease-shade(#6c5ce7, 20%); }
```
