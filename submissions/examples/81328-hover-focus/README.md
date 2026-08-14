# Hover & Focus Combo

A responsive example combining `:hover` and `:focus-visible`
for accessible interactive elements.

## SCSS helper concept

```scss
@mixin hover-focus {
  &:hover,
  &:focus-visible {
    @content;
  }
}