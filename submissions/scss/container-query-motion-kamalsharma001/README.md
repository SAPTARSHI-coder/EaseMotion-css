# Container Query Motion

## 1. What does this do?

Reusable SCSS mixins that allow animations to respond to the width of their container instead of the viewport.

## 2. How is it used?

```scss
@use 'container-motion' as *;

.grid-cell {
  @include motion-container('card-slot');
}

.card {
  @include motion-slide-up-scaled(
    $distance: 6px,
    $duration: .3s
  );

  @include motion-variant(
    'card-slot',
    400px,
    $duration: .6s,
    $distance: 24px
  );
}
```

## 3. Why is it useful?

Container Queries make component-level responsiveness possible. These mixins let the same component adapt its animation based on the size of the container it lives in instead of relying on viewport breakpoints.