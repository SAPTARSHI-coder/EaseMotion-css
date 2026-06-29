# ease-fluid-typography — Fluid Typography & Clamp Mixin System

## What does this do?

SCSS mixins for fluid/ responsive typography using `clamp()`. Calculates linear interpolation between min and max sizes across viewport ranges.

## How is it used?

```scss
@use 'mixins' as fluid;

.title { @include fluid.ease-fluid-font(1.5rem, 3.5rem); }
.padded { @include fluid.ease-fluid-padding(0.5rem, 2rem); }
```
