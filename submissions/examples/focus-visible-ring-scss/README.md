# SCSS Focus Visible Ring Helper Mixins

An SCSS helper mixin suite for managing accessible keyboard focus states (`:focus-visible`) while suppressing unwanted mouse click outlines.

## Overview & Features
- `focus-visible-ring($color, $width, $offset, $style)`: Configures custom accessible outline rings.
- `focus-ring-theme($variant)`: Preset brand theme color variations for focus rings (cyan, magenta, emerald).

## Usage Example
```scss
@use 'mixins' as *;

.accessible-button {
  @include focus-ring-theme('cyan');
}