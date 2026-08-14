# SCSS `divider` Mixin Integration

This provides a native SCSS mixin for the `divider` component.

## Usage

```scss
@use "ease-divider";

.my-custom-divider {
  @include ease-divider();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
