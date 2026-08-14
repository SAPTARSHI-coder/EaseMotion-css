# SCSS `image` Mixin Integration

This provides a native SCSS mixin for the `image` component.

## Usage

```scss
@use "ease-image";

.my-custom-image {
  @include ease-image();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
