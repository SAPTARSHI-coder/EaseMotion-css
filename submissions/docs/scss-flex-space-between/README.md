# Documentation: SCSS Flex Space Between Helper Mixin (#81333)

Comprehensive guide, syntax reference, and usage documentation for the EaseMotion SCSS helper mixin **Flex Space Between** (`#81333`).

## 🚀 Overview & Features

- **Space-Between Layout:** Instantly applies `display: flex`, `align-items: center`, and `justify-content: space-between` with vertical center alignment.
- **Clean SCSS Compilation:** Zero warnings, fully tested with responsive design integration.
- **Accessibility Setup:** Supports keyboard focus and screen reader navigation.

## 🛠️ SCSS Mixin Usage Example

```scss
@import "scss/mixins";

.nav-header {
  @include flex-space-between(row, nowrap);
}
