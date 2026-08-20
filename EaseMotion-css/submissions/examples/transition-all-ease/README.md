# Transition All Ease

A reusable SCSS helper mixin for applying smooth transitions to all
animatable CSS properties.

## Feature

The `transition-all-ease` mixin provides a simple way to define
`transition: all` with customizable:

- Duration
- Easing function
- Delay
- CSS custom-property overrides
- Browser fallbacks

## Usage

Import the EaseMotion mixins:

```scss
@use "../variables" as *;
@use "../mixins" as *;

.card {
  @include transition-all-ease;
}