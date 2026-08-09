# Pulse Skeleton Mixin (SCSS)

## Description
An SCSS mixin for generating a "Pulse" loading skeleton animation. It continuously fades the background color and opacity to indicate a loading state, commonly used for placeholder content while data is being fetched.

## Files
- `_pulse-skeleton.scss`: Contains the `@mixin ease-pulse-skeleton-mixin-ag`, which sets up the pulsing keyframes and handles reduced motion.

## Usage
```scss
@use 'pulse-skeleton' as *;

.my-loading-card {
  width: 100%;
  height: 200px;
  border-radius: 8px;
  // Apply the mixin
  @include ease-pulse-skeleton-mixin-ag(2s, #f1f5f9, #e2e8f0);
}
```

## Accessibility
- **Reduced Motion**: Disables the infinite pulsing animation for users who prefer reduced motion, presenting a static placeholder instead.
