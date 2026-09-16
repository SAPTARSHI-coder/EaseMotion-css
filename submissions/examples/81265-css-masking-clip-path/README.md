# CSS Masking & Clip-Path

A simple example demonstrating the concept of CSS Masking and Clip-Path helper mixins using standard CSS.

## Features

- Polygon clip-path shapes
- Hexagon, diamond and star examples
- Responsive flex layout
- Pure HTML & CSS
- No JavaScript

## SCSS Equivalent

```scss
@mixin clip-shape($polygon) {
  clip-path: $polygon;
}

@mixin mask-image($mask) {
  -webkit-mask-image: $mask;
  mask-image: $mask;
}
```

## Preview

Open `demo.html` in any modern browser.

## Files

- `demo.html`
- `style.css`
- `README.md`

All files are contained within:

`submissions/examples/81265-css-masking-clip-path/`