# SCSS `checkbox` Mixin Integration

This provides a native SCSS mixin for the `checkbox` component.

## Usage

```scss
@use "ease-checkbox";

.my-custom-checkbox {
  @include ease-checkbox();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
