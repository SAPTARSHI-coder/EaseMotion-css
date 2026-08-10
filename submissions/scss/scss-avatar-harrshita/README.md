# SCSS `avatar` Mixin Integration

This provides a native SCSS mixin for the `avatar` component.

## Usage

```scss
@use "ease-avatar";

.my-custom-avatar {
  @include ease-avatar();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
