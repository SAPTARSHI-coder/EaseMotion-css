# Swing Dropdown SCSS Mixin

## Description
This SCSS mixin provides a dynamic 3D "Swing" animation. It is ideal for dropdown menus, tooltip arrows, or loading indicators that need to swing down into view as if hinged from the top.

## Usage

```scss
@use 'swing-dropdown' as *;

.my-dropdown-menu {
  /* Set perspective on the parent wrapper (e.g. perspective: 1000px) */
  @include ease-swing-dropdown-mixin-ag(0.6s);
}
```

## Parameters
- `$duration`: The length of the entrance animation (default: `0.6s`).
- `$transform-origin`: The hinge point. For a dropdown, `top center` is recommended so it swings down from the trigger (default: `top center`).

## Accessibility
- Respects `prefers-reduced-motion: reduce` by overriding the keyframes to a standard opacity fade-in, disabling the 3D rotation entirely.
