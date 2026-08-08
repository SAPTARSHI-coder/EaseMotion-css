# SCSS `dropdown` Mixin Integration

This provides a native SCSS mixin for the `dropdown` component.

## Usage

```scss
@use "ease-dropdown";

.my-custom-dropdown {
  @include ease-dropdown();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
