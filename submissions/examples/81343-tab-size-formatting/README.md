# Tab Size Formatting

A small responsive example demonstrating the CSS `tab-size` property for code indentation.

## SCSS helper concept

```scss
@mixin tab-size($size: 4) {
  tab-size: $size;
  -moz-tab-size: $size;
}