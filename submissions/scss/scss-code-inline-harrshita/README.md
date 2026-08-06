# SCSS `code-inline` Mixin Integration

This provides a native SCSS mixin for the `code-inline` component.

## Usage

```scss
@use "ease-code-inline";

.my-custom-code-inline {
  @include ease-code-inline();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
