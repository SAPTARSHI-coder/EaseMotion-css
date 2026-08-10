# Animation Delay Utilities (`ease-delay-400` to `800`)

## What does this do?
Provides precise staggered animation delay utility classes from 400ms to 800ms in 100ms increments for choreographing UI element introductions.

## How is it used?
Combine delay classes with any EaseMotion animation class:
```html
<div class="ease-fade-in ease-delay-400">First Card (400ms)</div>
<div class="ease-fade-in ease-delay-600">Second Card (600ms)</div>
<div class="ease-fade-in ease-delay-800">Third Card (800ms)</div>
```

## Why is it useful?
Resolves issue #56087 by expanding the animation timing token vocabulary, allowing rich waterfall page loading without inline styles or scripting.