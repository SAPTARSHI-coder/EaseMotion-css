# Documentation: SCSS Font Smoothing Antialiased Helper Mixins (#81342)

Comprehensive documentation guide, mixin usage examples, SCSS implementation details, and accessibility notes for the EaseMotion SCSS mixin suite (`#81342`).

## 🚀 Overview & Features

- **Font Smoothing Helpers:** Introduces `@mixin em-font-smoothing($value: antialiased)` for crisp typography rendering across WebKit and Gecko engines.
- **Cross-Browser Support:** Automatically outputs both `-webkit-font-smoothing` and `-moz-osx-font-smoothing` rules.
- **EaseMotion Token Compatibility:** Fully compatible with core EaseMotion CSS typography tokens.

## 🛠️ SCSS Usage Example

```scss
@import "mixins";

body {
  @include em-font-smoothing(antialiased);
}
