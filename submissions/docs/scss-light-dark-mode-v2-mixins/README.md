# Documentation: SCSS Light & Dark Mode Media Query v2 Helper Mixins (#85364)

Comprehensive documentation guide, mixin usage examples, SCSS implementation details, and accessibility notes for the EaseMotion SCSS mixin suite (`#85364`).

## 🚀 Overview & Features

- **Theme Query v2 Helpers:** Introduces `@mixin em-dark-mode-v2` and `@mixin em-light-mode-v2` for modular preference-based color scheme queries.
- **Native Media Queries:** Wraps standard `prefers-color-scheme` queries cleanly using content blocks.
- **EaseMotion Token Compatibility:** Fully compatible with core EaseMotion design tokens and color variables.

## 🛠️ SCSS Usage Example

```scss
@import "mixins";

.my-themed-container {
  background-color: #ffffff;
  color: #0f172a;

  @include em-dark-mode-v2 {
    background-color: #0f172a;
    color: #ffffff;
  }
}
