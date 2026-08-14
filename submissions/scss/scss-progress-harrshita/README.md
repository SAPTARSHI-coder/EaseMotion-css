# SCSS `progress` Mixin Integration

This provides a native SCSS mixin for the `progress` component.

## Usage

```scss
@use "ease-progress";

.my-custom-progress {
  @include ease-progress();

  // Add your own custom overrides
  background-color: primary;
}
```

This allows for semantic HTML while still utilizing EaseMotion's powerful interaction states.
