# Documentation: SCSS CSS Masking & Clip-Path v2 Helper Mixins (#85355)

Comprehensive documentation guide, mixin usage examples, SCSS implementation details, and accessibility notes for the EaseMotion SCSS mixin suite (`#85355`).

## 🚀 Overview & Features

- **Masking & Clipping v2 Helpers:** Introduces `@mixin em-clip-path($path)` and `@mixin em-mask-image($image)` for advanced geometric clipping and graphical masking effects.
- **Vendor Prefix Support:** Automatically outputs both standard properties and `-webkit-` prefixed fallbacks.
- **EaseMotion Token Compatibility:** Fully compatible with core EaseMotion design tokens and layout properties.

## 🛠️ SCSS Usage Example

```scss
@import "mixins";

.my-clipped-banner {
  @include em-clip-path(polygon(0 0, 100% 0, 100% 85%, 0% 100%));
}

.my-masked-element {
  @include em-mask-image(linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0)));
}
