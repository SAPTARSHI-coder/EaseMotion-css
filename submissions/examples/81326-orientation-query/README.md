# Orientation Media Query

Responsive example demonstrating portrait and landscape media queries.

## SCSS helper concept

```scss
@mixin portrait {
  @media (orientation: portrait) {
    @content;
  }
}

@mixin landscape {
  @media (orientation: landscape) {
    @content;
  }
}