# SCSS Opacity Hover Transition v2

An extended modular utility mixin for the EaseMotion SCSS suite. It enables smooth, accessible opacity state transitions with zero JavaScript overhead.

## Features
- **EaseMotion Token Integration:** Seamlessly maps to default EaseMotion timing and easing CSS custom properties.
- **Cross-Browser Vendors:** Includes legacy filter fallbacks and vendor-prefixed transitions (`-webkit-`, `-moz-`, `-o-`).
- **Focus & Accessibility State Support:** Automatically handles mouse hover along with `:focus-visible` accessibility states.
- **Reduced Motion Respect:** Includes auto-generated `@media (prefers-reduced-motion: reduce)` overrides to satisfy accessibility compliance.

## SCSS Mixin Usage

Import `scss/mixins` into your SCSS pipeline:

```scss
@import 'path/to/scss/mixins';

// 1. Basic Usage (Uses default EaseMotion tokens)
.my-element {
  @include opacity-hover-v2();
}

// 2. Custom Parameters
.custom-element {
  @include opacity-hover-v2(
    $default-opacity: 0.5,
    $hover-opacity: 0.9,
    $duration: 300ms,
    $timing: var(--easemotion-ease-bounce),
    $include-focus: true
  );
}
