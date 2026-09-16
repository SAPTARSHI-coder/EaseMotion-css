# SCSS Sticky Top Offset Helper Mixins (#81336)

A reusable SCSS mixin suite for managing `position: sticky` top offsets and dynamic header spacing with CSS custom variable integration.

## Mixins

### `@include ease-sticky-top($offset, $z-index)`
Pins an element to the top of its scrolling container with a custom offset and stacking index.

```scss
.navbar {
  @include ease-sticky-top(0px, 100);
}