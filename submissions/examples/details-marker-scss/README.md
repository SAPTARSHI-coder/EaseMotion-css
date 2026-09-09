# SCSS Details Marker Customization Helper Mixins

An SCSS helper mixin suite for hiding native `<details>` and `<summary>` disclosure arrows across all browsers and styling custom dropdown accordions.

## Overview & Features
- `hide-details-marker()`: Strips native browser triangle disclosure markers.
- `custom-details-marker($accent)`: Enables custom interactive summary hover and open states.
- `details-theme($variant)`: Preset theme selectors supporting cyan, magenta, and emerald color variations.

## Usage Example
```scss
@use 'mixins' as *;

.custom-dropdown {
  @include details-theme('cyan');
}