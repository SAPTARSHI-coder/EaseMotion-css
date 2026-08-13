# Jello Menu SCSS Mixin

## Description
This SCSS mixin provides a playful "Jello" interactive state animation. When applied to menu items or navigation links, the elements squish and wobble on hover or focus, providing fun, tactile feedback.

## Usage

```scss
@use 'jello-menu' as *;

.my-menu-item {
  /* The mixin automatically applies the animation to :hover and :focus-visible states */
  @include ease-jello-menu-mixin-ag(0.9s);
}
```

## Parameters
- `$duration`: The length of the jello wobble animation (default: `0.9s`).

## Accessibility
- Targets `:focus-visible` to ensure keyboard navigators receive the same interactive feedback.
- Respects `prefers-reduced-motion: reduce` by disabling the complex 3D scaling wobble. To maintain an interactive feel, you can apply a subtle static scale (`transform: scale(1.05)`) fallback.
