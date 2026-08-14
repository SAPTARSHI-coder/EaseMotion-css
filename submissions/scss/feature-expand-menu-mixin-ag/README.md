# Expand Menu SCSS Mixin

## Description
This SCSS mixin provides a smooth "Expand Menu" exit animation. When applied to a menu or dropdown as it closes, the element scales up slightly (expands) while fading out, creating a dissolving expansion effect.

## Usage

```scss
@use 'expand-menu' as *;

.menu-exit {
  @include ease-expand-menu-mixin-ag(0.4s, ease-in);
}
```

## Parameters
- `$duration`: The length of the animation (default: `0.3s`).
- `$timing-function`: The easing function (default: `cubic-bezier(0.4, 0, 0.2, 1)`).

## Accessibility
- Respects `prefers-reduced-motion: reduce` by replacing the expanding scale effect with a simple, instantaneous opacity fade out to prevent motion sickness.
