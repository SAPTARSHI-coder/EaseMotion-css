# SCSS Logical Properties Spacing Helper Mixins (#81264)

Adds comprehensive functionality to the EaseMotion SCSS mixin suite for logical properties helper mixins (`margin-inline`, `padding-block`, and `inset`) with built-in browser fallbacks and CSS variable integration, fully addressing issue `#81264`.

## 🚀 Features

- **Flow-Relative Spacing:** Simplifies logical property integration (`margin-inline`, `padding-block`, `inset`).
- **Robust Fallbacks:** Optional fallback generation for older legacy browser compatibility.
- **Clean Compilation:** Fully compliant with clean SCSS compilation without warnings.

## 🛠️ Usage Example

```scss
@import 'mixins';

.my-element {
  @include logical-margin-inline(1.5rem, 1rem);
  @include logical-padding-block(2rem);
}
