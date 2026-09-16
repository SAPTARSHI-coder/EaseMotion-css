# Documentation: SCSS Line Clamp Ellipsis Helper Mixin (#81322)

Comprehensive documentation guide, mixin usage examples, SCSS implementation details, and accessibility notes for the EaseMotion SCSS mixin suite (`#81322`).

## 🚀 Overview & Features

- **Line Clamp Ellipsis Helper:** Introduces `@mixin em-line-clamp($lines: 2)` for multi-line text truncation using standard `-webkit-line-clamp`.
- **Clean Overflow Handling:** Automatically applies `-webkit-box-orient`, `overflow: hidden`, and `text-overflow: ellipsis`.
- **EaseMotion Token Compatibility:** Fully compatible with core EaseMotion CSS typography tokens and responsive layouts.

## 🛠️ SCSS Usage Example

```scss
@import "mixins";

.my-card-description {
  @include em-line-clamp(3);
}
