# Tada Modal SCSS Mixin

## Description
This SCSS mixin provides a classic "Tada" attention-seeker animation. It scales the element down slightly, then scales it up while alternating rotation to create a joyful, springy pop effect. It is often used on success modals, achievement badges, or important notifications.

## Usage

```scss
@use 'tada-modal' as *;

.my-success-modal {
  @include ease-tada-modal-mixin-ag(1s);
}
```

## Parameters
- `$duration`: The length of the animation (default: `1s`).

## Accessibility
- Respects `prefers-reduced-motion: reduce` by overriding the keyframes to apply no transform at all, suppressing the flashing/shaking animation entirely to prevent triggering vestibular issues.
