# SCSS Content-Visibility Optimizer Helper Mixins

An SCSS helper mixin suite for deferring rendering, layout, and painting work for off-screen or heavy DOM nodes using `content-visibility` and `contain-intrinsic-size`.

## Overview & Features
- `content-visibility($value, $intrinsic-size)`: Configures custom content-visibility and containment sizing.
- `optimize-rendering($size)`: Shorthand helper for optimized auto-containment.
- `content-visibility-theme($variant)`: Preset theme selectors supporting auto, lazy, and heavy variations.

## Usage Example
```scss
@use 'mixins' as *;

.heavy-component {
  @include content-visibility-theme('lazy');
}