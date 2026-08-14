# Flex Wrap Flow

A responsive CSS example demonstrating the SCSS
`flex-wrap-flow` helper concept.

## Features

- Flex wrapping
- Row and column gap support
- Responsive layout
- Pure HTML/CSS
- No JavaScript

## SCSS equivalent

```scss
@mixin flex-wrap-flow($row-gap: 0, $column-gap: 0) {
  display: flex;
  flex-wrap: wrap;
  row-gap: $row-gap;
  column-gap: $column-gap;
}