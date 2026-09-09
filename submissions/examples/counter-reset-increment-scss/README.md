# SCSS CSS Counter Reset & Increment Helper Mixins

An SCSS helper mixin suite for managing native CSS counters (`counter-reset` and `counter-increment`) to build custom numbered lists, steppers, and ordered workflows.

## Overview & Features
- `counter-reset($name, $value)`: Initializes or resets CSS counters on container elements.
- `counter-increment($name, $value)`: Increments counter values on child elements.
- `counter-stepper($name)`: Shorthand helper for automated list item counter incrementation.
- `counter-theme($variant)`: Preset theme selectors supporting default, primary, and step variations.

## Usage Example
```scss
@use 'mixins' as *;

.custom-stepper {
  @include counter-theme('default');
}