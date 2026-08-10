# SCSS `pagination` Mixin Integration

This provides a native SCSS mixin for the `pagination` component.

## Usage

```scss
@use "ease-pagination";

.my-custom-pagination {
  @include ease-pagination();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
