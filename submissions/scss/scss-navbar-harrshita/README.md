# SCSS `navbar` Mixin Integration

This provides a native SCSS mixin for the `navbar` component.

## Usage

```scss
@use "ease-navbar";

.my-custom-navbar {
  @include ease-navbar();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
