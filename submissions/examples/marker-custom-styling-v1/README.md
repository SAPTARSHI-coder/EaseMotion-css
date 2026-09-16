# Marker Custom Styling Helper

A reusable SCSS helper mixin for customizing the appearance of
list markers using the `::marker` pseudo-element.

## Feature

The helper supports:

- Custom marker colors
- Custom marker symbols
- Bullet markers
- Arrow markers
- Star markers
- Ordered list markers
- CSS custom properties
- Responsive usage

## Basic Usage

```scss
.custom-list {
  @include marker(#6c5ce7, "→");
}