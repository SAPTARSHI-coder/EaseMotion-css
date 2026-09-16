# Documentation: SCSS Color-Mix Palette Functions v2 Helper Mixins (#85357)

Comprehensive documentation guide, mixin usage examples, SCSS implementation details, and accessibility notes for the EaseMotion SCSS mixin suite (`#85357`).

## 🚀 Overview & Features

- **Color-Mix Palette v2 Helper:** Introduces `@mixin em-color-mix($property, $color1, $color2, $percentage: 50%)` for generating dynamic CSS `color-mix()` rules with robust browser fallbacks.
- **Fallback Integration:** Automatically includes the base fallback color declaration prior to the `color-mix()` rule.
- **EaseMotion Token Compatibility:** Fully compatible with core EaseMotion color variables and design tokens.

## 🛠️ SCSS Usage Example

```scss
@import "mixins";

.my-mixed-banner {
  @include em-color-mix(background-color, #0ea5e9, #030712, 70%);
}
