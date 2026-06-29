# ease-shadow-elevation — Multi-Layer Box Shadow Elevation Scale Mixins

## What does this do?

SCSS mixins for multi-layer box shadow elevation scales — preset levels (1-5) and custom shadow generation. Inspired by Material Design elevation.

## How is it used?

```scss
@use 'mixins' as shadow;

.card { @include shadow.ease-shadow(3); }
.custom { @include shadow.ease-shadow-custom(rgba(108,99,255,0.12), 6px, 4); }
```
