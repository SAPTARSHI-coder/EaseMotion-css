# SCSS `popover` Mixin Integration

This provides a native SCSS mixin for the `popover` component.

## Usage

```scss
@use "ease-popover";

.my-custom-popover {
  @include ease-popover();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
