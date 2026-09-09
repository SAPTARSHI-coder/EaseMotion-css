# SCSS Backface Visibility Helper Mixins

An SCSS helper mixin suite for managing `backface-visibility` properties during 3D card flips and rotation animations with cross-browser vendor prefix support.

## Overview & Features
- `backface-hidden()`: Applies `backface-visibility: hidden` and `-webkit-backface-visibility: hidden`.
- `backface-visibility($visibility)`: Sets custom visibility states.
- `backface-theme($variant)`: Preset theme selectors supporting hidden and visible states.

## Usage Example
```scss
@use 'mixins' as *;

.card-front {
  @include backface-theme('hidden');
}