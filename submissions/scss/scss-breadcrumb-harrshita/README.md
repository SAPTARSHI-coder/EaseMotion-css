# SCSS `breadcrumb` Mixin Integration

This provides a native SCSS mixin for the `breadcrumb` component.

## Usage

```scss
@use "ease-breadcrumb";

.my-custom-breadcrumb {
  @include ease-breadcrumb();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
