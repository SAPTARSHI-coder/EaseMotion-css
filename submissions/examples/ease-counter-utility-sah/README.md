# Pure CSS Animated Number Counter (`ease-counter`)

## What does this do?
Provides an animated numerical count-up effect from zero to targeted statistics entirely inside CSS using Houdini `@property` and integer token transitions.

## How is it used?
Define your desired keyframe increment target and apply the counter class directly to numerical dashboard displays:
```html
<div class="counter-val count-stars"></div>
```

## Why is it useful?
Resolves issue #55254 by eliminating heavy JavaScript intersection observers and DOM text replacement loops for standard landing page statistics.