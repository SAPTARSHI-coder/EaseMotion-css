# SCSS Isolation & Stacking Context Helper Mixins

An SCSS helper mixin suite for managing independent stacking contexts (`isolation: isolate`) and preventing unwanted z-index bleeding.

## Overview & Features
- `isolate-context()`: Applies `isolation: isolate` to establish safe component stacking layers.
- `isolation($value)`: Sets custom isolation property values.
- `isolation-theme($variant)`: Preset theme selectors supporting isolate and auto states.

## Usage Example
```scss
@use 'mixins' as *;

.modal-dialog {
  @include isolation-theme('isolate');
}