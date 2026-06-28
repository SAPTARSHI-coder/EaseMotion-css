# Feature: SCSS Shimmer Sweep Mixin (#23086)

## Description
This SCSS mixin creates a smooth, sweeping shimmer/glare animation over any HTML element. It works great on cards, buttons, or loading placeholders to add a premium, polished feel.

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$duration` | `Time` | `2s` | The duration of one complete sweep cycle. |
| `$delay` | `Time` | `0s` | Delay before the animation starts. |
| `$angle` | `Angle` | `110deg` | The angle of the shimmer gradient. |
| `$color` | `Color` | `rgba(255, 255, 255, 0.4)` | The color of the shimmer glare. |
| `$width` | `Percentage` | `50%` | The width of the shimmer beam relative to the element. |

## @include Example

```scss
@use 'mixin' as *;

.my-premium-card {
  background: #111;
  color: white;
  padding: 2rem;
  border-radius: 8px;
  
  // Apply the shimmer sweep mixin
  @include shimmer-sweep(
    $duration: 3s,
    $color: rgba(255, 255, 255, 0.2),
    $angle: 45deg
  );
}
```
