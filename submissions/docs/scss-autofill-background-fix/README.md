# Documentation: SCSS Autofill Background Fix Helper Mixin (#81321)

Comprehensive guide, syntax reference, and usage documentation for the EaseMotion SCSS helper mixin **Autofill Background Fix** (`#81321`).

## 🚀 Overview & Features

- **Autofill Override:** Prevents aggressive browser yellow/white autofill background styles on input fields using webkit box-shadow and text-fill overrides.
- **Clean SCSS Compilation:** Zero warnings, fully tested with responsive design integration.
- **Accessibility Setup:** Supports keyboard focus and screen reader navigation.

## 🛠️ SCSS Mixin Usage Example

```scss
@import "scss/mixins";

.custom-input {
  @include autofill-background-fix(#0f172a, #ffffff);
}
