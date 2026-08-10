# SCSS `chip` Mixin Integration

This provides a native SCSS mixin for the `chip` component.

## Usage

```scss
@use "ease-chip";

.my-custom-chip {
  @include ease-chip();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
