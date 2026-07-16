# [BUG FIX] prefers-reduced-motion animation-fill-mode overrides

## What does this do?
Resolves invisible frozen states on skeleton loaders when user prefers reduced motion.

## How is it used?
```html
@media (prefers-reduced-motion: reduce) { [class*="ease-"] { animation: none; } }
```

## Why is it useful?
Ensures components display in their default resting states when animation is disabled.

## Fixes
Fixes #10943
