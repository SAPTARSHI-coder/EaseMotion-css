# SCSS `card` Mixin Integration

This provides a native SCSS mixin for the `card` component.

## Usage

```scss
@use "ease-card";

.my-custom-card {
  @include ease-card();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
