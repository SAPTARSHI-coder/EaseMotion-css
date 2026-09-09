# Documentation: SCSS List Style None & Inline Helper Mixins (#81346)

Comprehensive documentation guide, mixin usage examples, SCSS implementation details, and accessibility notes for the EaseMotion SCSS mixin suite (`#81346`).

## 🚀 Overview & Features

- **List Helpers:** Introduces `@mixin em-list-style-none` and `@mixin em-list-inline($gap: 1rem)` for clean horizontal navigation lists and menu structures.
- **Reset Defaults:** Automatically clears `list-style`, `margin`, and `padding` while establishing flexible item alignment.
- **EaseMotion Token Compatibility:** Fully compatible with core EaseMotion CSS tokens and responsive layout configurations.

## 🛠️ SCSS Usage Example

```scss
@import "mixins";

.my-nav-menu {
  @include em-list-inline(1.5rem);
}
