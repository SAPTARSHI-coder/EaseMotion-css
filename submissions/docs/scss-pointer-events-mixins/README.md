# Documentation: SCSS Pointer Events Toggle Helper Mixins (#81293)

Comprehensive documentation guide, mixin usage examples, SCSS implementation details, and accessibility notes for the EaseMotion SCSS mixin suite (`#81293`).

## 🚀 Overview & Features

- **Pointer Events Helper:** Introduces `@mixin em-pointer-events($value: none)` for managing overlay pass-throughs, click-through layers, and disabled state interactions.
- **Configurable Values:** Supports standard values such as `none`, `auto`, `initial`, and `inherit`.
- **EaseMotion Token Compatibility:** Fully compatible with core EaseMotion CSS tokens and responsive layout configurations.

## 🛠️ SCSS Usage Example

```scss
@import "mixins";

.my-clickthrough-overlay {
  @include em-pointer-events(none);
}
