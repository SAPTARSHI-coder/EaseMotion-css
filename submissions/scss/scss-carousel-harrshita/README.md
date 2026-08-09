# SCSS `carousel` Mixin Integration

This provides a native SCSS mixin for the `carousel` component.

## Usage

```scss
@use "ease-carousel";

.my-custom-carousel {
  @include ease-carousel();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
