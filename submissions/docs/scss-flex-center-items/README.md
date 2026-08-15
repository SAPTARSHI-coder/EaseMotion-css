# Documentation: SCSS Flex Center Items Helper Mixin (#81332)

Comprehensive guide, syntax reference, and usage documentation for the EaseMotion SCSS helper mixin suite **Flex Center Items** (`#81332`).

## 🚀 Overview & Features

- **Flexbox Centering:** Instantly applies `display: flex`, `align-items: center`, and `justify-content: center` with customizable direction and wrapping parameters.
- **Clean SCSS Compilation:** Zero warnings, fully tested for responsive design integration.
- **Accessibility Setup:** Supports keyboard focus and screen reader navigation.

## 🛠️ SCSS Mixin Usage Example

```scss
@import "scss/mixins";

.my-centered-container {
  @include flex-center(row, nowrap);
}

.my-centered-column {
  @include flex-center-column;
}
