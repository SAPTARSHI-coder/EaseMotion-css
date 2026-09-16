# Documentation: SCSS Container Query Breakpoints v2 Helper Mixins (#85350)

Comprehensive documentation guide, mixin usage examples, SCSS implementation details, and accessibility notes for the EaseMotion SCSS mixin suite (`#85350`).

## 🚀 Overview & Features

- **Container Query v2 Helper:** Introduces `@mixin em-container-v2($size, $name: null)` for styling components based on parent container dimensions rather than viewport width.
- **Named Container Support:** Optionally accepts a container identifier name for targeted scoping.
- **EaseMotion Token Compatibility:** Fully compatible with core EaseMotion design tokens and layout configurations.

## 🛠️ SCSS Usage Example

```scss
@import "mixins";

.my-card-component {
  container-type: inline-size;

  @include em-container-v2(min-width: 400px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
}
