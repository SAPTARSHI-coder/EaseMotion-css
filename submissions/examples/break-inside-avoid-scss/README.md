# SCSS Break Inside Avoid Helper Mixins

An SCSS helper mixin suite for preventing awkward page and column breaks inside structured elements during document printing.

## Overview & Features
- `break-inside-avoid()`: Applies `break-inside: avoid` and legacy `page-break-inside: avoid`.
- `break-inside($value)`: Sets custom break-inside parameters with fallback support.
- `break-inside-theme($variant)`: Preset theme selectors supporting avoid, page, and column variations.

## Usage Example
```scss
@use 'mixins' as *;

.invoice-item {
  @include break-inside-theme('avoid');
}