# SCSS `modal` Mixin Integration

This provides a native SCSS mixin for the `modal` component.

## Usage

```scss
@use "ease-modal";

.my-custom-modal {
  @include ease-modal();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
