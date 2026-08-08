# SCSS `code-block` Mixin Integration

This provides a native SCSS mixin for the `code-block` component.

## Usage

```scss
@use "ease-code-block";

.my-custom-code-block {
  @include ease-code-block();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
