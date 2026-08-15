# SCSS Dynamic Range High v2

A reusable SCSS helper mixin for the CSS `dynamic-range` media feature.

The mixin allows components to provide enhanced visual styles when
the user's display supports high dynamic range.

## Features

- SCSS helper mixin
- `dynamic-range: high` media query support
- HDR-aware visual enhancement
- Progressive enhancement
- Pure HTML, CSS, and SCSS
- No JavaScript

## SCSS Usage

```scss
.hero {
  background: $color-surface;

  @include dynamic-range-high {
    background: linear-gradient(
      135deg,
      $color-primary,
      $color-accent
    );
  }
}