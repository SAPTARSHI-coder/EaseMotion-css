# SCSS Object-Fit & Position Helper Mixins

An SCSS helper mixin suite for controlling image and video scaling behavior (`object-fit` and `object-position`) inside responsive media containers.

## Overview & Features
- `object-fit-position($fit, $position)`: Configures custom object-fit and positioning rules.
- `object-cover()`: Shorthand helper for centered `object-fit: cover`.
- `object-fit-theme($variant)`: Preset theme selectors supporting cover, contain, and fill variations.

## Usage Example
```scss
@use 'mixins' as *;

.hero-image {
  @include object-cover;
}