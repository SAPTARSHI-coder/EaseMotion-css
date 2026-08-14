# Text Decoration Thickness Helper

A reusable SCSS helper mixin for controlling the thickness of
text decorations such as underlines.

## Feature

The helper supports:

- Custom underline thickness
- CSS variable integration
- Thin, medium and thick decorations
- Custom styled underlines
- Responsive usage
- Easy integration with EaseMotion SCSS utilities

## Basic Usage

```scss
.title {
  text-decoration-line: underline;

  @include text-decoration-thickness(3px);
}