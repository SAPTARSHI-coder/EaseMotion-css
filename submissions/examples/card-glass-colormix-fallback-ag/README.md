# Glass Card color-mix Fallback Fix (Issue #14063)

## What does this do?
Demonstrates a corrected `.ease-card-glass` dark mode pattern that wraps `color-mix()` in a `@supports` guard with a solid dark background fallback.

## How is it used?
```html
<div class="demo-card-glass">Glass content</div>
```

## Why is it useful?
Without `@supports`, the `color-mix()` dark background silently drops in Firefox < 113 and Safari < 16.2, rendering the glass card fully transparent. The fix ensures all browsers get a visible dark background.
