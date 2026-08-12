# SCSS `accordion` Mixin Integration

This provides a native SCSS mixin for the `accordion` component.

## Usage

```scss
@use "ease-accordion";

.my-custom-accordion {
  @include ease-accordion();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
