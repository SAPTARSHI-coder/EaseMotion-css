# SCSS Disabled Input Opacity Helper Mixins

An SCSS helper mixin suite for styling disabled form elements with reduced opacity, restricted cursor interaction, and pointer event blocking.

## Overview & Features
- `disabled-input-opacity($opacity, $cursor)`: Configures custom opacity levels and non-interactive states for disabled elements.
- `disabled-theme($variant)`: Preset theme selectors supporting standard, muted, and faint disabled opacities.

## Usage Example
```scss
@use 'mixins' as *;

.form-input {
  @include disabled-theme('standard');
}