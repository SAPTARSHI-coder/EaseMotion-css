# Jello Card Mixin (SCSS)

## Description
An SCSS mixin for generating a "Jello" exit animation for cards or containers. When applied (typically when an item is deleted or dismissed), the element wobbles using skew transforms and then fades out, providing a playful departure.

## Files
- `_jello-card.scss`: Contains the `@mixin ease-jello-card-mixin-ag`, which sets up the jello keyframes and handles reduced motion.

## Usage
```scss
@use 'jello-card' as *;

.my-card.is-dismissing {
  // Apply the mixin
  @include ease-jello-card-mixin-ag(0.8s);
}
```

## Accessibility
- **Reduced Motion**: Disables the skewing animations for users who prefer reduced motion, substituting a clean opacity fade to remove the element gracefully without jarring movement.
