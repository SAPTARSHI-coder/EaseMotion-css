# SCSS Contain Layout & Paint Helper Mixins

An SCSS helper mixin suite for browser rendering optimization using CSS containment (`contain`).

## Overview & Features
- `contain($value)`: Isolates component subtrees with custom containment parameters.
- `contain-strict()`: Applies strict containment rules.
- `contain-content()`: Applies content containment rules.
- `contain-theme($variant)`: Preset theme selectors supporting standard, strict, and content isolation.

## Usage Example
```scss
@use 'mixins' as *;

.widget-box {
  @include contain-theme('standard');
}