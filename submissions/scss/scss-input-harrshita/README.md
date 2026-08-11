# SCSS `input` Mixin Integration

This provides a native SCSS mixin for the `input` component.

## Usage

```scss
@use "ease-input";

.my-custom-input {
  @include ease-input();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
