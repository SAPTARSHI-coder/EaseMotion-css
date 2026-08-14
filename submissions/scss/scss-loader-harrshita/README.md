# SCSS `loader` Mixin Integration

This provides a native SCSS mixin for the `loader` component.

## Usage

```scss
@use "ease-loader";

.my-custom-loader {
  @include ease-loader();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
