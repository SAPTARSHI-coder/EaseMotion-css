# Flex Direction Column Helper

A reusable SCSS helper mixin for creating vertical flex layouts with configurable gap and alignment.

## Feature

The `flex-column` mixin simplifies the creation of vertical flex containers.

It provides:

- `flex-direction: column`
- Configurable gap
- Configurable `align-items`
- Configurable `justify-content`
- EaseMotion token compatibility
- Responsive usage

## Basic Usage

```scss
.card {
  @include flex-column;
}