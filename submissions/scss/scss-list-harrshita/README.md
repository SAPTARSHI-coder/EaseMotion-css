# SCSS `list` Mixin Integration

This provides a native SCSS mixin for the `list` component.

## Usage

```scss
@use "ease-list";

.my-custom-list {
  @include ease-list();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
