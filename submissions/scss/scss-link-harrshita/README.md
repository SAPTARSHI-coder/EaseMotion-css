# SCSS `link` Mixin Integration

This provides a native SCSS mixin for the `link` component.

## Usage

```scss
@use "ease-link";

.my-custom-link {
  @include ease-link();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
