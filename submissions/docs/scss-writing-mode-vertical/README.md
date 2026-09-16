# Documentation: SCSS Writing Mode Vertical Helper Mixin (#81299)

Comprehensive guide, syntax reference, and usage documentation for the EaseMotion SCSS helper mixin **Writing Mode Vertical** (`#81299`).

## 🚀 Overview & Features

- **Vertical Typography:** Instantly applies vertical writing modes (`vertical-rl`, `vertical-lr`) with complete cross-browser vendor fallbacks (`-webkit-`, `-ms-`) for vertical navigation bars and side headers.
- **Clean SCSS Compilation:** Zero warnings, fully tested with responsive design integration.
- **Accessibility Setup:** Supports keyboard focus and screen reader navigation.

## 🛠️ SCSS Mixin Usage Example

```scss
@import "scss/mixins";

.side-navigation-header {
  @include writing-mode-vertical(vertical-rl);
}
