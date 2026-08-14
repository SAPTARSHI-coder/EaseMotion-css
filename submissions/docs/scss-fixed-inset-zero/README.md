# Documentation: SCSS Fixed Inset Zero Helper Mixin (#81335)

Comprehensive guide, syntax reference, and usage documentation for the EaseMotion SCSS helper mixin **Fixed Inset Zero** (`#81335`).

## 🚀 Overview & Features

- **Full-Screen Overlays:** Instantly applies `position: fixed; top: 0; right: 0; bottom: 0; left: 0;` with a customizable `z-index` parameter for modals, dialogs, and backdrop overlays.
- **Clean SCSS Compilation:** Zero warnings, fully tested with responsive design integration.
- **Accessibility Setup:** Supports keyboard focus and screen reader navigation.

## 🛠️ SCSS Mixin Usage Example

```scss
@import "scss/mixins";

.modal-backdrop {
  @include fixed-inset-zero(1050);
  background: rgba(3, 7, 18, 0.8);
  backdrop-filter: blur(8px);
}
