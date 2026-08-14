# [BUG FIX] Staggered animation delay accumulates incorrectly when class is toggled

## What does this do?
Fixes staggered delay glitches by resetting inline style duration delays correctly inside toggling actions.

## How is it used?
```html
element.style.animationDelay = "";
```

## Why is it useful?
Fixes broken animation states when triggered dynamically via JavaScript interfaces.

## Fixes
Fixes #9862
