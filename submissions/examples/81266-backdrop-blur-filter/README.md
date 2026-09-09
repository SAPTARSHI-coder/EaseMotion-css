# Backdrop Blur Filter

A simple Glassmorphism example demonstrating the concept of a **Backdrop Blur Filter** helper mixin using standard CSS.

## Features

- Glassmorphism UI
- CSS `backdrop-filter` blur effect
- WebKit browser fallback
- Responsive card layout
- Pure HTML & CSS
- No JavaScript

## SCSS Equivalent

```scss
@mixin backdrop-blur-filter($blur: 14px) {
  backdrop-filter: blur($blur);
  -webkit-backdrop-filter: blur($blur);
}
```

## Preview

Open `demo.html` in any modern browser.

## Files

- `demo.html`
- `style.css`
- `README.md`

All files are contained within:

```
submissions/examples/81266-backdrop-blur-filter/
```