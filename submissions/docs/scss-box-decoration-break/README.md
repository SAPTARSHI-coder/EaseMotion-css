# Documentation: SCSS Box Decoration Break Helper Mixin (#81295)

Comprehensive guide, syntax reference, and usage documentation for the EaseMotion SCSS helper mixin **Box Decoration Break** (`#81295`).

## 🚀 Overview & Features

- **Multi-Line Inline Highlights:** Instantly applies `box-decoration-break: clone` with `-webkit-box-decoration-break` vendor fallback for beautifully wrapped multi-line inline highlighted text.
- **Clean SCSS Compilation:** Zero warnings, fully tested with responsive design integration.
- **Accessibility Setup:** Supports keyboard focus and screen reader navigation.

## 🛠️ SCSS Mixin Usage Example

```scss
@import "scss/mixins";

.highlighted-inline {
  @include box-decoration-break(clone);
}
