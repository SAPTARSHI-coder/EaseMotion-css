# Will-Change Optimization

Responsive example demonstrating the CSS `will-change` property for transform and opacity.

## SCSS helper concept

```scss
@mixin will-change($properties: transform, opacity) {
  will-change: $properties;
}