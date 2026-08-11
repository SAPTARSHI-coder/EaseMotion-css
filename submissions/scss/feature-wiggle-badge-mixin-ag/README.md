# Wiggle Badge Mixin

## Description
The `ease-wiggle-badge-mixin-ag` is an SCSS mixin that provides a playful, interactive wiggle animation for badges, pills, or status indicators. The animation triggers on `:hover` or `:focus-visible`, shaking the element slightly back and forth while applying a minimal scale-up, making it feel alive and responsive.

## Installation & Usage
Import the `_wiggle-badge.scss` file into your styles.

```scss
@import 'path/to/feature-wiggle-badge-mixin-ag/wiggle-badge';

.my-notification-badge {
  /* Basic badge styling */
  background-color: #ef4444;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  
  /* Apply the wiggle hover effect */
  @include ease-wiggle-badge-mixin-ag(0.4s, ease-in-out);
}
```

## Parameters
The mixin accepts the following optional parameters to customize the animation:
- `$duration`: How long the wiggle lasts. Default is `0.4s`.
- `$easing`: The timing function. Default is `ease-in-out`.

## Accessibility Considerations
- **Keyboard Navigation**: The mixin applies the animation on `:focus-visible` as well as `:hover`, ensuring that users navigating via keyboard can see the interactive state.
- **Reduced Motion**: Contains a built-in `@media (prefers-reduced-motion: reduce)` query. If the user has requested reduced motion at the OS level, the keyframe animation is disabled. It falls back to a static `filter: brightness(0.95)` change on hover/focus to retain a visual cue without triggering motion.
