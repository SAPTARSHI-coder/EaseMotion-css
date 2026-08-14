# SCSS `button` Mixin Integration

This provides a native SCSS mixin for the `button` component.

## Usage

```scss
@use "ease-button";

.my-custom-button {
  @include ease-button();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
