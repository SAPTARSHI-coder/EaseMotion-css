# Container Query Breakpoints

A simple example demonstrating the concept of **Container Query Breakpoints** using modern CSS container queries.

## Features

- CSS Container Queries
- Inline-size container support
- Responsive component layout
- Pure HTML & CSS
- No JavaScript

## SCSS Equivalent

```scss
@mixin container-breakpoint($size) {
  @container (min-width: $size) {
    @content;
  }
}
```

## Preview

Open `demo.html` in a modern browser and drag the right edge of the container to see the layout change.

## Files

- `demo.html`
- `style.css`
- `README.md`

All files are contained within:

`submissions/examples/81260-container-query-breakpoints/`