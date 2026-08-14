# SCSS Prefers Reduced Transparency v2

A reusable SCSS helper mixin for handling the CSS
`prefers-reduced-transparency` media feature.

The mixin provides an accessible fallback for interfaces that
normally rely on transparency, glassmorphism, or backdrop blur.

## Features

- SCSS helper mixin
- `prefers-reduced-transparency` media query support
- Optional solid background fallback
- `backdrop-filter` removal
- `-webkit-backdrop-filter` fallback
- User-preference-based accessibility
- Pure HTML, CSS, and SCSS
- No JavaScript

## SCSS Usage

```scss
.glass-card {
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  @include prefers-reduced-transparency(#ffffff) {
    color: #0f172a;
  }
}