# Truncate Single Line

Responsive example for single-line text truncation.

## SCSS helper concept

```scss
@mixin truncate-single-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}