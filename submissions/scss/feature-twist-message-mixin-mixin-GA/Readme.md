# Twist Message (Focus State) Mixin

A reusable SCSS mixin that applies a subtle twist animation when an element receives keyboard focus. It is designed to improve visual feedback while maintaining accessibility.

## Features

- Smooth twist animation on focus
- Configurable duration, rotation angle, and scale
- Uses `:focus` and `:focus-visible`
- Respects `prefers-reduced-motion`
- Suitable for forms, alerts, messages, and interactive UI components

## Usage

```scss
.my-message {
  @include ease-twist-message-mixin-mixin-GA();
}
```

### Custom Example

```scss
.my-message {
  @include ease-twist-message-mixin-mixin-GA(
    $duration: 0.4s,
    $angle: 6deg,
    $scale: 1.05
  );
}
```

## Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `$duration` | `0.5s` | Transition duration |
| `$angle` | `4deg` | Rotation angle |
| `$scale` | `1.02` | Scale factor |

## Accessibility

The mixin supports `prefers-reduced-motion: reduce` by disabling the transform animation for users who prefer reduced motion.