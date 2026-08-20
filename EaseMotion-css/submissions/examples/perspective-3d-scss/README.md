# SCSS Perspective 3D Transform Helper Mixins

An SCSS helper mixin suite for configuring 3D perspective depth (`perspective`), preserving 3D nested layouts (`transform-style: preserve-3d`), and building smooth card tilt and flip animations.

## Overview & Features
- `perspective($value)`: Sets 3D perspective depth with WebKit vendor prefix support.
- `preserve-3d()`: Enables nested 3D element rendering space.
- `perspective-container($depth)`: Shorthand combination mixin for depth staging.
- `perspective-theme($variant)`: Preset theme selectors supporting default, deep, and shallow depth variations.

## Usage Example
```scss
@use 'mixins' as *;

.card-scene {
  @include perspective-theme('default');
}