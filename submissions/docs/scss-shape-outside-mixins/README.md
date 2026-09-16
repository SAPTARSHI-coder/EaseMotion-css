# Documentation: SCSS Shape Outside Text Wrap Helper Mixins (#81298)

Comprehensive documentation guide, mixin usage examples, SCSS implementation details, and accessibility notes for the EaseMotion SCSS mixin suite (`#81298`).

## 🚀 Overview & Features

- **Shape Outside Helpers:** Introduces `@mixin em-shape-circle($radius: 50%)` and `@mixin em-shape-polygon($points...)` for wrapping text precisely around floating geometric shapes and circular images.
- **Float Integration:** Automatically applies `float: left` alongside `shape-outside` rules.
- **EaseMotion Token Compatibility:** Fully compatible with core EaseMotion CSS tokens and responsive layout configurations.

## 🛠️ SCSS Usage Example

```scss
@import "mixins";

.my-circular-avatar {
  @include em-shape-circle(50%);
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.my-polygon-image {
  @include em-shape-polygon(0 0, 100% 0, 80% 100%, 0% 100%);
}
