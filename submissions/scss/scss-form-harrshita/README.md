# SCSS `form` Mixin Integration

This provides a native SCSS mixin for the `form` component.

## Usage

```scss
@use "ease-form";

.my-custom-form {
  @include ease-form();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
