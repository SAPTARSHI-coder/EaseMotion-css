# SCSS Table Layout Fixed Helper Mixins

An SCSS helper mixin suite for enforcing fixed table layouts (`table-layout: fixed`) to achieve deterministic column widths and text clipping.

## Overview & Features
- `table-layout-fixed($overflow)`: Enforces fixed table sizing and prevents column blowouts with text ellipsis.
- `table-responsive-wrapper()`: Adds smooth touch-scrolling horizontal overflow wrappers for tables.

## Usage Example
```scss
@use 'mixins' as *;

.data-table {
  @include table-layout-fixed(ellipsis);
}