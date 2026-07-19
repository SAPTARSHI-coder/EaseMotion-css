# Flip Badge Mixin

## What does this do?
Provides a reusable SCSS mixin (`ease-flip-badge-mixin-ag`) that applies an infinite Y-axis flip animation, ideal for indicating a loading or processing state on small UI elements like badges.

## How is it used?
Import the mixin and include it in your target class.

```scss
@import 'flip-badge';

.my-loading-badge {
    padding: 4px 8px;
    background: #3b82f6;
    color: white;
    border-radius: 9999px;
    @include ease-flip-badge-mixin-ag(1.2s, ease-in-out);
}
```

## Why is it useful?
It provides a polished 3D flipping motion suitable for indicating active processing without relying on a full-screen spinner. It respects accessibility guidelines by gracefully falling back to a static state if the user prefers reduced motion.
