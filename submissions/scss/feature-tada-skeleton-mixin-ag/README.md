# Tada Skeleton Mixin (SCSS)

## Description
A reusable SCSS mixin that applies a "Tada" entrance animation to a skeleton loader element. It starts small and invisible, quickly scales up while shaking slightly, and settles into its final size. Useful for drawing attention to a loading area when it first mounts.

## Files
- `_tada-skeleton.scss`: Contains the `@mixin ease-tada-skeleton-mixin-ag` and the keyframes.

## Usage
```scss
@use 'tada-skeleton' as *;

.my-skeleton-ag {
  width: 100%;
  height: 200px;
  background: #e2e8f0;
  border-radius: 8px;
  @include ease-tada-skeleton-mixin-ag(1s, 0.2s);
}
```

## Accessibility
- **Reduced Motion**: Respects `prefers-reduced-motion: reduce` by replacing the shaky, scaling "tada" animation with a simple, safe `fade-entrance-ag` opacity transition.
