# Documentation: SCSS Fluid Typography Scaling v2 Helper Mixins (#85353)

Comprehensive documentation guide, mixin usage examples, SCSS implementation details, and accessibility notes for the EaseMotion SCSS mixin suite (`#85353`).

## 🚀 Overview & Features

- **Fluid Typography v2 Helper:** Introduces `@mixin em-fluid-type($property, $min-size, $max-size, $vw-size: 5vw)` for responsive scaling utilizing modern CSS `clamp()`.
- **Fallback Integration:** Automatically includes the minimum size fallback property prior to the `clamp()` rule for legacy browser compatibility.
- **EaseMotion Token Compatibility:** Fully compatible with core EaseMotion design tokens and responsive typography guidelines.

## 🛠️ SCSS Usage Example

```scss
@import "mixins";

h1.hero-title {
  @include em-fluid-type(font-size, 2rem, 4rem, 5vw);
}
