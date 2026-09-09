# Documentation: SCSS Hyphens & Word Break Helper Mixins (#81294)

Comprehensive documentation guide, mixin usage examples, SCSS implementation details, and accessibility notes for the EaseMotion SCSS mixin suite (`#81294`).

## 🚀 Overview & Features

- **Hyphenation & Wrap Helpers:** Introduces `@mixin em-hyphens($val: auto)` and `@mixin em-word-break($break: break-word)` for advanced multi-language text wrapping and overflow prevention.
- **Cross-Browser Prefixes:** Automatically applies `-webkit-hyphens`, `-ms-hyphens`, and `-moz-hyphens` for maximum engine support.
- **EaseMotion Token Compatibility:** Fully compatible with core EaseMotion CSS tokens and responsive typography guidelines.

## 🛠️ SCSS Usage Example

```scss
@import "mixins";

.multilingual-content {
  @include em-hyphens(auto);
  @include em-word-break(break-word);
}
