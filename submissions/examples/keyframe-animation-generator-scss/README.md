# SCSS Keyframe Animation Generator Helper Mixins

An SCSS helper mixin suite for automating cross-browser `@keyframes` rule creation and animation property assignments.

## Overview & Features
- `keyframes($name)`: Generates both standard and `-webkit-` vendor-prefixed `@keyframes` declarations.
- `animate(...)`: Applies comprehensive animation timing, duration, delay, and iteration properties.
- `animation-theme($variant)`: Preset theme selectors supporting pulse, float, and bounce variations.

## Usage Example
```scss
@use 'mixins' as *;

@include keyframes(fade-in) {
  from { opacity: 0; }
  to { opacity: 1; }
}

.element {
  @include animate(fade-in, 1s, ease);
}