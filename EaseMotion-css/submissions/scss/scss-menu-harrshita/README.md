# SCSS `menu` Mixin Integration

This provides a native SCSS mixin for the `menu` component.

## Usage

```scss
@use "ease-menu";

.my-custom-menu {
  @include ease-menu();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
