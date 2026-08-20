# SCSS `drawer` Mixin Integration

This provides a native SCSS mixin for the `drawer` component.

## Usage

```scss
@use "ease-drawer";

.my-custom-drawer {
  @include ease-drawer();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
