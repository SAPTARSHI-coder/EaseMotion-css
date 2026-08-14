# SCSS Accent & Caret Color Helper Mixins

An SCSS helper mixin suite for customizing native form input accent colors (checkboxes, radios, ranges) and text caret cursor colors.

## Overview & Features
- `accent-color($color)`: Configures native UI accent color properties.
- `caret-color($color)`: Configures text input typing cursor color properties.
- `accent-caret($accent, $caret)`: Combines both properties into a single utility mixin.
- `accent-caret-theme($variant)`: Preset theme color variations (cyan, magenta, emerald).

## Usage Example
```scss
@use 'mixins' as *;

.custom-form-control {
  @include accent-caret-theme('cyan');
}