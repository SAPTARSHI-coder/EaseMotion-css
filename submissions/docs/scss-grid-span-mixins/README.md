# Documentation: SCSS Grid Column & Row Span Helper Mixins (#81331)

Comprehensive documentation guide, mixin usage examples, SCSS implementation details, and accessibility/fallback notes for the EaseMotion SCSS mixin suite (`#81331`).

## 🚀 Overview & Features

- **Grid Span Helpers:** Introduces `@mixin em-grid-column-span($start, $span)` and `@mixin em-grid-row-span($start, $span)` for streamlined grid positioning.
- **Browser Fallbacks:** Automatically generates legacy `-ms-grid-column` and `-ms-grid-row` rules alongside modern CSS Grid properties.
- **EaseMotion Token Compatibility:** Fully compatible with core EaseMotion CSS tokens and responsive breakpoint setups.

## 🛠️ SCSS Usage Example

```scss
@import "mixins";

.my-grid-item {
  @include em-grid-column-span(1, 3);
  @include em-grid-row-span(2, 2);
}
