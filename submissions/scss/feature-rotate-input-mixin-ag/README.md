# Rotate Input SCSS Mixin

## Description
This SCSS mixin provides a dynamic "Rotate Entrance" animation. When applied to an input field (or any element) as it enters the DOM, the element fades in, scales up slightly, and rotates from an angle into its final resting position, using a bouncy spring-like easing curve.

## Usage

```scss
@use 'rotate-input' as *;

.my-fancy-input {
  @include ease-rotate-input-mixin-ag(0.6s);
}
```

## Parameters
- `$duration`: The length of the entrance animation (default: `0.6s`).
- `$timing-function`: The easing function. Defaults to a bouncy cubic-bezier (`cubic-bezier(0.175, 0.885, 0.32, 1.275)`).

## Accessibility
- Respects `prefers-reduced-motion: reduce` by replacing the scale and rotation with a simple opacity fade-in to avoid triggering motion sickness.
