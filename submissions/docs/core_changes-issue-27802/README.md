# ease-stagger — Staggered Entrance Delay SCSS Mixins

## What does this do?

SCSS mixins for staggered animation delays on child elements — useful for list entrance animations where each item appears sequentially.

## How is it used?

```scss
@use 'mixins' as stagger;

.list-item {
  @include stagger.ease-stagger-delay(3); // manual index
}

.list-container {
  @include stagger.ease-stagger-children(10, 0.08s); // auto
}
```

### Mixins

| Mixin | Effect |
|---|---|
| `ease-stagger-delay` | Set delay by item index |
| `ease-stagger-children` | Auto-generate delays for N children |
