# SCSS `badge` Mixin Integration

This provides a native SCSS mixin for the `badge` component.

## Usage

```scss
@use "ease-badge";

.my-custom-badge {
  @include ease-badge();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
