# ease-button-ripple — Button Ripple Effect Mixins

## What does this do?

SCSS mixins for micro-interaction button ripple effects using `::after` pseudo-elements with radial gradients.

## How is it used?

```scss
@use 'mixins' as ripple;

.btn { @include ripple.ease-ripple-base; @include ripple.ease-ripple-effect; }
```
