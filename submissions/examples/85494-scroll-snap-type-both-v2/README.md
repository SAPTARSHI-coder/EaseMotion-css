# SCSS Scroll Snap Type Both v2

A reusable SCSS helper mixin for applying two-dimensional CSS scroll
snapping.

The mixin sets `scroll-snap-type` to `both`, allowing a scroll
container to snap along both its horizontal and vertical axes.

## Features

- SCSS helper mixin
- Two-dimensional scroll snapping
- Configurable snap strictness
- `-webkit-` fallback declaration
- Pure HTML, CSS, and SCSS
- No JavaScript

## SCSS Usage

```scss
.gallery {
  @include scroll-snap-type-both;
}