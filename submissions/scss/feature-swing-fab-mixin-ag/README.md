# Swing FAB SCSS Mixin

## Description
This SCSS mixin provides a subtle, pendulum-like "Swing" animation. It is designed specifically for Floating Action Buttons (FABs) or icons to periodically draw attention without being overly distracting.

## Usage

```scss
@use 'swing-fab' as *;

.my-floating-button {
  /* Set transform origin to top center for a pendulum effect */
  @include ease-swing-fab-mixin-ag(2s, top center);
}
```

## Parameters
- `$duration`: The length of one complete swing cycle (default: `2s`).
- `$transform-origin`: The point around which the element swings (default: `top center`).

## Accessibility
- Respects `prefers-reduced-motion: reduce` by overriding the keyframes to apply no transform at all, completely disabling the continuous motion to prevent distractions for users with cognitive or vestibular disorders.
