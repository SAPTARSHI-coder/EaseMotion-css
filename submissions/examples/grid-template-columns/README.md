# Grid Template Columns Helper

A reusable SCSS helper mixin for creating CSS Grid layouts with a dynamic number of columns.

## Feature

The `grid-template-columns` helper simplifies the creation of repeat-based CSS Grid layouts.

It provides:

- Dynamic column count
- Equal-width grid columns
- EaseMotion token compatibility
- Responsive usage
- Reduced repetitive CSS

## Basic Usage

```scss
.grid {
  @include grid-template-columns(3);
}