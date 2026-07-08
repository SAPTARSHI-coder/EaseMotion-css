# SCSS Utility: Micro-Interaction Button Ripple Effect Mixins

## What does this do?
Provides a highly configurable, reusable SCSS mixin to add elegant, CSS-only micro-interaction ripple animations to button elements when hovered, focused, or clicked.

## Mixin Signature
```scss
@mixin button-ripple(
  $ripple-color: #ffffff,
  $ripple-opacity: 0.3,
  $transition-duration: 0.6s,
  $trigger-on: hover
);
```

### Parameters
- `$ripple-color`: Color of the expanding ripple circle (default: `#ffffff`).
- `$ripple-opacity`: Maximum opacity of the ripple when fully expanded (default: `0.3`).
- `$transition-duration`: Duration of the expand and fade transition (default: `0.6s`).
- `$trigger-on`: The interaction trigger state (`hover`, `focus`, or `active`).

## Usage Example
```scss
@import "scss-micro-interaction-button-ripple-effect-mixins";

.btn-primary {
  background-color: #3b82f6;
  color: white;
  @include button-ripple(#ffffff, 0.4, 0.5s, hover);
}
```

## Compiled CSS Output
```css
.btn-primary {
  background-color: #3b82f6;
  color: white;
  position: relative;
  overflow: hidden;
}
.btn-primary::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  background: #ffffff;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  pointer-events: none;
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
}
.btn-primary:hover::after {
  transform: translate(-50%, -50%) scale(4);
  opacity: 0.4;
  transition: 0s;
}
.btn-primary:active::after {
  opacity: 0;
  transform: translate(-50%, -50%) scale(4);
  transition: opacity 0.4s ease-out;
}
```
