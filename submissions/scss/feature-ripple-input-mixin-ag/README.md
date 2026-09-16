# Ripple Input SCSS Mixin

## Description
This SCSS mixin provides a classic "Ripple" interaction effect, often seen in Material Design. When an input field (or button) is clicked or focused, a circular ripple expands outward from the center before fading away.

## Usage

```scss
@use 'ripple-input' as *;

.my-text-input {
  /* Requires the input to have a defined layout */
  @include ease-ripple-input-mixin-ag(rgba(99, 102, 241, 0.4), 0.8s);
}
```

## Parameters
- `$color`: The color of the ripple (default: a translucent blue `rgba(59, 130, 246, 0.5)`).
- `$duration`: The length of the ripple animation (default: `0.6s`).

## Accessibility
- Respects `prefers-reduced-motion: reduce` by overriding the ripple keyframes to remain completely hidden. Instead, it relies on a standard focus outline to indicate interaction without motion.
