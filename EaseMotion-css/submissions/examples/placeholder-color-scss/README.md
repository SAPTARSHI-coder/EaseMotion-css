# SCSS Placeholder Color Styling Helper Mixins

An SCSS helper mixin suite for styling input placeholder text colors with cross-browser vendor fallback support.

## Overview & Features
- `placeholder-color($color)`: Configures custom placeholder colors across standard and legacy vendor pseudo-elements.
- `placeholder-theme($variant)`: Preset theme selectors supporting muted, cyan, and magenta placeholder styling.

## Usage Example
```scss
@use 'mixins' as *;

.custom-input {
  @include placeholder-theme('cyan');
}