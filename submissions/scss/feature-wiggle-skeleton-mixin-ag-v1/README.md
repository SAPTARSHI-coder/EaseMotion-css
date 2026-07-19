# Wiggle Skeleton Mixin

## What does this do?
Provides a reusable SCSS mixin (`ease-wiggle-skeleton-mixin-ag`) that applies an infinite wiggle animation alongside a shimmer gradient, perfect for skeleton loaders indicating an active state or gentle error.

## How is it used?
Import the mixin and include it in your target class.

```scss
@import 'wiggle-skeleton';

.my-skeleton-loader {
    width: 100%;
    height: 100px;
    @include ease-wiggle-skeleton-mixin-ag(0.6s, ease-in-out);
}
```

## Why is it useful?
It provides an out-of-the-box, accessible (supports `prefers-reduced-motion`) skeleton animation that goes beyond the standard fade or shimmer by combining it with a spatial wiggle. This is useful for attention-grabbing loading states.
