# Tada Badge SCSS Mixin

## Description
This SCSS mixin provides a playful "Tada" animation designed for badges, notifications, or alerts. When applied, the element shrinks slightly, wiggles rapidly while scaled up, and then returns to its normal state to attract user attention to an interactive or new item.

## Usage

```scss
@use 'tada-badge' as *;

.notification-badge {
  // Trigger on state change, e.g., when a new notification arrives
  &.has-new {
    @include ease-tada-badge-mixin-ag(1s);
  }
}
```

## Parameters
- `$duration`: The length of the tada animation (default: `1s`).

## Accessibility
- Respects `prefers-reduced-motion: reduce` by replacing the scaling and rotating "tada" effect with a safe, subtle opacity pulse to prevent discomfort.
