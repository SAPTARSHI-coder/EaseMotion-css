# Expand Footer Mixin

A reusable SCSS mixin that creates a smooth expanding footer animation.

## Features

- Reusable SCSS mixin
- Smooth hover expansion
- Focus-within support
- Custom height values
- Custom duration
- Custom easing
- Reduced motion support

## Usage

```scss
.footer {
  @include expand-footer();
}
```

## Custom Example

```scss
.footer {
  @include expand-footer(
    80px,
    220px,
    .5s,
    ease-in-out
  );
}
```

## Parameters

| Parameter | Default |
|-----------|---------|
| `$collapsed-height` | `70px` |
| `$expanded-height` | `180px` |
| `$duration` | `0.35s` |
| `$timing` | `ease` |

## Accessibility

Supports:

- `:focus-within`
- `prefers-reduced-motion`
