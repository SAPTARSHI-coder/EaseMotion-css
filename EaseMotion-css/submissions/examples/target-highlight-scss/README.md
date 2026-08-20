# SCSS Target Highlighted Element Helper Mixins

An SCSS helper mixin suite for styling elements targeted via URL fragment identifiers (`:target`) with smooth visual transitions and highlight pulses.

## Overview & Features
- `target-highlight($bg, $border, $duration)`: Configures custom background, border, and glow effects for targeted elements.
- `target-theme($variant)`: Preset theme selectors supporting cyan, magenta, and emerald color variations.

## Usage Example
```scss
@use 'mixins' as *;

.anchor-section {
  @include target-theme('cyan');
}