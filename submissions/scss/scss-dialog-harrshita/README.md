# SCSS `dialog` Mixin Integration

This provides a native SCSS mixin for the `dialog` component.

## Usage

```scss
@use "ease-dialog";

.my-custom-dialog {
  @include ease-dialog();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
