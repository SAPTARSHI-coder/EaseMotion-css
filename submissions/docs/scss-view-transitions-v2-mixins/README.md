# Documentation: SCSS View Transitions Helper v2 Mixins (#85360)

Comprehensive documentation guide, mixin usage examples, SCSS implementation details, and accessibility notes for the EaseMotion SCSS mixin suite (`#85360`).

## 🚀 Overview & Features

- **View Transition v2 Helper:** Introduces `@mixin em-view-transition-name($name: none)` for assigning unique transition identifiers to DOM elements.
- **Vendor Fallbacks:** Automatically outputs both standard `view-transition-name` and `-webkit-view-transition-name` properties.
- **EaseMotion Token Compatibility:** Fully compatible with core EaseMotion CSS tokens and responsive breakpoint setups.

## 🛠️ SCSS Usage Example

```scss
@import "mixins";

.my-transition-element {
  @include em-view-transition-name(hero-card);
}
