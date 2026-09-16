# Z-Index Elevation Stack

A responsive CSS example demonstrating a reusable z-index elevation stack for common UI layers.

## Stack

- Dropdown: 10
- Modal: 20
- Toast: 30
- Tooltip: 40

## SCSS helper concept

```scss
@mixin z-index-elevation($level) {
  z-index: $level;
}