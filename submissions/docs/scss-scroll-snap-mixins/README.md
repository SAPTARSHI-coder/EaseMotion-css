# Documentation: SCSS Scroll Snap Alignment Helper Mixins (#81284)

Comprehensive documentation guide, mixin usage examples, SCSS implementation details, and accessibility notes for the EaseMotion SCSS mixin suite (`#81284`).

## 🚀 Overview & Features

- **Scroll Snap Helpers:** Introduces `@mixin em-scroll-snap-type($val: x mandatory)` and `@mixin em-scroll-snap-align($val: start)` for robust carousel and slider section layouts.
- **Flexible Parameters:** Supports standard scroll snap values (`x mandatory`, `y proximity`, `start`, `center`, `end`).
- **EaseMotion Token Compatibility:** Fully compatible with core EaseMotion CSS tokens and responsive breakpoint setups.

## 🛠️ SCSS Usage Example

```scss
@import "mixins";

.my-carousel-container {
  @include em-scroll-snap-type(x mandatory);
  display: flex;
  overflow-x: auto;
}

.my-carousel-item {
  @include em-scroll-snap-align(center);
  flex: 0 0 100%;
}
