# SCSS `icon` Mixin Integration

This provides a native SCSS mixin for the `icon` component.

## Usage

```scss
@use "ease-icon";

.my-custom-icon {
  @include ease-icon();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
