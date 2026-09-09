# Documentation: SCSS Subgrid Layout Helper v2 Mixins (#85349)

Comprehensive documentation guide, mixin usage examples, SCSS implementation details, and accessibility notes for the EaseMotion SCSS mixin suite (`#85349`).

## 🚀 Overview & Features

- **Subgrid Layout v2 Helper:** Introduces `@mixin em-subgrid-v2($columns: subgrid, $rows: none)` for creating nested subgrid tracks aligned with parent grid systems.
- **Flexible Grid Templates:** Supports both column and row subgrid definitions.
- **EaseMotion Token Compatibility:** Fully compatible with core EaseMotion design tokens and layout configurations.

## 🛠️ SCSS Usage Example

```scss
@import "mixins";

.nested-grid-item {
  @include em-subgrid-v2(subgrid, subgrid);
}
