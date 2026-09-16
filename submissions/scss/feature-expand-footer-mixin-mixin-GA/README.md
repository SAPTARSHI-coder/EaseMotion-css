# Expand Footer (Entrance Animation) Mixin

A reusable SCSS mixin that applies a smooth expand entrance animation to footer elements. It is designed to create a subtle, polished reveal effect suitable for page footers, action bars, and bottom-aligned interface components.

## Features

- Smooth expand entrance animation
- Configurable animation duration
- Adjustable starting offset
- Customizable timing function
- Lightweight and reusable
- Respects `prefers-reduced-motion`

## Usage

Import EaseMotion and include the mixin in your component.

```scss
@use "ease-motion" as *;

.footer {
  @include ease-expand-footer-mixin-mixin-GA();
}
```

### Custom Example

```scss
.footer {
  @include ease-expand-footer-mixin-mixin-GA(
    $duration: 0.7s,
    $distance: 2rem,
    $timing: ease-in-out
  );
}
```

## Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `$duration` | `0.5s` | Duration of the entrance animation |
| `$distance` | `1rem` | Initial vertical offset before expanding |
| `$timing` | `ease-out` | CSS timing function for the animation |

## Accessibility

This mixin supports users who prefer reduced motion by disabling the animation when `prefers-reduced-motion: reduce` is enabled, while ensuring the footer remains fully visible.

## Use Cases

- Website footers
- Sticky bottom navigation
- Notification bars
- Action panels
- Dashboard footers
- Mobile application footers

## License

Created as a contribution for the EaseMotion CSS project.