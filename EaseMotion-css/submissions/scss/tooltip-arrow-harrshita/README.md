# Tooltip Arrow SCSS Mixin

Generates CSS triangles for tooltips.

## Usage
```scss
.tooltip {
  position: relative;
  &::after {
    @include ease-tooltip-arrow(top, 10px, #000);
  }
}
```
