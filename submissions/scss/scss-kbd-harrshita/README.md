# SCSS `kbd` Mixin Integration

This provides a native SCSS mixin for the `kbd` component.

## Usage

```scss
@use "ease-kbd";

.my-custom-kbd {
  @include ease-kbd();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
