# Documentation: SCSS Mix Blend Mode & Background Blend Helper Mixins (#81297)

Comprehensive documentation guide, mixin usage examples, SCSS implementation details, and accessibility notes for the EaseMotion SCSS mixin suite (`#81297`).

## 🚀 Overview & Features

- **Blend Mode Helpers:** Introduces `@mixin em-mix-blend-mode($mode: normal)` and `@mixin em-background-blend-mode($mode: normal)` for creative graphic overlays and background blending.
- **Flexible Parameters:** Supports standard blend values such as `overlay`, `multiply`, `screen`, `darken`, and `color-dodge`.
- **EaseMotion Token Compatibility:** Fully compatible with core EaseMotion CSS tokens and responsive breakpoint setups.

## 🛠️ SCSS Usage Example

```scss
@import "mixins";

.my-creative-overlay {
  @include em-mix-blend-mode(overlay);
}

.my-blended-background {
  @include em-background-blend-mode(multiply);
}
