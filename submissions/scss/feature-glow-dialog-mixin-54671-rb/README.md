# Glow Dialog Mixin

Resolves #54671

A reusable SCSS mixin that applies a pulsating ambient glow shadow effect around dialog elements to capture attention.

## Usage

```scss
@import './glow-dialog-mixin';

.my-dialog {
  @include ease-glow-dialog-mixin-54671-rb(2s);
}
```

## Features
- **Pulsing Ambient Glow:** Cycles box-shadow thickness and blur radius to create a smooth breathing neon effect.
- **Accessibility:** Maintains a static visible shadow and stops the pulse cycle if `prefers-reduced-motion: reduce` is detected.
