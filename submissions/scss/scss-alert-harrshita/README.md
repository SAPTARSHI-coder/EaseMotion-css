# SCSS `alert` Mixin Integration

This provides a native SCSS mixin for the `alert` component.

## Usage

```scss
@use "ease-alert";

.my-custom-alert {
  @include ease-alert();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
